import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-skills",
  templateUrl: "./skills.component.html",
  styleUrls: ["./skills.component.css"],
})
export class SkillsComponent implements OnInit {
  //added new skills
  skills = ["Abstract Mathematics", "Philosophy", "Developing software"];

  //constructor
  constructor() {}

  ngOnInit() {}
}
