import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  isShowTaskContainer = "block"
  action = "false"

  constructor() { }

  ngOnInit(): void {
  }

  onPressDeleteTask()
  {
    this.isShowTaskContainer = "none"
    this.action = "true"
  }
}