export const formatDate = (inputDate: string) => {
  const months = [
    "enero",
    "febrero",
    "marzo",
    "abril",
    "mayo",
    "junio",
    "julio",
    "agosto",
    "septiembre",
    "octubre",
    "noviembre",
    "diciembre",
  ];

  const date = new Date(inputDate);
  date.setHours(24, 0, 0, 0);
  const day = date.getDate();
  const monthIndex = date.getMonth();
  const year = date.getFullYear();

  return `${day}, ${months[monthIndex]}, ${year}`;
};
