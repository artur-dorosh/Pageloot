import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionsService } from '../../services/questions.service';
import { v4 as uuidv4 } from 'uuid';
import { IQuestion } from '../../interfaces/question.interface';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddQuestionComponent implements OnInit, OnDestroy {
  questionForm: FormGroup;
  answersArray: FormArray;

  currentQuestion: IQuestion = this.questionsService.getQuestionById(this.route.snapshot.params.id);

  private onDestroy$: Subject<void> = new Subject<void>();

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private questionsService: QuestionsService,
  ) { }

  ngOnInit(): void {
    this.initForm();
    this.initFormValue();
    this.trackQuestionType();
  }

  addNewAnswer(): void {
    this.answersArray.push(this.createOption());
  }

  deleteAnswer(index: number): void {
    this.answersArray.removeAt(index);
  }

  saveAnswer(): void {
    const question: IQuestion = {
      ...this.questionForm.value,
      id: uuidv4(),
      createdDate: new Date(),
      answered: false,
      answeredDate: null,
    }

    if (this.currentQuestion) {
      this.questionsService.updateQuestion({
        ...this.currentQuestion,
        ...this.questionForm.value,
        createdDate: new Date(),
      });
    } else {
      this.questionsService.createQuestion(question);
    }

    this.router.navigate(['../']);
  }

  ngOnDestroy(): void {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }

  private initForm(): void {
    this.questionForm = this.fb.group({
      title: [null, Validators.required],
      type: [null, Validators.required],
      answers: this.fb.array(this.currentQuestion
        ? []
        : [this.createOption(), this.createOption()], Validators.minLength(2)),
    })
  }

  private initFormValue(): void {
    this.answersArray = this.questionForm.get('answers') as FormArray;

    if (this.currentQuestion) {
      this.questionForm.patchValue(this.currentQuestion);

      if (this.currentQuestion.answers) {
        for (const answer of this.currentQuestion.answers) {
          this.answersArray.push(this.createOption(answer))
        }
      }
    }
  }

  private trackQuestionType(): void {
    this.questionForm.get('type').valueChanges.pipe(
      takeUntil(this.onDestroy$),
    ).subscribe((type: string) => {
      if (type === 'open') {
        this.questionForm.get('answers').disable();
      } else {
        this.questionForm.get('answers').enable();
      }
    })
  }

  private createOption(value?: string): FormControl {
    return new FormControl(value || null, Validators.required);
  }
}
