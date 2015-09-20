const
	funnel = require('broccoli-funnel'),
	jade = require('broccoli-jade'),
	mergeTrees = require('broccoli-merge-trees'),
	stylus = require('broccoli-stylus')

module.exports = mergeTrees([
	// https://github.com/sindresorhus/broccoli-jade#a-note-about-include-paths
	funnel(
		jade(funnel('assets/view', { srcDir: '/', destDir: 'assets/view', exclude: ['layout.jade'] })),
		{ srcDir: 'assets/view', destDir: '/' }),
	funnel(stylus('assets/style'), { srcDir: '/', destDir: 'style', exclude: ['lib.css'] }),
	'assets/static'
])
