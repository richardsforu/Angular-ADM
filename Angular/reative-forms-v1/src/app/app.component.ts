import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomValidationsService } from './custom-validations.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  flightBookForm: FormGroup;
  isSubmitted: boolean = false;

  constructor(private fb: FormBuilder,private cv:CustomValidationsService) { }

  handleSubmit() {

    this.isSubmitted = true;

    if (this.flightBookForm.invalid)
      return false;

    console.log(this.flightBookForm);

    console.log(this.flightBookForm.value);
    console.log(this.flightBookForm.controls);
    console.log('.. submited...');


  }


  get fc() {
    return this.flightBookForm.controls;
  }

  ngOnInit(): void {

    this.flightBookForm = this.fb.group(
      {
        origin: ['', [Validators.required, Validators.minLength(3)]],
        destination: ['', Validators.required],
        flightDate: ['', [Validators.required,this.cv.patternDateValidator()]],
        numberofPassengers: [,[Validators.required]],
        pinCode: [,[Validators.required,Validators.pattern('[1-9][0-9]{5}')]],
        password: [,[Validators.required,this.cv.patternValidator()]]



      }

    )

  }


}
