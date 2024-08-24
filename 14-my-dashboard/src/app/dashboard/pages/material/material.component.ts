import { ChangeDetectionStrategy, Component } from '@angular/core';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatBadgeModule} from '@angular/material/badge';
import {MatBottomSheet, MatBottomSheetModule, MatBottomSheetRef} from '@angular/material/bottom-sheet';
import { OptionsBottomSheetComponent } from './ui/options-bottom-sheet/options-bottom-sheet.component';

@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  standalone: true,
  imports: [
    MatSlideToggleModule,
    MatIconModule,
    MatButtonModule,
    MatBadgeModule
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class MaterialComponent {

  constructor(private _bottomSheet: MatBottomSheet) {}

  openBottomSheet(){
    this._bottomSheet.open(OptionsBottomSheetComponent);
}

}
