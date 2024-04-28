import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CustomerService } from '../../service/customer.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-get-all-costumers',
  standalone: true,
  imports: [RouterLink,CommonModule],
  templateUrl: './get-all-costumers.component.html',
  styleUrl: './get-all-costumers.component.scss'
})
export class GetAllCostumersComponent {

  customers: any = [];

  constructor(private customerService: CustomerService){}
  
  ngOnInit(){
    this.getAllCustomers();
  }

  getAllCustomers() {
    this.customerService.getAllCustomer().subscribe((res)=>{
      console.log(res);
      this.customers=res;
    })
  }

  deleteCustomer(id:number) {
    this.customerService.deleteCustomer(id).subscribe((res)=>{
      console.log(res);
    this.getAllCustomers();
    })
  }

}
