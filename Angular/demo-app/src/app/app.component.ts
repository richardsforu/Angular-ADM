import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'demo-app';

  //clock=new Date().toLocaleString('en-US',{timeZone:'Asia/Kolkata'});

  loadClock(props:any){
    return new Date().toLocaleString('en-US',{timeZone:props});
  }

  number=setInterval(()=>{
    this.loadClock('')
  },1000)

}
