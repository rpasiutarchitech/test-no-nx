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
  // {
  //   path: 'lib2',
  //   loadChildren: () => import('@icann-test/architech/lib2').then(m => m.ArchitechLib2Module)
  // },
  // {
  //   path: 'lib3',
  //   loadChildren: () => import('@icann-test/architech/lib3').then(m => m.ArchitechLib3Module)
  // },
  // {
  //   path: 'lib4',
  //   loadChildren: () => import('@icann-test/architech/lib4').then(m => m.ArchitechLib4Module)
  // },
  // {
  //   path: 'lib5',
  //   loadChildren: () => import('@icann-test/architech/lib5').then(m => m.ArchitechLib5Module)
  // },
  // {
  //   path: 'lib6',
  //   loadChildren: () => import('@icann-test/architech/lib6').then(m => m.ArchitechLib6Module)
  // },
  // {
  //   path: 'lib7',
  //   loadChildren: () => import('@icann-test/architech/lib7').then(m => m.ArchitechLib7Module)
  // },
  // {
  //   path: 'lib8',
  //   loadChildren: () => import('@icann-test/architech/lib8').then(m => m.ArchitechLib8Module)
  // },
  // {
  //   path: 'lib9',
  //   loadChildren: () => import('@icann-test/architech/lib9').then(m => m.ArchitechLib9Module)
  // },
  // {
  //   path: 'lib10',
  //   loadChildren: () => import('@icann-test/architech/lib10').then(m => m.ArchitechLib10Module)
  // },
  // {
  //   path: 'lib11',
  //   loadChildren: () => import('@icann-test/architech/lib11').then(m => m.ArchitechLib11Module)
  // },
  // {
  //   path: 'lib12',
  //   loadChildren: () => import('@icann-test/architech/lib12').then(m => m.ArchitechLib12Module)
  // },
  // {
  //   path: 'lib13',
  //   loadChildren: () => import('@icann-test/architech/lib13').then(m => m.ArchitechLib13Module)
  // },
  // {
  //   path: 'lib14',
  //   loadChildren: () => import('@icann-test/architech/lib14').then(m => m.ArchitechLib14Module)
  // },
  // {
  //   path: 'lib15',
  //   loadChildren: () => import('@icann-test/architech/lib15').then(m => m.ArchitechLib15Module)
  // },
  // {
  //   path: 'lib16',
  //   loadChildren: () => import('@icann-test/architech/lib16').then(m => m.ArchitechLib16Module)
  // },
  // {
  //   path: 'lib17',
  //   loadChildren: () => import('@icann-test/architech/lib17').then(m => m.ArchitechLib17Module)
  // },
  // {
  //   path: 'lib18',
  //   loadChildren: () => import('@icann-test/architech/lib18').then(m => m.ArchitechLib18Module)
  // },
  // {
  //   path: 'lib19',
  //   loadChildren: () => import('@icann-test/architech/lib19').then(m => m.ArchitechLib19Module)
  // },
  // {
  //   path: 'lib20',
  //   loadChildren: () => import('@icann-test/architech/lib20').then(m => m.ArchitechLib20Module)
  // },
  // {
  //   path: 'lib21',
  //   loadChildren: () => import('@icann-test/architech/lib21').then(m => m.ArchitechLib21Module)
  // },
  // {
  //   path: 'lib22',
  //   loadChildren: () => import('@icann-test/architech/lib22').then(m => m.ArchitechLib22Module)
  // },
  // {
  //   path: 'lib23',
  //   loadChildren: () => import('@icann-test/architech/lib23').then(m => m.ArchitechLib23Module)
  // },
  // {
  //   path: 'lib24',
  //   loadChildren: () => import('@icann-test/architech/lib24').then(m => m.ArchitechLib24Module)
  // },
  // {
  //   path: 'lib25',
  //   loadChildren: () => import('@icann-test/architech/lib25').then(m => m.ArchitechLib25Module)
  // },
  // {
  //   path: 'lib26',
  //   loadChildren: () => import('@icann-test/architech/lib26').then(m => m.ArchitechLib26Module)
  // },
  // {
  //   path: 'lib27',
  //   loadChildren: () => import('@icann-test/architech/lib27').then(m => m.ArchitechLib27Module)
  // },
  // {
  //   path: 'lib28',
  //   loadChildren: () => import('@icann-test/architech/lib28').then(m => m.ArchitechLib28Module)
  // },
  // {
  //   path: 'lib29',
  //   loadChildren: () => import('@icann-test/architech/lib29').then(m => m.ArchitechLib29Module)
  // },
  // {
  //   path: 'lib30',
  //   loadChildren: () => import('@icann-test/architech/lib30').then(m => m.ArchitechLib30Module)
  // },
  // {
  //   path: 'publishablelib1',
  //   loadChildren: () => import('@icann-test/architech/publishablelib1').then(m => m.ArchitechPublishablelib1Module)
  // }
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
