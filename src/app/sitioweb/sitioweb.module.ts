import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SitiowebPageRoutingModule } from './sitioweb-routing.module';

import { SitiowebPage } from './sitioweb.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SitiowebPageRoutingModule
  ],
  declarations: [SitiowebPage]
})
export class SitiowebPageModule {}
