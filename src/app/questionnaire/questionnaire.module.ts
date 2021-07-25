import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddQuestionComponent } from './components/add-question/add-question.component';
import { QuestionManagerComponent } from './components/question-manager/question-manager.component';
import { RouterModule, Routes } from '@angular/router';
import { QuestionManagerListComponent } from './components/question-manager/question-manager-list/question-manager-list.component';
import { QuestionManagerListItemComponent } from './components/question-manager/question-manager-list-item/question-manager-list-item.component';
import { OrderByPipe } from './pipes/order-by.pipe';
import { IsAnsweredPipe } from './pipes/is-answered.pipe';
import { ReactiveFormsModule } from '@angular/forms';
import { QuestionListContainerComponent } from './components/question-list-container/question-list-container.component';
import { QuestionListComponent } from './components/question-list-container/question-list/question-list.component';
import { QuestionListItemComponent } from './components/question-list-container/question-list-item/question-list-item.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'question-manager',
  }, {
    path: 'question-manager',
    component: QuestionManagerComponent,
  }, {
    path: 'question-manager/new',
    component: AddQuestionComponent,
  }, {
    path: 'question-manager/:id',
    component: AddQuestionComponent,
  }, {
    path: 'questions-list',
    component: QuestionListContainerComponent,
  }
];

@NgModule({
  declarations: [
    AddQuestionComponent,
    QuestionManagerComponent,
    QuestionManagerListComponent,
    QuestionManagerListItemComponent,
    OrderByPipe,
    IsAnsweredPipe,
    QuestionListItemComponent,
    QuestionListContainerComponent,
    QuestionListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
  ]
})
export class QuestionnaireModule { }
