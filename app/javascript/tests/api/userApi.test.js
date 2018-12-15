import userApi from "../../api/userApi";

describe("userApi", () => {
  describe("signIn", () => {
    const form = { email: "test@example.com", password: "password!" };
    let fetchCall;

    beforeEach(() => {
      global.fetch.resetMocks();
      global.fetch.mockResponseOnce();

      userApi.signIn(form);
      [fetchCall] = global.fetch.mock.calls;
    });

    it("calls fetch once and with the correct parameters", () => {
      const url = fetchCall[0];
      const params = fetchCall[1];
      const { method, headers, body } = params;

      expect(global.fetch.mock.calls.length).toEqual(1);
      expect(url).toEqual("/users/sign_in");
      expect(method).toEqual("post");
      expect(headers).toEqual({ "Content-type": "application/json" });
      expect(body).toEqual(JSON.stringify({ user: form }));
    });
  });

  describe("signUp", () => {
    const form = {
      email: "test@example.com",
      password: "password!",
      password_confirmation: "password!",
    };
    let fetchCall;

    beforeEach(() => {
      global.fetch.resetMocks();
      global.fetch.mockResponseOnce();

      userApi.signUp(form);
      [fetchCall] = global.fetch.mock.calls;
    });

    it("calls fetch once and with the correct parameters", () => {
      const url = fetchCall[0];
      const params = fetchCall[1];
      const { method, headers, body } = params;

      expect(global.fetch.mock.calls.length).toEqual(1);
      expect(url).toEqual("/users/sign_up");
      expect(method).toEqual("post");
      expect(headers).toEqual({ "Content-type": "application/json" });
      expect(body).toEqual(JSON.stringify({ user: form }));
    });
  });
});
