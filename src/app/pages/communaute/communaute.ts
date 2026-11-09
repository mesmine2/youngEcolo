import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { TitreSection } from '../../shared/titre-section/titre-section';

@Component({
  selector: 'app-communaute',
  imports: [RouterLink, MatIconModule, TitreSection],
  templateUrl: './communaute.html',
  styleUrl: './communaute.css',
})
export class Communaute {
  chiffres = [
    { icone: 'visibility', canal: 'Mensuel', valeur: '+5K', titre: 'Visiteurs & Lecteurs', texte: "Consultations du portail d'éducation climatique et analyses écologiques régionales." },
    { icone: 'chat', canal: 'WhatsApp', valeur: '+2K', titre: 'Membres Actifs', texte: "Chaîne officielle, alertes de veille et réseau instantané d'entraide entre pairs." },
    { icone: 'hub', canal: 'Professionnels', valeur: '+4K', titre: 'Abonnés LinkedIn', texte: 'Experts environnementaux, bailleurs de fonds, jeunes diplômés et institutions.' },
    { icone: 'tag', canal: 'Plaidoyer', valeur: '+1K', titre: 'Abonnés Compte X', texte: 'Campagnes de plaidoyer direct, relais des sommets COP et veille institutionnelle.' },
    { icone: 'groups', canal: 'Grand public', valeur: '+2K', titre: 'Communauté Facebook', texte: 'Mobilisations locales citoyennes, retransmissions en direct et ateliers ouverts.' },
  ];

  canaux = [
    { icone: 'notifications', type: 'Diffusion 1-way', titre: 'Chaîne WhatsApp Officielle', texte: "Le canal prioritaire pour recevoir nos appels de reboisement, publications officielles, opportunités de financements verts et communiqués d'urgence écologique.", note: 'Mises à jour quotidiennes de terrain', bouton: "S'abonner à la chaîne", lien: 'https://whatsapp.com/channel/0029VbAWu70G3R3evVpGba3l', plein: true },
    { icone: 'forum', type: 'Échange ouvert', titre: "Communauté d'Entraide Verte", texte: "Espace collaboratif dynamique pour poser vos questions techniques, partager des opportunités de stages écologiques et monter des actions locales.", note: 'Mentorat entre pairs & entraide', bouton: 'Intégrer le groupe', lien: 'https://chat.whatsapp.com/K1RJfOr4q2l3L09gIaKtOS', plein: false },
    { icone: 'work', type: 'Pluridisciplinaire', titre: 'LinkedIn Pro & Climat', texte: "Nos notes de synthèse stratégique, analyses de politiques publiques environnementales et valorisation de l'expertise de nos jeunes consultants écologues.", note: 'Réseau de 4 000+ décideurs', bouton: 'Rejoindre le réseau Pro', lien: 'https://www.linkedin.com/company/young-ecolo/', plein: false },
    { icone: 'campaign', type: 'Sensibilisation', titre: 'Facebook Live & Débats', texte: "Reportages photo et vidéos en direct de nos nettoyages de berges, sensibilisations dans les lycées et célébrations des journées mondiales de la Terre.", note: 'Albums de terrain hebdomadaires', bouton: 'Suivre la page Facebook', lien: 'https://www.facebook.com/Y0ungEcol0', plein: false },
    { icone: 'tag', type: 'Interpellation', titre: 'X (ex-Twitter) Plaidoyer', texte: "Mobilisation citoyenne ciblée, interpellations directes des institutions climatiques et couverture en direct des grands sommets multilatéraux.", note: 'Veille stratégique 24/7', bouton: 'Rejoindre sur X', lien: 'https://x.com/YoungEcolo', plein: false },
  ];

  poles = [
    { icone: 'apartment', titre: 'Pôle Douala & Littoral', texte: "Focus assainissement du Wouri, mangroves côtières et valorisation des déchets plastiques marchands." },
    { icone: 'school', titre: 'Pôle Yaoundé & Centre', texte: "Clubs écologiques en milieu universitaire, plaidoyer auprès des ministères et reboisement des collines." },
    { icone: 'water_drop', titre: 'Pôle Limbé & Sud-Ouest', texte: "Protection des récifs volcaniques, restauration des plages et éco-tourisme communautaire durable." },
  ];

  temoignages = [
    { texte: "« J'ai rejoint Young Ecolo comme simple bénévole de nettoyage à Akwa. Grâce aux formations de terrain, j'ai fondé un atelier de surcyclage de plastiques qui emploie aujourd'hui 4 jeunes de mon quartier. »", nom: 'Marcelle Ndoumbe', role: 'Entrepreneure Verte • Douala', initiales: 'MN' },
    { texte: "« Le canal WhatsApp et la communauté LinkedIn m'ont permis de connecter mes travaux universitaires de biologie avec les bailleurs. Young Ecolo nous donne une légitimité hors filtre. »", nom: 'Cédric Kamga', role: 'Éco-Délégué Campus Yaoundé I', initiales: 'CK' },
    { texte: "« À Limbé, nous avons mobilisé plus de 300 personnes pour sécuriser la pointe des tortues marines et stopper le rejet des sachets. Cette synergie n'existe nulle part ailleurs dans la sous-région. »", nom: 'Eunice Ashu', role: 'Ambassadrice Littoral • Limbé', initiales: 'EA' },
  ];

  choix = [
    { nom: 'Terrain & Salubrité', detail: 'WasteConnect, arbres' },
    { nom: 'Énergie & Tech', detail: 'EcoSolar, cartographie' },
    { nom: 'Com & Plaidoyer', detail: 'Réseaux, plaidoyer COP' },
  ];

  questions = [
    { q: 'Faut-il avoir des compétences scientifiques préalables ?', r: "Non. Chaque bénévole suit une courte session d'orientation. Vos compétences en communication, logistique, design ou numérique sont tout aussi utiles que celles d'un écologue." },
    { q: "Quel est le temps d'engagement hebdomadaire attendu ?", r: "Entre 3 et 5 heures par semaine en moyenne, avec une action de terrain mensuelle. Vous ajustez selon votre emploi du temps." },
    { q: 'Y a-t-il une attestation de bénévolat délivrée ?', r: "Oui. Une attestation d'engagement est remise à la fin de chaque cohorte aux bénévoles qui ont rempli leur parcours." },
  ];

  ouverte = signal<number | null>(0);
  envoye = signal(false);

  basculer(i: number) {
    this.ouverte.set(this.ouverte() === i ? null : i);
  }

  envoyer(evenement: Event) {
    evenement.preventDefault();
    // À relier plus tard à ton API ou à un service d'envoi de mails.
    this.envoye.set(true);
  }
}
