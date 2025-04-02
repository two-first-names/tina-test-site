export default function (eleventyConfig) {
  // Order matters, put this at the top of your configuration file.
  eleventyConfig.addPassthroughCopy({ "content/admin/assets": "admin/assets" });

  return {
    dir: {
      output: "_site",
      input: "content",
    },
  };
}
