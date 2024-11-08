import { Component, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BookComponent } from './book/book.component';
import { Book } from './book.model';
import * as data from './../../books-data.json';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BookComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Collection';

  books: Book[] = (data as any).default;
}
