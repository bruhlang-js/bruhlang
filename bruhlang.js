class BruhLang {
	constructor(texts) {
		this.texts = texts;
	}

	start() {
		let res = '';
		let hasDoneDotOp = false;
		let hasDoneConcatOp = false;

		for (let i = 0; i < this.texts.length; i++) {
			const text = this.texts[i];
			const prevText = this.texts[i - 1];
			const afterText = this.texts[i + 1];

			if (text === '.') {
				if (
					afterText === '.' &&
					hasDoneDotOp === true
				) continue;

				res += `${this.texts[i - 1]}`;
				res = res.replace('.', '');
				hasDoneDotOp = true;
				continue;
			}

			if(text === '+') {
				if (
					afterText === '+' &&
					hasDoneConcatOp === true
				) continue;

				if (
					prevText === '\t' &&
					afterText === '\t'
				) {
					res += `${this.texts[i - 2] + this.texts[i + 2]}`;
					res = res.replace('+', '');
					continue;
				}

				res += `${prevText + afterText}`;
				res = res.replace('+', '');
				hasDoneConcatOp = true;
				continue;
			}

			res += text;
		}

		return res;
	}
}

module.exports = BruhLang;
