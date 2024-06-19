import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "26c784c8f7b443fa955bc2fb4c190c87",
  },
});

