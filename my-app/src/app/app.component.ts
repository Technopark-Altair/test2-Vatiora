import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  firstOperant: number;
  secondOperant: number;
  operatorNo: string;
  operatorMain: string;
  result: number;
  errorMes: string;

  doCalc()
  {
    if(this.firstOperant != null && this.secondOperant != null && this.operatorMain !=  null)
    {
      this.errorMes = "Ошибки НЕТ";
      if(this.operatorMain == "||")
      {
        if(this.firstOperant != this.secondOperant)
        {
          this.result = 1;
        }
        else if(this.firstOperant == this.secondOperant && this.firstOperant == 1)
        {
          this.result = 1;
        }
        else if(this.firstOperant == this.secondOperant && this.firstOperant == 0)
        {
          this.result = 0;
        }
      }
      if(this.operatorMain == "&&")
      {
        if(this.firstOperant == this.secondOperant && this.firstOperant == 1)
        {
          this.result = 1;
        }
        else
        {
          this.result = 0;
        }
      }
      if(this.operatorNo == "!")
      {
        if(this.result == 1)
        {
          this.result = 0;
        }
        else if(this.result == 0)
        {
          this.result = 1;
        }
      }
    }
  }
}