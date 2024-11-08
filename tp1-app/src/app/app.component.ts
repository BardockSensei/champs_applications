import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EtudiantComponent } from './etudiant/etudiant.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [EtudiantComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Séance n°1';
  description =
    "Prise en main d'Angular, première application, liaisons des données";

  estAuth: Boolean = false;
  etudiants: [{ nom: String; prenom: String; statut: String }];

  constructor() {
    setTimeout(() => {
      this.estAuth = true;
    }, 3000);

    this.etudiants = [{ nom: 'A', prenom: 'Alice', statut: 'absent' }];
    this.etudiants.push({ nom: 'B', prenom: 'Bob', statut: 'absent' });
    this.etudiants.push({ nom: 'C', prenom: 'Charlie', statut: 'absent' });
  }

  rendTousPres() {
    // console.log('APPEL rendTousPres()');
    for (let etudiant of this.etudiants) {
      etudiant.statut = 'présent';
    }
  }

  rendTousAbs() {
    // console.log('APPEL rendTousAbs()');
    for (let etudiant of this.etudiants) {
      etudiant.statut = 'absent';
    }
  }
}
