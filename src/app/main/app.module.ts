import {
  PlatformLocation,
} from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { OpahRepository } from '../core/repositories/opah.repository';
import { OpahWebRepository } from '../data/repository/opah-web-repository/opah-web.repository';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterModule } from '../view/components/footer.component/footer.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatDialogModule } from '@angular/material/dialog';


export function getBaseHref(platformLocation: PlatformLocation): string {
  return platformLocation.getBaseHrefFromDOM();
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    FlexLayoutModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FooterModule,
    FontAwesomeModule,
    MatDialogModule
  

  
  
    ],
  providers: [{ provide: OpahRepository, useClass: OpahWebRepository }],
  bootstrap: [AppComponent],
})
export class AppModule {}
