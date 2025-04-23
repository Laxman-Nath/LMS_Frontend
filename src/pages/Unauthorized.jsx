import React from 'react';

const Unauthorized = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-xl text-center max-w-sm w-full">
        <h1 className="text-4xl font-bold text-red-500 mb-4">Access Denied</h1>
        <p className="text-xl text-gray-600 mb-6">
          You are not authorized to view this page.
        </p>
        <div className="space-x-4">
          <a
            href="/"
            className="px-6 py-2 bg-blue-600 text-white text-lg rounded-md hover:bg-blue-700 transition duration-300"
          >
            Go to Home
          </a>
         
        </div>
      </div>
    </div>
  );
};

export default Unauthorized;
