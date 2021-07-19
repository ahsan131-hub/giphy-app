import Header from "./container/Header";
import { useState, useEffect } from "react";
import GiphContainer from "./container/GiphContainer";
import axios from "axios";
import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader";
import Footer from "./container/Footer";

function App() {
  // true when data is fetched elese false
  const [isloaded, setIsloaded] = useState(false);
  const [paginateSize, setPaginateSize] = useState(10);
  // const [paginateIndex, setpaginateIndex] = useState(10);
  const [data, setdata] = useState([]);
  const [paginateData, setpaginateData] = useState([]);
  const [postPerPage, setPostPerPage] = useState(6);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    // effect
    return () => {
      console.log("render");
    };
  }, [currentPage]);

  //css for loader
  const override = css`
    display: block;
    margin: 0 auto;
    border-color: gray;
  `;

  //trigger when user search and included fetch api call fro fetching data
  const onSubmit = async (text) => {
    setIsloaded(false);

    // http://api.giphy.com/v1/gifs/search?q=hilarious&api_key=dc6zaTOxFJmzC
    axios
      .get(`http://api.giphy.com/v1/gifs/search`, {
        params: {
          q: { text },
          api_key: "dc6zaTOxFJmzC",
        },
      })
      .then((res) => {
        // console.log("then");
        const data1 = res.data;
        //data is added at the first of of the previouse data
        // console.log([...Object.entries(data1.data), ...data]);
        const mergeWithPrevData = [
          ...Object.entries(data1.data).slice(0, 12),
          ...data,
        ];

        setdata(mergeWithPrevData);

        setIsloaded(true);
      })
      .catch((err) => {
        console.log("Connot access");
      });
    console.log(data);
  };

  //Get the current Posts
  const indexOfLastGiph = currentPage * postPerPage;
  const indexOfFirstGiph = indexOfLastGiph - postPerPage;
  const currentGiphs = data.slice(indexOfFirstGiph, indexOfLastGiph);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <>
      <Header onSub={onSubmit} />
      {currentGiphs.length > 0 &&
        (isloaded ? (
          <>
            <GiphContainer data={currentGiphs} isloaded={isloaded} />
            <Footer
              totalPosts={data.length}
              postsPerPage={postPerPage}
              paginate={paginate}
            />
          </>
        ) : (
          <ClipLoader css={override} size={150} />
        ))}
    </>
  );
}

export default App;
