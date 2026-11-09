import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', title: 'Young Ecolo | Accueil', loadComponent: () => import('./pages/accueil/accueil').then(m => m.Accueil) },
  { path: 'qui-sommes-nous', title: 'Qui sommes-nous | Young Ecolo', loadComponent: () => import('./pages/qui-sommes-nous/qui-sommes-nous').then(m => m.QuiSommesNous) },
  { path: 'domaines', title: 'Nos Domaines | Young Ecolo', loadComponent: () => import('./pages/domaines/domaines').then(m => m.Domaines) },
  { path: 'projets', title: 'Projets & Actions | Young Ecolo', loadComponent: () => import('./pages/projets/projets').then(m => m.Projets) },
  { path: 'communaute', title: 'Communauté | Young Ecolo', loadComponent: () => import('./pages/communaute/communaute').then(m => m.Communaute) },
  { path: 'contact', title: 'Contact | Young Ecolo', loadComponent: () => import('./pages/contact/contact').then(m => m.Contact) },
  { path: '**', redirectTo: '' },
];
