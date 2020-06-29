import { Component, OnInit } from '@angular/core';
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  url:string
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H',url:"../../assets/image/images.png"},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He',url:"../../assets/image/test1.png"},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li',url:"../../assets/image/test2.jpg"},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be',url:"../../assets/image/images.png"},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B',url:"../../assets/image/images.png"},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C',url:"../../assets/image/images.png"},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N',url:"../../assets/image/images.png"},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O',url:"../../assets/image/images.png"},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F',url:"../../assets/image/images.png"},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne',url:"../../assets/image/images.png"},
];

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;
  url='https://material.angular.io/assets/img/examples/shiba1.jpg';
  src: "https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf";
  constructor() { }

  ngOnInit() {
  
  }
open(){
  this.src= "https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf";

}
}

