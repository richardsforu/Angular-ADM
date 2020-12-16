import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  hideDiv = false; // showDiv is a property

  rootPath = 'assets/images/';

  imagePath1 = this.rootPath + '/tj1.png';
  imagePath2 = this.rootPath + '/tj2.png';

  userName = 'Praveen';
  disableEditing = false;

  textColor = 'green';
  errorMessage = true;

  cityName: string;



  testFun(s1) {
    console.log(s1.target.value);

  }

  testCheckBox(s2) {
    console.log(s2.target.checked);
    console.log(s2.target.value);
    this.hideDiv = s2.target.checked
  }



}
