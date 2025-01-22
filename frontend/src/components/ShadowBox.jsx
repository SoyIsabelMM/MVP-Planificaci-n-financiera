export default function ShadowBox({ children }) {
  return (
    <div className="shadow-[0px_4px_6px_rgba(0,0,0,0.1),0px_4px_6px_rgba(0,0,0,0.1)] rounded-lg py-3 px-3">
      {children}
    </div>
  );
}
