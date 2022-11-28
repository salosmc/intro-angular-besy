import { Component } from '@angular/core';

@Component({
  selector: 'app-login-panel',
  templateUrl: './login-panel.component.html',
  styleUrls: ['./login-panel.component.css']
})
export class LoginPanelComponent {

  canSave = true;

  currentStyles={};
  setCurrentStyles(){
    this.currentStyles = {
      'font.style': this.canSave ? 'italic':'normal'
    };
  }
  
  email = 'algo'; //si esta vacio la clase de button se desactiva
  password = 'algo'; //si esta vacio la clase de button se desactiva

  work={
    link:'algo'
  };

  extendedFeatures =['batman','superman','flash'];

  showExtendedFeatures = false;

  name={
    error:false
  }
  
  //interpolation
  title = "login-panel works!";
  
  //property binding
  userPlaceholder: string = "Enter your user name";

  //way binding
  username: string = '';

  //Event Binding
  onSubmit():void{
    console.log(this.username);
  }

}
