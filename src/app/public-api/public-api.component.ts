import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-public-api',
  templateUrl: './public-api.component.html',
  styleUrls: ['./public-api.component.css']
})
export class PublicApiComponent implements OnInit {

  constructor( private myapi:ApiService) { 
    this.fetchData()
  }


  fetchData=()=>{
    this.myapi.publicApi().subscribe(
      (data)=>{
        this.pubApi=data
      }    )
  }
  pubApi:any={}

  ngOnInit(): void {
  }

}
