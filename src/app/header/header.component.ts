import { Component } from '@angular/core';
import { SubscribeService } from '../Services/subscribe.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})


export class HeaderComponent {
  selectedTab: string = 'home';

  //When HOME Link is clicked
  HomeClicked(){
    this.selectedTab = 'home';
  }

  //When Admin Link is clicked
  AdminClicked(){
    this.selectedTab = 'admin';
  }


  // when the onSubcribe method is called 
  OnSubscribe(){
    // first it will create an instance of the SubscribeService class 
    let subService = new SubscribeService
    // second it will call the OnSubscribeClicked method
    subService.OnSubscribeClicked();
  }
}
