import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Lib26Container1Component } from './containers/lib26-container1/lib26-container1.component';
import { Lib26Container2Component } from './containers/lib26-container2/lib26-container2.component';
import { Lib26ParentContainerComponent } from './containers/lib26-parent-container/lib26-parent-container.component';
import { Lib26Container3Component } from './containers/lib26-container3/lib26-container3.component';
import { Lib26Container4Component } from './containers/lib26-container4/lib26-container4.component';
import { Lib26Container5Component } from './containers/lib26-container5/lib26-container5.component';
import { Lib26Container6Component } from './containers/lib26-container6/lib26-container6.component';
import { Lib26Container7Component } from './containers/lib26-container7/lib26-container7.component';
import { Lib26Container8Component } from './containers/lib26-container8/lib26-container8.component';
import { Lib26Container9Component } from './containers/lib26-container9/lib26-container9.component';
import { Lib26Container10Component } from './containers/lib26-container10/lib26-container10.component';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';
import { Lib26Component1Component } from './components/lib26-component1/lib26-component1.component';
import {ArchitechSharedLibModule} from '../shared-lib/architech-shared-lib.module';

const routes: Routes = [
  {
    path: '',
    component: Lib26ParentContainerComponent,
    children: [
      {
        path: 'container1',
        component: Lib26Container1Component,
      },
      {
        path: 'container2',
        component: Lib26Container2Component,
      },
      {
        path: 'container3',
        component: Lib26Container3Component,
      },
      {
        path: 'container4',
        component: Lib26Container4Component,
      },
      {
        path: 'container5',
        component: Lib26Container5Component,
      },
      {
        path: 'container6',
        component: Lib26Container6Component,
      },
      {
        path: 'container7',
        component: Lib26Container7Component,
      },
      {
        path: 'container8',
        component: Lib26Container8Component,
      },
      {
        path: 'container9',
        component: Lib26Container9Component,
      },
      {
        path: 'container10',
        component: Lib26Container10Component,
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
  declarations: [Lib26Container1Component, Lib26Container2Component, Lib26ParentContainerComponent, Lib26Container3Component, Lib26Container4Component, Lib26Container5Component, Lib26Container6Component, Lib26Container7Component, Lib26Container8Component, Lib26Container9Component, Lib26Container10Component, Lib26Component1Component]
})
export class ArchitechLib26Module {}
