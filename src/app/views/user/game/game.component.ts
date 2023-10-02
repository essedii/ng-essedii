import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';

import { BehaviorSubject, Observable, Subject, filter, interval, map, take, takeUntil } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { ThemePalette } from '@angular/material/core';
import { ProgressBarMode } from '@angular/material/progress-bar';


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
  timeStarted: any;
  typeL: number = 0
  
  
  timer$ =  new BehaviorSubject<Boolean | Number>(true);
  destroy$ =  new BehaviorSubject<Boolean>(true);
  numbers = interval(1000);

  emitInterval = this.numbers.pipe(take(7)); 
  missingTime: number = 6;
  type: number = 0;
  
  // CONDIZIONI ELEMENTI HTML

  fase1End: boolean = false;
  
  color: ThemePalette = 'primary';
  mode: ProgressBarMode = 'determinate';
  value = 10;
  value$ = new BehaviorSubject(0);
  
  userToCheck = {
    gender: '',
    age: '',
    first: '',
    last: '',
  }
  
  
  esito: string | null = null;
  
  constructor(private location: Location, private service: UserService) { 
  }

  ngOnInit() { 
  }
  
  back(){
    this.location.back();
  }
  
  resetGame() {
    this.esito = null;
    this.user =  null;
    this.destroy$.complete();
    this.resetSettings();
  }

  manageTime(data: any) {
    this.missingTime -= 1;
    this.timer$.next(this.missingTime);
    this.value$.next(this.missingTime*20)
    this.gameStarted = true;
  }
  
  resetSettings() {
    this.type = 0;
    this.missingTime = 6;
    this.timer$.complete();
  }
  
  completeFase1(){
    this.fase1End = true;
    this.type = 1
  }

  manageError(err: HttpErrorResponse) {
    console.log(err);
  }
  
  checkAnswer(evt: any) {
    console.log(this.userToCheck);
    console.log(evt);
    let x = JSON.stringify(this.userToCheck);
    let y =  JSON.stringify(evt);
    x == y? console.log('Winning') : console.log('Lost')
    x == y? this.esito = 'won' : this.esito = 'lost'
  }
  
  gameManager(evt: any) {
    this.fase1End = false
    if (evt === 'reset') {
      this.destroy$.complete();
      this.resetSettings();
    } else {
      this.level = evt.level;
      this.service.getRandomUser(this.level).subscribe({
        next: (data) => this.generateUserToCheck(data),
        error: (err) => this.manageError(err),
        complete: () =>  this.timeStart()
      })
    }
  }
  
  timeStart() {
    this.emitInterval.pipe(filter((elem) => !!elem)).subscribe({
      next: (data) => this.manageTime(data),
      error: (error) =>  this.manageError(error),
      complete: () =>  this.completeFase1()
    })
  }
  
  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
  
  generateUserToCheck(userDto: any) {
    this.user = userDto;
    
    this.userToCheck.gender = userDto.gender
    this.userToCheck.age = userDto.dob.age
    this.userToCheck.first = userDto.name.first
    this.userToCheck.last = userDto.name.last
  }
}