import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";

import mapDispatchToProps from "../../../../components/header/search/mapDispatchToProps";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("mapDispatchToProps", () => {
  const store = mockStore();

  describe("onSubmit", () => {
    const ownProps = { history: { push: jest.fn() } };
    const props = mapDispatchToProps(store.dispatch, ownProps);
    const { onSubmit } = props;
    const form = { search: "yo dog" };

    beforeEach(() => {
      global.fetch.resetMocks();
      global.fetch.mockResponse(JSON.stringify({
        success: true,
        books: [{ id: 1, name: "dog" }],
      }));
    });

    it("dispatches the correct actions", () => {
      const expectedAction = {
        payload: [{ id: 1, name: "dog" }],
        type: "SEARCH_SUCCESS",
      };
      onSubmit(form)
        .then(() => {
          expect(store.getActions()).toContainEqual(expectedAction);
        });
    });
  });
});
