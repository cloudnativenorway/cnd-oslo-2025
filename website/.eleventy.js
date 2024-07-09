const { EleventyHtmlBasePlugin } = require("@11ty/eleventy")

module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/assets/css/style.css")
  eleventyConfig.addPassthroughCopy("src/assets/images")
  eleventyConfig.addPlugin(EleventyHtmlBasePlugin)

  return {
    dir: {
      input: "src",
      data: "_data",
      includes: "_includes",
      layouts: "_layouts",
    }
  };
};
