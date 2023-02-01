import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Cal';
 function display (params:type) {
   document.getElementById('res').value="";
 } display () {
    document.getElementById("res").value="";
  }
}
