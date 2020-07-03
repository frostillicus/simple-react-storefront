const truncate = (text, maxLength) => {
  if (text.length > maxLength) {
    return text.slice(0, maxLength - 1).trim() + "…";
  } else {
    return text;
  }
};

export { truncate };
