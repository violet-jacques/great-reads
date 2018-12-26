import { List } from "immutable";

import home from "../../../routes/routeConfig/home";
import routes from "../../../routes/routeConfig";

describe("routeConfig", () => {
  let clonedRoutes = List(routes);

  it("contains rootRouteConfig", () => {
    expect(clonedRoutes).toContain(home);

    const index = clonedRoutes.indexOf(home);

    clonedRoutes = clonedRoutes.delete(index);
  });

  it("contains nothing else", () => {
    expect(clonedRoutes.equals(List())).toBe(true);
  });
});
