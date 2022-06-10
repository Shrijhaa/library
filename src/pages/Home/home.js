import React, { useState, useEffect } from "react";
import Row from "./row";
import { BiSearchAlt } from "react-icons/bi";
import MeiliSearch from "meilisearch";
import "./home.css";
import About from "./about";
import Profile from "./profile";

const client = new MeiliSearch({
  host: "http://127.0.0.1:7700/",
});

function App() {
  const [searchedWord, setSearch] = useState("");
  const [resultSearch, setResults] = useState([]);
  const [resultCards, setCards] = useState([]);

  const [profiletoggler, setprofiletoggler] = React.useState(false);

  useEffect(() => {
    // Create an scoped async function in the hook
    async function searchWithMeili() {
      const index = await client.getIndex("books");
      const search = await index.search(searchedWord);
      setResults(search.hits);
    }
    // Execute the created function directly
    searchWithMeili();
  }, [searchedWord]);

  useEffect(() => {
    let arrayItems = [];
    for (let i = 0; i < resultSearch.length; i++) {
      const product = resultSearch[i];
      // console.log(product);
      arrayItems.push(
        <div>
          <div>{product.title}</div>
        </div>
      );
    }
    setCards(arrayItems);
  }, [resultSearch]);

  useEffect(() => {
    let arrayItems = [];
    for (let i = 0; i < resultSearch.length; i++) {
      const book = resultSearch[i];
      arrayItems.push(
        <div key={i} className="font-bold text-sm mb-2 capitalize tablerowbox">
          <Row
            sno={i}
            title={book.title}
            author={book.author}
            edition={book.edition}
            availability="10"
            link={book.poster}
          />
        </div>
      );
    }
    setCards(arrayItems);
  }, [resultSearch]);

  return (
    <div className="section">
      <div className="userprofilecard">
        <Profile />
      </div>
      <div id="section1" className="section1">
        <p className="quote">Library - The road to knowledge</p>
        <About />
      </div>

      <div className="searchbartable">
        <div className="searchbar">
          <BiSearchAlt className="searchicon" />

          <input
            type="text"
            value={searchedWord}
            onChange={(event) => setSearch(event.target.value)}
            className="px-6 py-4 w-full text-black"
            placeholder="search books …"
          />
        </div>

        <div className="searchtable">
          <div className="tableheader row">
            <p className="sno">S.no</p>
            <p className="title">Book title</p>
            <p className="author">Author</p>
            <p className="edition">Edition</p>
            <p className="availability">Availability</p>
            <p className="ebook">Link</p>
          </div>

          <div className="flex flex-wrap searchResults rowresult">
            {resultCards}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
