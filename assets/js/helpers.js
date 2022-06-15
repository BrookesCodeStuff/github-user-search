function formatDate(data) {
  let date = new Date(data);

  // Return date DD MMM YYYY
  return `${date.getDate()} ${new Intl.DateTimeFormat("en-US", {
    month: "long",
  })
    .format(date)
    .substring(0, 3)} ${date.getFullYear()}`;
}

export { formatDate };
