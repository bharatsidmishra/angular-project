import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  // template: `<app-server></app-server> <app-server></app-server>`,
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  serverCreationStatus= "No Server was created!";
  serverName = "TestServer";
  serverCreated = false;
  servers  = ["Testserver","Testserver2"]

  allowNewServer = false;
  constructor() {
    setTimeout(()=>{
      this.allowNewServer = true;
    },2000)

  }
  ngOnInit(): void {
    
  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was Created! Name of the server is ' + this.serverName;
  }
  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
