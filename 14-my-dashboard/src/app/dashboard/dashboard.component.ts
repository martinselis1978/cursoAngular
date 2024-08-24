import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SideMenuComponent } from '../shared/side-menu/side-menu.component';
import { TitleComponent } from '../shared/title/title.component';

@Component({
  standalone: true,
  imports: [RouterModule, SideMenuComponent, TitleComponent],
  templateUrl: './dashboard.component.html',
  styles: ``
})
export default class DashboardComponent {

}
