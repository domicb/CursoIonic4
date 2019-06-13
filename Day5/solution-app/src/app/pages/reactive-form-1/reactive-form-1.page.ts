import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { isNotTemporalEmailValidator } from '../../utils/validators';
import { User } from '../../models/user.model';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-reactive-form-one',
  templateUrl: './reactive-form-1.page.html',
  styleUrls: ['./reactive-form-1.page.scss'],
})
export class ReactiveForm1Page implements OnInit {

  public state: string;

  public form: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private userService: UsersService) {

  }

  public ngOnInit(): void {

    this.form = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      birthDate: ['', Validators.required],
      sex: '',
      phone: '',
      email: ['', [Validators.required, Validators.email,
        isNotTemporalEmailValidator]]
    });

    this.loadUser();
  }

  public loadUser(): void {

    this.state = 'loading';

    this.userService.getUser().subscribe((user: User) => {

      this.form.patchValue(user as { [s: string]: any });

      this.state = 'loaded';

    }, () => {

      this.state = 'error';
    });
  }
}
