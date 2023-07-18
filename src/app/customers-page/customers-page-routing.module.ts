import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomersPageComponent } from './customers-page.component';

const customersPageRoutes: Routes = [
  {
    path: '',
    component: CustomersPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(customersPageRoutes)],
  exports: [RouterModule],
})
export class CustomersPageRoutingModule {}
