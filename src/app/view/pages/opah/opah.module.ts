import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';

import { OpahComponent } from './opah.component';
import { OpahRoutingModule } from './opah.routing';
import { throwIfAlreadyLoaded } from '../../../services/guards/module-import.guard';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MatSliderModule } from '@angular/material/slider';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { HeaderModule } from '../../components/header.component/header.module';
import { FooterModule } from '../../components/footer.component/footer.module';

@NgModule({
  imports: [
    FlexLayoutModule,
    OpahRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatSliderModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    HeaderModule,
    FooterModule
  ],
  exports: [],
  declarations: [OpahComponent],
  providers: [],
})
export class OpahModule {
  constructor(@Optional() @SkipSelf() parentModule: OpahModule) {
    throwIfAlreadyLoaded(parentModule, 'OpahModule');
  }
}
