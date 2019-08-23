import { Component, OnInit } from '@angular/core';
import { ProductoService } from 'src/app/services/producto.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Producto } from 'src/app/models/producto';
import { GLOBAL } from "../../services/global";

@Component({
  selector: 'roduct-edit',
  templateUrl: '../producto-add/producto-add.component.html',
  styleUrls: ['./product-edit.component.scss'],
  providers: [ProductoService]
})
export class ProductEditComponent implements OnInit {
  public titulo: string
  public producto: Producto
  public filesToUpload
  public resultUpload
  public is_edit

  code: number
  data: []

  constructor(
    private _productoService: ProductoService,
    private _route: ActivatedRoute,
    private _router: Router,

  ) {
    this.titulo = 'Editar  producto'
    this.producto = new Producto(1, '', '', 1, '')
    this.is_edit = true
  }

  ngOnInit() {
    this.getProducto()
  }

  onSubmit() {
    console.log('producto a subir',this.producto);

    if (this.filesToUpload && this.filesToUpload.length >= 1) {

      this._productoService.makeFileRequest(GLOBAL.url + 'upload-file', [], this.filesToUpload).then((result) => {
        console.log(result);
        this.filesToUpload = result
        this.producto.imagen = this.filesToUpload.filename
        this.updateProducto()
      }, (error) => {
        console.log(error);
      })
    } else {
      this.updateProducto()
      console.log('entro al else');
      
    }
  }



  updateProducto() {
    this._route.params.forEach((params: Params) => {
      let id = params['id']
      this._productoService.editProducto(id, this.producto).subscribe(res => {
        if (res.code == 200) {
          this._router.navigate(['/producto/' + id])
        } else {
          console.log('res =', res);

        }
      }
      )
    })

  }

  fileChangeEvent(fileInput: any) {
    this.filesToUpload = <Array<File>>fileInput.target.files
    console.log('this.filesToUpload =', this.filesToUpload);
  }
  
  getProducto() {
    this._route.params.forEach((params: Params) => {
      let id = params['id']
      this._productoService.getProducto(id).subscribe(
        result => {
          if (result.code == 200) {
            this.producto = result.data
          } else {
            this._router.navigate(['/productos'])
          }
        },
        error => {
          console.log('err',<any>error);

        }
      )
    })
  }


}
