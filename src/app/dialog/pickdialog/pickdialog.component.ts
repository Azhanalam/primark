import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-pickdialog',
  templateUrl: './pickdialog.component.html',
  styleUrls: ['./pickdialog.component.css']
})
export class PickdialogComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  YES(){
    this.router.navigate(["order"]);
    window.scrollTo(0, 0);
  }
}
