import { Map } from "immutable";

import mapStateToProps from "../../../../components/header/browse/mapStateToProps";

describe("mapStateToProps", () => {
  const state = Map({
    header: Map({
      dropdowns: Map({
        browse: true,
        community: false,
      }),
    }),
  });
  const props = mapStateToProps(state);

  it("returns the browse dropdown as dropdownOpen", () => {
    expect(props.dropdownOpen).toEqual(true);
  });
});
