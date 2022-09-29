import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { FileuploadComponent } from './components/fileupload/fileupload.component';
import { EventsListComponent } from './events/events-list/events-list.component';
import { EventsAppComponent } from './events-app/events-app.component';
import { EventThumbnailComponent } from './events/event-thumbnail/event-thumbnail.component';
import { NavbarComponent } from './nav/navbar/navbar.component';
import { FormsModule } from "@angular/forms"

@NgModule({
  declarations: [
    AppComponent,
    FileuploadComponent,
    EventsListComponent,
    EventsAppComponent,
    EventThumbnailComponent,
    NavbarComponent
  ],
  imports: [
    
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatInputModule,
    MatDialogModule,
    CommonModule,
    FormsModule
  ],
  providers: [{
    provide: MatDialogRef,
    useValue: {}
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
