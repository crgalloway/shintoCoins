import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService{
	ledger = []
	transaction: any
	coinCount = 0
	value = 1
  constructor(private _http: HttpClient) {
  	this.transaction = { id: 0, action:"", numCoins:0, value:0}
   }
   newTransaction(method, num){
   	this.transaction.id = Math.trunc(Math.random()*1000+1)
   	this.transaction.action = method
   	this.transaction.numCoins = num
   	this.transaction.value = this.value
   	this.ledger.push(this.transaction)
   	this.transaction = { id: 0, action:"", numCoins:0, value:0}
   }

}
