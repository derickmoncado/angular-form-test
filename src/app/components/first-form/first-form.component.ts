import { Component } from '@angular/core';
import { FormDataService } from '../../shared/form-data.service';

@Component({
  selector: 'app-first-form',
  templateUrl: './first-form.component.html',
  styleUrls: ['./first-form.component.scss'],
})
export class FirstFormComponent {
  constructor(public formDataService: FormDataService) {}
}
