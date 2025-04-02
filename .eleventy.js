export default function (eleventyConfig) {
  // Order matters, put this at the top of your configuration file.
  eleventyConfig.setInputDirectory("content");
  eleventyConfig.addPassthroughCopy("public");
}
