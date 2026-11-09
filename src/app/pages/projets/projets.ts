import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-projets',
  imports: [RouterLink, MatIconModule],
  templateUrl: './projets.html',
  styleUrl: './projets.css',
})
export class Projets {
  projets = [
    { id: 'reboisement', icone: 'forest', categorie: 'Biodiversité', titre: 'Campagnes de reboisement', image: 'images/reboisement.jpg',
      texte: "Avec One Forest Youth Initiative et la Fondation Orange Cameroun, notre équipe a participé à plusieurs campagnes de reboisement en Afrique centrale : à Douala et sur le site de l'INPP de Malaku, dans la Zone Spéciale Économique à 80 km de Kinshasa (RDC).",
      points: ['Plus de 1 000 arbres plantés dans les zones vulnérables', "Des centaines de jeunes sensibilisés à la préservation des forêts", "Ateliers éducatifs sur la biodiversité et l'économie verte", "Actions concrètes pour renforcer l'engagement climatique communautaire"] },
    { id: 'dechets', icone: 'recycling', categorie: 'Propreté urbaine', titre: 'Collecte de déchets et nettoyage', image: 'images/collecte.jpg',
      texte: "Aux côtés de Malta Guinness Cameroon et de River Clean up Cameroun, nos bénévoles ont mobilisé jeunes, riverains et commerçants à Douala, Yaoundé et Limbé pour réduire l'impact des déchets plastiques dans les quartiers.",
      points: ['Plus de 2 tonnes de déchets collectées en quelques mois', 'Sessions de sensibilisation sur le tri et le recyclage', 'Alternatives durables au plastique à usage unique'] },
    { id: 'wouri', icone: 'water_drop', categorie: 'Fleuves & océans', titre: 'Save the Wouri River : End plastic pollution', image: 'images/wouri.jpg',
      texte: "Campagnes de dépollution menées à Douala et dans ses environs pour protéger le fleuve Wouri, avec la mobilisation des jeunes, des riverains et des commerçants autour d'une même cause.",
      points: ['Opérations communautaires de collecte des plastiques', 'Promotion de l\'économie circulaire locale', 'Une transition écologique juste et inclusive'] },
    { id: 'forums', icone: 'forum', categorie: 'Plaidoyer', titre: 'Forums nationaux et internationaux', image: 'images/forums.jpg',
      texte: "Nos jeunes délégués portent la voix des communautés locales dans les forums sur l'environnement, le climat et le développement durable, pour influencer les politiques climatiques et co-construire des solutions à l'échelle globale.",
      points: ['1ère édition du Forum de la jeunesse pour les Forêts d\'Afrique Centrale et RdP20 du PFBC (RDC)', 'Séminaire FSPI Transition Écologique (Le Boukarou, Je m\'engage pour l\'Afrique)', '2ème One Forest Youth Forum (OFYF) au Gabon', 'LCOY Cameroun 2025'] },
    { id: 'musee', icone: 'museum', categorie: 'Sensibilisation', titre: 'Musée Éphémère Écologique à Orange Cameroun', image: 'images/musee.jpg',
      texte: "Du 4 au 19 avril 2024, Orange Cameroun a inauguré un musée éphémère écologique à Douala Makèpe, dans le cadre de la fête du personnel. Young Ecolo y a présenté ses solutions pour la gestion durable des ressources et la sensibilisation écologique.",
      points: ['Plateforme d\'échange et d\'apprentissage pour les visiteurs', 'Mise en avant des technologies vertes et des initiatives locales'] },
    { id: 'ecosolar', icone: 'solar_power', categorie: 'Énergie renouvelable', titre: 'EcoSolar : énergie solaire communautaire', image: 'images/ecosolar.jpg',
      texte: "Plateforme numérique (mobile et web) pour découvrir, acheter et installer des systèmes solaires adaptés aux besoins des ménages et des particuliers au Cameroun. Elle vise l'accès à une électricité fiable et durable, notamment en zones rurales ou périurbaines.",
      points: ['Panneaux solaires, batteries, pompes solaires et accessoires', 'Suivi en temps réel de la consommation d\'énergie', 'Options de financement adaptées', 'Formations gratuites à l\'installation et à la maintenance'] },
    { id: 'greenjobs', icone: 'work', categorie: 'Emploi des jeunes', titre: 'Green Jobs : promotion des emplois verts', image: 'images/greenjobs.jpg',
      texte: "Par des campagnes de sensibilisation, des formations et un réseau actif sur WhatsApp, Telegram et YouTube, Green Jobs connecte les jeunes aux métiers durables : environnement, énergies renouvelables, gestion des déchets, agriculture durable.",
      points: ["Faire émerger une nouvelle génération de professionnels engagés pour la planète"] },
    { id: 'wasteconnect', icone: 'delete_outline', categorie: 'Gestion des déchets', titre: 'WasteConnect : gestion intelligente des déchets', image: 'images/wasteconnect.jpg',
      texte: "Une application mobile qui géolocalise en temps réel les poubelles connectées et les décharges sauvages grâce à des captures d'images. Autorités locales, entreprises de collecte et citoyens visualisent l'état des déchets pour planifier les itinéraires de collecte.",
      points: ['Signalement citoyen des zones insalubres ou mal desservies', 'Optimisation des ressources logistiques', 'Réduction des délais d\'intervention'] },
    { id: 'ecolearners', icone: 'school', categorie: 'Éducation', titre: 'EcoLearners : éducation environnementale', image: 'images/ecolearners.jpg',
      texte: "Initiative qui intègre les principes de durabilité et d'écologie dans l'enseignement primaire au Cameroun. Nous comptons nous déployer dans plus de 25 écoles publiques et privées de Douala et Yaoundé pour former plus de 2 000 élèves.",
      points: ['Cours sur le changement climatique, la biodiversité et le recyclage', 'Activités manuelles : jardinage et création d\'espaces verts', 'Excursions et projets communautaires'] },
  ];
}
