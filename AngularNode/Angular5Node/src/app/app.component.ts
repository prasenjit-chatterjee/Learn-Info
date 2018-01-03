import { Component } from '@angular/core';
import { WebsocketService } from './service/websocket.service';
import { NotificationService } from './service/notification.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ WebsocketService, NotificationService ]
})
export class AppComponent {
  title = 'test app';
  
  constructor(private chatService: NotificationService) {
		chatService.messages.subscribe(msg => {			
      console.log("Response from websocket: " + msg.message);
		});
	}

  private message = {
		author: 'tutorialedge',
		message: 'this is a test message'
	}

  sendMsg() {
		console.log('new message from client to websocket: ', this.message);
		this.chatService.messages.next(this.message);
		this.message.message = '';
	}
}