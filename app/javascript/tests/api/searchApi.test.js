import { Map } from "immutable";

import searchApi from "../../api/searchApi";

describe("searchApi", () => {
  describe("search", () => {
    const form = { query: "hey" };
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

  describe("search with scope", () => {
    const form = { query: "hey", scope: "all" };
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
      expect(url).toEqual("/api/searches?q=hey&scope=all");
      expect(method).toEqual("get");
      expect(headers).toEqual({ "Content-type": "application/json" });
    });
  });
});
