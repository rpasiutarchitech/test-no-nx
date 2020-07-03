import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: 'lib1',
    loadChildren: () => import('./modules/lib1/architech-lib1.module').then(m => m.ArchitechLib1Module)
  },
  {
    path: 'lib2',
    loadChildren: () => import('./modules/lib2/architech-lib2.module').then(m => m.ArchitechLib2Module)
  },
  {
    path: 'lib3',
    loadChildren: () => import('./modules/lib3/architech-lib3.module').then(m => m.ArchitechLib3Module)
  },
  {
    path: 'lib4',
    loadChildren: () => import('./modules/lib4/architech-lib4.module').then(m => m.ArchitechLib4Module)
  },
  {
    path: 'lib5',
    loadChildren: () => import('./modules/lib5/architech-lib5.module').then(m => m.ArchitechLib5Module)
  },
  {
    path: 'lib6',
    loadChildren: () => import('./modules/lib6/architech-lib6.module').then(m => m.ArchitechLib6Module)
  },
  {
    path: 'lib7',
    loadChildren: () => import('./modules/lib7/architech-lib7.module').then(m => m.ArchitechLib7Module)
  },
  {
    path: 'lib8',
    loadChildren: () => import('./modules/lib8/architech-lib8.module').then(m => m.ArchitechLib8Module)
  },
  {
    path: 'lib9',
    loadChildren: () => import('./modules/lib9/architech-lib9.module').then(m => m.ArchitechLib9Module)
  },
  {
    path: 'lib10',
    loadChildren: () => import('./modules/lib10/architech-lib10.module').then(m => m.ArchitechLib10Module)
  },
  {
    path: 'lib11',
    loadChildren: () => import('./modules/lib11/architech-lib11.module').then(m => m.ArchitechLib11Module)
  },
  {
    path: 'lib12',
    loadChildren: () => import('./modules/lib12/architech-lib12.module').then(m => m.ArchitechLib12Module)
  },
  {
    path: 'lib13',
    loadChildren: () => import('./modules/lib13/architech-lib13.module').then(m => m.ArchitechLib13Module)
  },
  {
    path: 'lib14',
    loadChildren: () => import('./modules/lib14/architech-lib14.module').then(m => m.ArchitechLib14Module)
  },
  {
    path: 'lib15',
    loadChildren: () => import('./modules/lib15/architech-lib15.module').then(m => m.ArchitechLib15Module)
  },
  {
    path: 'lib16',
    loadChildren: () => import('./modules/lib16/architech-lib16.module').then(m => m.ArchitechLib16Module)
  },
  {
    path: 'lib17',
    loadChildren: () => import('./modules/lib17/architech-lib17.module').then(m => m.ArchitechLib17Module)
  },
  {
    path: 'lib18',
    loadChildren: () => import('./modules/lib18/architech-lib18.module').then(m => m.ArchitechLib18Module)
  },
  {
    path: 'lib19',
    loadChildren: () => import('./modules/lib19/architech-lib19.module').then(m => m.ArchitechLib19Module)
  },
  {
    path: 'lib20',
    loadChildren: () => import('./modules/lib20/architech-lib20.module').then(m => m.ArchitechLib20Module)
  },
  {
    path: 'lib21',
    loadChildren: () => import('./modules/lib21/architech-lib21.module').then(m => m.ArchitechLib21Module)
  },
  {
    path: 'lib22',
    loadChildren: () => import('./modules/lib22/architech-lib22.module').then(m => m.ArchitechLib22Module)
  },
  {
    path: 'lib23',
    loadChildren: () => import('./modules/lib23/architech-lib23.module').then(m => m.ArchitechLib23Module)
  },
  {
    path: 'lib24',
    loadChildren: () => import('./modules/lib24/architech-lib24.module').then(m => m.ArchitechLib24Module)
  },
  {
    path: 'lib25',
    loadChildren: () => import('./modules/lib25/architech-lib25.module').then(m => m.ArchitechLib25Module)
  },
  {
    path: 'lib26',
    loadChildren: () => import('./modules/lib26/architech-lib26.module').then(m => m.ArchitechLib26Module)
  },
  {
    path: 'lib27',
    loadChildren: () => import('./modules/lib27/architech-lib27.module').then(m => m.ArchitechLib27Module)
  },
  {
    path: 'lib28',
    loadChildren: () => import('./modules/lib28/architech-lib28.module').then(m => m.ArchitechLib28Module)
  },
  {
    path: 'lib29',
    loadChildren: () => import('./modules/lib29/architech-lib29.module').then(m => m.ArchitechLib29Module)
  },
  {
    path: 'lib30',
    loadChildren: () => import('./modules/lib30/architech-lib30.module').then(m => m.ArchitechLib30Module)
  },
  {
    path: 'publishablelib1',
    loadChildren: () => import('./modules/publishablelib1/architech-publishablelib1.module').then(m => m.ArchitechPublishablelib1Module)
  }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
