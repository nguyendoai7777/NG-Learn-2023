import { Component, Inject } from '@angular/core';
import { API_URL, PostService } from '../../service/post.service';

@Component({
  selector: 'ha-noi',
  template: `
    <p>
      ha-noi works!
    </p>
  `,
  styleUrls: ['./ha-noi.component.scss'],
  providers: [
    PostService,
    {
      provide: API_URL,
      useValue: 'https://api.hanoi.com',
      useClass: PostService
    }
  ]
})
export class HaNoiComponent {
  constructor(@Inject(API_URL) private readonly apiUrl: string, private readonly postService: PostService) {
    console.log(postService.getPosts());
  }

}
