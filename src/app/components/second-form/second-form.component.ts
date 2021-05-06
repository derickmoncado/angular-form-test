import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FormDataService } from '../../shared/form-data.service';

@Component({
  selector: 'app-second-form',
  templateUrl: './second-form.component.html',
  styleUrls: ['./second-form.component.scss'],
})
export class SecondFormComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    public formDataService: FormDataService
  ) {}

  // Properties
  public secondForm!: FormGroup;

  // Form group
  initializeForm(): void {
    this.secondForm = this.fb.group({
      comment: '',
      description: '',
    });
  }

  ngOnInit(): void {
    this.initializeForm();
  }
}
