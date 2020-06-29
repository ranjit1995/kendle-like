import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BookGalleryComponent } from './book-gallery/book-gallery.component';
import { HomeComponent } from './book-gallery/home/home.component';
import { ReadBookComponent } from './book-gallery/read-book/read-book.component';
import { DeleteAlertComponent } from './book-gallery/delete-alert/delete-alert.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AddBookComponent } from './book-gallery/add-book/add-book.component';
import { MaterialsModule } from './materials/materials.module';
import { MyBooksComponent } from './book-gallery/my-books/my-books.component';

@NgModule({
  declarations: [
    AppComponent,
    BookGalleryComponent,
    HomeComponent,
    ReadBookComponent,
    DeleteAlertComponent,
    HeaderComponent,
    FooterComponent,
    AddBookComponent,
    MyBooksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
