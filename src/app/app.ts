import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Entete } from './shared/entete/entete';
import { PiedPage } from './shared/pied-page/pied-page';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Entete, PiedPage],
  templateUrl: './app.html',
})
export class App {}
