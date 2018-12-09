import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routes';

import { MaterialModule } from './shared/material.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { VisitComponent } from './visit/visit.component';
import { ContactComponent } from './contact/contact.component';
import { GiveComponent } from './give/give.component';
import { LiveComponent } from './live/live.component';
import { WhoWeAreComponent } from './about/who-we-are/who-we-are.component';
import { VisionComponent } from './about/vision/vision.component';
import { LeadershipComponent } from './about/leadership/leadership.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    VisitComponent,
    ContactComponent,
    GiveComponent,
    LiveComponent,
    WhoWeAreComponent,
    VisionComponent,
    LeadershipComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
