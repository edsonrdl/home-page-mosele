import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { OpahComponent } from './opah.component';

const routes: Routes = [
  {
    path: '',
    component: OpahComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OpahRoutingModule {}
