import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-read-book',
  templateUrl: './read-book.component.html',
  styleUrls: ['./read-book.component.css']
})
export class ReadBookComponent implements OnInit {
  dataSourse: any=[];
  id: any;
  src: any;
  newUrl: any;

  constructor(private route:ActivatedRoute,private sanitizer:DomSanitizer) { }
  totalPages: number;
  page: number = 1;
  isLoaded: boolean = false;


     nextPage() {
        this.page += 1;
      }

      previousPage() {
        this.page -= 1;
      }

      afterLoadComplete(pdfData: any) {
        this.totalPages = pdfData.numPages;
        this.isLoaded = true;
      }
  ngOnInit() {
    this.dataSourse=JSON.parse(localStorage.getItem("MyContent"))
    this.route.params.subscribe((param:Params)=> {
      this.id=param['id']
    })
    console.log(this.id)
    for(let i=0;i<this.dataSourse.length;i++){
      if(this.dataSourse[i].book_id===Number(this.id)){
        console.log("data",this.dataSourse[i].pdfUrl)
        this.src=this.dataSourse[i].pdfUrl
        this.newUrl=this.sanitizer.bypassSecurityTrustResourceUrl(this.src);

      }
    }
  }
  photoURL(url) {
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }
}
