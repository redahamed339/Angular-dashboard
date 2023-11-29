import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemtypeComponent } from './pages/inventory/itemtype/itemtype.component';
import { ItemgroupComponent } from './pages/inventory/itemgroup/itemgroup.component';
import { UnitmeasureComponent } from './pages/inventory/unitmeasure/unitmeasure.component';
import { ItemComponent } from './pages/inventory/item/item.component';
import { StoreComponent } from './pages/inventory/store/store.component';
import { StoretypeComponent } from './pages/inventory/storetype/storetype.component';
import { SupplierComponent } from './pages/inventory/supplier/supplier.component';
import { LoginComponent } from './pages/authentication/login/login.component';
import { LayoutComponent } from './shared/reusablecomponents/layout/layout.component';
import { DashboardComponent } from './pages/inventory/dashboard/dashboard.component';
import { RegisterComponent } from './pages/authentication/register/register.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {
    path:'',component:LayoutComponent,
    children:[
      { path:'dashboard',component: DashboardComponent},
      { path:'itemtype',component: ItemtypeComponent},
      { path:'itemgroup',component: ItemgroupComponent},
      { path:'unitmeasure',component: UnitmeasureComponent},
      { path:'item',component: ItemComponent},
      { path:'store',component: StoreComponent},
      { path:'storetype',component: StoretypeComponent},
      { path:'supplier',component: SupplierComponent},
   ]
},
{path:"**",component:LoginComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
