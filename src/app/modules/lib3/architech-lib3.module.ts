import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Lib3Container1Component } from './containers/lib3-container1/lib3-container1.component';
import { Lib3Container2Component } from './containers/lib3-container2/lib3-container2.component';
import { Lib3ParentContainerComponent } from './containers/lib3-parent-container/lib3-parent-container.component';
import { Lib3Container3Component } from './containers/lib3-container3/lib3-container3.component';
import { Lib3Container4Component } from './containers/lib3-container4/lib3-container4.component';
import { Lib3Container5Component } from './containers/lib3-container5/lib3-container5.component';
import { Lib3Container6Component } from './containers/lib3-container6/lib3-container6.component';
import { Lib3Container7Component } from './containers/lib3-container7/lib3-container7.component';
import { Lib3Container8Component } from './containers/lib3-container8/lib3-container8.component';
import { Lib3Container9Component } from './containers/lib3-container9/lib3-container9.component';
import { Lib3Container10Component } from './containers/lib3-container10/lib3-container10.component';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';
import { Lib3Component1Component } from './components/lib3-component1/lib3-component1.component';
import {ArchitechSharedLibModule} from '../shared-lib/architech-shared-lib.module';

const routes: Routes = [
  {
    path: '',
    component: Lib3ParentContainerComponent,
    children: [
      {
        path: 'container1',
        component: Lib3Container1Component
      },
      {
        path: 'container2',
        component: Lib3Container2Component
      },
      {
        path: 'container3',
        component: Lib3Container3Component
      },
      {
        path: 'container4',
        component: Lib3Container4Component
      },
      {
        path: 'container5',
        component: Lib3Container5Component
      },
      {
        path: 'container6',
        component: Lib3Container6Component
      },
      {
        path: 'container7',
        component: Lib3Container7Component
      },
      {
        path: 'container8',
        component: Lib3Container8Component
      },
      {
        path: 'container9',
        component: Lib3Container9Component
      },
      {
        path: 'container10',
        component: Lib3Container10Component
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
  declarations: [Lib3Container1Component, Lib3Container2Component, Lib3ParentContainerComponent, Lib3Container3Component, Lib3Container4Component, Lib3Container5Component, Lib3Container6Component, Lib3Container7Component, Lib3Container8Component, Lib3Container9Component, Lib3Container10Component, Lib3Component1Component]
})
export class ArchitechLib3Module {
}
