module.exports = {
	extends: [
		'stylelint-config-standard',
		'stylelint-config-standard-scss',
		'stylelint-config-recommended-vue'
	],
	plugins: ['stylelint-order'],
	rules: {
		indentation: 'tab',
		// 禁止使用可以缩写却不缩写的属性
		'declaration-block-no-redundant-longhand-properties': true,
		'at-rule-no-unknown': [
			true,
			{
				ignoreAtRules: [
					'extend',
					'at-root',
					'debug',
					'warn',
					'error',
					'if',
					'else',
					'for',
					'each',
					'while',
					'mixin',
					'include',
					'content',
					'return',
					'function',
				],
			},
		],
		'selector-pseudo-element-no-unknown': [
			true,
			{
				ignorePseudoElements: ['deep'],
			},
		],
		'no-descending-specificity': null,
		'selector-class-pattern': [
			'^([a-z][a-z0-9]*)(-[a-z0-9]+)*?((--|__)[a-z0-9]+)*?(-[a-z0-9]+)*?$',
			{
				message: selector => `"${selector}" to be bem`,
			},
		],
		'no-duplicate-selectors': null,
		'font-family-no-missing-generic-family-keyword': null,
	},
}
