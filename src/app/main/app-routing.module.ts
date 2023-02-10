import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../services/guards/auth-guard.service';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('../view/pages/home/home.module').then((m) => m.HomeModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'opah',
    loadChildren: () => import('../view/pages/opah/opah.module').then((m) => m.OpahModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'vagas',
    loadChildren: () => import('../view/pages/vagas/vagas.module').then((m) => m.VagasModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'contato',
    loadChildren: () => import('../view/pages/contato/contato.module').then((m) => m.ContatoModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'orcamento',
    loadChildren: () => import('../view/pages/orcamento/orcamento.module').then((m) => m.OrcamentoModule),
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
      scrollPositionRestoration: 'top',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
