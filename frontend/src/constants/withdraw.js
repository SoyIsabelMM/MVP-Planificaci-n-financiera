export const transferenceToNewAccountFields = [
  {
    id: "recipientField",
    name: "recipient",
    type: "text",
    label: "Nombre del destinatario",
    tabIndex: 1,
    required: true,
  },
  {
    id: "bankField",
    name: "bank",
    type: "selector",
    label: "Banco",
    tabIndex: 2,
    options: [
      { value: "bbva", label: "BBVA" },
      { value: "santander", label: "Santander" },
      { value: "mercado-pago", label: "Mercado Pago" },
    ],
    defaultValue: "bbva",
    showLabel: true,
    required: true,
  },
  {
    id: "cbuField",
    name: "cbu",
    type: "text",
    label: "CBU",
    tabIndex: 3,
    required: true,
  },
  {
    id: "saveContactField",
    name: "saveContact",
    type: "checkbox",
    label: "Guardar Contacto",
    description: "Este contacto quedará guardado para futuras operaciones",
    tabIndex: 4,
    value: true,
    required: true,
  },
  {
    id: "aliasField",
    name: "alias",
    type: "text",
    label: "Alias",
    tabIndex: 5,
    required: true,
  },
  {
    id: "mountField",
    name: "mount",
    type: "number",
    label: "Monto",
    tabIndex: 6,
    required: true,
    items: [
      { text: "Saldo restante $500,00", className: "text-gray-300" },
      {
        text: "¿Quieres cambiar de cuenta?",
        className: "text-gray-500 font-semibold",
      },
    ],
  },
  {
    id: "currencyField",
    name: "currency",
    type: "selector",
    label: "Selecciona tu cuenta",
    tabIndex: 7,
    options: [
      { value: "corriente", label: "Corriente" },
      { value: "ahorros", label: "Ahorros" },
      { value: "dolar", label: "Inversión" },
    ],
    defaultValue: "corriente",
    showLabel: true,
    required: true,
  },
  {
    id: "conceptField",
    name: "concept",
    type: "text",
    label: "Concepto",
    tabIndex: 8,
    required: true,
  },
  {
    id: "transferMethodField",
    name: "transferMethod",
    type: "selector",
    label: "Modo de transferencia",
    tabIndex: 9,
    options: [
      { value: "immediate", label: "Inmediata" },
      { value: "standardinterbank", label: "Interbanzaria estandar" },
      { value: "scheduled", label: "Programada" },
    ],
    defaultValue: "peso",
    showLabel: true,
    required: true,
  },
];

export const transferenceToExistingAccountFields = [
  {
    id: "searchField",
    name: "search",
    type: "text",
    label: "Buscar",
    icon: "/image/magnifying.png",
    tabIndex: 1,
  },
  {
    id: "mountField",
    name: "mount",
    type: "number",
    label: "Monto",
    tabIndex: 2,
    required: true,
    items: [{ text: "Saldo restante $500,00", className: "text-gray-300" }],
  },
  {
    id: "currencyField",
    name: "currency",
    type: "selector",
    label: "Selecciona tu cuenta",
    tabIndex: 3,
    options: [
      { value: "corriente", label: "Corriente" },
      { value: "ahorros", label: "Ahorros" },
      { value: "inversion", label: "Inversión" },
    ],
    defaultValue: "corriente",
    showLabel: true,
    required: true,
  },
  {
    id: "conceptField",
    name: "concept",
    type: "text",
    label: "Concepto",
    tabIndex: 4,
    required: true,
  },
  {
    id: "transferMethodField",
    name: "transferMethod",
    type: "selector",
    label: "Modo de transferencia",
    tabIndex: 5,
    options: [
      { value: "immediate", label: "Inmediata" },
      { value: "standardinterbank", label: "Interbanzaria estandar" },
      { value: "scheduled", label: "Programada" },
    ],
    defaultValue: "peso",
    showLabel: true,
    required: true,
    items: [
      {
        text: "Se le cobrará el 0,3% del monto transferido",
        className: "text-gray-300 text-sm",
      },
    ],
  },
];
