import { Map } from "immutable";

import mapStateToProps from "../../../../components/header/community/mapStateToProps";

describe("mapStateToProps", () => {
  const state = Map({
    header: Map({
      activeNavItem: "hey",
      dropdowns: Map({
        browse: false,
        community: true,
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
