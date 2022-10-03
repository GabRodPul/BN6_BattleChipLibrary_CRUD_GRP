import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BattlechipsPageRoutingModule } from './battlechips-routing.module';
import { BattleChipDeleteButtonComponent } from '../battle-chip-delete-button/battle-chip-delete-button.component';

import { BattlechipsPage } from './battlechips.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BattlechipsPageRoutingModule
  ],
  declarations: [BattlechipsPage, BattleChipDeleteButtonComponent]
})
export class BattlechipsPageModule {}
