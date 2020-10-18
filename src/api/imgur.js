import qs from "qs";

const CLIENT_ID = "45d028abf3cc7df";
const BASE_URL = "https://api.imgur.com";

export default {
  login: function() {
    const queryString = {
      client_id: CLIENT_ID,
      response_type: "token",
    };
    window.location = `${BASE_URL}/oauth2/authorize?${qs.stringify(queryString)}`;
  },
};
