import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import { List, Map } from "immutable";

import mapDispatchToProps from "../../../../components/header/search/mapDispatchToProps";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("mapDispatchToProps", () => {
  const store = mockStore();

  describe("onSubmit", () => {
    const ownProps = { history: { push: jest.fn() } };
    const props = mapDispatchToProps(store.dispatch, ownProps);
    const { onSubmit } = props;
    const form = Map({ query: "yo dog", scope: "all" });

    beforeEach(() => {
      global.fetch.resetMocks();
      global.fetch.mockResponse(JSON.stringify({
        success: true,
        books: [{ id: 1, name: "dog" }],
      }));
    });

    it("dispatches the correct actions", () => {
      const expectedAction = {
        payload: Map({
          books: List([Map({ id: 1, name: "dog" }) ]),
          query: "yo dog",
          scope: "all",
        }),
        type: "SEARCH_SUCCESS",
      };
      onSubmit(form)
        .then(() => {
          expect(store.getActions()).toContainEqual(expectedAction);
        });
    });
  });
});
