import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// routing for others module
import { OtherRoutingModule } from './other-routing.module';

// components
import { LayoutComponent } from './layout/layout.component';
import { AboutComponent } from './about/about.component';


@NgModule({
  declarations: [
    LayoutComponent,
    AboutComponent
  ],
  imports: [
    CommonModule,
    OtherRoutingModule
  ]
})

export class OtherModule { }
