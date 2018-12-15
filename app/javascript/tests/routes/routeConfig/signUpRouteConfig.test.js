import signUpRouteConfig from "../../../routes/routeConfig/signUpRouteConfig";
import SignUp from "../../../pages/SignUpPage";

describe("signUp path route config", () => {
  it("routes to the SignUp component", () => {
    expect(signUpRouteConfig.component).toEqual(SignUp);
  });

  it("has the correct path", () => {
    expect(signUpRouteConfig.path).toEqual("/sign-up");
  });

  it("is not exact", () => {
    expect(signUpRouteConfig.exact).toBe(false);
  });
});
