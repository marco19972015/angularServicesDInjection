import { Component, inject } from '@angular/core';
import { SubscribeService } from 'src/app/Services/subscribe.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html'
})
export class HeroComponent {
  OnSubscribe(){
    // first it will create an instance of the SubscribeService class 
    let subService = new SubscribeService;
    // second it will call the OnSubscribeClicked method
    subService.OnSubscribeClicked();
  }
}
