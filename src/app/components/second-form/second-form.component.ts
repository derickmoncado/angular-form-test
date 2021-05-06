import { Component } from '@angular/core';
import { FormDataService } from '../../shared/form-data.service';

@Component({
  selector: 'app-second-form',
  templateUrl: './second-form.component.html',
  styleUrls: ['./second-form.component.scss'],
})
export class SecondFormComponent {
  constructor(public formDataService: FormDataService) {}
}
