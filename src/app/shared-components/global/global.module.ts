import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { HeaderWithButtonBackComponent } from '../header-with-button-back/header-with-button-back.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
  ],
  declarations: [HeaderWithButtonBackComponent],
  exports: [HeaderWithButtonBackComponent]
})
export class GlobalModule {}
