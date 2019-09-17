import { Injectable } from '@angular/core';
import {HttpService} from 'src/app/service/http.service';

@Injectable({
  providedIn: 'root'
})
export class MessageService extends HttpService {
  send(data:object) {
    return this.post('message/send', data);
  }
}
