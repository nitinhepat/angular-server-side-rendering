import { Injectable } from '@angular/core';
import { TransferState } from '@angular/platform-browser';
import { Observable, from } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class TransferHttpService {

  constructor(private transferHttp: TransferState,private httpClient: HttpClient) { }

  get(url,options?): Observable<any>{
    return this.getData(url,options,()=>{
      return this.httpClient.delete(url,options)
  })
  }

  post(url,body,options?): Observable<any>{

    return this.getData(url,options,()=>{
        return this.httpClient.post(url,body,options)
    })

  }

  delete(url,options?): Observable<any>{
    return this.getData(url,options,()=>{
      return this.httpClient.delete(url,options)
  })
  }

  put(url,body,options?): Observable<any>{
    return this.getData(url,options,()=>{
      return this.httpClient.put(url,body,options)
  })
  }
  getData(url,options,callback): Observable<any>{
    const optionsString = options ? JSON.stringify(options): '';
    let key = `${url+optionsString}`;
    let result;
    try {
      return  this.resolveData(key)
    } catch(e){
      return callback()
      
    }
  }

  resolveData(key){
    const resultData: any = this.getFromCache(key);
    if(!resultData){
      throw new Error()
    }

    return from(Promise.resolve(resultData))
  }
  setCache(key,value){
    this.transferHttp.set(key,value)
  }

  getFromCache(key){
    this.transferHttp.get(key,null) // null set as default value
  }
}
