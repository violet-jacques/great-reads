export default {
  signIn: form => (
    global.fetch(
      "/users/sign_in",
      {
        method: "post",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ user: form }),
      },
    ).then(response => response.json())
  ),
  signUp: form => (
    global.fetch(
      "/users/sign_up",
      {
        method: "post",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ user: form }),
      },
    ).then(response => response.json())
  ),
};
