import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
    // TODO: Use EventEmitter with form value
    this.http.post('http://127.0.0.1:8000/task/tasks/',this.task.value).subscribe(res => { // * not callback
      console.log({res}); 
    }, error => {
      console.log("Error", error);
    });
  }

}
