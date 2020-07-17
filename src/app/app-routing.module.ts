import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'promocion',
    pathMatch: 'full'
  },
  {
    path: 'promocion',
    loadChildren: () => import('./pages/promocion/promocion.module').then(m => m.PromocionPageModule)
  },
  {
    path: 'detalle-promocion',
    loadChildren: () => import('./pages/detalle-promocion/detalle-promocion.module').then(m => m.DetallePromocionPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
