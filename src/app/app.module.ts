import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import {FlexLayoutModule} from '@angular/flex-layout';
import {
  MatIconModule, MatButtonModule, MatSidenavModule, MatToolbarModule,
  MatCardModule
} from '@angular/material';
import { SliderModule } from 'angular-image-slider';
import {MatDialogModule} from '@angular/material/dialog';

import { OrderDetailsComponent } from './order-details/order-details.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { HeaderComponent } from './header/header.component';
import { Header2Component } from './header2/header2.component';
import { ScannerdialogComponent } from './dialog/scannerdialog/scannerdialog.component';
import { PickdialogComponent } from './dialog/pickdialog/pickdialog.component';
import { SuitsdialogComponent } from './dialog/suitsdialog/suitsdialog.component';
import { Scanner2Component } from './dialog/scanner2/scanner2.component';
import { Scanner3Component } from './dialog/scanner3/scanner3.component';
import { Suitsdialog2Component } from './dialog/suitsdialog2/suitsdialog2.component';


@NgModule({
  declarations: [
    AppComponent,
    OrderDetailsComponent,
    ProductDetailsComponent,
    HeaderComponent,
    Header2Component,
    ScannerdialogComponent,
    PickdialogComponent,
    SuitsdialogComponent,
    Scanner2Component,
    Scanner3Component,
    Suitsdialog2Component,
    
  ],
  imports: [
    MatDialogModule,
    SliderModule,
    MatCardModule,
    FlexLayoutModule,
    FormsModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  entryComponents: [
    Suitsdialog2Component,
    Scanner2Component,
    Scanner3Component,
    SuitsdialogComponent,
    ScannerdialogComponent,
    PickdialogComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
