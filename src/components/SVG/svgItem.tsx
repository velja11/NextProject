const SVG: React.FC<{ closeClick: () => void }> = ({ closeClick }) => {
  return (
    <svg
      onClick={closeClick}
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6 text-black cursor-pointer hover:scale-110 mr-2"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  );
};

export default SVG;
