import React from "react";
import { useLoaderData, useParams } from "react-router";
import { addToStoreDB } from "../../components/Utility/addToDb";

const BookDetails = () => {
  const { id } = useParams();
  const bookId = parseInt(id);
  const data = useLoaderData();
  const singleData = data.find((book) => book.bookId === bookId);
  const { bookName, image } = singleData;

const handleMarkAsRead = (id)=>{
  addToStoreDB(id)

}


  return (
    <div className="flex flex-col items-center gap-4">
      <h1>{bookName}</h1>
      <img className="w-[200px]" src={image} alt="" />
      <div>
        <button onClick={()=>handleMarkAsRead(id)} className="btn btn-accent">Mark as Read</button>
        <button className="btn">add to wishlist</button>
      </div>
    </div>
  );
};

export default BookDetails;
