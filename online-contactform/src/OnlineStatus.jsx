import React, { useState, useEffect } from 'react';

export default function OnlineStatus() {

 const [isOnline, setIsOnline] = useState(navigator.onLine);

    useEffect(() => {
        const handleOnline = () => setIsOnline(true);
        const handleOffline = () => setIsOnline(false);

        window.addEventListener("online", handleOnline);
        window.addEventListener("offline", handleOffline);

        return () => {
            window.removeEventListener("online", handleOnline);
            window.removeEventListener("offline", handleOffline);
        };
    }, []);
    
  return (
    <div className="container py-4">
      <div className={`alert ${isOnline ? 'alert-success' : 'alert-danger'} text-center`} role="alert">
        <h4 className="mb-0">
          {isOnline ? '✅ Welcome Back. You are Online' : '⚠️ You are Offline'}
        </h4>
      </div>

    </div>
  );
}
