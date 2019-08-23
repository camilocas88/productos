import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ProductoService } from "../../services/producto.service";
import { Producto } from 'src/app/models/producto';
import { GLOBAL } from 'src/app/services/global';


@Component({
  selector: 'producto-add',
  templateUrl: './producto-add.component.html',
  styleUrls: ['./producto-add.component.scss'],
  providers: [ProductoService]
})
export class ProductoAddComponent implements OnInit {
  public titulo: string
  public producto: Producto
  public filesToUpload
  public resultUpload

  constructor(
    private _productoService: ProductoService,
    private _route: ActivatedRoute,
    private _router: Router,
  ) {
    this.titulo = "Crear un nuevo Producto"
    this.producto = new Producto(0, "", "", 0, "")
  }

  ngOnInit() {
    console.log(" Producto add component.ts cargado....... ");
  }
  onSubmit() {
    
    if (this.filesToUpload && this.filesToUpload.length >= 1) {
      console.log('files', this.filesToUpload.length);

      this._productoService.makeFileRequest(GLOBAL.url + 'upload-file', [], this.filesToUpload).then((result) => {
        console.log('result', result);
        this.filesToUpload = result
        this.producto.imagen = this.filesToUpload.filename
        this.saveProducto()
      }, (error) => {
        console.log(error);
      })
    } else {
      this.saveProducto()
      console.log('entro al else add');

    }
  }



  saveProducto() {
    this._productoService.addProducto(this.producto).subscribe(res => {
      if (res.code == 200) {
        this._router.navigate(['/productos'])
      } else {
        console.log('response', res);
      }
    }
    )
  }

  fileChangeEvent(fileInput: any) {
    this.filesToUpload = <Array<File>>fileInput.target.files
    console.log('this.filesToUpload =', this.filesToUpload);
  }

}
