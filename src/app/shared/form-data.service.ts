import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class FormDataService {
  // Properties
  public masterForm!: FormGroup;

  // Form group
  initializeForm(): void {
    this.masterForm = this.fb.group({
      comment: '',
      description: '',
    });
  }

  constructor(private fb: FormBuilder) {
    this.initializeForm();
  }
}
