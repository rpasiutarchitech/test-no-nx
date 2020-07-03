import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Lib17Container1Component } from './containers/lib17-container1/lib17-container1.component';
import { Lib17Container2Component } from './containers/lib17-container2/lib17-container2.component';
import { Lib17ParentContainerComponent } from './containers/lib17-parent-container/lib17-parent-container.component';
import { Lib17Container3Component } from './containers/lib17-container3/lib17-container3.component';
import { Lib17Container4Component } from './containers/lib17-container4/lib17-container4.component';
import { Lib17Container5Component } from './containers/lib17-container5/lib17-container5.component';
import { Lib17Container6Component } from './containers/lib17-container6/lib17-container6.component';
import { Lib17Container7Component } from './containers/lib17-container7/lib17-container7.component';
import { Lib17Container8Component } from './containers/lib17-container8/lib17-container8.component';
import { Lib17Container9Component } from './containers/lib17-container9/lib17-container9.component';
import { Lib17Container10Component } from './containers/lib17-container10/lib17-container10.component';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';
import { Lib17Component1Component } from './components/lib17-component1/lib17-component1.component';
import {ArchitechSharedLibModule} from '../shared-lib/architech-shared-lib.module';

const routes: Routes = [
  {
    path: '',
    component: Lib17ParentContainerComponent,
    children: [
      {
        path: 'container1',
        component: Lib17Container1Component,
      },
      {
        path: 'container2',
        component: Lib17Container2Component,
      },
      {
        path: 'container3',
        component: Lib17Container3Component,
      },
      {
        path: 'container4',
        component: Lib17Container4Component,
      },
      {
        path: 'container5',
        component: Lib17Container5Component,
      },
      {
        path: 'container6',
        component: Lib17Container6Component,
      },
      {
        path: 'container7',
        component: Lib17Container7Component,
      },
      {
        path: 'container8',
        component: Lib17Container8Component,
      },
      {
        path: 'container9',
        component: Lib17Container9Component,
      },
      {
        path: 'container10',
        component: Lib17Container10Component,
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
  declarations: [Lib17Container1Component, Lib17Container2Component, Lib17ParentContainerComponent, Lib17Container3Component, Lib17Container4Component, Lib17Container5Component, Lib17Container6Component, Lib17Container7Component, Lib17Container8Component, Lib17Container9Component, Lib17Container10Component, Lib17Component1Component]
})
export class ArchitechLib17Module {}
