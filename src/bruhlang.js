const tokenType = {
    id: 'IDENTIFIER',
    dot: 'DOT',
    plus: 'PLUS',
    nl: 'NEWLINE'
};

const ops = ['.', '+'];

class Token {
    constructor(type, value) {
        this.type = type;
        this.value = value;
    }

    isNotAnIdentifier() {
        return this.type !== tokenType.id;
    }
}

class Lexer {
    constructor(texts) {
        this.texts = texts;
        this.pos = -1;
        this.char = null;
        this.prevChar = null;
        this.afterChar = null;
        this.tokens = [];

        this.adv();
    }

    adv() {
        this.pos++;
        this.char = this.pos < this.texts.length ? this.texts[this.pos] : null;

        this.prevChar = this.char ? this.texts[this.pos - 1] : null;
        this.afterChar = this.char ? this.texts[this.pos + 1] : null;
    }

    addToken(type, value) {
        this.tokens.push(
            new Token(
                type, 
                value,
            )   
        )
    }

    start() {
        while (this.char !== null) {
            if (this.char === '\n') {
                this.addToken(tokenType.nl);
                this.adv();
            } else if (this.char === '"') {
                const id = this.getId();
                this.addToken(tokenType.id, id);
            }
            
            else {
                this.adv();
            }
        }

        return this.tokens;
    }

    getId() {
        let res = '';
        this.adv();
        
        while (this.char !== null && this.char !== '"') {
            if (this.char === '.') {
                res += this.prevChar;
                this.adv();
                continue;
            } else if (this.char === '+') {
                const prevChar = this.prevChar;
                this.adv();
                res += prevChar + this.char;
                this.adv();
                continue;
            } else { 
                res += this.char;
                this.adv();
            }
        }

        this.adv();
        return res;
    }
}

class BruhLang {
    constructor(texts) {
        this.texts = texts;
        this.tokens = new Lexer(texts).start();
        this.idx = -1;
        this.token = null;
        this.afterToken = null;
        this.prevToken = null;

        this.adv();
    }

    adv() {
        this.idx++;
        this.token = this.idx < this.tokens.length ? this.tokens[this.idx] : null;
    }

    start() {
        let res = '';
        
        while (this.token !== null) {
            if (this.token.type === 'NEWLINE') {
                res += '\n';
                this.adv();
            }

            else if (this.token.type === 'IDENTIFIER') {
                res += `${this.token.value}`;
                this.adv();
            } else this.adv();
        }

        return {
            res,
            tokens: this.tokens,
        };
    }
}

module.exports = BruhLang;
