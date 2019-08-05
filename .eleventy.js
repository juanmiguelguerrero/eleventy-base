module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy('src/images')
  eleventyConfig.addPassthroughCopy('src/css/assets')

  return {
    dir: { 
		input: 'src',
		output: 'dist',
		includes: "_includes",
		data: '_data'
	},
    passthroughFileCopy: true,
    templateFormats: ['njk', 'md', 'html', 'css', 'js'],
    htmlTemplateEngine: 'njk',
	markdownTemplateEngine: 'njk',
	dataTemplateEngine: 'njk'
  }
}