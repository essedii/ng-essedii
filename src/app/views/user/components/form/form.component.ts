import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: 'form.component.html',
  styleUrls: ['form.component.scss']
})

export class FormComponent implements OnInit {
  
  @Input() type?: number;
  @Input() level?: number;
  @Output() startGame = new EventEmitter<string>();
  
  chosenLevel!: FormGroup;
  submitted: boolean = false;
  
  constructor(  private fb: FormBuilder) { }

  ngOnInit() {
    this.levelFormInit()
  }
  
  levelFormInit() {
    this.chosenLevel = this.fb.group({
      chosenLevel: ['', [Validators.required]]
    })
  }
  
  get f() { return this.chosenLevel?.controls; }
  
  onStart() {
    this.submitted === true;
    if (this.chosenLevel?.invalid) {
      console.log('select a level')
      return
    } else {
      this.startGame.emit(this.chosenLevel?.value)
    }
   
  }
}