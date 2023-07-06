import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackendErrosMessagesComponent } from './backend-erros-messages.component';

describe('BackendErrosMessagesComponent', () => {
  let component: BackendErrosMessagesComponent;
  let fixture: ComponentFixture<BackendErrosMessagesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BackendErrosMessagesComponent],
    });
    fixture = TestBed.createComponent(BackendErrosMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
