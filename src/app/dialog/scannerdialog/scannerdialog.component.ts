import { Component, OnInit } from '@angular/core';
import { PickdialogComponent } from '../pickdialog/pickdialog.component';

import {MatDialog} from '@angular/material/dialog';
@Component({
  selector: 'app-scannerdialog',
  templateUrl: './scannerdialog.component.html',
  styleUrls: ['./scannerdialog.component.css']
})
export class ScannerdialogComponent implements OnInit {
  
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }
  submit():void
  {
  
    const dialogRef = this.dialog.open(PickdialogComponent, { 
      width: '550px',
      height:'550px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      
    });
    
  }

}
