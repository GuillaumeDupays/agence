import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-savoir-faire',
  templateUrl: './savoir-faire.component.html',
  styleUrls: ['./savoir-faire.component.scss']
})
export class SavoirFaireComponent implements OnInit {
  frameworks = [ 'Angular', 'Vue.js <- acquisition en cours', 'React.js <- pour 2021', 'Node.js', 'Strapi'];
  langages = [ 'Javascript/Typescript', 'Html/Css' ];
  competences = [ 'Concevoir et développer une application, un site web', 'Intégrer une maquette graphique', 'Réaliser l\'ensemble de la partie graphique d\'une interface web et mobile' ];
  qualites = [ 'Curiosité', 'Créativité', 'Précision' ];
  savoirEtre = [ 'Sens du service', 'Ecoute active', 'Pédagogie' ];

  constructor() { }

  ngOnInit(): void {
  }
}
