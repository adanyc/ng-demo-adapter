import { inject, InjectionToken } from '@angular/core';
import { User } from '../domain/user';
import { UserRepository } from '../domain/user.repository';
import { HttpClient } from '@angular/common/http';
import { UserResponseAdapter, UserResponseDto } from './adapters/user-response.adapter';
import { environment } from '../../../../environments/environment';
import { lastValueFrom, map } from 'rxjs';

export const USER_REPOSITORY = new InjectionToken<UserRepository>('UserRepository');

export class UserHttpRepository implements UserRepository {
  private readonly http = inject(HttpClient);
  private readonly api = `${environment.apiBase}/80102bb4-8b9c-48ac-89bb-38492de438a5`;

  create(user: User): Promise<User> {
    return lastValueFrom(this.http.post<UserResponseDto>(this.api, user).pipe(
      map(userResponseDto => new UserResponseAdapter(userResponseDto))
    ));
  }
}