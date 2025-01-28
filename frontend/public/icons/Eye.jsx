export function Eye(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      width="1em"
      height="1em"
      strokeWidth={2}
      {...props}
    >
      <path d="M29 16c0 3-5.82 9-13 9S3 19 3 16s5.82-9 13-9s13 6 13 9Z"></path>
      <path d="M21 16a5 5 0 1 1-10 0a5 5 0 0 1 10 0Z"></path>
    </svg>
  );
}
