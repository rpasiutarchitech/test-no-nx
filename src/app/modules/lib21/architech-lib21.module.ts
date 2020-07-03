import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Lib21Container1Component } from './containers/lib21-container1/lib21-container1.component';
import { Lib21Container2Component } from './containers/lib21-container2/lib21-container2.component';
import { Lib21ParentContainerComponent } from './containers/lib21-parent-container/lib21-parent-container.component';
import { Lib21Container3Component } from './containers/lib21-container3/lib21-container3.component';
import { Lib21Container4Component } from './containers/lib21-container4/lib21-container4.component';
import { Lib21Container5Component } from './containers/lib21-container5/lib21-container5.component';
import { Lib21Container6Component } from './containers/lib21-container6/lib21-container6.component';
import { Lib21Container7Component } from './containers/lib21-container7/lib21-container7.component';
import { Lib21Container8Component } from './containers/lib21-container8/lib21-container8.component';
import { Lib21Container9Component } from './containers/lib21-container9/lib21-container9.component';
import { Lib21Container10Component } from './containers/lib21-container10/lib21-container10.component';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';
import { Lib21Component1Component } from './components/lib21-component1/lib21-component1.component';
import {ArchitechSharedLibModule} from '../shared-lib/architech-shared-lib.module';

const routes: Routes = [
  {
    path: '',
    component: Lib21ParentContainerComponent,
    children: [
      {
        path: 'container1',
        component: Lib21Container1Component,
      },
      {
        path: 'container2',
        component: Lib21Container2Component,
      },
      {
        path: 'container3',
        component: Lib21Container3Component,
      },
      {
        path: 'container4',
        component: Lib21Container4Component,
      },
      {
        path: 'container5',
        component: Lib21Container5Component,
      },
      {
        path: 'container6',
        component: Lib21Container6Component,
      },
      {
        path: 'container7',
        component: Lib21Container7Component,
      },
      {
        path: 'container8',
        component: Lib21Container8Component,
      },
      {
        path: 'container9',
        component: Lib21Container9Component,
      },
      {
        path: 'container10',
        component: Lib21Container10Component,
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
  declarations: [Lib21Container1Component, Lib21Container2Component, Lib21ParentContainerComponent, Lib21Container3Component, Lib21Container4Component, Lib21Container5Component, Lib21Container6Component, Lib21Container7Component, Lib21Container8Component, Lib21Container9Component, Lib21Container10Component, Lib21Component1Component]
})
export class ArchitechLib21Module {}
