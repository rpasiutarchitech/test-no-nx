import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Lib7Container1Component } from './containers/lib7-container1/lib7-container1.component';
import { Lib7Container2Component } from './containers/lib7-container2/lib7-container2.component';
import { Lib7ParentContainerComponent } from './containers/lib7-parent-container/lib7-parent-container.component';
import { Lib7Container3Component } from './containers/lib7-container3/lib7-container3.component';
import { Lib7Container4Component } from './containers/lib7-container4/lib7-container4.component';
import { Lib7Container5Component } from './containers/lib7-container5/lib7-container5.component';
import { Lib7Container6Component } from './containers/lib7-container6/lib7-container6.component';
import { Lib7Container7Component } from './containers/lib7-container7/lib7-container7.component';
import { Lib7Container8Component } from './containers/lib7-container8/lib7-container8.component';
import { Lib7Container9Component } from './containers/lib7-container9/lib7-container9.component';
import { Lib7Container10Component } from './containers/lib7-container10/lib7-container10.component';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';
import { Lib7Component1Component } from './components/lib7-component1/lib7-component1.component';
import {ArchitechSharedLibModule} from '../shared-lib/architech-shared-lib.module';

const routes: Routes = [
  {
    path: '',
    component: Lib7ParentContainerComponent,
    children: [
      {
        path: 'container1',
        component: Lib7Container1Component,
      },
      {
        path: 'container2',
        component: Lib7Container2Component,
      },
      {
        path: 'container3',
        component: Lib7Container3Component,
      },
      {
        path: 'container4',
        component: Lib7Container4Component,
      },
      {
        path: 'container5',
        component: Lib7Container5Component,
      },
      {
        path: 'container6',
        component: Lib7Container6Component,
      },
      {
        path: 'container7',
        component: Lib7Container7Component,
      },
      {
        path: 'container8',
        component: Lib7Container8Component,
      },
      {
        path: 'container9',
        component: Lib7Container9Component,
      },
      {
        path: 'container10',
        component: Lib7Container10Component,
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
  declarations: [Lib7Container1Component, Lib7Container2Component, Lib7ParentContainerComponent, Lib7Container3Component, Lib7Container4Component, Lib7Container5Component, Lib7Container6Component, Lib7Container7Component, Lib7Container8Component, Lib7Container9Component, Lib7Container10Component, Lib7Component1Component]
})
export class ArchitechLib7Module {}
