import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { EditorRoutingModule } from './editor-routing.module';
import { EditorComponent } from './editor.component';



@NgModule({
  declarations: [EditorComponent],
  imports: [
    CommonModule,
    EditorRoutingModule,
    ReactiveFormsModule
  ]
})
export class EditorModule { }
