import { Map } from "immutable";

import mapStateToProps from "../../../../components/header/community/mapStateToProps";

describe("mapStateToProps", () => {
  const state = Map({
    header: Map({
      dropdowns: Map({
        browse: false,
        community: true,
      }),
    }),
  });
  const props = mapStateToProps(state);

  it("returns the browse dropdown as dropdownOpen", () => {
    expect(props.dropdownOpen).toEqual(true);
  });
});
