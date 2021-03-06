'use strict';

function validateAlias(alias = '', minLength = 4, maxLength = 50) {
	const ShortenerError = require('./shortenerError.js');
	
	const regexp = new RegExp('(^$)|(^[-\\wА-Яа-яёЁ]+?$)');
	
	
	if (alias.length > maxLength ||
	   (alias.length > 0 && alias.length < minLength)) {
		throw new ShortenerError('alias', `Длина названия должна быть от ${minLength} до ${maxLength} символов.`);
	}
	if (!regexp.test(alias)) { throw new ShortenerError('alias', 'Некорректное название. Допустимы символы A-z, А-я, 0-9, -, _'); }
}

module.exports = validateAlias;
