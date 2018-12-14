import signInRouteConfig from '../../../routes/routeConfig/signInRouteConfig';
import SignIn from '../../../pages/SignInPage';

describe('signIn path route config', () => {
  it('routes to the SignIn component', () => {
    expect(signInRouteConfig.component).toEqual(SignIn);
  });

  it('has the correct path', () => {
    expect(signInRouteConfig.path).toEqual('/sign-in');
  });

  it('is not exact', () => {
    expect(signInRouteConfig.exact).toBe(false);
  });
});
