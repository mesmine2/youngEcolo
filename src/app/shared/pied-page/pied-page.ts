import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-pied-page',
  imports: [RouterLink, MatIconModule],
  templateUrl: './pied-page.html',
  styleUrl: './pied-page.css',
})
export class PiedPage {
  annee = new Date().getFullYear();
}
