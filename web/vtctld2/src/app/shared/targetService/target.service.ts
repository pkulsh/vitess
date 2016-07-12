import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Tablet } from '../tabletObject/tablet';

@Injectable()
export class TargetService {
  private targetUrl = '/app/target';

  constructor(private http: Http) {}

  getTablets() {
    return this.http.get(this.targetUrl)
    .map( (resp) => {
      return resp.json();
    })
    .map( (target:any) => {
       return target.data;
    })
  }
}
