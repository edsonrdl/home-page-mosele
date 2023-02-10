import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { OrcamentoComponent } from './orcamento.component';
import { OrcamentoRoutingModule } from './orcamento.routing';
import { throwIfAlreadyLoaded } from '../../../services/guards/module-import.guard';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MatSliderModule } from '@angular/material/slider';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { BudgetFormModule } from '../../components/budget-form.component/budget-form.module';
import { FooterModule } from '../../components/footer.component/footer.module';
import { HeaderModule } from '../../components/header.component/header.module';

@NgModule({
  imports: [
    FlexLayoutModule,
    OrcamentoRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatSliderModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    BudgetFormModule,
    FooterModule,
    HeaderModule
  ],
  exports: [],
  declarations: [OrcamentoComponent],
  providers: [],
})
export class OrcamentoModule {
  constructor(@Optional() @SkipSelf() parentModule: OrcamentoModule) {
    throwIfAlreadyLoaded(parentModule, 'OrcamentoModule');
  }
}
