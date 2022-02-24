import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// layout component for feature module
import { LayoutComponent } from './layout/layout.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: AboutComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OtherRoutingModule { }
