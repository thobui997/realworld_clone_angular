import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ArticlesService } from 'app/apis/articles/articles.service';
import { ArticleModel } from '../apis/articles/article.model';
import { finalize, pluck, switchMap, tap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { iif, Observable, of } from 'rxjs';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css'],
})
export class EditorComponent implements OnInit {
  editorFormGroup$: Observable<FormGroup>;
  tagField = new FormControl();
  article: ArticleModel.Article = {} as ArticleModel.Article;
  isSubmitting = false;
  isModeUpdate = false;
  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private articleService: ArticlesService
  ) {
    this.article.tagList = [];
  }

  ngOnInit(): void {
    this.editorFormGroup$ = this.route.params.pipe(
      pluck('slug'),
      switchMap((slug) => {
        if (slug) {
          this.isModeUpdate = true;
          return this.articleService
            .getSingleArticle(slug)
            .pipe(tap((article) => (this.article = article)));
        }
        return of(null);
      }),
      switchMap((article) => of(this.initForm(article)))
    );
  }

  initForm(article: ArticleModel.Article): FormGroup {
    return this.fb.group({
      title: [article ? article.title : '', [Validators.required]],
      description: [article ? article.description : '', [Validators.required]],
      body: [article ? article.body : '', [Validators.required]],
    });
  }

  onSubmitArticle(editorFormGroup: FormGroup): void {
    this.isSubmitting = true;
    const body: BodyArticle = {
      article: {
        ...editorFormGroup.getRawValue(),
        tagList: this.article.tagList,
      },
    };

    iif(
      () => this.isModeUpdate,
      this.articleService.updateArticle(this.article.slug, body),
      this.articleService.createArticle(body)
    )
      .pipe(finalize(() => (this.isSubmitting = false)))
      .subscribe();
  }

  addTag(): void {
    const tag = this.tagField.value;
    if (this.article.tagList.indexOf(tag) < 0) {
      this.article.tagList.push(tag);
    }

    this.tagField.reset('');
  }

  removeTag(tagName: string): void {
    this.article.tagList = this.article.tagList.filter(
      (item) => item !== tagName
    );
  }
}

export interface BodyArticle {
  article: {
    title: string;
    description: string;
    body: string;
    tagList?: string[];
  };
}
