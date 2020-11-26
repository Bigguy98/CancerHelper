import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-predict-form',
  templateUrl: './predict-form.component.html',
  styleUrls: ['./predict-form.component.scss']
})
export class PredictFormComponent implements OnInit {

  gender: any = "M";
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

  constructor(private commonService: CommonService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  submit(): void {
    const data = Array.of(
      this.gender,
      this.age,
      this.smoking ? 2 : 1,
      this.yellowFinger ? 2 : 1,
      this.anxiety ? 2 : 1,
      this.pressure ? 2 : 1,
      this.chronicDisease ? 2 : 1,
      this.fatigue ? 2 : 1,
      this.allergy ? 2 : 1,
      this.wheezing ? 2 : 1,
      this.alcohol ? 2 : 1,
      this.coughing ? 2 : 1,
      this.shortnessBreath ? 2 : 1,
      this.swallowDif ? 2 : 1,
      this.painChess ? 2 : 1);

    this.commonService.getPrediction(data.join(","), 2).subscribe((response: any) => {
        this.toastr.success(response.body.message, 'Prediction result!');
    },() => {
      console.error();
    }, () => {
      this.resetForm();
    })
  }

  resetForm(): void {
    this.gender ="M";
    this.age = "";
    this.smoking = false;
    this.yellowFinger = false;
    this.anxiety = false;
    this.pressure = false;
    this.chronicDisease = false;
    this.fatigue = false;
    this.allergy = false;
    this.wheezing = false;
    this.alcohol = false;
    this.coughing = false;
    this.shortnessBreath = false;
    this.swallowDif = false;
    this.painChess = false;
  }
}
