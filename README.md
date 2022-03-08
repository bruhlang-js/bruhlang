# BruhLang

Super super simple language made in JavaScript, inspired by brainfuck, but instead you can play around with strings.

## cli

`bruhlang <file>` - To run a file, it is required.

## Example

```
Saying hello world:
"hello world"

Repeating one char:
"hello world."
should print out 'hello worldd'

Concatenating two characters:
"o+o"
should print out 'oooo'
```

Any characters (except for operators) not inside strings/double quotes will be ignored.

# Operators

`+` - Concatenates two characters.

`.` - Repeats the previous Character (works only inside strings)
