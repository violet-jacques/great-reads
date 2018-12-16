import home from "../../../routes/routeConfig/home";
import routeConfig from "../../../routes/routeConfig";
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

  it("contains nothing else", () => {
    expect(clonedRouteConfig).toEqual([]);
  });
});
