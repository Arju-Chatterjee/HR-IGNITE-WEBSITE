// SubmitButton.tsx
import React, { useState, useEffect, useCallback } from 'react';

interface SubmitButtonProps {
  isSubmitting: boolean;
  onClick?: () => void;
  disabled?: boolean;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({
  isSubmitting,
  onClick,
  disabled = false,
}) => {
  const [isCallbackBlocked, setIsCallbackBlocked] = useState(false);
  const [blockTimeRemaining, setBlockTimeRemaining] = useState("");

  const checkCallbackStatus = useCallback(() => {
    const callbackData = localStorage.getItem("solar_booking_requested");

    if (!callbackData) {
      setIsCallbackBlocked(false);
      setBlockTimeRemaining("");
      return;
    }

    try {
      const { timestamp } = JSON.parse(callbackData);
      const now = Date.now();
      const elapsed = now - timestamp;
      const BLOCK_DURATION = 30 * 60 * 1000;

      if (elapsed < BLOCK_DURATION) {
        const remaining = BLOCK_DURATION - elapsed;
        const minutes = Math.floor(remaining / 60000);
        const seconds = Math.floor((remaining % 60000) / 1000);
        setIsCallbackBlocked(true);
        setBlockTimeRemaining(`${minutes}m ${seconds}s`);
      } else {
        localStorage.removeItem("solar_booking_requested");
        setIsCallbackBlocked(false);
        setBlockTimeRemaining("");
      }
    } catch {
      localStorage.removeItem("solar_booking_requested");
      setIsCallbackBlocked(false);
    }
  }, []);

  useEffect(() => {
    let intervalId: number;

    checkCallbackStatus();
    intervalId = window.setInterval(checkCallbackStatus, 1000);

    return () => {
      window.clearInterval(intervalId);
    };
  }, [checkCallbackStatus]);

  return (
    <button
      type="submit"
      disabled={isSubmitting || isCallbackBlocked || disabled}
      onClick={onClick}
      className={`px-6 py-2.5 rounded-lg text-white text-sm font-semibold shadow-md flex-1 transition-all duration-200 ${
        isSubmitting || isCallbackBlocked || disabled
          ? "bg-gray-500 cursor-not-allowed opacity-70"
          : "bg-green-600 hover:bg-green-700"
      }`}
    >
      <span className="flex items-center justify-center gap-2">
        {isCallbackBlocked ? (
          <>
            ⏱️ <span className="font-mono font-bold">{blockTimeRemaining}</span>
          </>
        ) : isSubmitting ? (
          "Sending..."
        ) : (
          "Request for Booking"
        )}
      </span>
    </button>
  );
};

export default SubmitButton;
