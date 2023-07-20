import axios from 'axios';

export const valutesAPI = {
  getValutes() {
    return axios.get(`https://www.cbr-xml-daily.ru/daily_json.js`)
    .then(response => {
      return response.data;
    });
  }
}
  