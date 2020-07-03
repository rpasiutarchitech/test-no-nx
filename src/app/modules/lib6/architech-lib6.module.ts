import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Lib6Container1Component } from './containers/lib6-container1/lib6-container1.component';
import { Lib6Container2Component } from './containers/lib6-container2/lib6-container2.component';
import { Lib6ParentContainerComponent } from './containers/lib6-parent-container/lib6-parent-container.component';
import { Lib6Container3Component } from './containers/lib6-container3/lib6-container3.component';
import { Lib6Container4Component } from './containers/lib6-container4/lib6-container4.component';
import { Lib6Container5Component } from './containers/lib6-container5/lib6-container5.component';
import { Lib6Container6Component } from './containers/lib6-container6/lib6-container6.component';
import { Lib6Container7Component } from './containers/lib6-container7/lib6-container7.component';
import { Lib6Container8Component } from './containers/lib6-container8/lib6-container8.component';
import { Lib6Container9Component } from './containers/lib6-container9/lib6-container9.component';
import { Lib6Container10Component } from './containers/lib6-container10/lib6-container10.component';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';
import { Lib6Component1Component } from './components/lib6-component1/lib6-component1.component';
import {ArchitechSharedLibModule} from '../shared-lib/architech-shared-lib.module';

const routes: Routes = [
  {
    path: '',
    component: Lib6ParentContainerComponent,
    children: [
      {
        path: 'container1',
        component: Lib6Container1Component,
      },
      {
        path: 'container2',
        component: Lib6Container2Component,
      },
      {
        path: 'container3',
        component: Lib6Container3Component,
      },
      {
        path: 'container4',
        component: Lib6Container4Component,
      },
      {
        path: 'container5',
        component: Lib6Container5Component,
      },
      {
        path: 'container6',
        component: Lib6Container6Component,
      },
      {
        path: 'container7',
        component: Lib6Container7Component,
      },
      {
        path: 'container8',
        component: Lib6Container8Component,
      },
      {
        path: 'container9',
        component: Lib6Container9Component,
      },
      {
        path: 'container10',
        component: Lib6Container10Component,
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
  declarations: [Lib6Container1Component, Lib6Container2Component, Lib6ParentContainerComponent, Lib6Container3Component, Lib6Container4Component, Lib6Container5Component, Lib6Container6Component, Lib6Container7Component, Lib6Container8Component, Lib6Container9Component, Lib6Container10Component, Lib6Component1Component]
})
export class ArchitechLib6Module {}
