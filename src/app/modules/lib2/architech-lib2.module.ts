import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Lib2Container1Component } from './containers/lib2-container1/lib2-container1.component';
import { Lib2Container2Component } from './containers/lib2-container2/lib2-container2.component';
import { Lib2ParentContainerComponent } from './containers/lib2-parent-container/lib2-parent-container.component';
import { Lib2Container3Component } from './containers/lib2-container3/lib2-container3.component';
import { Lib2Container4Component } from './containers/lib2-container4/lib2-container4.component';
import { Lib2Container5Component } from './containers/lib2-container5/lib2-container5.component';
import { Lib2Container6Component } from './containers/lib2-container6/lib2-container6.component';
import { Lib2Container7Component } from './containers/lib2-container7/lib2-container7.component';
import { Lib2Container8Component } from './containers/lib2-container8/lib2-container8.component';
import { Lib2Container9Component } from './containers/lib2-container9/lib2-container9.component';
import { Lib2Container10Component } from './containers/lib2-container10/lib2-container10.component';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';
import { Lib2Component1Component } from './components/lib2-component1/lib2-component1.component';
import {ArchitechSharedLibModule} from '../shared-lib/architech-shared-lib.module';

const routes: Routes = [
  {
    path: '',
    component: Lib2ParentContainerComponent,
    children: [
      {
        path: 'container1',
        component: Lib2Container1Component,
      },
      {
        path: 'container2',
        component: Lib2Container2Component,
      },
      {
        path: 'container3',
        component: Lib2Container3Component,
      },
      {
        path: 'container4',
        component: Lib2Container4Component,
      },
      {
        path: 'container5',
        component: Lib2Container5Component,
      },
      {
        path: 'container6',
        component: Lib2Container6Component,
      },
      {
        path: 'container7',
        component: Lib2Container7Component,
      },
      {
        path: 'container8',
        component: Lib2Container8Component,
      },
      {
        path: 'container9',
        component: Lib2Container9Component,
      },
      {
        path: 'container10',
        component: Lib2Container10Component,
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
  declarations: [Lib2Container1Component, Lib2Container2Component, Lib2ParentContainerComponent, Lib2Container3Component, Lib2Container4Component, Lib2Container5Component, Lib2Container6Component, Lib2Container7Component, Lib2Container8Component, Lib2Container9Component, Lib2Container10Component, Lib2Component1Component]
})
export class ArchitechLib2Module {}
