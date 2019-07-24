import { Map } from "immutable";

import mapStateToProps from "../../../components/header/mapStateToProps";

describe("mapStateToProps", () => {
  const state = Map({
    header: Map({
      activeNavItem: "Hey",
    }),
    user: Map({
      isLoggedIn: true,
    }),
  });
  const ownProps = {
    history: {
      location: {
        pathname: "/yo",
      },
    },
  };

  const props = mapStateToProps(state, ownProps);

  it("contains the active name item", () => {
    expect(props.activeNavItem).toEqual("Hey");
  });

  it("contains the pathname", () => {
    expect(props.activeNavItem).toEqual("Hey");
  });
});
