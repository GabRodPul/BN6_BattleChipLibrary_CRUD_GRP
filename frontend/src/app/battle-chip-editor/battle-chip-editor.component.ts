import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ReactiveFormsModule } from '@angular/forms';
import { ToastController } from '@ionic/angular';

import { BattleChip, Element } from '../battlechip';
import { BattlechipsService } from '../services/battlechips.service';


const defaultImgPath = "..\\assets\\placeholders\\chip-not-found.png";

enum FormMode { Create, Update };

@Component({
  selector: 'app-battle-chip-editor',
  templateUrl: './battle-chip-editor.component.html',
  styleUrls: ['./battle-chip-editor.component.scss'],
})
export class BattleChipEditorComponent implements OnInit {

  @Input() formMode = 'create';
  @Input() battleChipParam;

  battleChipForm: FormGroup;
  imgPath = '';

  chipImage: HTMLImageElement = document.getElementById("chipImage") as HTMLImageElement;

  elements = Object.values(Element);

  codesPattern = /^(?:([A-Z])(?!\1)){1,3}([\*]?)?$/g;
  aliasPattern = /^(?!\s+)([A-Za-z0-9 ]*,?\w)*(?!\s+)$/g;

  constructor(
    private fb: FormBuilder,
    private battleChipService: BattlechipsService,
    private toastController: ToastController
  ) {
    if (this.battleChipParam === null || this.battleChipParam === undefined) {
      this.battleChipParam = new BattleChip('', Element.None, 1, 0, '', '', '', '');
    }

    const bc = this.battleChipParam;

    this.battleChipForm = this.fb.group({
      name: [bc.name, [Validators.required, Validators.minLength(1), Validators.maxLength(9)]],
      element: [bc.element, Validators.required],
      mb: [bc.mb, [Validators.required, Validators.min(1), Validators.max(99)]],
      atk: [bc.atk, [Validators.required, Validators.min(0), Validators.max(999)]],
      codes: [bc.codes, [Validators.required, this.validCodes, Validators.minLength(1), Validators.maxLength(4)]],
      description: [bc.description, [Validators.maxLength(150)]],
      image: [bc.image],
      alias: [bc.alias, [Validators.pattern(this.aliasPattern), Validators.maxLength(150)]]
    });
  }


  ngOnInit() { }

  onSubmit() {
    if (!this.battleChipForm.valid) { return false; }

    let tempBattleChip: BattleChip = {
      name: this.getValueInForm('name'),
      element: this.getValueInForm('element'),
      mb: this.getValueInForm('mb'),
      atk: this.getValueInForm('atk'),
      codes: this.parsedCodes,
      description: this.getValueInForm('description'),
      image: this.imageFormUrl,
      alias: this.getValueInForm('alias')
    };

    if (this.formMode == 'create') {
      console.log(tempBattleChip);
      this.battleChipService.insertBattleChip(tempBattleChip)
        .subscribe(
          (response) => {
            this.presentToast('BattleChip inserted succesfully.');
            this.resetBattleChipForm();
          },
          (error) => { this.presentToast('An error occurred while trying to add the BattleChip.') },
        );
    }

    if (this.formMode == 'edit') {

    }
  }

  private async presentToast(msg: string) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 1500,
      position: 'bottom'
    });

    await toast.present();
  }

  resetBattleChipForm() {
    this.battleChipForm.reset();

    Object.keys(this.battleChipForm.controls).forEach(key => {
      this.battleChipForm.get(key).setErrors(null);
    });
  }

  get imageFormUrl(): string { return this.battleChipForm.get('image').value; }
  get codes(): string { return this.battleChipForm.get('codes').value; }
  get parsedCodes() {
    const codesArray: string[] = this.codes.toUpperCase().split('');

    codesArray.sort();
    if (codesArray.includes('*')) {
      // After sort, * will always be first, rearrange
      codesArray.shift();
      codesArray.push('*');
    }

    return codesArray.join(' ');
  }

  get errorControls() { return this.battleChipForm.controls; }

  getValueInForm(field: string): any {
    return this.battleChipForm.get(field).value;
  }

  // Input validator for codes
  validCodes(control: AbstractControl) {
    const codesArray: string[] = control.value.toUpperCase().split('');
    const possibleCodes: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ*';

    const repeats: boolean = (codesArray.length !== new Set(codesArray).size);

    let invalidChars: boolean = false;
    codesArray.forEach((code) => {
      if (possibleCodes.includes(code) === false) {
        invalidChars = true;
      }
    });

    return repeats || invalidChars ? { validCodes: true } : null;
  }
}
