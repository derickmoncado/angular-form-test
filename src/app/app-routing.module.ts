import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FirstFormComponent } from './components/first-form/first-form.component';
import { SecondFormComponent } from './components/second-form/second-form.component';
import { ThirdFormComponent } from './components/third-form/third-form.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'first-form', component: FirstFormComponent },
  { path: 'second-form', component: SecondFormComponent },
  { path: 'third-form', component: ThirdFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
