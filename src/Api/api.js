import axios from "axios";

const instance = axios.create({
  withCredentials: false,
  baseURL: "https://free-to-play-games-database.p.rapidapi.com/api",
  headers: {
    "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
    "x-rapidapi-key": "9395eb4d79mshe42c1fd272f4edcp167678jsn6566957c1c71",
  },
});

export const shopAPI = {
  getGames() {
    return instance
      .get(`/games`)
      .then((response) => response.data)
      .catch(function (error) {
        console.log(error);
      });
  },
  getGame(id) {
    return instance
      .get(`/game`, { params: { id: id } })
      .then((response) => response.data)
      .catch(function (error) {
        console.log(error);
      });
  },
};

export default shopAPI;
