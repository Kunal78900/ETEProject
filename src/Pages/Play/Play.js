import React, { useState } from "react";
import Row from "./Row";
import requests from "../../requests";
import Banner from "./Banner";
import Nav from "./Nav";
import Footer from "./Footer";
const API_KEY = "9b94c104d6e6e640901bda416212fcf7";

export default function Play() {
  const [isSearch, setSearch] = useState(false);

  const [searchValue, setSearchValue] = useState("");
  const changeSearchState = (searchValue) => {
    setSearch(true);
    setSearchValue(searchValue);
  };

  return (
    <div style={{ backgroundColor: "#111" }}>
      <Nav changeSearchState={changeSearchState} />
      <Banner />
      {isSearch && (
        <Row
          title="Search Results"
          fetchURL={`/search/movie?api_key=${API_KEY}&query=${searchValue}`}
        />
      )}

      <Row
        title="NETFLIX ORIGINALS"
        fetchURL={requests.fetchNetflixOriginals}
        isLarge
      />
      <Row title="Trending Now" fetchURL={requests.fetchTrending} />
      <Row title="Top Rated" fetchURL={requests.fetchTopRated} />
      <Row title="Action Movies" fetchURL={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchURL={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchURL={requests.fetchHorrorMovies} />
      <Row title="Documentries" fetchURL={requests.fetchDocumentries} />
      <Footer />
    </div>
  );
}
