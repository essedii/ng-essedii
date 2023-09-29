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
  
  
  constructor(private location: Location, private service: UserService) { 
  }

  ngOnInit() { 
  }
  
  back(){
    this.location.back();
  }
  


  assignUser(data: any) {
    this.user = data;
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
    console.log(evt)
  }
  
  gameManager(evt: any) {
    if (evt === 'reset') {
      this.destroy$.complete();
      this.resetSettings();
    } else {
      this.level = evt.level;
      this.service.getRandomUser(this.level).subscribe({
        next: (data) => this.assignUser(data),
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
}