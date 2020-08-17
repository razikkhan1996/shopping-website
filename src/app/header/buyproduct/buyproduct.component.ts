import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buyproduct',
  templateUrl: './buyproduct.component.html',
  styleUrls: ['./buyproduct.component.css']
})
export class BuyproductComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  item:string=""
  selected:boolean=false;

  selectitem(pro)
  {
    this.selected=true
    this.item=pro;
  }

  addproduct:any=""


  cart(car)
  {
    this.addproduct=this.item
  }

}
