import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-entete',
  imports: [RouterLink, RouterLinkActive, MatIconModule],
  templateUrl: './entete.html',
  styleUrl: './entete.css',
})
export class Entete {
  ouvert = signal(false);
  liens = [
    { nom: 'Accueil', chemin: '/' },
    { nom: 'Qui sommes-nous', chemin: '/qui-sommes-nous' },
    { nom: 'Nos Domaines', chemin: '/domaines' },
    { nom: 'Projets & Actions', chemin: '/projets' },
    { nom: 'Communauté', chemin: '/communaute' },
    { nom: 'Contact', chemin: '/contact' },
  ];
}
