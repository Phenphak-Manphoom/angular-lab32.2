import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { RateService } from '../service/rate.service';



@Component({
  selector: 'app-exchange-rate',
  templateUrl: './exchange-rate.component.html',
  styleUrls: ['./exchange-rate.component.css']
})
export class ExchangeRateComponent implements OnInit {

  form :FormGroup;
  currencyRate :any[];
  fromCurrency:number;
  toCurrency:number;



  constructor(private fb:FormBuilder, private service:RateService) {
    this.form =this.fb.group({
      rates :'',
      base:''
    });
   }

   convertCurrency(form :FormGroup){

    this.currencyRate=[];
    this.service.getRate().subscribe(result=>{
      this.currencyRate=result as any[];
    });

   }



   ngOnInit(){

   }



}
