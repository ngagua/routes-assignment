import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CustomerDetails } from 'src/app/models/customer.model';
import { CustomersService } from 'src/app/services/custumer-details.service';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.scss'],
})
export class CustomerDetailsComponent implements OnInit {
  customerDetails: CustomerDetails[] = [];
  customerdetail: CustomerDetails | undefined;

  constructor(
    private customersService: CustomersService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.customerdetail = this.customersService.getCustomersById(Number(id));
  }
}
