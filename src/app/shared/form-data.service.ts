import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class FormDataService {
  // Properties
  public firstForm!: FormGroup;

  // Form group
  initializeForm(): void {
    this.firstForm = this.fb.group({
      comment: '',
      description: '',
    });
  }

  constructor(private fb: FormBuilder) {
    this.initializeForm();
  }
}
