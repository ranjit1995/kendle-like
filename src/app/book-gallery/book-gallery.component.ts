import { Component, OnInit } from '@angular/core';
import { bookCollection } from './dataFile.ts/books';
@Component({
  selector: 'app-book-gallery',
  templateUrl: './book-gallery.component.html',
  styleUrls: ['./book-gallery.component.css']
})
export class BookGalleryComponent implements OnInit {
  dataSource = bookCollection;
  constructor() { 
    localStorage.setItem("booksCollection",JSON.stringify(this.dataSource))
  }

  ngOnInit() {
  }

}
