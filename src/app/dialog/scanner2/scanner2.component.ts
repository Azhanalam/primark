import { Component, OnInit } from '@angular/core';
import { SuitsdialogComponent } from '../suitsdialog/suitsdialog.component';
import {MatDialog} from '@angular/material/dialog';
@Component({
  selector: 'app-scanner2',
  templateUrl: './scanner2.component.html',
  styleUrls: ['./scanner2.component.css']
})
export class Scanner2Component implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  submit():void
  {
  
    const dialogRef = this.dialog.open(SuitsdialogComponent, { 
      width: '550px',
      height:'550px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      
    });
    
  }

}
