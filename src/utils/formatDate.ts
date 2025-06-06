const formatDate = (date: Date) => {
  return date.toLocaleDateString("ko-KR", {
    dateStyle: "full",
  });
};

export default formatDate;
