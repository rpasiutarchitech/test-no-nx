import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Lib10Container1Component } from './containers/lib10-container1/lib10-container1.component';
import { Lib10Container2Component } from './containers/lib10-container2/lib10-container2.component';
import { Lib10ParentContainerComponent } from './containers/lib10-parent-container/lib10-parent-container.component';
import { Lib10Container3Component } from './containers/lib10-container3/lib10-container3.component';
import { Lib10Container4Component } from './containers/lib10-container4/lib10-container4.component';
import { Lib10Container5Component } from './containers/lib10-container5/lib10-container5.component';
import { Lib10Container6Component } from './containers/lib10-container6/lib10-container6.component';
import { Lib10Container7Component } from './containers/lib10-container7/lib10-container7.component';
import { Lib10Container8Component } from './containers/lib10-container8/lib10-container8.component';
import { Lib10Container9Component } from './containers/lib10-container9/lib10-container9.component';
import { Lib10Container10Component } from './containers/lib10-container10/lib10-container10.component';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';
import { Lib10Component1Component } from './components/lib10-component1/lib10-component1.component';
import {ArchitechSharedLibModule} from '../shared-lib/architech-shared-lib.module';

const routes: Routes = [
  {
    path: '',
    component: Lib10ParentContainerComponent,
    children: [
      {
        path: 'container1',
        component: Lib10Container1Component,
      },
      {
        path: 'container2',
        component: Lib10Container2Component,
      },
      {
        path: 'container3',
        component: Lib10Container3Component,
      },
      {
        path: 'container4',
        component: Lib10Container4Component,
      },
      {
        path: 'container5',
        component: Lib10Container5Component,
      },
      {
        path: 'container6',
        component: Lib10Container6Component,
      },
      {
        path: 'container7',
        component: Lib10Container7Component,
      },
      {
        path: 'container8',
        component: Lib10Container8Component,
      },
      {
        path: 'container9',
        component: Lib10Container9Component,
      },
      {
        path: 'container10',
        component: Lib10Container10Component,
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
  declarations: [Lib10Container1Component, Lib10Container2Component, Lib10ParentContainerComponent, Lib10Container3Component, Lib10Container4Component, Lib10Container5Component, Lib10Container6Component, Lib10Container7Component, Lib10Container8Component, Lib10Container9Component, Lib10Container10Component, Lib10Component1Component]
})
export class ArchitechLib10Module {}
