import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Lib18Container1Component } from './containers/lib18-container1/lib18-container1.component';
import { Lib18Container2Component } from './containers/lib18-container2/lib18-container2.component';
import { Lib18ParentContainerComponent } from './containers/lib18-parent-container/lib18-parent-container.component';
import { Lib18Container3Component } from './containers/lib18-container3/lib18-container3.component';
import { Lib18Container4Component } from './containers/lib18-container4/lib18-container4.component';
import { Lib18Container5Component } from './containers/lib18-container5/lib18-container5.component';
import { Lib18Container6Component } from './containers/lib18-container6/lib18-container6.component';
import { Lib18Container7Component } from './containers/lib18-container7/lib18-container7.component';
import { Lib18Container8Component } from './containers/lib18-container8/lib18-container8.component';
import { Lib18Container9Component } from './containers/lib18-container9/lib18-container9.component';
import { Lib18Container10Component } from './containers/lib18-container10/lib18-container10.component';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';
import { Lib18Component1Component } from './components/lib18-component1/lib18-component1.component';
import {ArchitechSharedLibModule} from '../shared-lib/architech-shared-lib.module';

const routes: Routes = [
  {
    path: '',
    component: Lib18ParentContainerComponent,
    children: [
      {
        path: 'container1',
        component: Lib18Container1Component,
      },
      {
        path: 'container2',
        component: Lib18Container2Component,
      },
      {
        path: 'container3',
        component: Lib18Container3Component,
      },
      {
        path: 'container4',
        component: Lib18Container4Component,
      },
      {
        path: 'container5',
        component: Lib18Container5Component,
      },
      {
        path: 'container6',
        component: Lib18Container6Component,
      },
      {
        path: 'container7',
        component: Lib18Container7Component,
      },
      {
        path: 'container8',
        component: Lib18Container8Component,
      },
      {
        path: 'container9',
        component: Lib18Container9Component,
      },
      {
        path: 'container10',
        component: Lib18Container10Component,
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
  declarations: [Lib18Container1Component, Lib18Container2Component, Lib18ParentContainerComponent, Lib18Container3Component, Lib18Container4Component, Lib18Container5Component, Lib18Container6Component, Lib18Container7Component, Lib18Container8Component, Lib18Container9Component, Lib18Container10Component, Lib18Component1Component]
})
export class ArchitechLib18Module {}
