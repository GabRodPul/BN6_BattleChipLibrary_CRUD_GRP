import { Component, Input, OnInit } from '@angular/core';
import { BattlechipsService } from '../services/battlechips.service';

import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-battle-chip-delete-button',
  templateUrl: './battle-chip-delete-button.component.html',
  styleUrls: ['./battle-chip-delete-button.component.scss'],
  template: '<ion-button (click)="removeChip()"></ion-button>'
})
export class BattleChipDeleteButtonComponent implements OnInit {

  @Input() chipId;

  constructor(
    private battleChipService: BattlechipsService,
    private toastController: ToastController
    ) { }

  ngOnInit() {}

  removeChip() {
    if(!confirm('Are you sure you want to delete this BattleChip?')) {
      return;
    }

    this.battleChipService.deleteBattleChip(this.chipId)
    .subscribe(
      response => this.presentToast('Succesfully removed.'),
      error => this.presentToast('Failed to delete battle chip.')
    );
  }

  private async presentToast(msg: string) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 1500,
      position: 'bottom'
    });

    await toast.present();
  }
}
