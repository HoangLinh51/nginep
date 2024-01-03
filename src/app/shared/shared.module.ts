import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NavComponent } from '../layout/nav/nav.component';
import { HeaderComponent } from '../layout/header/header.component';
import { FooterComponent } from '../layout/footer/footer.component';

import { TabViewModule } from 'primeng/tabview';
import { MenuModule } from 'primeng/menu';
import { DialogModule } from 'primeng/dialog';
import { DataViewModule } from 'primeng/dataview';
import { CalendarModule } from 'primeng/calendar';
import { InputTextModule } from 'primeng/inputtext';
import { StepsModule } from 'primeng/steps';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { DropdownModule } from 'primeng/dropdown';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    TabViewModule,
    MenuModule,
    DialogModule,
    FormsModule,
    ReactiveFormsModule,
    DataViewModule,
    CalendarModule,
    InputTextModule,
    StepsModule,
    InputTextareaModule,
    DropdownModule,
  ],
  declarations: [NavComponent, HeaderComponent, FooterComponent],
  exports: [
    CommonModule,
    RouterModule,
    TabViewModule,
    DialogModule,
    MenuModule,
    NavComponent,
    HeaderComponent,
    FooterComponent,
    FormsModule,
    ReactiveFormsModule,
    DataViewModule,
    CalendarModule,
    InputTextModule,
    StepsModule,
    InputTextareaModule,
    DropdownModule,
  ],
})
export class SharedModule {}
