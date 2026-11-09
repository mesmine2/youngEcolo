import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { Statistique } from '../../shared/statistique/statistique';
import { TitreSection } from '../../shared/titre-section/titre-section';

@Component({
  selector: 'app-domaines',
  imports: [RouterLink, MatIconModule, Statistique, TitreSection],
  templateUrl: './domaines.html',
  styleUrl: './domaines.css',
})
export class Domaines {
  stats = [
    { valeur: '3', libelle: "Piliers d'intervention", detail: 'Des axes complémentaires pour la transition écologique.' },
    { valeur: '2 000+', libelle: 'Élèves sensibilisés', detail: 'Écoles primaires & lycées' },
    { valeur: '06', libelle: 'Objectifs de développement durable', detail: "Contribution aux objectifs liés à l'environnement." },
    { valeur: '100%', libelle: 'Engagement environnemental', detail: "Des initiatives en faveur d'un avenir durable." },
  ];

  odd = [
    { n: '01', tag: 'Pauvreté', titre: 'ODD 1 : Éradication de la Pauvreté', texte: "Création d'opportunités économiques via les emplois verts, la valorisation des déchets plastiques et la baisse des dépenses d'énergie grâce au solaire autonome.", indicateur: '+120 micro-revenus verts créés' },
    { n: '04', tag: 'Éducation', titre: 'ODD 4 : Éducation de Qualité & Climat', texte: "Intégration de modules d'alphabétisation climatique dans les programmes extrascolaires et formation continue gratuite aux métiers techniques solaires.", indicateur: '2 000 apprenants certifiés' },
    { n: '07', tag: 'Énergie propre', titre: 'ODD 7 : Énergie Propre & Accessible', texte: "Déploiement du programme EcoSolar fournissant un accès continu à une énergie renouvelable, décarbonée et à coût marginal nul pour les zones desservies.", indicateur: '35 kWc installés en réseau décentré' },
    { n: '11', tag: 'Villes durables', titre: 'ODD 11 : Villes & Communautés Durables', texte: "Assainissement des quartiers urbains de Douala et Yaoundé via WasteConnect, valorisation de la biomasse et réduction des inondations par curage citoyen.", indicateur: '18 tonnes déchets revalorisés' },
    { n: '13', tag: 'Climat', titre: 'ODD 13 : Lutte Contre les Changements Climatiques', texte: "Reboisement d'espèces endémiques dans le Bassin du Congo, surveillance participative du couvert forestier et plaidoyer pour la justice climatique.", indicateur: '12 500 arbres plantés & géo-suivis' },
    { n: '17', tag: 'Partenariats', titre: 'ODD 17 : Partenariats pour les Objectifs', texte: "Coopération multi-acteurs unissant ministères camerounais, mairies décentralisées, instituts de recherche, bailleurs bilatéraux et réseaux étudiants.", indicateur: '14 protocoles d\'accord ratifiés' },
  ];

  oddPilier = [
    { n: 'ODD 1', t: 'Pas de pauvreté' }, { n: 'ODD 4', t: 'Éducation qualité' }, { n: 'ODD 7', t: 'Énergie propre' },
    { n: 'ODD 11', t: 'Villes durables' }, { n: 'ODD 13', t: 'Action climat' }, { n: 'ODD 17', t: 'Partenariats' },
  ];

  methodes = [
    { icone: 'diversity_3', axe: 'Axe 01', titre: 'Intervention Communautaire', texte: "Co-construction avec les chefferies traditionnelles, les comités de village et les regroupements de femmes. Aucune solution n'est imposée de l'extérieur.", points: ['Diagnostic participatif préalable (30 jours de concertation)', 'Gouvernance locale des installations avec comités autonomes', 'Traduction des supports en langues nationales (Douala, Bassa, etc.)'], mesure: 'Adhésion sociale', valeur: '> 94% d\'appropriation' },
    { icone: 'memory', axe: 'Axe 02', titre: 'Low-Tech & Technologie Hybride', texte: "Le meilleur des deux mondes : robustesse mécanique réparable localement couplée au monitoring satellite et à l'analyse prédictive légère.", points: ['Kits photovoltaïques modulaires à pièces interchangeables', "Cartographie des dépotoirs sauvages par traitement d'images smartphone", 'Alertes SMS et réseaux maillés fonctionnant sans connexion 4G continue'], mesure: 'Taux de réparabilité', valeur: '100% faisable in situ' },
    { icone: 'gavel', axe: 'Axe 03', titre: 'Plaidoyer Institutionnel', texte: "Porter la voix de la jeunesse auprès des ministères (MINEPDED, MINEE), des instances de la COMIFAC et des conférences climatiques internationales (COP).", points: ['Publication annuelle du Livre Blanc Jeunesse & Climat Communaux', 'Conseils techniques aux mairies pour leurs Plans Climat Communaux', 'Représentation de la société civile aux sommets régionaux d\'Afrique centrale'], mesure: 'Impact législatif', valeur: '3 réformes influencées' },
  ];
}
