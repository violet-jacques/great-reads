import { fromJS } from "immutable";

const path = form => {
  const baseUrl = `/api/searches?q=${form.query}`;

  return form.scope ? `${baseUrl}&scope=${form.scope}` : baseUrl;
}

export default {
  search: form => {
    return (
      global.fetch(
        path(form),
        {
          method: "get",
          headers: {
            "Content-type": "application/json",
          },
        },
      ).then(jsonResponse => jsonResponse.json())
        .then(response => Promise.resolve(fromJS(response)))
    );
  },
};
