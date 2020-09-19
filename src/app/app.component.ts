import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>{{ title }}</h1>
    <h2>Name: {{ myName }}</h2>
    <h2>Registration Number: {{ myReg }}</h2>
    <h2>Email: {{ myEmail }}</h2>
    <p>Bio: {{ myBio }}</p>
  `,
})
export class AppComponent {
  title = 'My Information';
  myName = 'Kritartha Patowary';
  myReg = '201800006';
  myEmail = 'kritarthapatowary15@gmail.com';
  myBio =
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error inventore voluptatibus cupiditate est! Impedit, similique quidem tempora culpa autem placeat ab quis delectus quia sapiente reprehenderit, repudiandae voluptatum voluptate eveniet aspernatur omnis pariatur quibusdam itaque consectetur recusandae accusamus est? Fugit veritatis unde quidem eligendi ab inventore alias sequi a deserunt.';
}
