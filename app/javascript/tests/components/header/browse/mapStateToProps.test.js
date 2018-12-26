import { Map } from "immutable";

import mapStateToProps from "../../../../components/header/browse/mapStateToProps";

describe("mapStateToProps", () => {
  const state = Map({
    header: Map({
      activeNavItem: "hey",
      dropdowns: Map({
        browse: true,
        community: false,
      }),
    }),
  });
  const props = mapStateToProps(state);

  it("returns the activeNavItem", () => {
    expect(props.activeNavItem).toEqual("hey");
  });

  it("returns the browse dropdown as dropdownOpen", () => {
    expect(props.dropdownOpen).toEqual(true);
  });
});
