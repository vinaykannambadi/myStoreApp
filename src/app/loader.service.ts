import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  isLoading = new BehaviorSubject(false);
  changeEmitted$ = this.isLoading.asObservable();
  // Service message commands
  emitloading(change: any) {
    this.isLoading.next(change);
  }
  constructor() {}
}
