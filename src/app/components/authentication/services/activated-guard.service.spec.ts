import { TestBed, inject } from '@angular/core/testing';
import { ActivatedRouteSnapshot, Router } from '@angular/router';
import { AuthentificationService } from '../../authentification/services/authentication.service';

import { ActivatedGuardService } from './activated-guard.service';

describe('ActivatedGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ActivatedGuardService]
    });
  });

  it('should be created', inject([ActivatedGuardService], (service: ActivatedGuardService) => {
    expect(service).toBeTruthy();
  }));
});

describe('AuthGuard (isolated)', () => {
  beforeEach(() => {
    routerSpy = jasmine.createSpyObj<Router>('Router', ['navigate']); // [1]
    serviceStub = {}; // [2]
    guard = new ActivatedGuardService(serviceStub as AuthentificationService, routerSpy); // [3]
  });

  const dummyRoute = {} as ActivatedRouteSnapshot;
  const fakeUrls = [
    '/',
    '/todo/list',
    '/todo/add',
    '/todo/delete',
  ];
  let guard: ActivatedGuardService;
  let routerSpy: jasmine.SpyObj<Router>;
  let serviceStub: Partial<AuthentificationService>;

  describe('when the user is logged in', () => {
    beforeEach(() => {
      serviceStub.isAuthenticated() == true;
    });
  });

  describe('when the user is logged out', () => {
    beforeEach(() => {
      serviceStub.isAuthenticated() == false;
    });
  });
});
