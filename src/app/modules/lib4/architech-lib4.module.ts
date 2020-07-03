import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Lib4Container1Component } from './containers/lib4-container1/lib4-container1.component';
import { Lib4Container2Component } from './containers/lib4-container2/lib4-container2.component';
import { Lib4ParentContainerComponent } from './containers/lib4-parent-container/lib4-parent-container.component';
import { Lib4Container3Component } from './containers/lib4-container3/lib4-container3.component';
import { Lib4Container4Component } from './containers/lib4-container4/lib4-container4.component';
import { Lib4Container5Component } from './containers/lib4-container5/lib4-container5.component';
import { Lib4Container6Component } from './containers/lib4-container6/lib4-container6.component';
import { Lib4Container7Component } from './containers/lib4-container7/lib4-container7.component';
import { Lib4Container8Component } from './containers/lib4-container8/lib4-container8.component';
import { Lib4Container9Component } from './containers/lib4-container9/lib4-container9.component';
import { Lib4Container10Component } from './containers/lib4-container10/lib4-container10.component';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';
import { Lib4Component1Component } from './components/lib4-component1/lib4-component1.component';
import {ArchitechSharedLibModule} from '../shared-lib/architech-shared-lib.module';

const routes: Routes = [
  {
    path: '',
    component: Lib4ParentContainerComponent,
    children: [
      {
        path: 'container1',
        component: Lib4Container1Component,
      },
      {
        path: 'container2',
        component: Lib4Container2Component,
      },
      {
        path: 'container3',
        component: Lib4Container3Component,
      },
      {
        path: 'container4',
        component: Lib4Container4Component,
      },
      {
        path: 'container5',
        component: Lib4Container5Component,
      },
      {
        path: 'container6',
        component: Lib4Container6Component,
      },
      {
        path: 'container7',
        component: Lib4Container7Component,
      },
      {
        path: 'container8',
        component: Lib4Container8Component,
      },
      {
        path: 'container9',
        component: Lib4Container9Component,
      },
      {
        path: 'container10',
        component: Lib4Container10Component,
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
  declarations: [Lib4Container1Component, Lib4Container2Component, Lib4ParentContainerComponent, Lib4Container3Component, Lib4Container4Component, Lib4Container5Component, Lib4Container6Component, Lib4Container7Component, Lib4Container8Component, Lib4Container9Component, Lib4Container10Component, Lib4Component1Component]
})
export class ArchitechLib4Module {}
