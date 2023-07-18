import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { 
    path: 'home-page', 
    loadChildren: () => import('./home-page/home-page.module').then(m => m.HomePageModule) 
  },
  { 
    path: 'page-not-found', 
    loadChildren: () => import('./page-not-found/page-not-found.module').then(m => m.PageNotFoundModule) 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
