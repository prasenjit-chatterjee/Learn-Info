import { Component } from '@angular/core';
import { WebsocketService } from './service/websocket.service';
import { NotificationService } from './service/notification.service';
import { UserService } from './service/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [WebsocketService, NotificationService]
})
export class AppComponent {
  title = 'test app';

  constructor(private notificationService: NotificationService) {
    notificationService.messages.subscribe(msg => {
      console.log("Response from websocket: " + msg.message);
    });
  }

  private message = {
    author: 'tutorialedge',
    message: 'this is a test message'
  }

  sendMsg() {
    console.log('new message from client to websocket: ', this.message);
    this.notificationService.messages.next(this.message);
    this.message.message = '';
  }
}