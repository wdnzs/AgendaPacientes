import { Component } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormControl, Validators } from '@angular/forms';
import { merge } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  usuario = new FormControl('', [Validators.required, Validators.required]);
  senha = new FormControl('', [Validators.required, Validators.required]);

  manterLogado = false;
  esqueceuSenha = false;

  errorMessage = '';
  hide: boolean = true;

  constructor() {

  }


}



