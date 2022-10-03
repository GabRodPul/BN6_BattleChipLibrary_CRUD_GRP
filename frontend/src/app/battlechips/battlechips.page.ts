import { Component, OnInit } from '@angular/core';
import { BattlechipsService } from '../services/battlechips.service';

import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { BattleChip } from '../battlechip';

@Component({
  selector: 'app-battlechips',
  templateUrl: './battlechips.page.html',
  styleUrls: ['./battlechips.page.scss'],
})
export class BattlechipsPage implements OnInit {

  battlechips: any = [];
  errorFetching: boolean = false;

  handlerMessage = '';
  roleMessage = '';

  constructor(
    private battlechipsService: BattlechipsService,
    private toastController: ToastController,
    private router: Router
  ) { }

  ngOnInit() {
    this.getAllBattleChips();
  }

  getAllBattleChips() {
    this.battlechipsService.getBattleChips()
      .subscribe(
        response => { this.battlechips = response; },
        error => { this.errorFetching = true; }
      );
  }

  removeChip(id: number) {
    if(!confirm('Are you sure you want to delete this BattleChip?')) {
      return;
    }

    this.battlechipsService.deleteBattleChip(id)
    .subscribe(
      response => {
        this.presentToast('Succesfully removed.');
        this.getAllBattleChips(); // Reloads only chips, not whole page
      },
      error => this.presentToast('Failed to delete BattleChip.')
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
