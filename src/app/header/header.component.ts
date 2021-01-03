import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations : [
    trigger('childanimation', [
      state('open', style({
        width: '250px',
        opacity: 1,
        backgroundColor: 'green'
      })),
      state('closed', style({
        width: '100px',
        opacity: 0.5,
        backgroundColor: 'red'
      })),
      transition('* => *', [animate('1s')])
    ])
  ]
})
export class HeaderComponent implements OnInit {

  isDisabled = false;
  isOpen = false;
  constructor() { }

  ngOnInit(): void {
  }

  toggleAnimations(){
    this.isDisabled = !this.isDisabled;
  }

  toggle(){
    this.isOpen = !this.isOpen;
  }

}
