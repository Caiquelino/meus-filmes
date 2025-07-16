const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1Njk5MzQ5ZTNlM2RiMDQzZjY5MzljZWM0ZDNhZTI0NyIsIm5iZiI6MTc1MjAxODc3MS4zODIwMDAyLCJzdWIiOiI2ODZkYWY1M2RmMTFkZjY1ZmE1NDBiNjMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.OgTFhhLDlVvZa-9DeP7C4HQc7Ll_C_i9DZWCydV3rwo'
    }
  };


fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
.then(response => response.json())
.then(data => {
  console.log(data);
  LoadCardMovies(data.results)
})
.catch(err => console.error(err));

const LoadCardMovies = (filmes) => {
const container = document.getElementById('movie-container');

  
 filmes.forEach(filme => {

  const divCol = document.createElement('div')
  divCol.className = 'col-12 col-sm-6 col-md-4 col-lg-3 mb-4'

const divCard = document.createElement('div');
divCard.className = 'card h-100 d-flex flex-column'

const imageURL = 'https://media.themoviedb.org/t/p/w440_and_h660_face/'
divCard.innerHTML = 
` <img src="${imageURL}${filme.poster_path}" class="card-img-top" alt="...">
  <div class="card-body d-flex flex-column">
    <h5 class="card-title">${filme.title}</h5>
    <p class="card-text">${filme.overview}</p>
    <div class = "mt-auto d-flex justify-content-between align-items-center"> 
    <a href="#" class="btn btn-primary">Ver Mais</a>
    <small class= "text-muted"><strong>Estreia: </strong>${formatDate(filme.release_date)}</small>
    </div>
   </div>`

  divCol.appendChild(divCard);
  container.appendChild(divCol);
 });  

}

const formatDate = (data) => {
  const [ano, mes, dia] = data.split('-')
  return `${dia}/${mes}/${ano}`
}