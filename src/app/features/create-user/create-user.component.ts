import { Component, inject, signal } from '@angular/core';
import { USER_REPOSITORY, UserHttpRepository } from './repository/user-http.repository';
import { User } from './domain/user';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-create-user',
  standalone: true,
  templateUrl: './create-user.component.html',
  styleUrl: './create-user.component.scss',
  imports: [CommonModule],
  providers: [
    {
      provide: USER_REPOSITORY,
      useClass: UserHttpRepository,
    },
  ],
})
export class CreateUserComponent {
  private readonly userRepository = inject(USER_REPOSITORY);
  user = signal<User>({ username: '', email: '', age: 0 });

  async createUser() {
    const result = await this.userRepository.create({
      username: 'adanyc',
      email: 'some@gmail.com',
      age: 40,
    });
    this.user.set(result);
  }
}
