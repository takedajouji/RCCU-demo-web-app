export type Branch = {
  id: string;
  name: string;
  address: string;
  city: string;
  phone: string;
  hours: { label: string; value: string }[];
  services: string[];
};

export const branches: Branch[] = [
  {
    id: "florence-main",
    name: "Florence Main Office",
    address: "1200 Riverside Drive",
    city: "Florence, AL 35630",
    phone: "(555) 555-0101",
    hours: [
      { label: "Lobby", value: "Mon–Fri 9 AM – 5 PM" },
      { label: "Drive-through", value: "Mon–Fri 8 AM – 6 PM; Sat 9 AM – 1 PM (seasonal)" },
    ],
    services: ["Full service", "Mortgage officer", "Notary"],
  },
  {
    id: "muscle-shoals",
    name: "Muscle Shoals Branch",
    address: "450 Avalon Avenue",
    city: "Muscle Shoals, AL 35661",
    phone: "(555) 555-0102",
    hours: [
      { label: "Lobby", value: "Mon–Fri 9 AM – 4 PM" },
      { label: "ITM", value: "24/7" },
    ],
    services: ["Deposits", "Loan payments", "Member services"],
  },
  {
    id: "tuscumbia",
    name: "Tuscumbia Express",
    address: "88 Main Street",
    city: "Tuscumbia, AL 35674",
    phone: "(555) 555-0103",
    hours: [{ label: "Lobby", value: "Mon–Fri 10 AM – 3 PM" }],
    services: ["Express teller", "ATM"],
  },
];
