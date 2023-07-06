import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BackendErrosMessagesComponent } from './components/backend-erros-messages/backend-erros-messages.component';

@NgModule({
  imports: [CommonModule],
  declarations: [BackendErrosMessagesComponent],
  exports: [BackendErrosMessagesComponent]
})
export class BackendErrorMessagesModule {}
