import React from 'react';
import { FaStarHalfAlt } from "react-icons/fa";
import { Link } from 'react-router';

const Book = ({book}) => {

const {bookId, bookName, category, image, publisher, rating,  tags, yearOfPublishing} = book;

  return (
 <Link to={`/bookDetails/${bookId}`}>
   <div className="card bg-base-100 w-96 shadow-sm m-4">
  <figure>
    <img
    className='h-[166px]'
      src={image}
      alt="Shoes" />
  </figure>
  <div className="card-body">

    <div className='flex justify-center gap-10'>
      {
        tags.map((tag, idx)=><button key={idx}>{tag}</button>)
      }
    </div>

    <h2 className="card-title">
      {bookName}
     
      <div className="badge badge-secondary">{yearOfPublishing}</div>
    </h2>
     <p>Books by: {publisher}</p>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
<div className='border border-dashed'></div>

    <div className="card-actions justify-between">
      <div className="badge ">{category}</div>
      <div className="badge ">{rating} <FaStarHalfAlt /></div>
    </div>
  </div>
</div>
 </Link>
  );
};

export default Book;
