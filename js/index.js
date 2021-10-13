const myKey = 'pR4ddjMYlMzAtw9EwSm6XQj6rtoZAcux',
      url = `https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=godfather&api-key=${myKey}`
      inner = document.querySelector('.inner');


 async function getMoviesURl (){
     const MoviesURl = await(await fetch(url)).json();
     let resukts =MoviesURl.results;
     let ArrayOfMoviesArt = resukts.map(element =>{
         return {
            movename : element.display_title,
           // mpaa_rating : element.mpaa_rating,
            reviewsFrom  : element.byline,
           // headline : element.headline,
            summary_short : element.summary_short,
            publication_date : element.publication_date,
            link_url : element.link.url,
            link_suggested_link_text : element.link.suggested_link_text
         };
     })
     window.localStorage.setItem('ArrayOfMoviesArt', JSON.stringify(ArrayOfMoviesArt))
 }    
 let moviesData = JSON.parse(localStorage.getItem('ArrayOfMoviesArt'))
//getMoviesURl();
function moviesPrint(){
    moviesData.forEach(value=>{
        let div = document.createElement('div')
        let firstdiv = document.createElement('div')
        firstdiv.innerHTML=`<h1>${value.movename}</h1>
        <p class='color'>Summary : ${value.summary_short}</p>
        <p >Publication Date: ${value.publication_date}</p>` 
        div.append(firstdiv)
        let seconddiv = document.createElement('div')
        seconddiv.innerHTML=`<p><a href='${value.link_url}'>view the article</a></p>
        <span>${value.link_suggested_link_text}</span>`
        div.append(seconddiv)
        inner.append(div)
    })
}
moviesPrint()