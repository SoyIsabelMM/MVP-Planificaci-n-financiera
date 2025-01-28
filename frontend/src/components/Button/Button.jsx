export function PrimaryButton({ text, onClick, className }) {
  return (
    <button
      onClick={onClick}
      className={`bg-black text-white py-2 rounded-md ${className}`}
    >
      {text}
    </button>
  );
}
