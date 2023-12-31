import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { registerAction } from '../../store/actions/register.action';
import {
  isSubmittingSelector,
  validationErrosSelector,
} from '../../store/selectors';
import { AppStateInterface } from '../../types/appState.interface';
import { RegisterRequestInterface } from '../../types/registerRequest.interface';
import { BackendErrosInterface } from '../../types/backendErrors.interface';

@Component({
  selector: 'mc-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  form: FormGroup;
  isSubmitting$!: Observable<boolean>;
  backendErrors$!: Observable<BackendErrosInterface | null>;

  constructor(
    private fb: FormBuilder,
    private store: Store<AppStateInterface>
  ) {
    this.form = this.fb.group({
      username: '',
      email: '',
      password: '',
    });
  }

  ngOnInit(): void {
    this.initializeForm();
    this.initializeValues();
  }

  initializeValues(): void {
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector));
    this.backendErrors$ = this.store.pipe(select(validationErrosSelector));
  }

  initializeForm(): void {
    console.log('initializeForm');
    this.form = this.fb.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
    this.isSubmitting$ = new Observable<boolean>();
  }

  onSubmit(): void {
    console.log('submit', this.form.value, this.form.valid);
    const request: RegisterRequestInterface = {
      user: this.form.value,
    };
    this.store.dispatch(registerAction({ request }));
  }
}
