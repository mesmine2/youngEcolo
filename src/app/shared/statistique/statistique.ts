import { Component, input } from '@angular/core';

@Component({
  selector: 'app-statistique',
  templateUrl: './statistique.html',
  styleUrl: './statistique.css',
})
export class Statistique {
  valeur = input.required<string>();
  libelle = input.required<string>();
  couleur = input<'vert' | 'or'>('vert');
  detail = input('');
}
