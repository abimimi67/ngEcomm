import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FrontendComponent } from './components/frontend/frontend.component';
import { BackendComponent } from './components/backend/backend.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { TeaserComponent } from './components/teaser/teaser.component';
import { ProduitsALaUneComponent } from './components/produits-ala-une/produits-ala-une.component';
import { PromotionComponent } from './components/promotion/promotion.component';

@NgModule({
  declarations: [
    AppComponent,
    FrontendComponent,
    BackendComponent,
    NavbarComponent,
    FooterComponent,
    HeaderComponent,
    TeaserComponent,
    ProduitsALaUneComponent,
    PromotionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
