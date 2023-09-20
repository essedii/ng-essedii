import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-game',
  templateUrl: 'game.component.html',
  styleUrls: ['game.component.scss']
})

export class GameComponent implements OnInit {
  
  submitted: boolean = false;
  user: any;
  gameStarted: boolean = false;
  level: string = '';
  
  constructor(private location: Location, private service: UserService) { }

  ngOnInit() { }
  
  back(){
    this.location.back();
  }
  
  formListener(evt: any) {
    console.log(evt)
    if (evt === 'reset') {
      this.user = null;
    } else {
      this.level = evt.level;
      this.service.getRandomUser(this.level).subscribe(
        (data) => {
        this.user = data;
        this.gameStarted = true;
        },
        (err) => console.log(err),
        () => console.log('complete')
      )
    }
  
  }
  
}