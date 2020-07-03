import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Lib8Container1Component } from './containers/lib8-container1/lib8-container1.component';
import { Lib8Container2Component } from './containers/lib8-container2/lib8-container2.component';
import { Lib8ParentContainerComponent } from './containers/lib8-parent-container/lib8-parent-container.component';
import { Lib8Container3Component } from './containers/lib8-container3/lib8-container3.component';
import { Lib8Container4Component } from './containers/lib8-container4/lib8-container4.component';
import { Lib8Container5Component } from './containers/lib8-container5/lib8-container5.component';
import { Lib8Container6Component } from './containers/lib8-container6/lib8-container6.component';
import { Lib8Container7Component } from './containers/lib8-container7/lib8-container7.component';
import { Lib8Container8Component } from './containers/lib8-container8/lib8-container8.component';
import { Lib8Container9Component } from './containers/lib8-container9/lib8-container9.component';
import { Lib8Container10Component } from './containers/lib8-container10/lib8-container10.component';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';
import { Lib8Component1Component } from './components/lib8-component1/lib8-component1.component';
import {ArchitechSharedLibModule} from '../shared-lib/architech-shared-lib.module';

const routes: Routes = [
  {
    path: '',
    component: Lib8ParentContainerComponent,
    children: [
      {
        path: 'container1',
        component: Lib8Container1Component,
      },
      {
        path: 'container2',
        component: Lib8Container2Component,
      },
      {
        path: 'container3',
        component: Lib8Container3Component,
      },
      {
        path: 'container4',
        component: Lib8Container4Component,
      },
      {
        path: 'container5',
        component: Lib8Container5Component,
      },
      {
        path: 'container6',
        component: Lib8Container6Component,
      },
      {
        path: 'container7',
        component: Lib8Container7Component,
      },
      {
        path: 'container8',
        component: Lib8Container8Component,
      },
      {
        path: 'container9',
        component: Lib8Container9Component,
      },
      {
        path: 'container10',
        component: Lib8Container10Component,
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
  declarations: [Lib8Container1Component, Lib8Container2Component, Lib8ParentContainerComponent, Lib8Container3Component, Lib8Container4Component, Lib8Container5Component, Lib8Container6Component, Lib8Container7Component, Lib8Container8Component, Lib8Container9Component, Lib8Container10Component, Lib8Component1Component]
})
export class ArchitechLib8Module {}
