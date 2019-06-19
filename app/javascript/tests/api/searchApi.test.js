import { Map } from "immutable";

import searchApi from "../../api/searchApi";

describe("searchApi", () => {
  describe("search", () => {
    const form = { search: "hey" };
    let fetchCall;

    beforeEach(() => {
      global.fetch.resetMocks();
      global.fetch.mockResponseOnce();

      searchApi.search(form);
      [fetchCall] = global.fetch.mock.calls;
    });

    it("calls fetch once and with the correct parameters", () => {
      const url = fetchCall[0];
      const params = fetchCall[1];
      const { method, headers } = params;

      expect(global.fetch.mock.calls.length).toEqual(1);
      expect(url).toEqual("/api/searches?q=hey");
      expect(method).toEqual("get");
      expect(headers).toEqual({ "Content-type": "application/json" });
    });
  });
});
