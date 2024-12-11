import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ActiviteService } from '../services/activite.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-consult-activite',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './consult-activite.component.html',
  styleUrl: './consult-activite.component.scss',
})
export class ConsultActiviteComponent {
  monParam: number;
  monParam2: string;
  isEdit: boolean = false;
  inputText: string = '';

  constructor(
    private monRouteur: Router,
    private routes: ActivatedRoute,
    public activiteService: ActiviteService
  ) {
    this.monParam = routes.snapshot.params['param'];
    this.monParam2 = routes.snapshot.params['param2'];
  }

  supprimeElem() {
    this.activiteService.removeItem(this.monParam);
    this.monRouteur.navigate(['']);
  }

  retour() {
    this.monRouteur.navigate(['']);
  }

  modifierElem() {
    if (this.isEdit) {
      this.activiteService.objectifs[this.monParam] = this.inputText;
    }
    this.isEdit = !this.isEdit;
  }
}
