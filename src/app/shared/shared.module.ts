import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './reusablecomponents/header/header.component';
import { FooterComponent } from './reusablecomponents/footer/footer.component';
import { SettingComponent } from './reusablecomponents/setting/setting.component';
import { LayoutComponent } from './reusablecomponents/layout/layout.component';
import { AppRoutingModule } from '../app-routing.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SettingComponent,
  ],
  imports: [
    CommonModule

  ],exports:[
    HeaderComponent,
    FooterComponent,
    SettingComponent
  ]
})
export class SharedModule { }
