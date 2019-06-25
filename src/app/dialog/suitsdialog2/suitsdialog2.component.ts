import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { FinalpickedComponent } from '../finalpicked/finalpicked.component';

@Component({
  selector: 'app-suitsdialog2',
  templateUrl: './suitsdialog2.component.html',
  styleUrls: ['./suitsdialog2.component.css']
})
export class Suitsdialog2Component implements OnInit {
  inputText:string;

  constructor(private dialog:MatDialog) { }

  ngOnInit() {
  }
  
YES(inputText):void{
  console.log(inputText);
 const dialogRef= this.dialog.open(FinalpickedComponent,{
    width:"330px"
  });
dialogRef.afterClosed().subscribe(result=>{
  console.log("the dialog was closed");
});
}
}
