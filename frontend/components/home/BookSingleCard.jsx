import React from "react";
import { PiBookOpenTextLight } from "react-icons/pi";
import { BiUserCircle } from "react-icons/bi";
import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md";

const BookSingleCard = ({book}) => {
  return (
    <div key={book._id} className="border-2 border-sky-400 rounded-xl p-4">
          <h2 className="text-gray-500 mb-1">
            Publish Year: {book.publishYear}
          </h2>
          <h4 className="my-2 text-gray-500">{book._id}</h4>
          <div className="flex justify-start books-center gap-x-2">
            <PiBookOpenTextLight className="text-4xl text-sky-600 mb-2" />
            <h2 className="text-xl font-bold mb-2">{book.title}</h2>
          </div>
          <div className="flex justify-start books-center gap-x-2">
            <BiUserCircle className="text-4xl text-sky-600 mb-2" />
            <h2 className="text-gray-500 mb-1">Author: {book.author}</h2>
          </div>
          <div className="flex justify-start books-center gap-x-2">
            <Link to={`/books/details/${book._id}`}>
              <BsInfoCircle className="text-green-800 text-2xl hover:text-black" />
            </Link>
            <Link to={`/books/edit/${book._id}`}>
              <AiOutlineEdit className="text-yellow-800 text-2xl hover:text-black" />
            </Link>
            <Link to={`/books/delete/${book._id}`}>
              <MdOutlineDelete className="text-red-800 text-2xl hover:text-black" />
            </Link>
          </div>
        </div>
  )
}

export default BookSingleCard
