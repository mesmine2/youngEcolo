import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { Statistique } from '../../shared/statistique/statistique';
import { TitreSection } from '../../shared/titre-section/titre-section';

@Component({
  selector: 'app-accueil',
  imports: [RouterLink, MatIconModule, Statistique, TitreSection],
  templateUrl: './accueil.html',
  styleUrl: './accueil.css',
})
export class Accueil {
  stats = [
    { valeur: '1000+', libelle: 'Arbres plantés dans les zones vulnérables' },
    { valeur: '2+ T', libelle: 'Déchets plastiques collectés' },
    { valeur: '2 000+', libelle: 'Élèves sensibilisés & formés' },
    { valeur: '3+', libelle: "Pays d'Afrique centrale mobilisés" },
    { valeur: '25+', libelle: 'Écoles partenaires ciblées' },
  ];

  engagements = [
    { icone: 'flag', titre: 'Notre Mission', texte: "Promouvoir des actions climatiques concrètes à travers le reboisement participatif, la gestion circulaire des déchets, l'accès à l'énergie solaire et l'éducation environnementale de la jeunesse." },
    { icone: 'visibility', titre: 'Notre Vision', texte: "Bâtir une Afrique résiliente et souveraine où chaque jeune est un acteur clé de la préservation de son environnement et du développement durable de sa communauté." },
    { icone: 'format_quote', titre: 'Notre Engagement', texte: '« Agissons ensemble pour un monde plus durable. »' },
  ];

  partenaires = [
    { icone: 'museum', type: 'Partenariat culture & RSE', nom: 'Orange Cameroun', texte: "Partenaire officiel du Musée Éphémère Écologique pour la sensibilisation artistique au climat." },
    { icone: 'forest', type: 'Bassin du Congo', nom: 'OFYF Global', texte: "Membre du One Forest Youth Forum représentant la jeunesse des 3 grands bassins forestiers tropicaux." },
    { icone: 'public', type: 'Gouvernance régionale', nom: 'PFBC Bassin du Congo', texte: "Participation active aux sessions de la Réunion des Parties (RdP20 Kinshasa) sur la conservation." },
    { icone: 'recycling', type: 'Économie circulaire', nom: 'Malta Guinness CMR', texte: "Co-organisation d'opérations citoyennes de propreté et valorisation des plastiques urbains." },
    { icone: 'waves', type: 'Dépollution fluviale', nom: 'River Clean Up CMR', texte: "Intervention coordonnée de l'estuaire du Wouri et des mangroves littorales." },
  ];

  actions = [
    { badge: '1 000+ Arbres', axe: 'Axe 01 • Biodiversité', titre: 'Reboisement & Forêts', image: 'images/reboisement.jpg', texte: "Restauration des écosystèmes dégradés, protection des mangroves du Wouri et création de pépinières communautaires gérées par des jeunes." },
    { badge: '2+ Tonnes collectées', axe: 'Axe 02 • Océans & Fleuves', titre: 'Save the Wouri River', image: 'images/wouri.jpg', texte: "Campagnes massives de dépollution fluviale, installation de filets d'interception et recyclage local des plastiques récupérés en pavés écologiques." },
    { badge: 'Énergie propre', axe: 'Axe 03 • Énergie renouvelable', titre: 'Projet EcoSolar', image: 'images/ecosolar.jpg', texte: "Électrification solaire décentralisée des centres scolaires ruraux et formation pratique des étudiants aux métiers de l'énergie photovoltaïque." },
    { badge: 'Tech for Good', axe: 'Axe 04 • Green Tech', titre: 'WasteConnect', image: 'images/wasteconnect.jpg', texte: "Plateforme mobile géolocalisée reliant directement les ménages, éco-collecteurs et transformateurs pour optimiser la collecte sélective urbaine." },
  ];

  montants = [
    { valeur: 5000, texte: '5 000 F' },
    { valeur: 10000, texte: '10 000 F' },
    { valeur: 25000, texte: '25 000 F' },
  ];
  moyens = ['Orange Money', 'MTN MoMo', 'Visa / MasterCard'];

  montant = signal(10000);
  frequence = signal<'ponctuel' | 'mensuel'>('ponctuel');

  saisirMontant(evenement: Event) {
    const champ = evenement.target as HTMLInputElement;
    this.montant.set(Number(champ.value) || 0);
  }
}
