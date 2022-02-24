import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// routing for dashboard module
import { DashboardRoutingModule } from './dashboard-routing.module';

// components
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './home/home.component';
import { TopCardsComponent } from './components/top-cards/top-cards.component';
import { CardComponent } from './components/card/card.component';


@NgModule({
  declarations: [
    LayoutComponent,
    HomeComponent,
    TopCardsComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})

export class DashboardModule { }
