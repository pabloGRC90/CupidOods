import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss']
})
export class DescriptionComponent implements OnInit {
  public title : string;
  public imgCupidOods: string;

  constructor() {
    this.title="Tu App de citas";
    this.imgCupidOods="./assets/logo-cupidOods.png";
  }

  ngOnInit(): void {
  }

}
