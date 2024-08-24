import { Component } from '@angular/core';
import {MatListModule} from '@angular/material/list';

@Component({
  imports: [MatListModule],
  standalone: true,
  selector: 'app-options-bottom-sheet',
  templateUrl: './options-bottom-sheet.component.html'
})
export class OptionsBottomSheetComponent {

  openLink(event: MouseEvent) {
    console.log('openLink', event);
  }
  
}
