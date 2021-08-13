import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private botInfo: any;

  constructor() {}

  setIntel(info: any) {
    this.botInfo = info;
  }

  getIntel() {
    return this.botInfo;
  }
}
