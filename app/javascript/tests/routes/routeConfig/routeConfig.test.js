import homeRouteConfig from '../../../routes/routeConfig/homeRouteConfig';
import routeConfig from '../../../routes/routeConfig/routeConfig';
import signInRouteConfig from '../../../routes/routeConfig/signInRouteConfig';
import signUpRouteConfig from '../../../routes/routeConfig/signUpRouteConfig';
import testHelpers from '../../helpers';

describe('routeConfig', () => {
  let clonedRouteConfig = Object.assign([], routeConfig);

  it('contains rootRouteConfig', () => {
    expect(clonedRouteConfig).toContain(homeRouteConfig);

    clonedRouteConfig = testHelpers.removeObjectFromArray(
      clonedRouteConfig,
      homeRouteConfig,
    );
  });

  it('contains signInRouteConfig', () => {
    expect(clonedRouteConfig).toContain(signInRouteConfig);

    clonedRouteConfig = testHelpers.removeObjectFromArray(
      clonedRouteConfig,
      signInRouteConfig,
    );
  });

  it('contains signUpRouteConfig', () => {
    expect(clonedRouteConfig).toContain(signUpRouteConfig);

    clonedRouteConfig = testHelpers.removeObjectFromArray(
      clonedRouteConfig,
      signUpRouteConfig,
    );
  });

  it('contains nothing else', () => {
    expect(clonedRouteConfig).toEqual([]);
  });
});
