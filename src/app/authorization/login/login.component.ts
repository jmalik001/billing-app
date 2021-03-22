import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AuthService } from '../../shared/services';
import { IUser } from 'src/app/models';
import { ToastrService } from 'ngx-toastr';

@Component({ templateUrl: 'login.component.html' })
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl = '';

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
    // private alertService: AlertService,
    private toastrService: ToastrService
  ) {
    // redirect to home if already logged in
    if (this.authService.userValue) {
      this.authService.userValue.profiles.includes('ADMIN')
        ? this.router.navigate(['admin'])
        : this.router.navigate(['user']);
    }
    this.loginForm = this.formBuilder.group({});
  }

  ngOnInit(): void {
    this.setInitialFormvalue();

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  private setInitialFormvalue(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.loginForm.controls;
  }

  public onSubmit(): void {
    this.submitted = true;

    // reset alerts on submit
    this.toastrService.clear();

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }

    this.loading = true;
    // this.authService.login(this.f.username.value, this.f.password.value)
    //     .pipe(first())
    //     .subscribe(
    //         (data: IUser) => {
    //             this.router.navigate([this.returnUrl]);
    //         },
    //         (error: any) => {
    //             this.alertService.error(error);
    //             this.loading = false;
    //         });
    this.authService
      .login(this.f.username.value, this.f.password.value)
      .subscribe((data) => {
        if (data) {
          data.profiles.includes('ADMIN')
            ? this.router.navigate(['admin'])
            : this.router.navigate(['user']);
        } else {
          // this.alertService.error('incorrect user name and password');
          this.toastrService
            .error('Incorrect user name or password', '', { timeOut: 2000 })
            .onHidden.subscribe(() => {
              this.loading = false;
              this.loginForm.reset();
              this.router.navigate(['login']);
            });
        }
      });
  }
}
