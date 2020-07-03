import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Lib29Container1Component } from './containers/lib29-container1/lib29-container1.component';
import { Lib29Container2Component } from './containers/lib29-container2/lib29-container2.component';
import { Lib29ParentContainerComponent } from './containers/lib29-parent-container/lib29-parent-container.component';
import { Lib29Container3Component } from './containers/lib29-container3/lib29-container3.component';
import { Lib29Container4Component } from './containers/lib29-container4/lib29-container4.component';
import { Lib29Container5Component } from './containers/lib29-container5/lib29-container5.component';
import { Lib29Container6Component } from './containers/lib29-container6/lib29-container6.component';
import { Lib29Container7Component } from './containers/lib29-container7/lib29-container7.component';
import { Lib29Container8Component } from './containers/lib29-container8/lib29-container8.component';
import { Lib29Container9Component } from './containers/lib29-container9/lib29-container9.component';
import { Lib29Container10Component } from './containers/lib29-container10/lib29-container10.component';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';
import { Lib29Component1Component } from './components/lib29-component1/lib29-component1.component';
import {ArchitechSharedLibModule} from '../shared-lib/architech-shared-lib.module';

const routes: Routes = [
  {
    path: '',
    component: Lib29ParentContainerComponent,
    children: [
      {
        path: 'container1',
        component: Lib29Container1Component,
      },
      {
        path: 'container2',
        component: Lib29Container2Component,
      },
      {
        path: 'container3',
        component: Lib29Container3Component,
      },
      {
        path: 'container4',
        component: Lib29Container4Component,
      },
      {
        path: 'container5',
        component: Lib29Container5Component,
      },
      {
        path: 'container6',
        component: Lib29Container6Component,
      },
      {
        path: 'container7',
        component: Lib29Container7Component,
      },
      {
        path: 'container8',
        component: Lib29Container8Component,
      },
      {
        path: 'container9',
        component: Lib29Container9Component,
      },
      {
        path: 'container10',
        component: Lib29Container10Component,
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
  declarations: [Lib29Container1Component, Lib29Container2Component, Lib29ParentContainerComponent, Lib29Container3Component, Lib29Container4Component, Lib29Container5Component, Lib29Container6Component, Lib29Container7Component, Lib29Container8Component, Lib29Container9Component, Lib29Container10Component, Lib29Component1Component]
})
export class ArchitechLib29Module {}
