import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: 'game.component.html',
  styleUrls: ['game.component.scss']
})

export class GameComponent implements OnInit {
  
  submitted: boolean = false;
  level: number = 0;
  
  constructor(private location: Location) { }

  ngOnInit() { }
  
  back(){
    this.location.back();
  }
  
  formListener(evt: string) {
    console.log(evt)
  }
  
}