import mapStateToProps from "../../../../components/header/browse/mapStateToProps";

describe("mapStateToProps", () => {
  const state = {
    header: {
      activeNavItem: "hey",
      dropdowns: {
        browse: true,
        community: false,
      }
    }
  };
  const props = mapStateToProps(state);

  it("returns the activeNavItem", () => {
    expect(props.activeNavItem).toEqual(state.header.activeNavItem);
  });

  it("returns the browse dropdown as dropdownOpen", () => {
    expect(props.dropdownOpen).toEqual(state.header.dropdowns.browse);
    expect(props.dropdownOpen).not.toEqual(state.header.dropdowns.community);
  });
});
