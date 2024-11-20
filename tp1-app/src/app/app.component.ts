import { Component, Input } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterOutlet } from "@angular/router";
import { EtudiantComponent } from "./etudiant/etudiant.component";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [EtudiantComponent, FormsModule],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
})
export class AppComponent {
  title = "Séance n°1, n°2, n°3";
  description =
    "Prise en main d'Angular, première application, gestions et liaisons des données dynamiques et structures de documents";

  estAuth: Boolean = false;
  etudiants: [{ nom: String; prenom: String; statut: String; commentaire: String }];

  commentaireSeance: String = "";

  constructor() {
    setTimeout(() => {
      this.estAuth = true;
    }, 3000);

    this.etudiants = [{ nom: "A", prenom: "Alice", statut: "absent", commentaire: this.commentaireSeance }];
    this.etudiants.push({ nom: "B", prenom: "Bob", statut: "présent", commentaire: this.commentaireSeance });
    this.etudiants.push({ nom: "C", prenom: "Charlie", statut: "absent", commentaire: this.commentaireSeance });
    this.etudiants.push({ nom: "D", prenom: "David", statut: "absent", commentaire: this.commentaireSeance });
    this.etudiants.push({ nom: "E", prenom: "Eve", statut: "présent", commentaire: this.commentaireSeance });
  }

  rendTousPres() {
    for (let etudiant of this.etudiants) {
      etudiant.statut = "présent";
    }
  }

  rendTousAbs() {
    for (let etudiant of this.etudiants) {
      etudiant.statut = "absent";
    }
  }
}
