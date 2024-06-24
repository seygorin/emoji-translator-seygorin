const Loading: React.FC = () => {
  return (
    <div className="flex items-center justify-center my-4">
      <svg
        className="animate-spin h-8 w-8"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-10"
          cx="12"
          cy="12"
          r="10"
          stroke="url(#gradient)"
          strokeWidth="4"
        ></circle>
        <path
          className="opacity-10"
          fill="url(#gradient)"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        ></path>
        <defs>
          <linearGradient id="gradient" gradientTransform="rotate(90)">
            <stop offset="0%" stopColor="red" />
            <stop offset="14.3%" stopColor="orange" />
            <stop offset="28.6%" stopColor="yellow" />
            <stop offset="42.9%" stopColor="green" />
            <stop offset="57.1%" stopColor="blue" />
            <stop offset="71.4%" stopColor="indigo" />
            <stop offset="85.7%" stopColor="violet" />
            <stop offset="100%" stopColor="red" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default Loading;
