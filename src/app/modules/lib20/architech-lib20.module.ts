import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Lib20Container1Component } from './containers/lib20-container1/lib20-container1.component';
import { Lib20Container2Component } from './containers/lib20-container2/lib20-container2.component';
import { Lib20ParentContainerComponent } from './containers/lib20-parent-container/lib20-parent-container.component';
import { Lib20Container3Component } from './containers/lib20-container3/lib20-container3.component';
import { Lib20Container4Component } from './containers/lib20-container4/lib20-container4.component';
import { Lib20Container5Component } from './containers/lib20-container5/lib20-container5.component';
import { Lib20Container6Component } from './containers/lib20-container6/lib20-container6.component';
import { Lib20Container7Component } from './containers/lib20-container7/lib20-container7.component';
import { Lib20Container8Component } from './containers/lib20-container8/lib20-container8.component';
import { Lib20Container9Component } from './containers/lib20-container9/lib20-container9.component';
import { Lib20Container10Component } from './containers/lib20-container10/lib20-container10.component';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';
import { Lib20Component1Component } from './components/lib20-component1/lib20-component1.component';
import {ArchitechSharedLibModule} from '../shared-lib/architech-shared-lib.module';

const routes: Routes = [
  {
    path: '',
    component: Lib20ParentContainerComponent,
    children: [
      {
        path: 'container1',
        component: Lib20Container1Component,
      },
      {
        path: 'container2',
        component: Lib20Container2Component,
      },
      {
        path: 'container3',
        component: Lib20Container3Component,
      },
      {
        path: 'container4',
        component: Lib20Container4Component,
      },
      {
        path: 'container5',
        component: Lib20Container5Component,
      },
      {
        path: 'container6',
        component: Lib20Container6Component,
      },
      {
        path: 'container7',
        component: Lib20Container7Component,
      },
      {
        path: 'container8',
        component: Lib20Container8Component,
      },
      {
        path: 'container9',
        component: Lib20Container9Component,
      },
      {
        path: 'container10',
        component: Lib20Container10Component,
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
  declarations: [Lib20Container1Component, Lib20Container2Component, Lib20ParentContainerComponent, Lib20Container3Component, Lib20Container4Component, Lib20Container5Component, Lib20Container6Component, Lib20Container7Component, Lib20Container8Component, Lib20Container9Component, Lib20Container10Component, Lib20Component1Component]
})
export class ArchitechLib20Module {}
