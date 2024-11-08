import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-etudiant',
  standalone: true,
  imports: [],
  templateUrl: './etudiant.component.html',
  styleUrl: './etudiant.component.css',
})
export class EtudiantComponent {
  @Input() nomEtudiant: String = '';
  @Input() prenomEtudiant: String = '';

  @Input() statutEtudiant: String = 'absent';

  retNomEtudiant() {
    return this.nomEtudiant;
  }

  retPrenomEtudiant() {
    return this.prenomEtudiant;
  }
}
