import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {
  fullImagePath: string;
  constructor() {
    this.fullImagePath = '../../assets/img/map.png'}

  ngOnInit() {
  }

}
