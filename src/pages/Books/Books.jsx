// import React, { useEffect, useState } from 'react';

import Book from "./Book";

const Books = ({ data }) => {
  return (
    <div>
      <h1 className="text-3xl text-center p-6">Books</h1>
      <div className="grid grid-cols-3 gap-4">
        {data?.map((book, index) => (
          <Book key={index} book={book} />
        ))}
      </div>
    </div>
  );
};

export default Books;
