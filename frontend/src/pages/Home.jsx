import React, { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../../components/Spinner";
import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md";

const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:5000/books")
      .then((response) => {
        setBooks(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching books:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl my-8">Books List</h1>
        <Link to="/books/create">
          <MdOutlineAddBox className="text-sky-800 text-4xl" />
        </Link>
      </div>
      {loading ? (
        <Spinner />
      ) : (
        <table className="w-full border-collapse border border-gray-200">
          <thead>
            <tr>
              <th className="border border-slat-600 rounded-md ">No</th>
              <th className="border border-slat-600 rounded-md ">Title</th>
              <th className="border border-slat-600 rounded-md max-md:hidden">
                Author
              </th>
              <th className="border border-slat-600 rounded-md max-md:hidden">
                Publisher
              </th>
              <th className="border border-slat-600 rounded-md ">Operations</th>
            </tr>
          </thead>
          <tbody>
            {books.map((books, index) => (
              <tr key={books._id} className="h-8">
                <td className="border border-slat-600 rounded-md text-center">
                  {index + 1}
                </td>
                <td className="border border-slat-600 rounded-md text-center">
                  {books.title}
                </td>
                <td className="border border-slat-600 rounded-md text-center max-md:hidden">
                  {books.author}
                </td>
                <td className="border border-slat-600 rounded-md text-center max-md:hidden">
                  {books.publishYear}
                </td>
                <td className="border border-slat-600 rounded-md text-center">
                  <Link to={`/books/details/${books._id}`}>
                    <BsInfoCircle className="text-green-800 text-2xl" />
                  </Link>
                  <Link to={`/books/edit/${books._id}`}>
                    <AiOutlineEdit className="text-yellow-800 text-2xl" />
                  </Link>
                  <Link to={`/books/delete/${books._id}`}>
                    <MdOutlineDelete className="text-red-800 text-2xl" />
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Home;
