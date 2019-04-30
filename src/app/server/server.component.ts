import { Component } from '@angular/core';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    /*styles - for the ngStyle directive*/
    styles: [`
        .online {
            color: blue;
        }
    `]
})

export class ServerComponent {
  serverID = 10;
  serverStatus = 'online';

  constructor(){
      this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

  getServerStatus() {
    return this.serverStatus;
  }

  /*getColor for the ngStyle directive*/
  getColor(){
      return this.serverStatus === "online" ? "green" : "red";
  }

}
