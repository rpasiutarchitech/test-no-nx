import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Lib22Container1Component } from './containers/lib22-container1/lib22-container1.component';
import { Lib22Container2Component } from './containers/lib22-container2/lib22-container2.component';
import { Lib22ParentContainerComponent } from './containers/lib22-parent-container/lib22-parent-container.component';
import { Lib22Container3Component } from './containers/lib22-container3/lib22-container3.component';
import { Lib22Container4Component } from './containers/lib22-container4/lib22-container4.component';
import { Lib22Container5Component } from './containers/lib22-container5/lib22-container5.component';
import { Lib22Container6Component } from './containers/lib22-container6/lib22-container6.component';
import { Lib22Container7Component } from './containers/lib22-container7/lib22-container7.component';
import { Lib22Container8Component } from './containers/lib22-container8/lib22-container8.component';
import { Lib22Container9Component } from './containers/lib22-container9/lib22-container9.component';
import { Lib22Container10Component } from './containers/lib22-container10/lib22-container10.component';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';
import { Lib22Component1Component } from './components/lib22-component1/lib22-component1.component';
import {ArchitechSharedLibModule} from '../shared-lib/architech-shared-lib.module';

const routes: Routes = [
  {
    path: '',
    component: Lib22ParentContainerComponent,
    children: [
      {
        path: 'container1',
        component: Lib22Container1Component,
      },
      {
        path: 'container2',
        component: Lib22Container2Component,
      },
      {
        path: 'container3',
        component: Lib22Container3Component,
      },
      {
        path: 'container4',
        component: Lib22Container4Component,
      },
      {
        path: 'container5',
        component: Lib22Container5Component,
      },
      {
        path: 'container6',
        component: Lib22Container6Component,
      },
      {
        path: 'container7',
        component: Lib22Container7Component,
      },
      {
        path: 'container8',
        component: Lib22Container8Component,
      },
      {
        path: 'container9',
        component: Lib22Container9Component,
      },
      {
        path: 'container10',
        component: Lib22Container10Component,
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
  declarations: [Lib22Container1Component, Lib22Container2Component, Lib22ParentContainerComponent, Lib22Container3Component, Lib22Container4Component, Lib22Container5Component, Lib22Container6Component, Lib22Container7Component, Lib22Container8Component, Lib22Container9Component, Lib22Container10Component, Lib22Component1Component]
})
export class ArchitechLib22Module {}
