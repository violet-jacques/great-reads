import home from "../../../routes/routeConfig/home";
import routeConfig from "../../../routes/routeConfig";
import signIn from "../../../routes/routeConfig/signIn";
import signUp from "../../../routes/routeConfig/signUp";
import testHelpers from "../../helpers";

describe("routeConfig", () => {
  let clonedRouteConfig = Object.assign([], routeConfig);

  it("contains rootRouteConfig", () => {
    expect(clonedRouteConfig).toContain(home);

    clonedRouteConfig = testHelpers.removeObjectFromArray(
      clonedRouteConfig,
      home,
    );
  });

  it("contains signIn", () => {
    expect(clonedRouteConfig).toContain(signIn);

    clonedRouteConfig = testHelpers.removeObjectFromArray(
      clonedRouteConfig,
      signIn,
    );
  });

  it("contains signUpRouteConfig", () => {
    expect(clonedRouteConfig).toContain(signUp);

    clonedRouteConfig = testHelpers.removeObjectFromArray(
      clonedRouteConfig,
      signUp,
    );
  });

  it("contains nothing else", () => {
    expect(clonedRouteConfig).toEqual([]);
  });
});
