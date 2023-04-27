import { Inject, Injectable, InjectionToken } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export const API_URL = new InjectionToken<string>('apiUrl');

@Injectable()
export class PostService {
  constructor(
    private http: HttpClient,
    @Inject(API_URL) private apiUrl: string
  ) {}

  getPosts(): string {
    return this.apiUrl;
  }
}
