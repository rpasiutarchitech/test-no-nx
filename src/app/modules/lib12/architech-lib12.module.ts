import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Lib12Container1Component } from './containers/lib12-container1/lib12-container1.component';
import { Lib12Container2Component } from './containers/lib12-container2/lib12-container2.component';
import { Lib12ParentContainerComponent } from './containers/lib12-parent-container/lib12-parent-container.component';
import { Lib12Container3Component } from './containers/lib12-container3/lib12-container3.component';
import { Lib12Container4Component } from './containers/lib12-container4/lib12-container4.component';
import { Lib12Container5Component } from './containers/lib12-container5/lib12-container5.component';
import { Lib12Container6Component } from './containers/lib12-container6/lib12-container6.component';
import { Lib12Container7Component } from './containers/lib12-container7/lib12-container7.component';
import { Lib12Container8Component } from './containers/lib12-container8/lib12-container8.component';
import { Lib12Container9Component } from './containers/lib12-container9/lib12-container9.component';
import { Lib12Container10Component } from './containers/lib12-container10/lib12-container10.component';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';
import { Lib12Component1Component } from './components/lib12-component1/lib12-component1.component';
import {ArchitechSharedLibModule} from '../shared-lib/architech-shared-lib.module';

const routes: Routes = [
  {
    path: '',
    component: Lib12ParentContainerComponent,
    children: [
      {
        path: 'container1',
        component: Lib12Container1Component,
      },
      {
        path: 'container2',
        component: Lib12Container2Component,
      },
      {
        path: 'container3',
        component: Lib12Container3Component,
      },
      {
        path: 'container4',
        component: Lib12Container4Component,
      },
      {
        path: 'container5',
        component: Lib12Container5Component,
      },
      {
        path: 'container6',
        component: Lib12Container6Component,
      },
      {
        path: 'container7',
        component: Lib12Container7Component,
      },
      {
        path: 'container8',
        component: Lib12Container8Component,
      },
      {
        path: 'container9',
        component: Lib12Container9Component,
      },
      {
        path: 'container10',
        component: Lib12Container10Component,
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
  declarations: [Lib12Container1Component, Lib12Container2Component, Lib12ParentContainerComponent, Lib12Container3Component, Lib12Container4Component, Lib12Container5Component, Lib12Container6Component, Lib12Container7Component, Lib12Container8Component, Lib12Container9Component, Lib12Container10Component, Lib12Component1Component]
})
export class ArchitechLib12Module {}
