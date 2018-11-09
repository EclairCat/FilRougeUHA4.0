import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProduitListComponent } from './produit-list/produit-list.component';
import { EspaceClientComponent } from './espace-client/espace-client.component';
import { MentionsLegalComponent } from './mentions-legal/mentions-legal.component';
import { PolitiqueConfComponent } from './politique-conf/politique-conf.component';
import { ContactComponent } from './contact/contact.component';
import { SocieteComponent } from './societe/societe.component';
import { FabricationComponent } from './fabrication/fabrication.component';
import { SingleProduitComponent } from './produit-list/single-produit/single-produit.component';
import { NavbarHeaderComponent } from './navbar-header/navbar-header.component';

@NgModule({
  declarations: [
    AppComponent,
    ProduitListComponent,
    EspaceClientComponent,
    MentionsLegalComponent,
    PolitiqueConfComponent,
    ContactComponent,
    SocieteComponent,
    FabricationComponent,
    SingleProduitComponent,
    NavbarHeaderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
