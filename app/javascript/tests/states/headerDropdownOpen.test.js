import { Map } from "immutable";
import headerDropdownOpen from "../../states/headerDropdownOpen";

describe("headerDropdownOpen", () => {
  it("an object that holds user logged in information", () => {
    const state = Map({
      header: Map({
        dropdowns: Map({
          dynamic: "hello",
        }),
      }),
    });

    const path = "dynamic";

    expect(headerDropdownOpen(path)(state)).toEqual({
      dropdownOpen: "hello",
    });
  });
});
