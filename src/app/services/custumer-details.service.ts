import { Injectable } from '@angular/core';
import { default as data } from '../../customer-details.json';
import { CustomerDetails } from '../models/customer.model';

@Injectable({
  providedIn: 'root',
})
export class CustomersService {
  getUsers(): Promise<CustomerDetails[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        return resolve(data);
      }, 0);
    });
  }

  getCustomersById(id: number): CustomerDetails | undefined {
    return data.find((r: CustomerDetails) => r.id === id);
  }
}
