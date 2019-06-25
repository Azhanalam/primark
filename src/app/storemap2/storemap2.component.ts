import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { Store2Component } from '../dialog/store2/store2.component';

@Component({
  selector: 'app-storemap2',
  templateUrl: './storemap2.component.html',
  styleUrls: ['./storemap2.component.css']
})
export class Storemap2Component implements OnInit {

  constructor(private dialog:MatDialog) { }

  ngOnInit() {
  }
submit():void{
  const dialogRef = this.dialog.open(Store2Component,{
    width: '370px',
  });
  dialogRef.afterClosed().subscribe(result=>{
    console.log('the dialog was closed');
  })
  window.scrollTo(0,0);
}
}
