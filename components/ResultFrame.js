import React from 'react';

const ResultsFrame = ({ result}) => {
  // Dummy data for matched books
    const matchedBooks = result;

  const booksToDisplay = matchedBooks.length > 0 ? matchedBooks : null;

  return (
    <div className="container mx-auto mt-8 p-4 bg-gray-100 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-center">Matching Results</h2>
      {booksToDisplay && booksToDisplay.length > 0 ? (
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {booksToDisplay.map((book, index) => (
            <li key={index} className="p-4 border rounded-md shadow-md flex flex-col items-center">
              <div className="w-32 h-40 mb-4 overflow-hidden rounded-lg">
                <img src={book.img} alt={book.title} className="w-full h-full object-cover" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{book.title}</h3>
              <p className="text-gray-700">{book.description}</p>
              {/* Add other book details as needed */}
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-center text-gray-700">No matching books found.</p>
      )}
    </div>
  );
};

export default ResultsFrame;
