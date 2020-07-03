import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Lib5Container1Component } from './containers/lib5-container1/lib5-container1.component';
import { Lib5Container2Component } from './containers/lib5-container2/lib5-container2.component';
import { Lib5ParentContainerComponent } from './containers/lib5-parent-container/lib5-parent-container.component';
import { Lib5Container3Component } from './containers/lib5-container3/lib5-container3.component';
import { Lib5Container4Component } from './containers/lib5-container4/lib5-container4.component';
import { Lib5Container5Component } from './containers/lib5-container5/lib5-container5.component';
import { Lib5Container6Component } from './containers/lib5-container6/lib5-container6.component';
import { Lib5Container7Component } from './containers/lib5-container7/lib5-container7.component';
import { Lib5Container8Component } from './containers/lib5-container8/lib5-container8.component';
import { Lib5Container9Component } from './containers/lib5-container9/lib5-container9.component';
import { Lib5Container10Component } from './containers/lib5-container10/lib5-container10.component';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';
import { Lib5Component1Component } from './components/lib5-component1/lib5-component1.component';
import {ArchitechSharedLibModule} from '../shared-lib/architech-shared-lib.module';

const routes: Routes = [
  {
    path: '',
    component: Lib5ParentContainerComponent,
    children: [
      {
        path: 'container1',
        component: Lib5Container1Component,
      },
      {
        path: 'container2',
        component: Lib5Container2Component,
      },
      {
        path: 'container3',
        component: Lib5Container3Component,
      },
      {
        path: 'container4',
        component: Lib5Container4Component,
      },
      {
        path: 'container5',
        component: Lib5Container5Component,
      },
      {
        path: 'container6',
        component: Lib5Container6Component,
      },
      {
        path: 'container7',
        component: Lib5Container7Component,
      },
      {
        path: 'container8',
        component: Lib5Container8Component,
      },
      {
        path: 'container9',
        component: Lib5Container9Component,
      },
      {
        path: 'container10',
        component: Lib5Container10Component,
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
  declarations: [Lib5Container1Component, Lib5Container2Component, Lib5ParentContainerComponent, Lib5Container3Component, Lib5Container4Component, Lib5Container5Component, Lib5Container6Component, Lib5Container7Component, Lib5Container8Component, Lib5Container9Component, Lib5Container10Component, Lib5Component1Component]
})
export class ArchitechLib5Module {}
