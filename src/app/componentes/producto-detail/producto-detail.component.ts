import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { ProductoService } from 'src/app/services/producto.service';
import { Producto } from 'src/app/models/producto';



@Component({
  selector: 'producto-detail',
  templateUrl: './producto-detail.component.html',
  styleUrls: ['./producto-detail.component.scss'],
  providers: [ProductoService]
})
export class ProductoDetailComponent {
  public producto: Producto
  code: number
  constructor(
    private _productoService: ProductoService,
    private _route: ActivatedRoute,
    private _router: Router,

  ) { }

  ngOnInit() {
    console.log('producto-detail cargado...');

    this.getProducto()


  }

  getProducto() {
    this._route.params.forEach((params: Params) => {
      let id = params['id']
      this._productoService.getProducto(id).subscribe(
        result => {
          if (result.code == 200) {
            this.producto = result.data
            console.log('detalles prd', this.producto);

          } else {
            this._router.navigate(['/productos'])
          }
        },
        error => {
          console.log(<any>error);

        }
      )
    })
  }

}
