import {NgModule} from '@angular/core';
import {Apollo} from 'apollo-angular';
import {from, InMemoryCache} from '@apollo/client/core';
import {HttpLink} from 'apollo-angular/http';
import introspectionResult from './graphql.generated';
import {environment} from '../../environments/environment';
import {setContext} from '@apollo/client/link/context';
import {AuthService} from '../auth/auth.service';
import {AuthModule} from '../auth/auth.module';

@NgModule({
  imports: [
    AuthModule,
  ]
})
export class GraphQLModule {
  constructor(apollo: Apollo,
              httpLink: HttpLink,
              authService: AuthService) {

    const authLink = setContext((operation, {headers}) => {
      const accessToken = authService.accessToken;
      return {
        headers: {
          ...headers,
          Authorization: accessToken ? `Bearer ${accessToken}` : '',
        },
      };
    });

    apollo.create({
      link: from([
        authLink,
        httpLink.create({uri: environment.apiUrl})
      ]),
      cache: new InMemoryCache({
        possibleTypes: introspectionResult.possibleTypes
      }),
    });
  }
}
