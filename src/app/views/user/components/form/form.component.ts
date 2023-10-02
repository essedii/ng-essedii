import { Component, EventEmitter, Input, Output} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: 'form.component.html',
  styleUrls: ['form.component.scss']
})

export class FormComponent{
  
  @Input() type?: number;
  @Input() iUser?: Object;
  @Output() startGame = new EventEmitter<string>();
  @Output() finishGame = new EventEmitter<string>();
  @Output() resetGame = new EventEmitter<string>();
  
  user: any
  
  chosenLevel: FormGroup = this.fb.group({
    level: [null, [Validators.required]]
  });
  
  userForm: FormGroup = this.fb.group({
    gender: [null],
    age: [null],
    first: [null],
    last: [null],
  });
  
  
  
  submitted: boolean = false;
  started: boolean = false;
  
  constructor(  private fb: FormBuilder) { }
  
  test() {
    console.log(this.iUser)
  }
  
  get f() { return this.chosenLevel?.controls; }
  
  onStart() {
    this.submitted === true;
    if (this.chosenLevel?.invalid) {
      console.log('select a level');
      return
    } else {
      this.startGame.emit(this.chosenLevel?.value);
      this.started = true;
      this.chosenLevel.disable();
    }
  }
  
  onFinish() {
    this.submitted === true;
    this.finishGame.emit(this.userForm?.value);
    this.started = true;
  }
   
  onReset() {
    this.submitted = false;
    this.started = false;
    this.chosenLevel.reset();
    this.chosenLevel.enable();
    this.resetGame.emit('reset');
  }
}