import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormsModule,
  ReactiveFormsModule,
  Validators,
  FormControl,
} from '@angular/forms';

@Component({
  selector: 'app-notebook-task',
  templateUrl: './notebook.component.html',
  styleUrls: ['./notebook.component.css'],
  imports: [FormsModule, CommonModule, ReactiveFormsModule],
  standalone: true,
})
export class NotebookTaskComponent {
  notes: { title: string; content: string }[] = [];
  editingNoteIndex: number | null = null;
  error: string | null = null;
  isInvalid: boolean = false;

  addOrUpdateNote(title: string, content: string) {
    if (title.length < 5 || content.length < 7) {
      this.error =
        'Заглавието трябва да съдържа минимум 5 символа и съдържанието трябва да съдържа минимум 7 символа';
      this.isInvalid = true;

      return;
    }
    let note = { title: title, content: content };
    if (this.editingNoteIndex !== null) {
      this.notes[this.editingNoteIndex] = note;
      this.editingNoteIndex = null;
    } else {
      this.notes.push(note);
      this.isInvalid = false;
    }
    this.error = null;
  }

  editNote(index: number) {
    this.editingNoteIndex = index;
  }

  deleteNote(index: number) {
    this.notes.splice(index, 1);
  }
  selectNote(index: number) {
    this.editingNoteIndex = index;
  }
}
