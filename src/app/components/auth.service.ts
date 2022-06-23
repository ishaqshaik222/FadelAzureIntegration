import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl: any

  constructor(private _httpClient: HttpClient) {
    this.baseUrl = 'https://localhost:44358/';
     //this.baseUrl = 'http://testugetitapi.fadelsoft.com/';
   }
   public SendMsg(data) {
    debugger
    return this._httpClient.post(this.baseUrl + "api/UIMain/StudentMessage", data, {responseType: 'text'});
  }
  public GetCopyRights() {
    return this._httpClient.get(this.baseUrl + "api/UIMain/GetRightsReserved", {responseType: 'text'});
  }
  public GetCompanydetails() {
    return this._httpClient.get(this.baseUrl + "api/UIMain/Getcompanymaster", {responseType: 'text'});
  }
  public GetCourses(): Observable<any> {
    
    return this._httpClient.get(this.baseUrl + "api/UIMain/GetAllCourses");
  }
  public Gettechnologies() {
    
    return this._httpClient.get(this.baseUrl + "api/UIMain/GetAllTechnologies", {responseType: 'text'});
  }
  public GetcourseById(id) {
    //debugger
    return this._httpClient.get(this.baseUrl + "api/UIMain/GetCourseById", {params: {id}});
  }
  public getchapters(id) {
    
  return this._httpClient.get(this.baseUrl + "api/UIMain/Getcoursecontentbycourseid",{params: {id}});
  }
  public AddCartItem(data:any){
    return this._httpClient.post(this.baseUrl + "api/UIMain/AddCartItem", data, {responseType: 'text'});

  }
  public GetCartItems(id) {
    debugger
  return this._httpClient.get(this.baseUrl + "api/UIMain/GetCartItemsByUserId",{params: {id}});
  }

  public DeleteCartItem(id:any){
    debugger
    return this._httpClient.delete(this.baseUrl + "api/UIMain/DeleteCartItem?id=" + id);

  }

  public PayNow(data:any){
    return this._httpClient.post(this.baseUrl + "api/UIMain/PaymentGateway", data, {responseType: 'text'});

  }

  public GetCoursesForMenu() {
    return this._httpClient.get(this.baseUrl + "api/UIMain/GetCourses", {responseType: 'text'});
  }

  public GetModuleByCourseID(ID:any) {
    
    return this._httpClient.get(this.baseUrl + "api/UIMain/GetModuleByCourseID",{params: {ID}});
  }

  GetQuestions(Id:any){
    return this._httpClient.get(this.baseUrl + "api/UIMain/GetFaqsByCourseId", {params: {Id}});

  }

  public GetSubscribedCoursesByCustomerId(id) {
    //debugger
    return this._httpClient.get(this.baseUrl + "api/UIMain/GetSubscribedCoursesByCustomerId", {params: {id}});
  }

  GetCoursePlans(){
    return this._httpClient.get(this.baseUrl + "api/UIMain/GetCoursePlans");

  }

  GetCoursesPlanId(id:any):Observable<any>{
    return this._httpClient.get(this.baseUrl + "api/UIMain/GetCoursesPlanId?Id="+id);

  }
}
