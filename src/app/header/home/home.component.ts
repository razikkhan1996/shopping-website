import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  homeimage="https://images.unsplash.com/photo-1592596758401-66b2052b32cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80";

}
