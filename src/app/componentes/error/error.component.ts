import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent implements OnInit {
  public titulo: string

  constructor() {
    this.titulo = "Error! Pagina no encontrada."
   }

  ngOnInit() {
    console.log("Componente error.componente cargado!");
    
  }

}
