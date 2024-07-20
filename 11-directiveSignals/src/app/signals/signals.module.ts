import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignalsRoutingModule } from './signals-routing.module';
import { SignalsLayoutComponent } from './layout/signals-layout/signals-layout.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { CounterPageComponent } from './pages/counter-page/counter-page.component';
import { UserInfoPageComponent } from './pages/user-info-page/user-info-page.component';
import { PropertiesPageComponent } from './pages/properties-page/properties-page.component';

@NgModule({
  imports: [
    CommonModule,
    SignalsRoutingModule,
  ],
  declarations: [
    SignalsLayoutComponent,
    SideMenuComponent,
    CounterPageComponent,
    UserInfoPageComponent,
    PropertiesPageComponent,
  ]
})
export class SignalsModule { }
