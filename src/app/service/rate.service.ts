import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RateService {
  result:any;
  constructor(private http :HttpClient) { }

  getRate(){
    return this.http.get('http://api.exchangeratesapi.io/v1/latest?access_key=1ff3f8a32d34622a994cf8ba63f96e0f')
  }
}
