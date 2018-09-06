import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  constructor( private route: ActivatedRoute, private router: Router ) {
    this.route.params.subscribe( res => console.log(res.id));
  }

  ngOnInit() {
  }

  sendMeToOffers(){
    this.router.navigate(['offers']);
  }

}
