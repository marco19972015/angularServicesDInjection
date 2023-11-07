import { Component } from '@angular/core';
import { SubscribeService } from 'src/app/Services/subscribe.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  providers: [SubscribeService]  // 2. WHAT DEPENDENCY TO PROVIDE
})

export class SidebarComponent {

  // 1. Using the contructor we are telling Ang HOW TO PROVICE DEPENDENCY
  constructor(private subService: SubscribeService){}

  OnSubscribe() {
    this.subService.OnSubscribeClicked();
  }
  
}
