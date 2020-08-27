import { Component, OnInit } from '@angular/core';
import * as data from './searchdata.json';

@Component({
  selector: 'app-search-text',
  templateUrl: './search-text.component.html',
  styleUrls: ['./search-text.component.scss'],
})
export class SearchTextComponent implements OnInit {
  public pets: any = (data as any).default;
  constructor() {}

  ngOnInit(): void {}
}
