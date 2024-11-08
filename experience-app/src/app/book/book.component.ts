import { Component, Input } from '@angular/core';
import { Book } from '../book.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-book',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './book.component.html',
  styleUrl: './book.component.css',
})
export class BookComponent {
  // Un objet pour gérer l'état des colonnes pour les trier
  sortState: { [key: string]: boolean | null } = {
    title: null,
    author: null,
    date: null,
    type: null,
  };

  // par défaut, une liste vide, mais on récupère l'input que le parent nous donne
  @Input() books: Book[] = [];

  // Méthode un peu bidon, juste pour tester...
  displayBookISBN(book: Book): string {
    const isbn = book.isbn ? book.isbn.toString() : null;

    if (isbn == null) {
      return '??? - ? - ???? - ???? - ?';
    } else {
      return (
        isbn.substring(0, 3) +
        ' - ' +
        isbn.substring(4, 5) +
        ' - ' +
        isbn.substring(4, 8) +
        ' - ' +
        isbn.substring(8, 12) +
        ' - ' +
        isbn.substring(12, 13)
      );
    }
  }

  sortBooks(columnName: keyof Book) {
    // Animation des icônes
    for (const key in this.sortState) {
      if (key !== columnName) {
        this.sortState[key] = null;
      } else {
        this.sortState[key] = !this.sortState[key];
      }
    }

    // Tri de la liste
    this.books.sort((a, b) => {
      const sortOrder = this.sortState[columnName] ? 1 : -1;
      const aValue = a[columnName] ?? '';
      const bValue = b[columnName] ?? '';

      return aValue < bValue ? -1 * sortOrder : 1 * sortOrder;
    });
  }
}
