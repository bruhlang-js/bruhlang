class BruhLang {
    constructor(texts) {
        this.texts = texts;
        this.pos = -1;
        this.char = null;
        this.prevChar = null;
        this.afterChar = null;

        this.adv();
    }

    adv() {
        this.pos++;
        this.char = this.pos < this.texts.length ? this.texts[this.pos] : null;

        this.prevChar = this.char ? this.texts[this.pos - 1]: null;
        this.afterChar = this.char ? this.texts[this.pos + 1] : null;
    }

    start() {
        let res = '';

        while (this.char !== null) {
            if (this.char === '.') {
                res += `${this.prevChar}`;
                res = res.replace('.', '')
                this.adv()
            } else if (this.char === '+') {
                res += `${this.prevChar + this.afterChar}`;
                this.adv()
            }
            
            else {
                res += this.char;
                this.adv();
            }
        }

        return res;
    }
}

module.exports = BruhLang;
