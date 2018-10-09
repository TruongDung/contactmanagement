import { Output, EventEmitter, Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Group } from './model/group.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class GroupsService {
  private _url : string = "http://localhost:50778/api/group/";

  constructor(private http: HttpClient) { }

  private messageSource = new BehaviorSubject('');
  currentMessage = this.messageSource.asObservable();

  public changeMessage(message: string) {
    this.messageSource.next(message);
  }

  public getGroups(){
    return this.http.get<Array<Group>>(this._url);
  }

  public getGroup(id: string){
    return this.http.get<Group>(this.getResourceUrl(id));
  }

  public postGroup(group: Group){
    return this.http.post(this._url, group);
  }

  public putGroup(id: string, group: Group){
    return this.http.put(this.getResourceUrl(id), group);
  }

  public deleteGroup(id: string){
    return this.http.delete(this.getResourceUrl(id));
  }

  private getResourceUrl(id: string): string{
    return this._url + `${id}`;
  }

  public reloadEvent() {
    this.messageSource.next("reload");
  }
}
