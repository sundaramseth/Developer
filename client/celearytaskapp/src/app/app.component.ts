import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: false,
})
export class AppComponent {

  constructor(private http: HttpClient) { }

  title = 'celearytaskapp';

  task = new FormGroup({
    createtask: new FormControl(''),
  });

  onSubmit() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };
  
    this.http.post('http://127.0.0.1:8000/task/tasks/', this.task.value, httpOptions)
      .subscribe(res => {
        console.log({ res });
      }, error => {
        console.error("Error", error);
      });
  }
}
