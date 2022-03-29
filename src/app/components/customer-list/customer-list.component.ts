import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from 'src/app/models/customer.model';
import { CustomersListService } from 'src/app/services/customer-list.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss'],
})
export class CustomerListComponent implements OnInit {
  customerList: Customer[] = [];

  constructor(
    private customersListService: CustomersListService,
    private router: Router
  ) {}

  async loadCustomerslist() {
    this.customerList = await this.customersListService.getCustomerlist();
  }

  ngOnInit() {
    this.loadCustomerslist();
  }

  goToDetails({ id }: Customer) {
    this.router.navigate(['details', id]);
  }
}
