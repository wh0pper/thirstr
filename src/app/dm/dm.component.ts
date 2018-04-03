import { Component, OnInit } from '@angular/core';
import { Profile } from '../profile.model';
import { CHAT } from '../../mock-story';

@Component({
  selector: 'app-dm',
  templateUrl: './dm.component.html',
  styleUrls: ['./dm.component.css']
})
export class DmComponent implements OnInit {
  chats: any[] = CHAT;
  chatIndex: number = 0;
  currentChat: any;
  displayChats = [];
  exitMessage: string;

  constructor() { }

  ngOnInit() {
    this.currentChat = this.chats[this.chatIndex];
  }

  nextChat() {
    this.displayChats.push(this.currentChat);
    if (this.chatIndex < this.chats.length) {
      this.chatIndex++;
      this.currentChat = this.chats[this.chatIndex];
    } else {
      this.exitMessage = "Congrats! It's a match."
    }
  }

  exitChat() {
    this.exitMessage = "Awww...you blew it! Keep swiping or die alone."
  }

}
