import { Component, OnInit } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list.component.html',
  styleUrls: ['./sales-person-list.component.css']
})

export class SalesPersonListComponent implements OnInit {

  salesPersonList : SalesPerson[] = [
    new SalesPerson("Deepak", "Mishra", "deepak@mishra.com", 240000),
    new SalesPerson("Vijaya", "Mishra", "vijaya@mishra.com", 383000),
    new SalesPerson("Divit", "Mishra", "divit@mishra.com", 4324234234),
    new SalesPerson("Sobhiya", "Mishra", "sobhiya@mishra.com", 4444),
    new SalesPerson("Sangeeta", "Mishra", "deepak@mishra.com", 2324232),
];

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
