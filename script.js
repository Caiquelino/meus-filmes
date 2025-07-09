const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1Njk5MzQ5ZTNlM2RiMDQzZjY5MzljZWM0ZDNhZTI0NyIsIm5iZiI6MTc1MjAxODc3MS4zODIwMDAyLCJzdWIiOiI2ODZkYWY1M2RmMTFkZjY1ZmE1NDBiNjMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.OgTFhhLDlVvZa-9DeP7C4HQc7Ll_C_i9DZWCydV3rwo'
    }
  };

// fetch('https://api.themoviedb.org/3/authentication')
// .then(response => response.json())
// .then(data => {
//     console.log(data);
// })

fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
.then(res => res.json())
.then(res => console.log(res))
.catch(err => console.error(err));
