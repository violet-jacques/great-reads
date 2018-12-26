import { Map } from "immutable";

import mapStateToProps from "../../../components/signUp/mapStateToProps";

describe("mapStateToProps", () => {
  const state = Map({
    user: Map({
      errors: Map({
        signUpErrorMessage: "Hey",
      }),
    }),
  });

  const props = mapStateToProps(state);

  it("contains the sign up error message", () => {
    expect(props.signUpErrorMessage).toEqual("Hey");
  });
});
