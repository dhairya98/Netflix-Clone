import './App.css';
import Row from './Row'
import requests from './requests';
// import sunday from './requests';
import Banner from './Banner';
import Nav from './Nav';

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      {/* In order to make request get and post, we need something that handle requests sent from our code AXIOS */}
      {/* Axios is a library that serves to create HTTP requests that are present externally. 
      It is evident from the fact that we may sometimes in React applications need to get data from the external source.
      It is quite difficult to fetch such data so that they can be normally shown on the website. */}
      <Row  title="NETFLIX ORIGINALS" fetchUrl= {requests.fetchNetflixOriginals} isLargeRow/>
      <Row  title="Trending Now" fetchUrl= {requests.fetchTrending} />
      <Row  title="Top Rated ✡"  fetchUrl= {requests.fetchTopRated} />
      <Row  title="Action Movies" fetchUrl= {requests.fetchActionMovies} />
      <Row  title="Comedy Movies" fetchUrl= {requests.fetchComedyMovies} />
      <Row  title="Horror Movies" fetchUrl= {requests.fetchHorrorMovies} />
      <Row  title="Romance Movies" fetchUrl= {requests.fetchRomanceMovies} />
      <Row  title="Documentaries" fetchUrl= {requests.fetchDocumentaries} />
      {/* requests is an alias for sunday */}
      {/* As every row is a component */}
    </div>
  );
}

export default App;
