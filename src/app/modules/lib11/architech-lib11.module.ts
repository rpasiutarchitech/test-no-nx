import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Lib11Container1Component } from './containers/lib11-container1/lib11-container1.component';
import { Lib11Container2Component } from './containers/lib11-container2/lib11-container2.component';
import { Lib11ParentContainerComponent } from './containers/lib11-parent-container/lib11-parent-container.component';
import { Lib11Container3Component } from './containers/lib11-container3/lib11-container3.component';
import { Lib11Container4Component } from './containers/lib11-container4/lib11-container4.component';
import { Lib11Container5Component } from './containers/lib11-container5/lib11-container5.component';
import { Lib11Container6Component } from './containers/lib11-container6/lib11-container6.component';
import { Lib11Container7Component } from './containers/lib11-container7/lib11-container7.component';
import { Lib11Container8Component } from './containers/lib11-container8/lib11-container8.component';
import { Lib11Container9Component } from './containers/lib11-container9/lib11-container9.component';
import { Lib11Container10Component } from './containers/lib11-container10/lib11-container10.component';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';
import { Lib11Component1Component } from './components/lib11-component1/lib11-component1.component';
import {ArchitechSharedLibModule} from '../shared-lib/architech-shared-lib.module';

const routes: Routes = [
  {
    path: '',
    component: Lib11ParentContainerComponent,
    children: [
      {
        path: 'container1',
        component: Lib11Container1Component,
      },
      {
        path: 'container2',
        component: Lib11Container2Component,
      },
      {
        path: 'container3',
        component: Lib11Container3Component,
      },
      {
        path: 'container4',
        component: Lib11Container4Component,
      },
      {
        path: 'container5',
        component: Lib11Container5Component,
      },
      {
        path: 'container6',
        component: Lib11Container6Component,
      },
      {
        path: 'container7',
        component: Lib11Container7Component,
      },
      {
        path: 'container8',
        component: Lib11Container8Component,
      },
      {
        path: 'container9',
        component: Lib11Container9Component,
      },
      {
        path: 'container10',
        component: Lib11Container10Component,
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
  declarations: [Lib11Container1Component, Lib11Container2Component, Lib11ParentContainerComponent, Lib11Container3Component, Lib11Container4Component, Lib11Container5Component, Lib11Container6Component, Lib11Container7Component, Lib11Container8Component, Lib11Container9Component, Lib11Container10Component, Lib11Component1Component]
})
export class ArchitechLib11Module {}
