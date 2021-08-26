var axios = require('axios');

const url = 'http://localhost:3000';

exports.module = {
  postAllData: (userData) => {
    var reviews = [];
    var shows = [];
    for (var key in userData) {
      reviews.push(userData[key].userInfo);
      shows.push({
        name: userData[key].name,
        description: userData[key].description,
        image: userData[key].image
      })
    }
    axios.post(url, )
  }
}