import { Component, OnInit } from '@angular/core';


declare var $: any;
//direct link of jquery
//or install using npm
//then include on angular.json under scripts
//declare var $:any;
//import OnInint - implement OnInit then put under ngOnInit

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public isCollapsed = false;
  public navbarCollapsed = true;

  id: string = "myNavBar"
  ngOnInit() {
    

  }

  title = "Emm's Kitchen 2.0";
}
