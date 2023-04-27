import { Component, Inject } from '@angular/core';
import { API_URL, PostService } from '../../service/post.service';

@Component({
  selector: 'thinh-long',
  templateUrl: './thinh-long.component.html',
  styleUrls: ['./thinh-long.component.scss'],
  providers: [
    PostService,
    {
      provide: API_URL,
      useValue: 'https://api.thinglong.com',
      useClass: PostService,

    }
  ]
})
export class ThinhLongComponent {
  constructor(@Inject(API_URL) private readonly apiUrl: string, private readonly postService: PostService) {
    console.log(postService.getPosts());
  }
}
