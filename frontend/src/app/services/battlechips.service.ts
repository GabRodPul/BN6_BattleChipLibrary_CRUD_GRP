import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { BattleChip } from '../battlechip';

@Injectable({
  providedIn: 'root'
})
export class BattlechipsService {

endpoint = 'http://localhost:8080/battlechips';

  constructor(private httpClient: HttpClient, private toastController: ToastController) { }

  getBattleChips() {
    return this.httpClient.get(this.endpoint);
  }

  getOne(id: number) {
    return this.httpClient.get(this.endpoint + '/' + id)
      .pipe(
        catchError(this.handleError)
      );
  }

  insertBattleChip(battleChip: BattleChip): Observable<BattleChip> {
    return this.httpClient.post<BattleChip>(this.endpoint, battleChip)
      .pipe(
        catchError(this.handleError)
      );
  }

  deleteBattleChip(id: number) {
    return this.httpClient.delete(this.endpoint + '/' + id)
    .pipe(
      catchError(this.handleError)
    );
  }

  private handleError<T>(error: HttpErrorResponse): Observable<BattleChip> {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened, please try again.'));
  }

}
