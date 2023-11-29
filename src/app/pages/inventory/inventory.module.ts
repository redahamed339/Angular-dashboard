import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ItemtypeComponent } from './itemtype/itemtype.component';
import { StoretypeComponent } from './storetype/storetype.component';
import { ItemgroupComponent } from './itemgroup/itemgroup.component';
import { UnitmeasureComponent } from './unitmeasure/unitmeasure.component';
import { ItemComponent } from './item/item.component';
import { StoreComponent } from './store/store.component';
import { SupplierComponent } from './supplier/supplier.component';



@NgModule({
  declarations: [
    DashboardComponent,
    ItemtypeComponent,
    StoretypeComponent,
    ItemgroupComponent,
    UnitmeasureComponent,
    ItemComponent,
    StoreComponent,
    SupplierComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    DashboardComponent
  ]
})
export class InventoryModule { }
