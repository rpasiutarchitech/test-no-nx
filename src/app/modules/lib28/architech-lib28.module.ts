import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Lib28Container1Component } from './containers/lib28-container1/lib28-container1.component';
import { Lib28Container2Component } from './containers/lib28-container2/lib28-container2.component';
import { Lib28ParentContainerComponent } from './containers/lib28-parent-container/lib28-parent-container.component';
import { Lib28Container3Component } from './containers/lib28-container3/lib28-container3.component';
import { Lib28Container4Component } from './containers/lib28-container4/lib28-container4.component';
import { Lib28Container5Component } from './containers/lib28-container5/lib28-container5.component';
import { Lib28Container6Component } from './containers/lib28-container6/lib28-container6.component';
import { Lib28Container7Component } from './containers/lib28-container7/lib28-container7.component';
import { Lib28Container8Component } from './containers/lib28-container8/lib28-container8.component';
import { Lib28Container9Component } from './containers/lib28-container9/lib28-container9.component';
import { Lib28Container10Component } from './containers/lib28-container10/lib28-container10.component';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';
import { Lib28Component1Component } from './components/lib28-component1/lib28-component1.component';
import {ArchitechSharedLibModule} from '../shared-lib/architech-shared-lib.module';

const routes: Routes = [
  {
    path: '',
    component: Lib28ParentContainerComponent,
    children: [
      {
        path: 'container1',
        component: Lib28Container1Component,
      },
      {
        path: 'container2',
        component: Lib28Container2Component,
      },
      {
        path: 'container3',
        component: Lib28Container3Component,
      },
      {
        path: 'container4',
        component: Lib28Container4Component,
      },
      {
        path: 'container5',
        component: Lib28Container5Component,
      },
      {
        path: 'container6',
        component: Lib28Container6Component,
      },
      {
        path: 'container7',
        component: Lib28Container7Component,
      },
      {
        path: 'container8',
        component: Lib28Container8Component,
      },
      {
        path: 'container9',
        component: Lib28Container9Component,
      },
      {
        path: 'container10',
        component: Lib28Container10Component,
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
  declarations: [Lib28Container1Component, Lib28Container2Component, Lib28ParentContainerComponent, Lib28Container3Component, Lib28Container4Component, Lib28Container5Component, Lib28Container6Component, Lib28Container7Component, Lib28Container8Component, Lib28Container9Component, Lib28Container10Component, Lib28Component1Component]
})
export class ArchitechLib28Module {}
