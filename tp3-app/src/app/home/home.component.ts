import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {
  style,
  transition,
  trigger,
  animate,
  keyframes,
  query,
  stagger,
} from '@angular/animations';
import { Router } from '@angular/router';
import { ActiviteService } from '../services/activite.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  animations: [
    trigger('animobjectifs', [
      transition('*=>*', [
        query(':enter', style({ opacity: 0 }), { optional: true }),
        query(
          ':enter',
          stagger('100ms', [
            animate(
              '.6s ease-in',
              keyframes([
                style({
                  opacity: 0,
                  transform: 'translateY(-75%)',
                  offset: 0,
                }),
                style({
                  opacity: 0.5,
                  transform: 'translateY(35px)',
                  offset: 0.3,
                }),
                style({
                  opacity: 1,
                  transform: 'translateY(0)',
                  offset: 1,
                }),
              ])
            ),
          ]),
          { optional: true }
        ),
      ]),
    ]),
  ],
})
export class HomeComponent {
  nbItems: number = 4;
  btnText: string = 'Ajouter un élément';
  objectifText: string = '';

  constructor(
    public activiteService: ActiviteService,
    private monRouteur: Router
  ) {}

  ngOnInit() {
    this.nbItems = this.activiteService.objectifs.length;
  }

  ajoutItem() {
    this.activiteService.objectifs.push(this.objectifText);
    this.nbItems++;
    setTimeout(() => {
      this.monRouteur.navigate(['about']);
    }, 1000);
  }

  getAnimationClass() {
    if (this.objectifText == '') {
      return 'btn';
    } else {
      return 'btnok';
    }
  }

  showActivite(pId: number) {
    this.monRouteur.navigate(['consultAct/' + pId]);
  }
}
