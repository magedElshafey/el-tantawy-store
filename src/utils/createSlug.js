// Function to convert name to a URL-safe slug
const createSlug = (name) => {
  return name
    .trim() // Remove leading and trailing spaces
    .replace(/\s+/g, "-") // Replace spaces with dashes
    .replace(/[^\u0600-\u06FFa-zA-Z0-9\-]/g, ""); // Remove any character that is not Arabic, a-z, A-Z, 0-9, or dash
};
export default createSlug;
