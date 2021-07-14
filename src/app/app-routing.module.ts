import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'questionnaire',
  }, {
    path: 'questionnaire',
    loadChildren: () => import('./questionnaire/questionnaire.module').then((module) => module.QuestionnaireModule),
  }, {
    path: 'error-page',
    loadChildren: () => import('./shared/shared.module').then((module) => module.SharedModule)
  }, {
    path: '**',
    redirectTo: '/error-page'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
