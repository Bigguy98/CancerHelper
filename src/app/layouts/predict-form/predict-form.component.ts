import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-predict-form',
  templateUrl: './predict-form.component.html',
  styleUrls: ['./predict-form.component.scss']
})
export class PredictFormComponent implements OnInit {

  gender: any;
  age: any;

  smoking = false;
  yellowFinger = false;
  anxiety = false;
  pressure = false;
  chronicDisease = false;
  fatigue = false;
  allergy = false;
  wheezing = false;
  alcohol = false;
  coughing = false;
  shortnessBreath = false;
  swallowDif = false;
  painChess = false;

  constructor() { }

  ngOnInit(): void {
  }

  submit(): void {
    console.log(Array.of(
      this.gender,
      this.age,
      this.smoking,
      this.yellowFinger,
      this.anxiety,
      this.pressure,
      this.chronicDisease,
      this.fatigue,
      this.allergy,
      this.wheezing,
      this.alcohol,
      this.coughing,
      this.shortnessBreath,
      this.swallowDif,
      this.painChess));
  }

}
