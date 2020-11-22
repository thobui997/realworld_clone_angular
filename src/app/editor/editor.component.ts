import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ArticlesService } from 'app/apis/articles/articles.service';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css'],
})
export class EditorComponent implements OnInit {
  editorFormGroup: FormGroup;
  tagField = new FormControl();
  constructor(
    private fb: FormBuilder,
    private articleService: ArticlesService
  ) {
    this.initForm();
  }

  ngOnInit(): void {}

  initForm(): void {
    this.editorFormGroup = this.fb.group({
      title: ['', [Validators.required]],
      description: ['', [Validators.required]],
      body: ['', [Validators.required]],
    });
  }
}
