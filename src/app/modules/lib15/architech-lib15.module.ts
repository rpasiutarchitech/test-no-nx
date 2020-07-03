import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Lib15Container1Component } from './containers/lib15-container1/lib15-container1.component';
import { Lib15Container2Component } from './containers/lib15-container2/lib15-container2.component';
import { Lib15ParentContainerComponent } from './containers/lib15-parent-container/lib15-parent-container.component';
import { Lib15Container3Component } from './containers/lib15-container3/lib15-container3.component';
import { Lib15Container4Component } from './containers/lib15-container4/lib15-container4.component';
import { Lib15Container5Component } from './containers/lib15-container5/lib15-container5.component';
import { Lib15Container6Component } from './containers/lib15-container6/lib15-container6.component';
import { Lib15Container7Component } from './containers/lib15-container7/lib15-container7.component';
import { Lib15Container8Component } from './containers/lib15-container8/lib15-container8.component';
import { Lib15Container9Component } from './containers/lib15-container9/lib15-container9.component';
import { Lib15Container10Component } from './containers/lib15-container10/lib15-container10.component';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';
import { Lib15Component1Component } from './components/lib15-component1/lib15-component1.component';
import {ArchitechSharedLibModule} from '../shared-lib/architech-shared-lib.module';

const routes: Routes = [
  {
    path: '',
    component: Lib15ParentContainerComponent,
    children: [
      {
        path: 'container1',
        component: Lib15Container1Component,
      },
      {
        path: 'container2',
        component: Lib15Container2Component,
      },
      {
        path: 'container3',
        component: Lib15Container3Component,
      },
      {
        path: 'container4',
        component: Lib15Container4Component,
      },
      {
        path: 'container5',
        component: Lib15Container5Component,
      },
      {
        path: 'container6',
        component: Lib15Container6Component,
      },
      {
        path: 'container7',
        component: Lib15Container7Component,
      },
      {
        path: 'container8',
        component: Lib15Container8Component,
      },
      {
        path: 'container9',
        component: Lib15Container9Component,
      },
      {
        path: 'container10',
        component: Lib15Container10Component,
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
  declarations: [Lib15Container1Component, Lib15Container2Component, Lib15ParentContainerComponent, Lib15Container3Component, Lib15Container4Component, Lib15Container5Component, Lib15Container6Component, Lib15Container7Component, Lib15Container8Component, Lib15Container9Component, Lib15Container10Component, Lib15Component1Component]
})
export class ArchitechLib15Module {}
