import { Map } from "immutable";
import userErrorMessage from "../../states/userErrorMessage";

describe("userErrorMessage", () => {
  it("an object that holds user logged in information", () => {
    const state = Map({
      user: Map({
        errors: Map({
          dynamic: "hello",
        }),
      }),
    });

    const path = "dynamic";

    expect(userErrorMessage(path)(state)).toEqual({
      dynamic: "hello",
    })
  });
});
