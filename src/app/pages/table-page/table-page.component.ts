import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-table-page',
  templateUrl: './table-page.component.html',
  styleUrls: ['./table-page.component.scss']
})
export class TablePageComponent {
  @Input('displayedColumns') displayedColumns: string[] = [];
  @Input('dataSource') dataSource: any;
}
