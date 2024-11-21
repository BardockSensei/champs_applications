import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-etudiant",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./etudiant.component.html",
  styleUrl: "./etudiant.component.css",
})
export class EtudiantComponent {
  @Input() nomEtudiant: String = "";
  @Input() prenomEtudiant: String = "";
  @Input() statutEtudiant: String = "absent";
  @Input() commentaire: String = "...";
  @Input() derniereModif: Date = new Date();

  retNomEtudiant() {
    return this.nomEtudiant;
  }

  retPrenomEtudiant() {
    return this.prenomEtudiant;
  }

  estAbsent() {
    return this.statutEtudiant == "absent";
  }

  getColorEtu() {
    return this.statutEtudiant == "absent" ? "#FF0000" : "#000000";
  }

  getClassEtu() {
    return this.statutEtudiant == "absent" ? "list-group-item-danger" : "list-group-item-success";
  }

  majStatut(nouveauStatut: String) {
    this.statutEtudiant = nouveauStatut;
    this.derniereModif = new Date();
  }
}
