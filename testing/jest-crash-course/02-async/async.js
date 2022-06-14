const axios = require('axios');


const fetchData = async (id=1) => {
  try {
    const res = await axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`);
    const data = res?.data;

    return data;
  } catch(err) {
    return Promise.reject(err);
  }
}

// fetchData(10)
//   .then(res => {
//     console.log(res);
//   })
//   .catch(err => {
//     console.log(err.message);
//   })


module.exports = fetchData;
