import { FormControl, FormBuilder } from '@angular/forms';
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, Content } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-account-chats-message',
  templateUrl: 'message.html'
})
export class AccountChatsMessagePage {
  toUser = {
    _id: '534b8e5aaa5e7afc1b23e69b',
    pic: 'assets/img/miscellaneous/user.png',
    username: 'CS',
  };

  user = {
    _id: '534b8fb2aa5e7afc1b23e69c',
    pic: 'assets/img/miscellaneous/user.png',
    username: 'Me',
  };

  doneLoading = false;

  messages = [
    {
      _id: 1,
      date: new Date(),
      userId: this.user._id,
      username: this.user.username,
      pic: this.user.pic,
      text: 'Hello ....'
    },
    {
      _id: 2,
      date: new Date(),
      userId: this.toUser._id,
      username: this.toUser.username,
      pic: this.toUser.pic,
      text: 'Hi, anything we can help?'
    },
    {
      _id: 3,
      date: new Date(),
      userId: this.user._id,
      username: this.user.username,
      pic: this.user.pic,
      text: 'Yes, do you accept credit card?'
    },
    {
      _id: 4,
      date: new Date(),
      userId: this.toUser._id,
      username: this.toUser.username,
      pic: this.toUser.pic,
      text: 'Yes we do.'
    },
    {
      _id: 5,
      date: new Date(),
      userId: this.user._id,
      username: this.user.username,
      pic: this.user.pic,
      text: 'Oh great, thank you.'
    },
    {
      _id: 6,
      date: new Date(),
      userId: this.toUser._id,
      username: this.toUser.username,
      pic: this.toUser.pic,
      text: 'You are very welcome'
    },
    {
      _id: 7,
      date: new Date(),
      userId: this.user._id,
      username: this.user.username,
      pic: this.user.pic,
      text: ':)'
    }
  ];

  @ViewChild(Content) content: Content;

  public messageForm: any;
  chatBox: any;

  constructor(public navCtrl: NavController, public formBuilder: FormBuilder) {
    this.messageForm = formBuilder.group({
      message: new FormControl('')
    });
    this.chatBox = '';

  }

  send(message) {
    if (message && message !== '') {
      // this.messageService.sendMessage(chatId, message);

      const messageData =
        {
          toId: this.toUser._id,
          _id: 6,
          date: new Date(),
          userId: this.user._id,
          username: this.toUser.username,
          pic: this.toUser.pic,
          text: message
        };

      this.messages.push(messageData);
      this.scrollToBottom();

      setTimeout(() => {
        const replyData =
          {
            toId: this.toUser._id,
            _id: 6,
            date: new Date(),
            userId: this.toUser._id,
            username: this.toUser.username,
            pic: this.toUser.pic,
            text: 'Just a quick reply'
          };
        this.messages.push(replyData);
        this.scrollToBottom();
      }, 1000);
    }
    this.chatBox = '';
  }

  scrollToBottom() {
    setTimeout(() => {
      this.content.scrollToBottom();
    }, 100);
  }

}