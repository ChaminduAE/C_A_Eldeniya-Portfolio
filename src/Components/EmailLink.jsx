import React from 'react';

const EmailLink = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <a
        href="mailto:caeldeniya@outlook.com"
        className="flex items-center text-blue-500 hover:text-blue-700"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 mr-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M16 12H8m0 0H7m1 0h8m0 0v8m0-8V4m0 8h-8m4 0h0"
          />
        </svg>
        {/* your-email@example.com */}
      </a>
    </div>
  );
};

export default EmailLink;
