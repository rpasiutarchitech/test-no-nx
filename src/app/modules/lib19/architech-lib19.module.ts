import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Lib19Container1Component } from './containers/lib19-container1/lib19-container1.component';
import { Lib19Container2Component } from './containers/lib19-container2/lib19-container2.component';
import { Lib19ParentContainerComponent } from './containers/lib19-parent-container/lib19-parent-container.component';
import { Lib19Container3Component } from './containers/lib19-container3/lib19-container3.component';
import { Lib19Container4Component } from './containers/lib19-container4/lib19-container4.component';
import { Lib19Container5Component } from './containers/lib19-container5/lib19-container5.component';
import { Lib19Container6Component } from './containers/lib19-container6/lib19-container6.component';
import { Lib19Container7Component } from './containers/lib19-container7/lib19-container7.component';
import { Lib19Container8Component } from './containers/lib19-container8/lib19-container8.component';
import { Lib19Container9Component } from './containers/lib19-container9/lib19-container9.component';
import { Lib19Container10Component } from './containers/lib19-container10/lib19-container10.component';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';
import { Lib19Component1Component } from './components/lib19-component1/lib19-component1.component';
import {ArchitechSharedLibModule} from '../shared-lib/architech-shared-lib.module';

const routes: Routes = [
  {
    path: '',
    component: Lib19ParentContainerComponent,
    children: [
      {
        path: 'container1',
        component: Lib19Container1Component,
      },
      {
        path: 'container2',
        component: Lib19Container2Component,
      },
      {
        path: 'container3',
        component: Lib19Container3Component,
      },
      {
        path: 'container4',
        component: Lib19Container4Component,
      },
      {
        path: 'container5',
        component: Lib19Container5Component,
      },
      {
        path: 'container6',
        component: Lib19Container6Component,
      },
      {
        path: 'container7',
        component: Lib19Container7Component,
      },
      {
        path: 'container8',
        component: Lib19Container8Component,
      },
      {
        path: 'container9',
        component: Lib19Container9Component,
      },
      {
        path: 'container10',
        component: Lib19Container10Component,
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
  declarations: [Lib19Container1Component, Lib19Container2Component, Lib19ParentContainerComponent, Lib19Container3Component, Lib19Container4Component, Lib19Container5Component, Lib19Container6Component, Lib19Container7Component, Lib19Container8Component, Lib19Container9Component, Lib19Container10Component, Lib19Component1Component]
})
export class ArchitechLib19Module {}
