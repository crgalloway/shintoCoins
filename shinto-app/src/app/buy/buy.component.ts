import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css']
})
export class BuyComponent implements OnInit {
	value: number;
	count: number;
  constructor(
  	private _httpService: HttpService,
  	) {
  	this.value = this._httpService.value
  	this.count = this._httpService.coinCount
  }

  ngOnInit() {
  }
  buyFunc(num){
  	num = parseInt(num)
	this._httpService.newTransaction("Bought", num)
	this._httpService.coinCount+=num
	this._httpService.value+=num
	this.value = this._httpService.value
  	this.count = this._httpService.coinCount
  }
}
