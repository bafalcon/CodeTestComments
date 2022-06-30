import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  set(dataName: string, data: any): void {
    var stringy = JSON.stringify(data);
    localStorage.setItem(dataName, stringy);
  }

  get(dataName: string): any {
    let returnData: any;
    var data = localStorage.getItem(dataName);
    if (data) {
      returnData = JSON.parse(data);
    }
    return returnData;
  }

  getList(dataName: string): any[] {
    let returnData: any[] = [];
    var data = localStorage.getItem(dataName);
    var found = false;
    if (data) {
      if (data.length > 0) {
        returnData = JSON.parse(data);
        found = true;
      }
    }
    if (!found) {
      var emptyData = JSON.stringify(returnData);
      localStorage.setItem(dataName, emptyData);
    }
    return returnData;
  }

  addToList(dataName: string, data: any): void {
    let theList = this.getList(dataName);
    theList.push(data);
    this.set(dataName, theList);
  }

}
