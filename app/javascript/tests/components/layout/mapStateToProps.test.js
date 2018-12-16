import mapStateToProps from "../../../components/layout/mapStateToProps";

describe("mapStateToProps", () => {
  const state = {
    modal: {
      open: true,
    }
  };

  const props = mapStateToProps(state);

  it("contains the login error message", () => {
    expect(props.modalOpen).toEqual(true);
  });
});
