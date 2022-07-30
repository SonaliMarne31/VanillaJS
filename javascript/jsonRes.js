
async function getMovieList(year) {
    // write your code here
    // API endpoint: https://jsonmock.hackerrank.com/api/movies?Year=<year>
    let url = 'https://jsonmock.hackerrank.com/api/movies?Year=' + year;
    https.get(url, (res) => {
        let data = res.data;
        let titles = data.map((movie) => movie.Title);
        return titles;
    })
}

async function main() {
    
    const results = await getMovieList("2015");
   
  }
