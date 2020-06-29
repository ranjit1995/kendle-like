import { Component, OnInit, TemplateRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { bookCollection } from '../dataFile.ts/books';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  myContent: any = [];
  myContents: any = [];
  dataSource: any = [];
  indexOfData: any;
  constructor(private dialog: MatDialog, private snackBar: MatSnackBar, private router: Router) {
    this.dataSource = bookCollection
  }

  ngOnInit() {
    let bookGallery = JSON.parse(localStorage.getItem("booksCollection"))
    let contentItem = JSON.parse(localStorage.getItem("MyContent"))
    if (contentItem === null || contentItem === undefined) {
      localStorage.setItem("MyContent", JSON.stringify(this.myContent))
    } else {
      this.myContents = contentItem
    }
  }
  addContent(addDataValue, contentId) {
    if (this.myContents.length > 0) {
      const dataLength = this.myContents.length
      for (let i = 0; i < this.myContents.length; i++) {
        if (this.myContents[i].book_id != Number(contentId)) {
          this.myContents.push(addDataValue)
          this.myContents.forEach((item, index) => {
            if (index !== this.myContents.findIndex(i => i.name === item.name)) {
              this.myContents.splice(index, 1);
            }

          });
          localStorage.setItem("MyContent", JSON.stringify(this.myContents))
          this.snackBar.open("Book already exit.", "OK", {
            duration: 3000
          })
        }
        if (this.myContents[i].book_id === Number(contentId)) {
          this.snackBar.open("Book successfully added.", "OK", {
            duration: 2000
          })
        }
      }
    }
    if (this.myContents.length === 0) {
      this.myContents.push(addDataValue)
      localStorage.setItem("MyContent", JSON.stringify(this.myContents))
      this.snackBar.open("Book successfully added.", "OK", {
        duration: 2000
      })
    }

  }
  viewPdf(data) {
    this.router.navigate(['/book-gallery/view-pdf/' + data.book_id])
  }
  deleteContent(msg, template: TemplateRef<any>) {
    this.indexOfData = null
    const index: number = this.dataSource.indexOf(msg);
    this.indexOfData = index
    this.dialog.open(template)
  }
  closeModal() {
    this.dialog.closeAll()
  }
  delete() {
    if (this.indexOfData !== -1) {
      this.dataSource.splice(this.indexOfData, 1);
    }
    localStorage.setItem("booksCollection", JSON.stringify(this.dataSource))
    this.closeModal()
  }
}
