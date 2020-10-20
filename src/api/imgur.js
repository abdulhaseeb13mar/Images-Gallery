import qs from "qs";
import axios from "axios";
const CLIENT_ID = "7239bde175d514e";
const BASE_URL = "https://api.imgur.com";

export default {
  login: function() {
    const queryString = {
      client_id: CLIENT_ID,
      response_type: "token",
    };
    window.location = `https://api.imgur.com/oauth2/authorize?${qs.stringify(queryString)}`;
  },
  fetchImages: function(access_token) {
    return axios.get(`${BASE_URL}/3/account/me/images`, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });
  },
  upload: function(images, token) {
    const promises = Array.from(images).map((image) => {
      const fd = new FormData();
      fd.append("image", image);
      return axios.post(`${BASE_URL}/3/image`, fd, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    });
    return Promise.all(promises);
  },
};
