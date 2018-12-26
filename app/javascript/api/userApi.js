import { fromJS, Map } from "immutable";

const request = (form, path) => {
  return (
    global.fetch(
      `/api/users/${path}`,
      {
        method: "post",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ user: form }),
      },
    ).then(jsonResponse => jsonResponse.json())
      .then(response => Promise.resolve(fromJS(response)))
  );
};

export default {
  signIn: form => (
    request(form, "sign_in")
  ),
  signUp: form => (
    request(form, "sign_up")
  ),
};
