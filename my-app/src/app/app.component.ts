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
  operator1: string;
  operator2: string;
  result: number;
  error: string;

  doCalc()
  {
    if(this.firstOperant != null && this.secondOperant != null && this.operator2 !=  null)
    {
      this.error = "Ошибки НЕТ";
      if(this.operator2 == "||")
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
      if(this.operator2 == "&&")
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
      if(this.operator1 == "!")
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
    else
    {
      if(this.firstOperant == null)
      {
        this.error = "Нет первого числа";
      }
      else if(this.secondOperant == null)
      {
        this.error = "Нет второго числа";
      }
      else if(this.operator2 == null)
      {
        this.error = "Нет оператора действия";
      }
    }
  }
}