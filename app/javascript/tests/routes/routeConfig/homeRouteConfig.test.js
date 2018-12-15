import homeRouteConfig from "../../../routes/routeConfig/homeRouteConfig";
import Home from "../../../pages/HomePage";

describe("root path route config", () => {
  it("routes to the home component", () => {
    expect(homeRouteConfig.component).toEqual(Home);
  });

  it("has the correct path", () => {
    expect(homeRouteConfig.path).toEqual("/");
  });

  it("is exact", () => {
    expect(homeRouteConfig.exact).toBe(true);
  });
});
