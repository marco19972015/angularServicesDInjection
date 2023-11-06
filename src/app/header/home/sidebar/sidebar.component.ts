import { Component } from '@angular/core';
import { SubscribeService } from 'src/app/Services/subscribe.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})

// we are making the SidebarComponent class dependent on the SubscriberService class
// if the SubscriberService is removed or modified it will affect the SidebarComponent class
// which might not make it work property. in essence we are making this class tightly coupled with the SubscriberService
// which is not a good practice
// so we can ask angular to inject an instance of this subscribe service class to this hero component class
// which then allows us to use that injected instance
export class SidebarComponent {
  OnSubscribe(){
    // first it will create an instance of the SubscribeService class 
    let subService = new SubscribeService;
    // second it will call the OnSubscribeClicked method
    subService.OnSubscribeClicked();
  }
}
