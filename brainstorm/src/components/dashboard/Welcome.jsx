import React, { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode"; // Fix import

function Welcome() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const decoded = jwtDecode(token);
        setUser(decoded);
      } catch (error) {
        console.error('Error decoding token:', error);
      }
    }
  }, []);

  return (
    <div className="bg-gray-900/50 rounded-xl p-6 border border-gray-800">
      {user ? (
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-bold text-green-500">
            Welcome back, {user.username}! 👋
          </h1>
          <p className="text-gray-400">
            Ready to collaborate on some amazing projects?
          </p>
        </div>
      ) : (
        <h1 className="text-gray-400">Loading...</h1>
      )}
    </div>
  );
}

export default Welcome;
