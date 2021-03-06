import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http : HttpClient) { }

  url = 'http://localhost:5000';

  getAll(){
    return this.http.get(this.url+'/products');
  }
  getById(id){
    return this.http.get(this.url+'/product/'+id);
  }
  save(body : Product){
    return this.http.post(this.url+'/product' , body);
  }
  edit(body : Product){
    return this.http.put(this.url+'/product' , body);
  }
  
  delete(id){
    return this.http.delete(this.url+'/product/'+id);

  }
  getAllCategories(){
    return this.http.get(this.url+'/categories');
  }
}
