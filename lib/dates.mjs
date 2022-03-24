export const displayDate = (date) => {
  if (typeof date != "Date") date = new Date (date);
  return date.toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });
}
