export function PrimaryButton({ text, onClick }) {
  return (
    <button onClick={onClick} className="bg-black text-white py-2 rounded-md">
      {text}
    </button>
  );
}
