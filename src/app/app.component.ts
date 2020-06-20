import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private router:Router,private route:ActivatedRoute) {

  }

  ngOnInit(): void {
    //throw new Error("Method not implemented.");
  }
}
