import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Store } from '@ngrx/store';

import { authActions } from '@auth/store/actions';
import {
  selectIsSubmitting,
  selectValidationErrors,
} from '@auth/store/reducers';
import { combineLatest } from 'rxjs';
import { ServerErrorMessagesComponent } from '@shared/components';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [
    CommonModule,
    NgbModule,
    ReactiveFormsModule,
    RouterLink,
    ServerErrorMessagesComponent,
  ],
  templateUrl: './sign-in.component.html',
})
export class SignInComponent {
  fb = inject(FormBuilder);
  store = inject(Store);

  form: FormGroup = this.fb.nonNullable.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
  });

  data$ = combineLatest({
    isSubmitting: this.store.select(selectIsSubmitting),
    validationErrors: this.store.select(selectValidationErrors),
  });

  onSubmit(): void {
    console.log(this.form.getRawValue());
    const payload = { user: this.form.getRawValue() };
    this.store.dispatch(authActions.signIn(payload));
  }
}
