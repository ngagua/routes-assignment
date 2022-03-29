import { Injectable } from '@angular/core';
import { default as data } from '../../customer-list.json';
import { Customer } from '../models/customer.model';

@Injectable({
  providedIn: 'root',
})
export class CustomersListService {
  getCustomerlist(): Promise<Customer[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        return resolve(data);
      }, 0);
    });
  }
}
