import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

//Componentes
import { HomeComponent } from './componentes/home/home.component'
import { ErrorComponent } from './componentes/error/error.component'
import { ProductoAddComponent } from './componentes/producto-add/producto-add.component'
import { ProductosListComponent } from './componentes/productos-list/productos-list.component'
import { ProductoDetailComponent } from './componentes/producto-detail/producto-detail.component';
import { ProductEditComponent } from './componentes/product-edit/product-edit.component';


const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path: 'productos', component: ProductosListComponent},
    {path: 'crear-producto', component: ProductoAddComponent},
    {path: 'producto/:id', component: ProductoDetailComponent},
    {path: 'editar-producto/:id', component: ProductEditComponent},
    {path: '**', component: ErrorComponent}
]

export const appRoutingProviders: any[] = []
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);