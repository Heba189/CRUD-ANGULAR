import { Component } from '@angular/core';
import { from } from 'rxjs';
 import {toggleFade} from './shared/animateLength';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations : [toggleFade]
})
export class AppComponent {
isLogin : boolean ;
constructor(){
  this.isLogin = true;
}
}
