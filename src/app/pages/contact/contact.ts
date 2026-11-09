import { Component, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { TitreSection } from '../../shared/titre-section/titre-section';

@Component({
  selector: 'app-contact',
  imports: [MatIconModule, TitreSection],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  infos = [
    { icone: 'place', etiquette: 'Siège opérationnel', valeur: 'Douala, Cameroun', detail: 'Akwa, derrière Collège De la Salle', pied: 'Lun – Ven : 08h30 – 17h00', pieicone: 'schedule' },
    { icone: 'call', etiquette: 'Lignes directes', valeur: '+237 694 57 90 03', detail: '+237 650 73 53 65 • +237 697 92 85 34', pied: 'Assistance WhatsApp disponible', pieicone: 'chat' },
    { icone: 'mail', etiquette: 'Courriels officiels', valeur: 'info@youngecolo.com', detail: 'eitelmbango@gmail.com', pied: 'Réponse sous 48 heures max', pieicone: 'bolt' },
    { icone: 'public', etiquette: 'Plateforme web', valeur: 'www.youngecolo.com', detail: "Rapports d'impact & documentation téléchargeable", pied: 'Portail citoyen', pieicone: 'arrow_forward' },
  ];

  profils = [
    { icone: 'volunteer_activism', texte: 'Je souhaite devenir bénévole / membre' },
    { icone: 'business', texte: 'Je suis une entreprise / RSE (Partenariat)' },
    { icone: 'school', texte: 'Je représente une école ou université' },
    { icone: 'help_outline', texte: "Demande d'information générale" },
  ];
  profil = signal(0);

  poles = [
    { nom: 'Douala (Cameroun)', role: 'Siège permanent & Pôle RSE' },
    { nom: 'Yaoundé (Cameroun)', role: 'Plaidoyer & Affaires institutionnelles' },
    { nom: 'Limbé (Sud-Ouest)', role: 'Protection côtière & Mangroves' },
    { nom: 'Kinshasa (RDC)', role: 'Antenne Bassin & Réseau Jeunes' },
  ];

  questions = [
    { q: "Comment s'articule le rôle de bénévole chez Young Ecolo ?", r: "Le bénévolat s'organise selon vos compétences et disponibilités : interventions sur le terrain (plantations, nettoyages côtiers, inventaires de faune), missions éducatives en milieu scolaire ou support digital (cartographie SIG, communication, gestion de projet). Une courte session d'orientation accueille chaque nouvelle cohorte." },
    { q: 'Quel est le processus pour signer une convention RSE ?', r: "Après transmission du formulaire de contact, notre pôle Partenariats organise un cadrage sous 5 jours. Nous co-concevons un cahier des charges mesurable (arbres plantés avec suivi géolocalisé, ateliers jeunesse sponsorisés) assorti d'un reporting d'impact auditable conforme aux référentiels ESG." },
    { q: 'Les étudiants peuvent-ils effectuer un stage ou projet de fin d\'études ?', r: "Oui, nous accueillons régulièrement des stagiaires en agroforesterie, énergie solaire, gestion des déchets et sociologie de l'environnement basés à Douala, Yaoundé ou en RDC. Précisez la mention « École ou université » dans le formulaire en joignant l'intitulé de votre cursus." },
    { q: 'Comment sont vérifiés les dons et l\'utilisation des fonds reçus ?', r: "Young Ecolo applique une règle stricte de traçabilité : chaque franc investi est associé à un code de projet consultable en ligne. Notre rapport financier annuel est certifié et mis à la disposition des donateurs particuliers et des bailleurs institutionnels en téléchargement libre." },
  ];

  envoye = signal(false);

  envoyer(evenement: Event) {
    evenement.preventDefault();
    // À relier plus tard à ton API ou à un service d'envoi de mails.
    this.envoye.set(true);
  }
}
