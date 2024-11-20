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

  getColorEtu() {
    return this.statutEtudiant == "absent" ? "#FF0000" : "#000000";
  }

  estPresent() {
    return !(this.statutEtudiant == "absent");
  }
}
