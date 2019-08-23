import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from "@angular/router";
import { ProductoService } from "../../services/producto.service";
import { Producto } from 'src/app/models/producto';

@Component({
  selector: 'productos-list',
  templateUrl: './productos-list.component.html',
  styleUrls: ['./productos-list.component.scss'],
  providers: [ProductoService]
})
export class ProductosListComponent implements OnInit {
  public titulo: string
  public productos: Producto[]
  public confirmado

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _productoService: ProductoService
  ) {
    this.titulo = 'Listado de Productos'
    this.confirmado = null
  }

  ngOnInit() {
    console.log("Productos list .component.ts Cargado !!!");

    this.getPorducts()
  }

  getPorducts(){
    this._productoService.getProductos().subscribe(
      result => {

        if (result.code != 200) {
          console.log(result);
        } else {
          this.productos = result.data;
        }

      },
      error => {
        console.log(<any>error);
      }
    );
  }

  borrarConfirm(id){
    this.confirmado = id
  }

  cancelarConfirm(){
    this.confirmado = null
  }

  onDeleteProduct(id){
    this._productoService.deleteProduct(id).subscribe(res => {
      if(res.code == 200) {
        this.getPorducts()
      }else{
        alert('Error al eliminar un producto')
        console.log(res);
        
      }
    })
  }

}
