import { Map } from "immutable";

import mapStateToProps from "../../../../components/header/account/mapStateToProps";

describe("mapStateToProps", () => {
  const state = Map({
    user: Map({
      isLoggedIn: true,
    }),
  });
  const props = mapStateToProps(state);

  it("returns isLoggedIn", () => {
    expect(props.isLoggedIn).toEqual(true);
  });
});
