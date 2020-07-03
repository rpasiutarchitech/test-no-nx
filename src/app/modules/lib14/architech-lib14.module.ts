import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Lib14Container1Component } from './containers/lib14-container1/lib14-container1.component';
import { Lib14Container2Component } from './containers/lib14-container2/lib14-container2.component';
import { Lib14ParentContainerComponent } from './containers/lib14-parent-container/lib14-parent-container.component';
import { Lib14Container3Component } from './containers/lib14-container3/lib14-container3.component';
import { Lib14Container4Component } from './containers/lib14-container4/lib14-container4.component';
import { Lib14Container5Component } from './containers/lib14-container5/lib14-container5.component';
import { Lib14Container6Component } from './containers/lib14-container6/lib14-container6.component';
import { Lib14Container7Component } from './containers/lib14-container7/lib14-container7.component';
import { Lib14Container8Component } from './containers/lib14-container8/lib14-container8.component';
import { Lib14Container9Component } from './containers/lib14-container9/lib14-container9.component';
import { Lib14Container10Component } from './containers/lib14-container10/lib14-container10.component';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';
import { Lib14Component1Component } from './components/lib14-component1/lib14-component1.component';
import {ArchitechSharedLibModule} from '../shared-lib/architech-shared-lib.module';

const routes: Routes = [
  {
    path: '',
    component: Lib14ParentContainerComponent,
    children: [
      {
        path: 'container1',
        component: Lib14Container1Component,
      },
      {
        path: 'container2',
        component: Lib14Container2Component,
      },
      {
        path: 'container3',
        component: Lib14Container3Component,
      },
      {
        path: 'container4',
        component: Lib14Container4Component,
      },
      {
        path: 'container5',
        component: Lib14Container5Component,
      },
      {
        path: 'container6',
        component: Lib14Container6Component,
      },
      {
        path: 'container7',
        component: Lib14Container7Component,
      },
      {
        path: 'container8',
        component: Lib14Container8Component,
      },
      {
        path: 'container9',
        component: Lib14Container9Component,
      },
      {
        path: 'container10',
        component: Lib14Container10Component,
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
  declarations: [Lib14Container1Component, Lib14Container2Component, Lib14ParentContainerComponent, Lib14Container3Component, Lib14Container4Component, Lib14Container5Component, Lib14Container6Component, Lib14Container7Component, Lib14Container8Component, Lib14Container9Component, Lib14Container10Component, Lib14Component1Component]
})
export class ArchitechLib14Module {}
