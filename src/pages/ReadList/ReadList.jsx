import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredBook } from "../../components/Utility/addToDb";
import Book from "../Books/Book";

const ReadList = () => {
  const data = useLoaderData();

  const [readList, setReadList] = useState([]);
 const [short, setShort] = useState("");

  useEffect(() => {
    const storedBookData = getStoredBook();
    const convertedStoredBook = storedBookData.map((id) => parseInt(id));
    const myReadList = data?.filter((book) =>
      convertedStoredBook?.includes(book.bookId)
    );
    setReadList(myReadList);
  }, []);

const handleShort =(type)=>{
setShort(type);

if (type === "pages"){
const shortByPage = [...readList].sort((a,b)=>a.totalPages - b.totalPages);
setReadList(shortByPage);

}

if (type === "ratings"){
  const shortByRatings = [...readList].sort((a,b)=>a.rating - b.rating);
setReadList(shortByRatings);
}


}

  return (
    <div>
      <details className="dropdown">
        <summary className="btn m-1">Short By {short? short:""}</summary>
        <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
          <li>
            <a onClick={()=>handleShort("pages")}>Pages</a>
          </li>
          <li>
            <a onClick={()=>handleShort("ratings")}>Ratings</a>
          </li>
        </ul>
      </details>
      <Tabs>
        <TabList>
          <Tab>Read List</Tab>
          <Tab>Watch List</Tab>
        </TabList>

        <TabPanel>
          <h2>ReadList: {readList.length}</h2>
          <div>
            {readList?.map((book, index) => (
              <Book key={index} book={book} />
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ReadList;
