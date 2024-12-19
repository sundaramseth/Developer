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
    task: new FormControl(''),
  });

  onSubmit() {
    const taskData = { task: this.task.value.task }; // Adjust based on your form
  
    this.http.post('http://127.0.0.1:8000/task/tasks/', taskData)
      .subscribe(res => {
        console.log({ res });
      }, error => {
        console.error("Error", error);
      });
  }
}
