import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ContatoComponent } from './contato.component';
import { ContatoRoutingModule } from './contato.routing';
import { throwIfAlreadyLoaded } from '../../../services/guards/module-import.guard';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MatSliderModule } from '@angular/material/slider';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { ContactFormModule } from '../../components/contact-form.component/contact-form.module';
import { FooterModule } from '../../components/footer.component/footer.module';
import { HeaderModule } from '../../components/header.component/header.module';

@NgModule({
  imports: [
    FlexLayoutModule,
    ContatoRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatSliderModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    ContactFormModule,
    HeaderModule,
    FooterModule,
 
  ],
  exports: [],
  declarations: [ContatoComponent],
  providers: [],
})
export class ContatoModule {
  constructor(@Optional() @SkipSelf() parentModule: ContatoModule) {
    throwIfAlreadyLoaded(parentModule, 'ContatoModule');
  }
}
