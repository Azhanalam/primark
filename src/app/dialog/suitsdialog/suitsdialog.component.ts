import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-suitsdialog',
  templateUrl: './suitsdialog.component.html',
  styleUrls: ['./suitsdialog.component.css']
})
export class SuitsdialogComponent implements OnInit {
  inputText:string;

  constructor(private router:Router) { }

  ngOnInit() {
  }
 
  YES(inputText){
    console.log(inputText);
    this.router.navigate(["map3"]);
    window.scrollTo(0,0);
  }
}
