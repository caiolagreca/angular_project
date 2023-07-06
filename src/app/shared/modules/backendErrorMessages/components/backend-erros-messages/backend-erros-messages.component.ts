import { Component, Input, OnInit } from '@angular/core';
import { BackendErrosInterface } from 'src/app/auth/types/backendErrors.interface';

@Component({
  selector: 'mc-backend-error-messages',
  templateUrl: './backend-erros-messages.component.html',
  styleUrls: ['./backend-erros-messages.component.scss'],
})
export class BackendErrosMessagesComponent implements OnInit {
  @Input('backendErrors') backendErrosProps!: BackendErrosInterface | null;

  errorMessages: string[] = [];

  ngOnInit(): void {
    if (this.backendErrosProps) {
      const backendErrors = this.backendErrosProps as BackendErrosInterface;
      this.errorMessages = Object.keys(backendErrors).map((name: string) => {
        const messages = backendErrors[name]?.join(' ') || '';
        return `${name} ${messages}`;
      });
    }
  }
}
