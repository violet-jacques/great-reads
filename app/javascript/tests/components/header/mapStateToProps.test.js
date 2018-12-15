import mapStateToProps from "../../../components/header/mapStateToProps";

describe("mapStateToProps", () => {
  const state = {
    header: {
      activeNavItem: "Hey",
    },
    user: {
      isLoggedIn: true,
    }
  };

  const props = mapStateToProps(state);

  it("contains the login error message", () => {
    expect(props.isLoggedIn).toEqual(true);
    expect(props.activeNavItem).toEqual("Hey");
  });
});
