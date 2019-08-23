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
  public titulo:string
  public productos: Producto[]

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _productoService: ProductoService
  ){
    this.titulo = 'Listado de Productos'
   }

  ngOnInit() {
    console.log("Productos list .component.ts Cargado !!!");

    this._productoService.getProductos().subscribe(
      result => {
           
          if(result.code != 200){
              console.log(result);
          }else{
              this.productos = result.data;
          }

      },
      error => {
          console.log(<any>error);
      }
  );

    
  }

}
