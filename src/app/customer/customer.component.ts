import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  customers: any;
  constructor(private customerService: CustomerService) {
  }
  ngOnInit() {
    this.getEmployees();
  }
  getEmployees() {
    this.customerService.getCustomers().subscribe((res: any) => {
      console.log('Result here', res);
      this.customers = res.data;
      });
  }
}
