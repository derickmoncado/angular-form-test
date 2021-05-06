import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FormDataService } from '../../shared/form-data.service';

@Component({
  selector: 'app-third-form',
  templateUrl: './third-form.component.html',
  styleUrls: ['./third-form.component.scss'],
})
export class ThirdFormComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    public formDataService: FormDataService
  ) {}

  // Properties
  public thirdForm!: FormGroup;

  // Form group
  initializeForm(): void {
    this.thirdForm = this.fb.group({
      comment: '',
      description: '',
    });
  }

  ngOnInit(): void {
    this.initializeForm();
  }
}
