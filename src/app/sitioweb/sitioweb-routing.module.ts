import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SitiowebPage } from './sitioweb.page';

const routes: Routes = [
  {
    path: '',
    component: SitiowebPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SitiowebPageRoutingModule {}
