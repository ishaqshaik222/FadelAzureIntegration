import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { protectedResources } from 'src/auth-config';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  //url = protectedResources.todoListApi.endpoint;

  baseUrl: any
  httpHeader = { headers: new HttpHeaders({
    'NoAuth': 'True',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
    'Access-Control-Allow-Headers': 'X-Requested-With,content-type',
    'Access-Control-Allow-Credentials': 'true'
  })};
  
  constructor(private _httpClient: HttpClient) {
     //this.baseUrl = 'https://localhost:44328/';
     this.baseUrl = 'https://testugetitapi.fadelsoft.com/';
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
  public GetCartItems(id:any):Observable<any> {
    debugger
    // return this._httpClient.get(this.url + "GetCartItemsByUserId?id="+id);

  return this._httpClient.get(this.baseUrl + "api/UIMain/GetCartItemsByUserId?id="+id);
  }

  public DeleteCartItem(data:any){
    debugger
    return this._httpClient.post(this.baseUrl + "api/UIMain/DeleteCartItem" , data);

  }

  public PayNow(data:any){
    return this._httpClient.post(this.baseUrl + "api/UIMain/PaymentGateway", data, {responseType: 'text'});

  }

  public PayUGateway(data:any):Observable<any>{
    debugger
    return this._httpClient.post(this.baseUrl + "api/UIMain/Demo1", data);

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

  public GetSubscribedCourses(id:any):Observable<any> {
    //debugger
    return this._httpClient.get(this.baseUrl + "api/UIMain/GetSubscribedCourses?Id="+id);
  }

  public GetRelatedCourses(id:any):Observable<any> {
    //debugger
    return this._httpClient.get(this.baseUrl + "api/UIMain/GetRelatedcourses?Id="+id);
  }
  GetCoursePlans(){
    return this._httpClient.get(this.baseUrl + "api/UIMain/GetCoursePlans");

  }

  GetAllCoursePlans(){
    return this._httpClient.get(this.baseUrl + "api/UIMain/GetAllCoursePlans");

  }

  GetCoursesPlanId(id:any):Observable<any>{
    return this._httpClient.get(this.baseUrl + "api/UIMain/GetCoursesPlanId?Id="+id);

  }

  GetCoursePlanById(id:any):Observable<any>{
    return this._httpClient.get(this.baseUrl + "api/UIMain/GetCoursePlanById?Id="+id);

  }

  public GetInstructorDetailsbasedOncourse(id) {
    
    return this._httpClient.get(this.baseUrl + "api/UIMain/GetInstructorDetailsbasedOncourse?Id="+id);
    }

    public GetFacultyById(id):Observable<any> {
      debugger
      return this._httpClient.get(this.baseUrl + "api/UIMain/GetFacultyById?Id="+id);
    }

    public GetCoursesByFaculty(id):Observable<any> {
      debugger
      return this._httpClient.get(this.baseUrl + "api/UIMain/GetCoursesByFaculty?Id="+id);
    }

    public GetMyOrders(id):Observable<any> {
      debugger
      return this._httpClient.get(this.baseUrl + "api/UIMain/GetMyOrders?Id="+id);
    }

    public GetBannerContent():Observable<any> {
      debugger
      return this._httpClient.get(this.baseUrl + "api/UIMain/GetBannerContent");
    }

    public GetReceiptData(id,invoiceno):Observable<any> {
      debugger
      return this._httpClient.get(this.baseUrl + "api/UIMain/GetReceiptData?Id="+id+"&InvoiceNo="+invoiceno);
    }
    public GetInvoiceNo():Observable<any> {
      debugger
      return this._httpClient.get(this.baseUrl + "api/UIMain/GenerateInvoiceNo");
    }

    public GetRatingsByCourseId(Id:any):Observable<any> {
      debugger
      return this._httpClient.get(this.baseUrl + "api/UIMain/GetRatings?courseId="+Id);
    }

    public GetAllRatingsAndComments():Observable<any> {
      debugger
      return this._httpClient.get(this.baseUrl + "api/UIMain/GetAllRatings");
    }

}
