const fonts = "node_modules/@fontsource-variable/archivo/files";

export default function (eleventyConfig) {
  // CSS is written next to its layout/component and inlined into <head>.
  // Buckets keep the order: "global" (tokens, base, layout) before "default" (components).
  eleventyConfig.addBundle("css");

  eleventyConfig.addPassthroughCopy({ "src/img": "img" });
  eleventyConfig.addPassthroughCopy({
    [`${fonts}/archivo-latin-standard-normal.woff2`]: "fonts/archivo-latin-standard-normal.woff2",
    [`${fonts}/archivo-latin-ext-standard-normal.woff2`]: "fonts/archivo-latin-ext-standard-normal.woff2",
  });
}

export const config = {
  dir: {
    input: "src",
    output: "_site",
  },
};
