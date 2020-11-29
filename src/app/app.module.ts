import {BrowserModule} from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {MainComponent} from './system/main/main.component';
import {SystemComponent} from './system/system.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {FormsModule} from '@angular/forms';
import {GenderComponent} from './system/main/gender/gender.component';
import {MenComponent} from './system/main/men/men.component';
import {WomenComponent} from './system/main/women/women.component';
import {QualitiesComponent} from './system/main/qualities/qualities.component';
import {TariffComponent} from './system/main/tariff/tariff.component';
import {ContactsComponent} from './system/main/contacts/contacts.component';
import {GoogleMapsModule} from '@angular/google-maps';
import {FooterComponent} from './system/main/footer/footer.component';
import {HeaderComponent} from './system/main/header/header.component';
import {AboutUsComponent} from './system/main/about-us/about-us.component';
import {ChildrenComponent} from './system/main/children/children.component';
import { CoachComponent } from './system/main/coach/coach.component';
import { FitnessComponent } from './system/main/fitness/fitness.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    SystemComponent,
    GenderComponent,
    MenComponent,
    WomenComponent,
    QualitiesComponent,
    TariffComponent,
    ContactsComponent,
    FooterComponent,
    HeaderComponent,
    AboutUsComponent,
    ChildrenComponent,
    CoachComponent,
    FitnessComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatIconModule,
    MatButtonModule,
    GoogleMapsModule
  ],
  exports: [
    MatButtonModule,
    MatIconModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
