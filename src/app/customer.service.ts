import { CUSTOMERS } from './mock-customers';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';



const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable()
export class CustomerService {
  constructor(private http: HttpClient) { }
  getCustomers() {
   /* return CUSTOMERS; */
   return this.http.get('http://localhost:5000/api/employees');
  }
}
