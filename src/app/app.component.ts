import { Component, OnInit } from '@angular/core';
import THREE from 'three';
import './globalThree';
import createTextGeometry from 'three-bmfont-text';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'three-project';

  ngOnInit(): void {

    console.log(THREE);
    console.log(createTextGeometry);
  }
}



