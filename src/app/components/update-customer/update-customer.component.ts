import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from '../../service/customer.service';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-customer',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './update-customer.component.html',
  styleUrl: './update-customer.component.scss',
})
export class UpdateCustomerComponent {
  updateCustomerForm: FormGroup;
  id:number = this.activatedRoute.snapshot.params["id"];

  constructor(
    private activatedRoute: ActivatedRoute,
    private service: CustomerService,
    private fb:FormBuilder,
    private router:Router
  ) {
    this.updateCustomerForm = this.fb.group({
      name: [null, [Validators.required]],
      phone: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]]
    });
  }

  ngOnInit() {
    this.getCustomerById();
  }

  getCustomerById() {
    this.service.getCustomerById(this.id).subscribe((res)=>{
      console.log(res);
      this.updateCustomerForm.patchValue(res);
    })
  }

  updateCustomer() {
    this.service.updateCustomer(this.id,this.updateCustomerForm.value).subscribe((res)=>{
      console.log(res);
      if(res.id != null){
        this.router.navigateByUrl("");
      }
    })
  }

}
