import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-storemap',
  templateUrl: './storemap.component.html',
  styleUrls: ['./storemap.component.css']
})
export class StoremapComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
    
  }
  submit(){
    this.router.navigate(["product"]);
    window.scrollTo(0, 0);
  }

}
