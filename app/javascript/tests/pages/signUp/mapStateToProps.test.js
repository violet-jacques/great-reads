import mapStateToProps from "../../../pages/signUp/mapStateToProps";

describe("mapStateToProps", () => {
  const state = {
    user: {
      signUpErrorMessage: "Hey",
    },
  };

  const props = mapStateToProps(state);

  it("contains the sign up error message", () => {
    expect(props.signUpErrorMessage).toEqual("Hey");
  });
});
