import { Component, OnInit } from '@angular/core';
import {DataService} from '../services/data.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor(private data: DataService) { }

  ngOnInit() {
    this.getListBooks();
  }

  getListBooks(){
    this.data.getAllBooks().subscribe(books => console.log(books));
  }
}
