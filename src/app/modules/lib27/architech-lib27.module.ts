import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Lib27Container1Component } from './containers/lib27-container1/lib27-container1.component';
import { Lib27Container2Component } from './containers/lib27-container2/lib27-container2.component';
import { Lib27ParentContainerComponent } from './containers/lib27-parent-container/lib27-parent-container.component';
import { Lib27Container3Component } from './containers/lib27-container3/lib27-container3.component';
import { Lib27Container4Component } from './containers/lib27-container4/lib27-container4.component';
import { Lib27Container5Component } from './containers/lib27-container5/lib27-container5.component';
import { Lib27Container6Component } from './containers/lib27-container6/lib27-container6.component';
import { Lib27Container7Component } from './containers/lib27-container7/lib27-container7.component';
import { Lib27Container8Component } from './containers/lib27-container8/lib27-container8.component';
import { Lib27Container9Component } from './containers/lib27-container9/lib27-container9.component';
import { Lib27Container10Component } from './containers/lib27-container10/lib27-container10.component';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';
import { Lib27Component1Component } from './components/lib27-component1/lib27-component1.component';
import {ArchitechSharedLibModule} from '../shared-lib/architech-shared-lib.module';

const routes: Routes = [
  {
    path: '',
    component: Lib27ParentContainerComponent,
    children: [
      {
        path: 'container1',
        component: Lib27Container1Component,
      },
      {
        path: 'container2',
        component: Lib27Container2Component,
      },
      {
        path: 'container3',
        component: Lib27Container3Component,
      },
      {
        path: 'container4',
        component: Lib27Container4Component,
      },
      {
        path: 'container5',
        component: Lib27Container5Component,
      },
      {
        path: 'container6',
        component: Lib27Container6Component,
      },
      {
        path: 'container7',
        component: Lib27Container7Component,
      },
      {
        path: 'container8',
        component: Lib27Container8Component,
      },
      {
        path: 'container9',
        component: Lib27Container9Component,
      },
      {
        path: 'container10',
        component: Lib27Container10Component,
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
  declarations: [Lib27Container1Component, Lib27Container2Component, Lib27ParentContainerComponent, Lib27Container3Component, Lib27Container4Component, Lib27Container5Component, Lib27Container6Component, Lib27Container7Component, Lib27Container8Component, Lib27Container9Component, Lib27Container10Component, Lib27Component1Component]
})
export class ArchitechLib27Module {}
