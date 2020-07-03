import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Lib25Container1Component } from './containers/lib25-container1/lib25-container1.component';
import { Lib25Container2Component } from './containers/lib25-container2/lib25-container2.component';
import { Lib25ParentContainerComponent } from './containers/lib25-parent-container/lib25-parent-container.component';
import { Lib25Container3Component } from './containers/lib25-container3/lib25-container3.component';
import { Lib25Container4Component } from './containers/lib25-container4/lib25-container4.component';
import { Lib25Container5Component } from './containers/lib25-container5/lib25-container5.component';
import { Lib25Container6Component } from './containers/lib25-container6/lib25-container6.component';
import { Lib25Container7Component } from './containers/lib25-container7/lib25-container7.component';
import { Lib25Container8Component } from './containers/lib25-container8/lib25-container8.component';
import { Lib25Container9Component } from './containers/lib25-container9/lib25-container9.component';
import { Lib25Container10Component } from './containers/lib25-container10/lib25-container10.component';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';
import { Lib25Component1Component } from './components/lib25-component1/lib25-component1.component';
import {ArchitechSharedLibModule} from '../shared-lib/architech-shared-lib.module';

const routes: Routes = [
  {
    path: '',
    component: Lib25ParentContainerComponent,
    children: [
      {
        path: 'container1',
        component: Lib25Container1Component,
      },
      {
        path: 'container2',
        component: Lib25Container2Component,
      },
      {
        path: 'container3',
        component: Lib25Container3Component,
      },
      {
        path: 'container4',
        component: Lib25Container4Component,
      },
      {
        path: 'container5',
        component: Lib25Container5Component,
      },
      {
        path: 'container6',
        component: Lib25Container6Component,
      },
      {
        path: 'container7',
        component: Lib25Container7Component,
      },
      {
        path: 'container8',
        component: Lib25Container8Component,
      },
      {
        path: 'container9',
        component: Lib25Container9Component,
      },
      {
        path: 'container10',
        component: Lib25Container10Component,
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
  declarations: [Lib25Container1Component, Lib25Container2Component, Lib25ParentContainerComponent, Lib25Container3Component, Lib25Container4Component, Lib25Container5Component, Lib25Container6Component, Lib25Container7Component, Lib25Container8Component, Lib25Container9Component, Lib25Container10Component, Lib25Component1Component]
})
export class ArchitechLib25Module {}
