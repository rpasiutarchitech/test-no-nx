import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Lib13Container1Component } from './containers/lib13-container1/lib13-container1.component';
import { Lib13Container2Component } from './containers/lib13-container2/lib13-container2.component';
import { Lib13ParentContainerComponent } from './containers/lib13-parent-container/lib13-parent-container.component';
import { Lib13Container3Component } from './containers/lib13-container3/lib13-container3.component';
import { Lib13Container4Component } from './containers/lib13-container4/lib13-container4.component';
import { Lib13Container5Component } from './containers/lib13-container5/lib13-container5.component';
import { Lib13Container6Component } from './containers/lib13-container6/lib13-container6.component';
import { Lib13Container7Component } from './containers/lib13-container7/lib13-container7.component';
import { Lib13Container8Component } from './containers/lib13-container8/lib13-container8.component';
import { Lib13Container9Component } from './containers/lib13-container9/lib13-container9.component';
import { Lib13Container10Component } from './containers/lib13-container10/lib13-container10.component';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';
import { Lib13Component1Component } from './components/lib13-component1/lib13-component1.component';
import {ArchitechSharedLibModule} from '../shared-lib/architech-shared-lib.module';

const routes: Routes = [
  {
    path: '',
    component: Lib13ParentContainerComponent,
    children: [
      {
        path: 'container1',
        component: Lib13Container1Component,
      },
      {
        path: 'container2',
        component: Lib13Container2Component,
      },
      {
        path: 'container3',
        component: Lib13Container3Component,
      },
      {
        path: 'container4',
        component: Lib13Container4Component,
      },
      {
        path: 'container5',
        component: Lib13Container5Component,
      },
      {
        path: 'container6',
        component: Lib13Container6Component,
      },
      {
        path: 'container7',
        component: Lib13Container7Component,
      },
      {
        path: 'container8',
        component: Lib13Container8Component,
      },
      {
        path: 'container9',
        component: Lib13Container9Component,
      },
      {
        path: 'container10',
        component: Lib13Container10Component,
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
  declarations: [Lib13Container1Component, Lib13Container2Component, Lib13ParentContainerComponent, Lib13Container3Component, Lib13Container4Component, Lib13Container5Component, Lib13Container6Component, Lib13Container7Component, Lib13Container8Component, Lib13Container9Component, Lib13Container10Component, Lib13Component1Component]
})
export class ArchitechLib13Module {}
