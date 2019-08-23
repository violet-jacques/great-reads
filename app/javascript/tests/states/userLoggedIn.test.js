import { Map } from "immutable";
import userLoggedIn from "../../states/userLoggedIn";

describe("userLoggedIn", () => {
  it("an object that holds user logged in information", () => {
    const state = Map({
      user: Map({
        isLoggedIn: true,
      }),
    });

    expect(userLoggedIn(state)).toEqual({
      isLoggedIn: true,
    });
  });
});
