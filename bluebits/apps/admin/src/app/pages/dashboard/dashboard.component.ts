import { Component, OnInit, ViewEncapsulation } from "@angular/core";

@Component({
  selector: "admin-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"],
  encapsulation: ViewEncapsulation.Emulated
})
export class DashboardComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
