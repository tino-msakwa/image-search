import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID Hb6G-ydpd9BabdY9kfR6SEixTev_YKpAIoeR1kLqFDg",
  },
});
