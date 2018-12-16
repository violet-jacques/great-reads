import mapStateToProps from "../../../components/modal/mapStateToProps";

describe("mapStateToProps", () => {
  const state = {
    modal: {
      type: "signUp",
    }
  };

  const props = mapStateToProps(state);

  it("contains the login error message", () => {
    expect(props.type).toEqual("signUp");
  });
});
