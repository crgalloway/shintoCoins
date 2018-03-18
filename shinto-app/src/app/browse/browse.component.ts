import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css']
})
export class BrowseComponent implements OnInit {
	transactions = []
  constructor(
  	private _httpService: HttpService,
  	) { }

  ngOnInit() {
  	this.getLedger()
  }
  getLedger(){
  	this.transactions = this._httpService.ledger
  }

}
