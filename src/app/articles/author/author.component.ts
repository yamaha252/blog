import {Component, OnInit} from '@angular/core';
import {Select} from '@ngxs/store';
import {AuthorState} from './author.state';
import {Observable} from 'rxjs';
import {Author} from './author';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.scss']
})
export class AuthorComponent implements OnInit {

  @Select(AuthorState.author)
  author$: Observable<Author>;

  constructor() {
  }

  ngOnInit() {
  }
}
