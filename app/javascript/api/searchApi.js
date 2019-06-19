import { fromJS } from "immutable";

export default {
  search: form => {
    return (
      global.fetch(
        `/api/searches?q=${form.search}`,
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
