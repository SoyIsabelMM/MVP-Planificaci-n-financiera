const months = [
  { value: "january", label: "Enero" },
  { value: "february", label: "Febrero" },
  { value: "march", label: "Marzo" },
  { value: "april", label: "Abril" },
  { value: "may", label: "Mayo" },
  { value: "june", label: "Junio" },
  { value: "july", label: "Julio" },
  { value: "august", label: "Agosto" },
  { value: "september", label: "Septiembre" },
  { value: "october", label: "Octubre" },
  { value: "november", label: "Noviembre" },
  { value: "december", label: "Diciembre" },
];

export function MonthSelector() {
  return (
    <select className="bg-black text-white rounded-sm px-1 overflow-y-auto">
      {months.map(({ value, label }, index) => (
        <option value={value} className="text-white" key={index}>
          {label}
        </option>
      ))}
    </select>
  );
}
