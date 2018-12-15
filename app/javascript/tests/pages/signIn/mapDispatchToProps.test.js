import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";

import mapDispatchToProps from "../../../pages/signIn/mapDispatchToProps";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore();

describe("mapDispatchToProps", () => {
  const props = mapDispatchToProps(store.dispatch);

  describe("onSubmit", () => {
    const { onSubmit } = props;
    const history = { goBack: jest.fn() };
    const form = { email: "test@example.com", password: "password" };
    beforeEach(() => {
      global.fetch.resetMocks();
      global.fetch.mockResponse(JSON.stringify({
        success: true,
        user: { id: 1, email: "hey", role: "sup" },
      }));
    });
    it("dispatches the correct actions", () => {
      const expectedAction = {
        payload: {
          email: "hey",
          id: 1,
          role: "sup",
        },
        type: "LOGIN_SUCCESS",
      };

      onSubmit(history)(form)
        .then(() => {
          expect(store.getActions()).toContainEqual(expectedAction);
        });
    });
  });
});
