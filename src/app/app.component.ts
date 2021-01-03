import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations : [
    trigger('newanimation', [
      state('smaller', style({
        transform: 'translateX(200px)'
      })),
      state('larger', style({
        transform: 'translateX(0px)'
      })),
      transition('smaller <=> larger', animate('400ms ease-in'))
    ])
  ]
})
export class AppComponent {
 
  state = 'smaller'

  animate(){
    this.state = this.state == 'larger'?'smaller' : 'larger';
  }



}
