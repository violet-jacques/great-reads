import mapStateToProps from "../../../components/signIn/mapStateToProps";

describe("mapStateToProps", () => {
  const state = {
    user: {
      loginErrorMessage: "Hey",
    },
  };

  const props = mapStateToProps(state);

  it("contains the login error message", () => {
    expect(props.loginErrorMessage).toEqual("Hey");
  });
});