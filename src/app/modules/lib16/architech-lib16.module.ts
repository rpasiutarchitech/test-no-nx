import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Lib16Container1Component } from './containers/lib16-container1/lib16-container1.component';
import { Lib16Container2Component } from './containers/lib16-container2/lib16-container2.component';
import { Lib16ParentContainerComponent } from './containers/lib16-parent-container/lib16-parent-container.component';
import { Lib16Container3Component } from './containers/lib16-container3/lib16-container3.component';
import { Lib16Container4Component } from './containers/lib16-container4/lib16-container4.component';
import { Lib16Container5Component } from './containers/lib16-container5/lib16-container5.component';
import { Lib16Container6Component } from './containers/lib16-container6/lib16-container6.component';
import { Lib16Container7Component } from './containers/lib16-container7/lib16-container7.component';
import { Lib16Container8Component } from './containers/lib16-container8/lib16-container8.component';
import { Lib16Container9Component } from './containers/lib16-container9/lib16-container9.component';
import { Lib16Container10Component } from './containers/lib16-container10/lib16-container10.component';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';
import { Lib16Component1Component } from './components/lib16-component1/lib16-component1.component';
import {ArchitechSharedLibModule} from '../shared-lib/architech-shared-lib.module';

const routes: Routes = [
  {
    path: '',
    component: Lib16ParentContainerComponent,
    children: [
      {
        path: 'container1',
        component: Lib16Container1Component,
      },
      {
        path: 'container2',
        component: Lib16Container2Component,
      },
      {
        path: 'container3',
        component: Lib16Container3Component,
      },
      {
        path: 'container4',
        component: Lib16Container4Component,
      },
      {
        path: 'container5',
        component: Lib16Container5Component,
      },
      {
        path: 'container6',
        component: Lib16Container6Component,
      },
      {
        path: 'container7',
        component: Lib16Container7Component,
      },
      {
        path: 'container8',
        component: Lib16Container8Component,
      },
      {
        path: 'container9',
        component: Lib16Container9Component,
      },
      {
        path: 'container10',
        component: Lib16Container10Component,
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
  declarations: [Lib16Container1Component, Lib16Container2Component, Lib16ParentContainerComponent, Lib16Container3Component, Lib16Container4Component, Lib16Container5Component, Lib16Container6Component, Lib16Container7Component, Lib16Container8Component, Lib16Container9Component, Lib16Container10Component, Lib16Component1Component]
})
export class ArchitechLib16Module {}
