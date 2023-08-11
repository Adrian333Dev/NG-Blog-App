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
import { selectIsSubmitting } from '@auth/store/reducers';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [CommonModule, NgbModule, ReactiveFormsModule, RouterLink],
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent {
  fb = inject(FormBuilder);
  store = inject(Store);

  form: FormGroup = this.fb.nonNullable.group({
    username: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required],
  });
  isSubmitting$ = this.store.select(selectIsSubmitting);

  onSubmit(): void {
    console.log(this.form.getRawValue());
    const payload = { user: this.form.getRawValue() };
    this.store.dispatch(authActions.signUp(payload));
  }
}
