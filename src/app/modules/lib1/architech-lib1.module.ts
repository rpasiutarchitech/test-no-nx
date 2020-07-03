import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {Lib1Container1Component} from './containers/lib1-container1/lib1-container1.component';
import {Lib1Container2Component} from './containers/lib1-container2/lib1-container2.component';
import {Lib1ParentContainerComponent} from './containers/lib1-parent-container/lib1-parent-container.component';
import {Lib1Container3Component} from './containers/lib1-container3/lib1-container3.component';
import {Lib1Container4Component} from './containers/lib1-container4/lib1-container4.component';
import {Lib1Container5Component} from './containers/lib1-container5/lib1-container5.component';
import {Lib1Container6Component} from './containers/lib1-container6/lib1-container6.component';
import {Lib1Container7Component} from './containers/lib1-container7/lib1-container7.component';
import {Lib1Container8Component} from './containers/lib1-container8/lib1-container8.component';
import {Lib1Container9Component} from './containers/lib1-container9/lib1-container9.component';
import {Lib1Container10Component} from './containers/lib1-container10/lib1-container10.component';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatTabsModule} from '@angular/material/tabs';
import {Lib1Component1Component} from './components/lib1-component1/lib1-component1.component';
import {ArchitechSharedLibModule} from '../shared-lib/architech-shared-lib.module';

const routes: Routes = [
  {
    path: '',
    component: Lib1ParentContainerComponent,
    children: [
      {
        path: 'container1',
        component: Lib1Container1Component,
      },
      {
        path: 'container2',
        component: Lib1Container2Component,
      },
      {
        path: 'container3',
        component: Lib1Container3Component,
      },
      {
        path: 'container4',
        component: Lib1Container4Component,
      },
      {
        path: 'container5',
        component: Lib1Container5Component,
      },
      {
        path: 'container6',
        component: Lib1Container6Component,
      },
      {
        path: 'container7',
        component: Lib1Container7Component,
      },
      {
        path: 'container8',
        component: Lib1Container8Component,
      },
      {
        path: 'container9',
        component: Lib1Container9Component,
      },
      {
        path: 'container10',
        component: Lib1Container10Component,
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
  declarations: [Lib1Container1Component, Lib1Container2Component, Lib1ParentContainerComponent, Lib1Container3Component, Lib1Container4Component, Lib1Container5Component, Lib1Container6Component, Lib1Container7Component, Lib1Container8Component, Lib1Container9Component, Lib1Container10Component, Lib1Component1Component]
})
export class ArchitechLib1Module {}
