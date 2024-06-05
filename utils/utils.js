export const truncateTitle = (str) => {
  if (str.length > 40) {
    return str.substring(0, 40) + "...";
  }

  return str;
};

export const editDate = (date) => new Date(date).toLocaleDateString();
