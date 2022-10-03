import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BattleChipDeleteButtonComponent } from './battle-chip-delete-button.component';

describe('BattleChipDeleteButtonComponent', () => {
  let component: BattleChipDeleteButtonComponent;
  let fixture: ComponentFixture<BattleChipDeleteButtonComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BattleChipDeleteButtonComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BattleChipDeleteButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
