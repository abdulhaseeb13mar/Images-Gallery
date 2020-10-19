import qs from "qs";
import axios from "axios";
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
  fetchImages: function(access_token) {
    return axios.get(`${BASE_URL}/3/account/me/images`, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });
  },
};
