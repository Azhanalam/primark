import { Component, OnInit } from '@angular/core';
import { Suitsdialog2Component } from '../suitsdialog2/suitsdialog2.component';
import {MatDialog} from '@angular/material/dialog';
@Component({
  selector: 'app-scanner3',
  templateUrl: './scanner3.component.html',
  styleUrls: ['./scanner3.component.css']
})
export class Scanner3Component implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }
  submit():void
  {
  
    const dialogRef = this.dialog.open(Suitsdialog2Component, { 
      width: '550px',
      height:'550px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      
    });
    
  }
}
