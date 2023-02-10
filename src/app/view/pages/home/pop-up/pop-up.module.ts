import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PopUpComponent } from './pop-up.component';
import { PopUpRoutingModule } from './pop-up.routing';
import { throwIfAlreadyLoaded } from './../../../../services/guards/module-import.guard';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatSliderModule } from '@angular/material/slider';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [
    FlexLayoutModule,
    PopUpRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatSliderModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
  ],
  exports: [],
  declarations: [PopUpComponent],
  providers: [],
})
export class PopUpModule {
  constructor(@Optional() @SkipSelf() parentModule: PopUpModule) {
    throwIfAlreadyLoaded(parentModule, 'PopUpModule');
  }
}
