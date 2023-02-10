import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { throwIfAlreadyLoaded } from '../../../services/guards/module-import.guard';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatSliderModule } from '@angular/material/slider';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {MatMenuModule} from '@angular/material/menu';
import { HeaderComponent } from './header.component';

@NgModule({
  imports: [
    FlexLayoutModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatSliderModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    FontAwesomeModule,
    MatMenuModule,
  ],
  exports: [HeaderComponent],
  declarations: [HeaderComponent],
  providers: [],
})
export class HeaderModule { constructor(@Optional() @SkipSelf() parentModule: HeaderModule) {
  throwIfAlreadyLoaded(parentModule, 'HomeModule');
}}
