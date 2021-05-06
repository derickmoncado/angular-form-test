import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { masterFormComponent } from './components/first-form/first-form.component';
import { SecondFormComponent } from './components/second-form/second-form.component';
import { ThirdFormComponent } from './components/third-form/third-form.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AppComponent } from './app.component';
import { NoopComponent } from './components/noop/noop.component';

const routes: Routes = [
  { path: '', component: NoopComponent },
  { path: 'first', component: masterFormComponent },
  { path: 'second', component: SecondFormComponent },
  { path: 'third', component: ThirdFormComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
