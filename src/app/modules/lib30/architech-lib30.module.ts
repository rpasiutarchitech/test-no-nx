import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Lib30Container1Component } from './containers/lib30-container1/lib30-container1.component';
import { Lib30Container2Component } from './containers/lib30-container2/lib30-container2.component';
import { Lib30ParentContainerComponent } from './containers/lib30-parent-container/lib30-parent-container.component';
import { Lib30Container3Component } from './containers/lib30-container3/lib30-container3.component';
import { Lib30Container4Component } from './containers/lib30-container4/lib30-container4.component';
import { Lib30Container5Component } from './containers/lib30-container5/lib30-container5.component';
import { Lib30Container6Component } from './containers/lib30-container6/lib30-container6.component';
import { Lib30Container7Component } from './containers/lib30-container7/lib30-container7.component';
import { Lib30Container8Component } from './containers/lib30-container8/lib30-container8.component';
import { Lib30Container9Component } from './containers/lib30-container9/lib30-container9.component';
import { Lib30Container10Component } from './containers/lib30-container10/lib30-container10.component';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';
import { Lib30Component1Component } from './components/lib30-component1/lib30-component1.component';
import {ArchitechSharedLibModule} from '../shared-lib/architech-shared-lib.module';

const routes: Routes = [
  {
    path: '',
    component: Lib30ParentContainerComponent,
    children: [
      {
        path: 'container1',
        component: Lib30Container1Component,
      },
      {
        path: 'container2',
        component: Lib30Container2Component,
      },
      {
        path: 'container3',
        component: Lib30Container3Component,
      },
      {
        path: 'container4',
        component: Lib30Container4Component,
      },
      {
        path: 'container5',
        component: Lib30Container5Component,
      },
      {
        path: 'container6',
        component: Lib30Container6Component,
      },
      {
        path: 'container7',
        component: Lib30Container7Component,
      },
      {
        path: 'container8',
        component: Lib30Container8Component,
      },
      {
        path: 'container9',
        component: Lib30Container9Component,
      },
      {
        path: 'container10',
        component: Lib30Container10Component,
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
  declarations: [Lib30Container1Component, Lib30Container2Component, Lib30ParentContainerComponent, Lib30Container3Component, Lib30Container4Component, Lib30Container5Component, Lib30Container6Component, Lib30Container7Component, Lib30Container8Component, Lib30Container9Component, Lib30Container10Component, Lib30Component1Component]
})
export class ArchitechLib30Module {}
