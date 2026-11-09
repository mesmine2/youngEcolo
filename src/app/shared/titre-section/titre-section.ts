import { Component, input } from '@angular/core';

@Component({
  selector: 'app-titre-section',
  templateUrl: './titre-section.html',
  styleUrl: './titre-section.css',
})
export class TitreSection {
  etiquette = input('');
  titre = input.required<string>();
  soustitre = input('');
  centre = input(true);
  or = input(false);
}
