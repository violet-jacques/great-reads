import mapStateToProps from "../../../../components/header/community/mapStateToProps";

describe("mapStateToProps", () => {
  const state = {
    header: {
      activeNavItem: "hey",
      dropdowns: {
        browse: false,
        community: true,
      }
    }
  };
  const props = mapStateToProps(state);

  it("returns the activeNavItem", () => {
    expect(props.activeNavItem).toEqual(state.header.activeNavItem);
  });

  it("returns the browse dropdown as dropdownOpen", () => {
    expect(props.dropdownOpen).toEqual(state.header.dropdowns.community);
    expect(props.dropdownOpen).not.toEqual(state.header.dropdowns.browse);
  });
});
