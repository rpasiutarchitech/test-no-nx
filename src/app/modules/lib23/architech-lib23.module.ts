import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Lib23Container1Component } from './containers/lib23-container1/lib23-container1.component';
import { Lib23Container2Component } from './containers/lib23-container2/lib23-container2.component';
import { Lib23ParentContainerComponent } from './containers/lib23-parent-container/lib23-parent-container.component';
import { Lib23Container3Component } from './containers/lib23-container3/lib23-container3.component';
import { Lib23Container4Component } from './containers/lib23-container4/lib23-container4.component';
import { Lib23Container5Component } from './containers/lib23-container5/lib23-container5.component';
import { Lib23Container6Component } from './containers/lib23-container6/lib23-container6.component';
import { Lib23Container7Component } from './containers/lib23-container7/lib23-container7.component';
import { Lib23Container8Component } from './containers/lib23-container8/lib23-container8.component';
import { Lib23Container9Component } from './containers/lib23-container9/lib23-container9.component';
import { Lib23Container10Component } from './containers/lib23-container10/lib23-container10.component';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';
import { Lib23Component1Component } from './components/lib23-component1/lib23-component1.component';
import {ArchitechSharedLibModule} from '../shared-lib/architech-shared-lib.module';

const routes: Routes = [
  {
    path: '',
    component: Lib23ParentContainerComponent,
    children: [
      {
        path: 'container1',
        component: Lib23Container1Component,
      },
      {
        path: 'container2',
        component: Lib23Container2Component,
      },
      {
        path: 'container3',
        component: Lib23Container3Component,
      },
      {
        path: 'container4',
        component: Lib23Container4Component,
      },
      {
        path: 'container5',
        component: Lib23Container5Component,
      },
      {
        path: 'container6',
        component: Lib23Container6Component,
      },
      {
        path: 'container7',
        component: Lib23Container7Component,
      },
      {
        path: 'container8',
        component: Lib23Container8Component,
      },
      {
        path: 'container9',
        component: Lib23Container9Component,
      },
      {
        path: 'container10',
        component: Lib23Container10Component,
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
  declarations: [Lib23Container1Component, Lib23Container2Component, Lib23ParentContainerComponent, Lib23Container3Component, Lib23Container4Component, Lib23Container5Component, Lib23Container6Component, Lib23Container7Component, Lib23Container8Component, Lib23Container9Component, Lib23Container10Component, Lib23Component1Component]
})
export class ArchitechLib23Module {}
