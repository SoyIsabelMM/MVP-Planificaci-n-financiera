export function Server(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      {...props}
    >
      <g
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      >
        <rect width="20" height="8" x="2" y="2" rx="2" ry="2"></rect>
        <rect width="20" height="8" x="2" y="14" rx="2" ry="2"></rect>
        <path d="M6 6h.01M6 18h.01"></path>
      </g>
    </svg>
  );
}
