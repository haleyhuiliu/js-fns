Regular Expression (regex, regexp, RE)

https://regexper.com/

---

```
let reg = /[a-z]{3}/gmi;
let reg = /[a-z]{3}/g;
let reg = /[a-z]{3}/m;
let reg = /[a-z]{3}/i;
```

g - global search, otherwise, find the first match case and stop.

m - multi-line search

i - case insensitive.

```
let reg = new RegExp('\\bis\\b', 'g');
```

The \b metacharacter is used to find a match at the beginning or end of a word.

---

`'a1b2c3d4e5'.replace(/[abc]/g, '0')` ==> `'010203d4e5'`

`'abcdefg'.replace(/[^abc]/g, '0')` ==> `'abc0000'`

`[0123456789]` ==> `[0-9]`

`[abcdefghijklmnopqrstuvwxyz]` ==> `[a-z]`

`'a1c2d3e4f5'.replace(/[0-9]/g, 'x')` ==> `'axcxdxexfx'`

`'a1c2d3e4f5'.repalce(/[a-z]/g, 'x')` ==> `'x1x2x3x4x5'`

`'a1C2d3E4f5G6'.replace(/[a-zA-Z]/g, '*')` ==> `'*1*2*3*4*5*6'`

`'2018-5-20'.replace(/[0-9-]/g, '*')` ==> `'*********'`

---

`\d` ==> `[0-9]`

`\D` ==> `[^0-9]`

`\s` ==> `[\t\n\x0B\r]` whitespace

`\S` ==> `[^\t\n\x0b\r]`

`\w` ==> `[a-zA-Z_0-9]`

`\W` ==> `[^a-za-z_0-9]`

`.` ==> `[^\r\n]`

---

`^` ==> starts with

`$` ==> ends with

`\b` ==> match at the beginning or end of a word

`'Hello world, world'.replace(/world$/g, 'JS')` ==> `'Hello world, JS'`

`'Hello world, hello'.replace(/^hello/gi, 'Hi')` ==> `'Hi world, hello'`

`'This is me!'.replace(/is/g, '**')` ==> `'Th** ** me!'`

`'This is me!'.replace(/\bis/g, '**')` ==> `'This ** me!'`

`'This is me!'.replace(/\Bis\b/g, '**')` ==> `'Th** is me!'`

---

`?` 0 or 1

`+` 1 or more

`*` 0 or more

`{n}` n times

`{n, m}` [n, m] times

`{n, }` >= n times

`'01234abcde'.replace(/\d{5}/g, '*')` ==> `'*abcde'`

`'012345abcde'.replace(/\d{5}/g, '*')` ==> `'*5abcde'`
