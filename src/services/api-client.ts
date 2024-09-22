import axios from "axios";

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '7a796531292c47dcae9c6cc536a6c202'

    
  }
})


// import axios from 'axios';

// const apiClient = axios.create({
//   baseURL: 'https://api.rawg.io/api/',
//   params: {
//     key: '7a796531292c47dcae9c6cc536a6c202'
//   }
// });

// export default apiClient;
