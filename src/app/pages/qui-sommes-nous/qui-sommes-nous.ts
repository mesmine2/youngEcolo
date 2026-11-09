import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { TitreSection } from '../../shared/titre-section/titre-section';

@Component({
  selector: 'app-qui-sommes-nous',
  imports: [RouterLink, MatIconModule, TitreSection],
  templateUrl: './qui-sommes-nous.html',
  styleUrl: './qui-sommes-nous.css',
})
export class QuiSommesNous {
  valeurs = [
    { icone: 'public', titre: 'La conscience environnementale', texte: "Nous sommes conscients des enjeux environnementaux et de l'importance de préserver la planète pour les générations futures : changement climatique, perte de biodiversité, pollution et épuisement des ressources." },
    { icone: 'groups', titre: "L'esprit d'équipe", texte: "Nos collaborateurs sont le secret de notre réussite. Nous créons un environnement où chacun exprime le meilleur de lui-même, partage ses idées et travaille avec les autres." },
    { icone: 'lightbulb', titre: "L'innovation verte", texte: "Nous cherchons et mettons en œuvre de nouvelles idées et des solutions innovantes pour répondre aux besoins des communautés." },
    { icone: 'handshake', titre: "L'intégrité", texte: "Le respect de toutes les parties prenantes, sans distinction de race, de sexe ou de croyance, est à la base de toutes nos relations." },
    { icone: 'menu_book', titre: "L'éducation et la sensibilisation", texte: "Nous sommes ouverts à l'apprentissage continu, nous nous informons sur les problèmes environnementaux et nous diffusons des connaissances sur la durabilité." },
  ];

  objectifs = [
    'Sensibiliser les jeunes et les communautés aux enjeux environnementaux et climatiques.',
    'Promouvoir les énergies renouvelables et les pratiques écoresponsables.',
    "Encourager la participation citoyenne à travers des campagnes de reboisement, de gestion des déchets et d'éducation écologique.",
    "Renforcer les capacités des jeunes en matière d'écologie, de plaidoyer climatique et d'initiatives vertes.",
    "Contribuer à l'atteinte des Objectifs de Développement Durable (ODD) par des actions locales concrètes et inclusives.",
    "Favoriser l'innovation verte et l'entrepreneuriat écologique chez les jeunes.",
  ];

  equipe = [
    { nom: 'Eitel MBANGO', role: 'CEO & Co-fondateur, Tech Entrepreneur' },
    { nom: 'Esther MBANGO', role: 'Co-fondatrice, Project Manager' },
    { nom: 'Marcial KENGNE', role: 'Project Manager Assistant' },
    { nom: 'Emerick KEMMEGNE', role: 'Mobile Developer' },
    { nom: 'Wilfred NGOUATEU', role: 'Backend Developer, UI/UX Designer' },
    { nom: 'Kely PEYIANI', role: 'Digital Communications Manager' },
    { nom: 'Jordan DEBAMI', role: 'Backend Developer, Project Manager Assistant' },
    { nom: 'Zara LOKSALA', role: 'Climate Change Activist, Ambassadrice' },
    { nom: 'Hon. Priscillia YANKAM', role: 'Jeune députée, Social Activist, Ambassadrice' },
    { nom: 'Keurtis DJOUKONG', role: 'Ambassadeur' },
  ];

  partenaires = [
    { type: 'Entreprises privées et parapubliques', noms: ['Orange Digital Center', 'UBA', 'Everwell Cables', 'Yemba', 'CTD Group', 'TouchPoint by InTouch', 'Coursera', 'Binance', 'Axe Digital', 'Sidra Chain'] },
    { type: 'Organisations internationales', noms: ['Youth Conservation', 'UICN', 'AFD (Agence Française de Développement)'] },
    { type: 'ONG et associations', noms: ["Je m'engage pour l'Afrique", 'Le Boukarou', 'One Forest', 'River Cleanup Cameroon', 'Liquid Trees', 'Binti wa Congo', 'Fondation Orange'] },
  ];

  initiales(nom: string) {
    return nom.replace('Hon. ', '').split(' ').map(m => m[0]).slice(0, 2).join('');
  }
}
