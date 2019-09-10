import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  anio: number;
  compania: string;
  constructor() {
    this.anio= new Date().getFullYear();
    this.compania='Demo App V 1.0';
   }

  ngOnInit() {
  }

}
