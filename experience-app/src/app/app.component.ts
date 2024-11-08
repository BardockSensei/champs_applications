import { Component, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BookComponent } from './book/book.component';
import { Book } from './book.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BookComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Séance n°1';

  books: Book[] = [
    {
      id: 0,
      title: 'Jeanne la fille du docteur Loiseau',
      author: 'Carole Trébor',
      date: 2020,
      type: 'horror',
      availability: true,
      isbn: 9782226454713,
    },
    {
      id: 1,
      title: 'Dune',
      author: 'Frank Herbert',
      date: 1965,
      type: 'science fiction',
      availability: true,
      isbn: 9780441172719,
    },
    {
      id: 2,
      title: 'Pride and Prejudice',
      author: 'Jane Austen',
      date: 1813,
      type: 'romance',
      availability: true,
      isbn: 9780141439518,
    },
    {
      id: 3,
      title: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
      date: 1925,
      type: 'classic',
      availability: true,
      isbn: 9780743273565,
    },
    {
      id: 4,
      title: 'The Shining',
      author: 'Stephen King',
      date: 1977,
      type: 'thriller',
      availability: true,
      isbn: 978030774365,
    },
    {
      id: 5,
      title: 'The Art of War',
      author: 'Sun Tzu',
      date: 500,
      type: 'philosophy',
      availability: true,
      isbn: 978159986977,
    },
    {
      id: 6,
      title: 'Sapiens: A Brief History of Humankind',
      author: 'Yuval Noah Harari',
      date: 2011,
      type: 'non-fiction',
      availability: true,
      isbn: 978006231609,
    },
  ];
}
