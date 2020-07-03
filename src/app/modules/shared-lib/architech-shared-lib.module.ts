import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponent1Component } from './components/shared-component1/shared-component1.component';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
  imports: [CommonModule, MatIconModule, MatDividerModule, MatButtonModule, MatCardModule, MatExpansionModule, MatFormFieldModule, MatInputModule, MatListModule, MatTabsModule],
  declarations: [SharedComponent1Component],
  exports: [SharedComponent1Component]
})
export class ArchitechSharedLibModule {
}
