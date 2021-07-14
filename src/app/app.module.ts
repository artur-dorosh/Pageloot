import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ErrorPageComponent } from './shared/components/error-page/error-page.component';
import { SharedModule } from './shared/shared.module';
import { QuestionsService } from './questionnaire/services/questions.service';

@NgModule({
  declarations: [
    AppComponent,
    ErrorPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
  ],
  providers: [
    QuestionsService,
    {
      provide: APP_INITIALIZER,
      useFactory: (qs: QuestionsService) => () => qs.initData(),
      deps: [QuestionsService],
      multi: true
    }
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
