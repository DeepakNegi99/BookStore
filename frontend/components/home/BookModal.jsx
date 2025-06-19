import React from "react";
import { BiUserCircle } from "react-icons/bi";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";

const BookModal = ({ book, onClose }) => {
  return (
    <div
      className="fixed bg-black bg-opacity-60 top-0 left-0 right-0 bottom-0 z-50 flex  justify-center items-center"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg p-6 w-11/12 max-w-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <AiOutlineEdit
          className="text-gray-500 text-2xl mb-4 cursor-pointer"
            onClick={onClose}
        />
         <h2 className=" w-fit px-4 py-1 
         text-gray-500 mb-1">
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
      </div>
    </div>
  );
};

export default BookModal;
