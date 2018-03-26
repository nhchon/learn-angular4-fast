import { Component, AfterViewInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <input #input type="text" (input)="textInput($event)" value=""/>
  <hr>
  Upper-Case: {{upperCase}}
  <br/>
  Lower-Case: {{lowerCase}}
  <br/>
  Reserved-Case: {{getReversed(lowerCase)}}
  `,
  styles: []
})
export class AppComponent implements AfterViewInit{
  upperCase: string= '';
  lowerCase: string = '';
  @ViewChild('input') inputBox;

  textInput(event){
    this.upperCase = event.target.value.toUpperCase();
    this.lowerCase = event.target.value.toLowerCase();
  }

  getReversed(str: string){
    let reversed = '';
    for (let i=str.length-1;i>=0;i--){
      reversed += str.substring(i,i+1);
    }
    return reversed;
  }

  ngAfterViewInit() {
    this.inputBox.nativeElement.focus()
  }
}
