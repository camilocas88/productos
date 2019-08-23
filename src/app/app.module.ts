import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';



//Rutas
import { AppRoutingModule } from './app-routing.module';
import { routing, appRoutingProviders } from './app.routing';

// COMPONENTES
import { AppComponent } from './app.component';
import { HomeComponent } from './componentes/home/home.component';
import { ErrorComponent } from './componentes/error/error.component';
import { ProductosListComponent } from './componentes/productos-list/productos-list.component';
import { ProductoAddComponent } from './componentes/producto-add/producto-add.component';
import { ProductoDetailComponent } from './componentes/producto-detail/producto-detail.component';
import { ProductEditComponent } from './componentes/product-edit/product-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ErrorComponent,
    ProductoAddComponent,
    ProductosListComponent,
    ProductoDetailComponent,
    ProductEditComponent,
  ],
  imports: [
    routing,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
