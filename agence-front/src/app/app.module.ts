import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import {RouterModule} from '@angular/router';
import { SavoirFaireComponent } from './savoir-faire/savoir-faire.component';
import { ContactComponent } from './contact/contact.component';
import {AppRoutingModule} from './app-routing.module';
import { RencontreComponent } from './rencontre/rencontre.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { BurgerComponent } from './burger/burger.component';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { BioComponent } from './bio/bio.component';
import { AdminComponent } from './admin/admin.component';
import { PixelComponent } from './pixel/pixel.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    SavoirFaireComponent,
    ContactComponent,
    RencontreComponent,
    SidenavComponent,
    BurgerComponent,
    BioComponent,
    AdminComponent,
    PixelComponent
  ],
    imports: [
        BrowserModule,
        RouterModule,
        AppRoutingModule,
        ReactiveFormsModule,
        HttpClientModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
