import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { isNotTemporalEmailValidator } from 'src/app/utils/validators';
import { User } from 'src/app/models/user.model';
import { states } from 'src/app/models/states.model';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.page.html',
  styleUrls: ['./reactive-form.page.scss'],
})
export class ReactiveFormPage implements OnInit {

public form: FormGroup;

public user: User = {} as User;
public carga:{};
public spinner = true;

  constructor(private formBulder: FormBuilder, private userService: UsersService) {
    
  }

  public fillForm(): void {

    const user = this.userService.getRemoteUser();
    this.form.patchValue(
      user
    );
  }

  public ngOnInit(): void {
  
    this.form = this.formBulder.group({
      name: ['Valor iniciado desde .ts', [Validators.required, Validators.minLength(3)]],
      sex:'',
      phone: '',
      email:['',[Validators.required, Validators.email,
         isNotTemporalEmailValidator]]
    })

    this.userService.getRemoteUser().subscribe((user:User) => {
      console.log('SUCESS',user);
      this.spinner = false;
      this.form.patchValue(user);
    },(error: any) =>{
      this.spinner = false;
      console.log('ERROR', error);
    })
    
    //llamamos para saber si tiene carga de datos
    this.retrySpinner();
  }

  public retrySpinner(){
    if(this.spinner) {
      this.spinner = false;
    }
    else{
      this.spinner = true;
    }
  }

  public sumbitForm(): void {

      this.user = this.form.value;
  }
}
