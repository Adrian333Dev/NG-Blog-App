import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IServerErrors } from '@shared/models/interfaces';

@Component({
  selector: 'app-server-error-messages',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './server-error-messages.component.html',
  styleUrls: ['./server-error-messages.component.scss'],
})
export class ServerErrorMessagesComponent implements OnInit {
  @Input() errors: IServerErrors = {};

  errorMessages: string[] = [];

  ngOnInit(): void {
    this.errorMessages = Object.keys(this.errors).map((key) => {
      const messages = this.errors[key].join(', ');
      return `${key} ${messages}`;
    });
    console.log(this.errorMessages);
  }
}
