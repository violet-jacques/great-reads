import homeRouteConfig from "../../../routes/routeConfig/home";
import Home from "../../../pages/home";

describe("root path route config", () => {
  it("routes to the home component", () => {
    expect(homeRouteConfig.get("component")).toEqual(Home);
  });

  it("has the correct path", () => {
    expect(homeRouteConfig.get("path")).toEqual("/");
  });

  it("is exact", () => {
    expect(homeRouteConfig.get("exact")).toBe(true);
  });
});
