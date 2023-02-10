import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { OpahModel } from 'src/app/core/models/opah.model';
import { PopUpModule } from './pop-up.module';
@Component({
  templateUrl: 'pop-up.component.html',
  styleUrls: ['./pop-up.component.scss'],
})
export class PopUpComponent {
  @ViewChild('resultDiv') resultDiv!: ElementRef;
  private element: any;

  // ngOnInit(): void {

  //   this.openPopup;
  // }
  hide(): void {
    const elem = document.getElementById('popupX');
    elem!.style.display = 'none';
  }
  openPopup(): void {}
  closePop(): void {
    const elem = document.getElementById('popupX');
    elem!.style.display = 'none';
  }
}




