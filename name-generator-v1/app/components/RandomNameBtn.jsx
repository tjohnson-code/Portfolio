'use client';

import { useState } from 'react';

export default function RandomNameBtn() {
  const [name, setName] = useState('');

  const generateRandomName = async () => {
    try {
      const response = await fetch('/api/random-name');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setName(data.name);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <button
        onClick={generateRandomName}
        className="bg-blue-400 text-pink-500 hover:bg-blue-500 hover:text-pink-600 rounded"
      >
        Generate Random Name
      </button>
      <p>{name}</p>
    </div>
  );
}
