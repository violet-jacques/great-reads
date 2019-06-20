import { List } from "immutable";

import home from "../../../routes/routeConfig/home";
import routes from "../../../routes/routeConfig";
import search from "../../../routes/routeConfig/search";

describe("routeConfig", () => {
  let clonedRoutes = List(routes);

  it("contains rootRouteConfig", () => {
    expect(clonedRoutes).toContain(home);

    const index = clonedRoutes.indexOf(home);

    clonedRoutes = clonedRoutes.delete(index);
  });


  it("contains searchRouteConfig", () => {
    expect(clonedRoutes).toContain(search);

    const index = clonedRoutes.indexOf(search);

    clonedRoutes = clonedRoutes.delete(index);
  });

  it("contains nothing else", () => {
    expect(clonedRoutes.equals(List())).toBe(true);
  });
});
