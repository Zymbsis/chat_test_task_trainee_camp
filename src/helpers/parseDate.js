export const parseDate = (date) => {
  const newDate = new Date(date);
  const month = newDate.toLocaleString('en-US', { month: 'short' });
  const day = newDate.getDate();
  const year = newDate.getFullYear();
  return `${month} ${day}, ${year}`;
};
export const parseFullDate = (date) => {
  const newDate = new Date(date);
  const month = newDate.getMonth() + 1;
  const day = newDate.getDate();
  const year = newDate.getFullYear();
  const time = newDate.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  });

  return `${month}/${day}/${year}, ${time}`;
};
