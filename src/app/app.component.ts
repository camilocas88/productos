import { Component } from '@angular/core';
import { GLOBAL } from './services/global'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'LISTADO DE PRODUCTOS'
  public header_color: string
  
  constructor() {
    this.header_color = GLOBAL.header_color
  }
}
