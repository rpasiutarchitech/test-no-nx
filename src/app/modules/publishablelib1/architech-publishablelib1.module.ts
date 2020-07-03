import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Publishablelib1Container1Component } from './containers/publishablelib1-container1/publishablelib1-container1.component';
import { Publishablelib1Container2Component } from './containers/publishablelib1-container2/publishablelib1-container2.component';
import { Publishablelib1ParentContainerComponent } from './containers/publishablelib1-parent-container/publishablelib1-parent-container.component';
import { Publishablelib1Container3Component } from './containers/publishablelib1-container3/publishablelib1-container3.component';
import { Publishablelib1Container4Component } from './containers/publishablelib1-container4/publishablelib1-container4.component';
import { Publishablelib1Container5Component } from './containers/publishablelib1-container5/publishablelib1-container5.component';
import { Publishablelib1Container6Component } from './containers/publishablelib1-container6/publishablelib1-container6.component';
import { Publishablelib1Container7Component } from './containers/publishablelib1-container7/publishablelib1-container7.component';
import { Publishablelib1Container8Component } from './containers/publishablelib1-container8/publishablelib1-container8.component';
import { Publishablelib1Container9Component } from './containers/publishablelib1-container9/publishablelib1-container9.component';
import { Publishablelib1Container10Component } from './containers/publishablelib1-container10/publishablelib1-container10.component';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';
import { Publishablelib1Component1Component } from './components/publishablelib1-component1/publishablelib1-component1.component';
import {ArchitechSharedLibModule} from '../shared-lib/architech-shared-lib.module';

const routes: Routes = [
  {
    path: '',
    component: Publishablelib1ParentContainerComponent,
    children: [
      {
        path: 'container1',
        component: Publishablelib1Container1Component,
      },
      {
        path: 'container2',
        component: Publishablelib1Container2Component,
      },
      {
        path: 'container3',
        component: Publishablelib1Container3Component,
      },
      {
        path: 'container4',
        component: Publishablelib1Container4Component,
      },
      {
        path: 'container5',
        component: Publishablelib1Container5Component,
      },
      {
        path: 'container6',
        component: Publishablelib1Container6Component,
      },
      {
        path: 'container7',
        component: Publishablelib1Container7Component,
      },
      {
        path: 'container8',
        component: Publishablelib1Container8Component,
      },
      {
        path: 'container9',
        component: Publishablelib1Container9Component,
      },
      {
        path: 'container10',
        component: Publishablelib1Container10Component,
      },
      {
        path: '',
        redirectTo: 'container1',
        pathMatch: 'full'
      },
      {
        path: '**',
        redirectTo: 'container1'
      }
    ]
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes), ArchitechSharedLibModule, MatIconModule, MatDividerModule, MatButtonModule, MatCardModule, MatExpansionModule, MatFormFieldModule, MatInputModule, MatListModule, MatTabsModule],
  declarations: [Publishablelib1Container1Component, Publishablelib1Container2Component, Publishablelib1ParentContainerComponent, Publishablelib1Container3Component, Publishablelib1Container4Component, Publishablelib1Container5Component, Publishablelib1Container6Component, Publishablelib1Container7Component, Publishablelib1Container8Component, Publishablelib1Container9Component, Publishablelib1Container10Component, Publishablelib1Component1Component]
})
export class ArchitechPublishablelib1Module {}
