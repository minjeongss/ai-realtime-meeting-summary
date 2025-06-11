const formatDate = (date: Date) => {
  return date.toLocaleDateString("en-US", {
    dateStyle: "full",
  });
};

export default formatDate;
