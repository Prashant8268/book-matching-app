import React, { useState } from 'react';
import axios from 'axios';

const InputForm = ({ result, isResultAvailable, setIsResultAvailable,setResult }) => {
  const [genrePreference, setGenrePreference] = useState('');
  const [complexityPreference, setComplexityPreference] = useState(5);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = {
        genrePreference,
        complexityPreference,
      };
      const response = await axios.post('https://booking-matching-app.onrender.com/api/students', formData);

      console.log(response.data.matchedBooks);
      setResult(response.data.matchedBooks)
      
      setIsResultAvailable(true);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
    setIsResultAvailable(true);
  };

  return (
    <form className="container mx-auto max-w-md mt-24 p-4 bg-gray-100 rounded-lg shadow-lg" onSubmit={handleSubmit}>
      <h2 className="text-3xl font-bold mb-6 text-center">Book Matching Form</h2>
      <div className="mb-6">
        <label htmlFor="genrePreference" className="block text-gray-700 font-semibold mb-2">
          What genre do you prefer?
        </label>
        <input
          type="text"
          id="genrePreference"
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          placeholder="Enter preferred genre..."
          value={genrePreference}
          onChange={(e) => setGenrePreference(e.target.value)}
        />
        <div className="text-sm italic text-gray-600 mt-1">
          Enter one of: Fantasy, Mystery, Science Fiction, Romance, Thriller, Historical Fiction
        </div>
      </div>
      <div className="mb-6">
        <label htmlFor="complexityPreference" className="block text-gray-700 font-semibold mb-2">
          On a scale of 1 to 10, how do you rate your complexity preference?
        </label>
        <input
          type="range"
          id="complexityPreference"
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          min="1"
          max="10"
          value={complexityPreference}
          onChange={(e) => setComplexityPreference(e.target.value)}
        />
        <p className="text-center mt-1 text-gray-600">Complexity: {complexityPreference}</p>
      </div>
      <div className="text-center">
        <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-md transition duration-300 ease-in-out">
          Match Books
        </button>
      </div>
    </form>
  );
};

export default InputForm;
