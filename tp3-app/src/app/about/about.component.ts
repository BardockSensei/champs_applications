import { Component } from '@angular/core';
import { ActiviteService } from '../services/activite.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  constructor(public activiteService: ActiviteService) {}
}
