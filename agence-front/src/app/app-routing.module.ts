import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {SavoirFaireComponent} from './savoir-faire/savoir-faire.component';
import {ContactComponent} from './contact/contact.component';
import {BioComponent} from './bio/bio.component';
import {PixelComponent} from './pixel/pixel.component';
import {AdminComponent} from './admin/admin.component';

const route: Routes = [
  { path: '', component: BioComponent },
  { path: 'bio', component: BioComponent },
  { path: 'savoir-faire', component: SavoirFaireComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'adminBlob', component: AdminComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(route)
  ]
})
export class AppRoutingModule { }
