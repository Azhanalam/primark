import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { Store3Component } from '../dialog/store3/store3.component';


@Component({
  selector: 'app-storemap3',
  templateUrl: './storemap3.component.html',
  styleUrls: ['./storemap3.component.css']
})
export class Storemap3Component implements OnInit {

  constructor(private dialog:MatDialog) { }

  ngOnInit() {
  }
  submit():void{
    const dialogRef = this.dialog.open(Store3Component,{
      width: '517px',
    });
    dialogRef.afterClosed().subscribe(result=>{
      console.log('the dialog was closed');
    });
    window.scrollTo(0,0);
  }
}
