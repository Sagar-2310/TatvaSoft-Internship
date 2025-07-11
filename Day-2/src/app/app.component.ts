import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent,CommonModule,FormsModule,RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  name = 'GEC1234567';
  visibility = true;

  store: string = 'default name';  // <-- This is what was missing

  list = ['item1','item2','item3'];
  listener() {
    this.visibility = !this.visibility;
    console.log(this.store);
  }
}
