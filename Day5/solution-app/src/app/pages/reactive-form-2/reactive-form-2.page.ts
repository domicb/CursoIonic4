import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '../../services/users.service';
import { User } from '../../models/user.model';
import { isNotTemporalEmailValidator } from '../../utils/validators';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-reactive-form-two',
  templateUrl: './reactive-form-2.page.html',
  styleUrls: ['./reactive-form-2.page.scss'],
})
export class ReactiveForm2Page implements OnInit {

  public state: string;

  public isUpdating: boolean;

  public form: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private userService: UsersService,
              private toastController: ToastController) {

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


  public submitForm(): void {

    this.isUpdating = true;

    this.userService.updateUser(this.form.value).subscribe(() => {

      this.presentToast('User saved!');
      this.isUpdating = false;

    }, () => {

      this.presentToast('Error saving...');
      this.isUpdating = false;
    });
  }

  private presentToast(message: string) {

    this.toastController.create({
      message,
      position: 'bottom',
      duration: 2000
    }).then((toast) => {
      toast.present();
    });
  }
}
