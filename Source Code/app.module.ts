import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { MustTryComponent } from './recipes/must-try/must-try.component';
import { NoodlesComponent } from './recipes/noodles/noodles.component';
import { VegetablesComponent } from './recipes/vegetables/vegetables.component';
import { DessertsComponent } from './recipes/desserts/desserts.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

import { AgmCoreModule } from '@agm/core';
import { HomeComponent } from './home/home.component';
import { CategoriesComponent } from './recipes/categories/categories.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const appRoutes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'recipes',
    component: CategoriesComponent,
    children: [
      {
        path: 'recipeMustTry',
        component: MustTryComponent
      },
      {
        path: 'recipeNoodles',
        component: NoodlesComponent
      },
      {
        path: 'recipeVegetables',
        component: VegetablesComponent
      },
      {
        path: 'recipeDesserts',
        component: DessertsComponent
      }
    ]
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  { path: 'pageNotFound',
    component: PageNotFoundComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/pageNotFound', pathMatch: 'full' }

];

@NgModule({
  declarations: [
    AppComponent,
    MustTryComponent,
    NoodlesComponent,
    VegetablesComponent,
    DessertsComponent,
    AboutComponent,
    ContactComponent,
    HomeComponent,
    CategoriesComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    RouterModule.forRoot(appRoutes),
    AgmCoreModule.forRoot({
      //'AIzaSyDPIVNd8-xLnTtQPO2gjjIqmdpclDonjaE'
      apiKey: 'AIzaSyDPIVNd8-xLnTtQPO2gjjIqmdpclDonjaE'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
