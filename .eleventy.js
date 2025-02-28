module.exports = function (eleventyConfig) {
  // Pass through static assets
  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addPassthroughCopy("js");

  // Copy images directly from their source location to the output
  eleventyConfig.addPassthroughCopy("about/img");

  // Add PostCSS and Tailwind processing for CSS
  eleventyConfig.addTemplateFormats("css");
  eleventyConfig.addExtension("css", {
    outputFileExtension: "css",
    compile: async function (inputContent, inputPath) {
      if (inputPath.includes("node_modules") || !inputPath.endsWith(".css")) {
        return;
      }

      const postcss = require("postcss");
      const tailwindcss = require("tailwindcss");
      const autoprefixer = require("autoprefixer");

      const result = await postcss([tailwindcss, autoprefixer]).process(
        inputContent,
        { from: inputPath }
      );

      return async () => {
        return result.css;
      };
    },
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      layouts: "_layouts",
      data: "_data",
    },
    templateFormats: ["html", "md", "njk"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
  };
};
