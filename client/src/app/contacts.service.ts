import { Output, EventEmitter, Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Contact } from './model/contact.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  private _url : string = "http://localhost:50778/api/contact/";
  private _urlSearch : string = "http://localhost:50778/api/search/";

  private messageSource = new BehaviorSubject('');
  currentMessage = this.messageSource.asObservable();

  public changeMessage(message: string) {
    this.messageSource.next(message);
  }

  constructor(private http: HttpClient) { }

  public reloadEvent() {
    this.messageSource.next("reload");
  }
  public getContacts(){
    return this.http.get<Array<Contact>>(this._url);
  }

  public searchContacts(value){
    return this.http.get<Array<Contact>>(this.getResourceUrlSearch(value));
  }

  public getContact(id: string){
    return this.http.get<Contact>(this.getResourceUrl(id));
  }

  public postContact(contact: Contact){
    return this.http.post(this._url, contact);
  }

  public putContact(id: string, contact: Contact){
    return this.http.put(this.getResourceUrl(id), contact);
  }

  public deleteContact(id: string){
    return this.http.delete(this.getResourceUrl(id));
  }

  private getResourceUrl(id: string): string{
    return this._url + `${id}`;
  }

  private getResourceUrlSearch(value: string): string{
    return this._urlSearch + `${value}`;
  }
}
