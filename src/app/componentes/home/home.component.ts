import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public titulo: string
  
  constructor() {
    this.titulo = 'Webapp de productos con Angular'
   }

  ngOnInit() {
    console.log(' se ha cargado el componente home.component.ts');
    
  }

}
