import { Component } from '@angular/core';
import { FormDataService } from '../../shared/form-data.service';

@Component({
  selector: 'app-third-form',
  templateUrl: './third-form.component.html',
  styleUrls: ['./third-form.component.scss'],
})
export class ThirdFormComponent {
  constructor(public formDataService: FormDataService) {}
}
