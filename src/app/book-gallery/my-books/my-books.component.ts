import { Component, OnInit, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-my-books',
  templateUrl: './my-books.component.html',
  styleUrls: ['./my-books.component.css']
})
export class MyBooksComponent implements OnInit {
  dataSource: any=[];
  indexOfData: any;

  constructor(private router: Router,private dialog:MatDialog) { }

  ngOnInit() {
    this.dataSource=JSON.parse(localStorage.getItem("MyContent"))

  }
  viewPdf(data) {
    this.router.navigate(['/book-gallery/view-pdf/' + data.book_id])
  }
  deleteContent(msg,template:TemplateRef<any>){
    this.indexOfData=null
    const index: number = this.dataSource.indexOf(msg);
    
    console.log("index of",index)
    this.indexOfData=index
    this.dialog.open(template)
  }
  closeModal(){
    this.dialog.closeAll()
  } 
  delete(){
    console.log("delete is called")
    if (this.indexOfData !== -1) {
      this.dataSource.splice(this.indexOfData, 1);
      localStorage.setItem("MyContent",JSON.stringify(this.dataSource))

    }     
    this.closeModal()
  }
}
