export const tabTitle = (title) => {
  const siteName = document.title.split("|")[0];
  return siteName + " | " + title;
};
