import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Lib9Container1Component } from './containers/lib9-container1/lib9-container1.component';
import { Lib9Container2Component } from './containers/lib9-container2/lib9-container2.component';
import { Lib9ParentContainerComponent } from './containers/lib9-parent-container/lib9-parent-container.component';
import { Lib9Container3Component } from './containers/lib9-container3/lib9-container3.component';
import { Lib9Container4Component } from './containers/lib9-container4/lib9-container4.component';
import { Lib9Container5Component } from './containers/lib9-container5/lib9-container5.component';
import { Lib9Container6Component } from './containers/lib9-container6/lib9-container6.component';
import { Lib9Container7Component } from './containers/lib9-container7/lib9-container7.component';
import { Lib9Container8Component } from './containers/lib9-container8/lib9-container8.component';
import { Lib9Container9Component } from './containers/lib9-container9/lib9-container9.component';
import { Lib9Container10Component } from './containers/lib9-container10/lib9-container10.component';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';
import { Lib9Component1Component } from './components/lib9-component1/lib9-component1.component';
import {ArchitechSharedLibModule} from '../shared-lib/architech-shared-lib.module';

const routes: Routes = [
  {
    path: '',
    component: Lib9ParentContainerComponent,
    children: [
      {
        path: 'container1',
        component: Lib9Container1Component,
      },
      {
        path: 'container2',
        component: Lib9Container2Component,
      },
      {
        path: 'container3',
        component: Lib9Container3Component,
      },
      {
        path: 'container4',
        component: Lib9Container4Component,
      },
      {
        path: 'container5',
        component: Lib9Container5Component,
      },
      {
        path: 'container6',
        component: Lib9Container6Component,
      },
      {
        path: 'container7',
        component: Lib9Container7Component,
      },
      {
        path: 'container8',
        component: Lib9Container8Component,
      },
      {
        path: 'container9',
        component: Lib9Container9Component,
      },
      {
        path: 'container10',
        component: Lib9Container10Component,
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
  declarations: [Lib9Container1Component, Lib9Container2Component, Lib9ParentContainerComponent, Lib9Container3Component, Lib9Container4Component, Lib9Container5Component, Lib9Container6Component, Lib9Container7Component, Lib9Container8Component, Lib9Container9Component, Lib9Container10Component, Lib9Component1Component]
})
export class ArchitechLib9Module {}
