import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddQuestionComponent } from './components/add-question/add-question.component';
import { QuestionsListComponent } from './components/questions-list/questions-list.component';
import { QuestionManagerComponent } from './components/question-manager/question-manager.component';
import { RouterModule, Routes } from '@angular/router';
import { QuestionManagerListComponent } from './components/question-manager/question-manager-list/question-manager-list.component';
import { QuestionManagerListItemComponent } from './components/question-manager/question-manager-list-item/question-manager-list-item.component';
import { OrderByPipe } from './pipes/order-by.pipe';
import { IsAnsweredPipe } from './pipes/is-answered.pipe';
import { ReactiveFormsModule } from '@angular/forms';
import { AnsweredListComponent } from './components/questions-list/answered-list/answered-list.component';
import { UnansweredListComponent } from './components/questions-list/unanswered-list/unanswered-list.component';
import { QuestionListItemComponent } from './components/questions-list/question-list-item/question-list-item.component';

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
    component: QuestionsListComponent,
  }
];

@NgModule({
  declarations: [
    AddQuestionComponent,
    QuestionsListComponent,
    QuestionManagerComponent,
    QuestionManagerListComponent,
    QuestionManagerListItemComponent,
    OrderByPipe,
    IsAnsweredPipe,
    AnsweredListComponent,
    UnansweredListComponent,
    QuestionListItemComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
  ]
})
export class QuestionnaireModule { }
