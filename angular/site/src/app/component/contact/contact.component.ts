import { Component, OnInit } from '@angular/core';
import {FormControl, FormBuilder} from "@angular/forms";
import {Validators} from "@angular/forms";
import {FormGroup} from "@angular/forms";
import {MessageService} from 'src/app/service/message.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  public form: FormGroup;
  public sending:boolean = false;
  constructor(private fb: FormBuilder, private messageService: MessageService) { }

  ngOnInit() {
    this.form = this.fb.group({
      'name': new FormControl('', Validators.required),
      'email': new FormControl('', Validators.required),
      'phone': new FormControl(''),
      'message': new FormControl('', Validators.required)
    });
  }

  onSubmit(values) {
    this.sending = true;
    console.info(this.messageService)
    console.info(this.messageService.send)

    this.messageService.send(values).subscribe(res => {
      console.table(res);
      setTimeout(() => {
          this.sending = false;
        }
        , 4000);
    });

    console.table(values)
  }

}
