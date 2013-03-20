# Console Cross Browser

An alias to avoid errors in javascript using console properties.

# Usage

Using these alias you'll avoid errors in browsers that doesn't support console properties natively or doesn't have any debugger tool installed and running.

## Available Alias

_cl(arguments)_

```javascript
console.log(arguments)
```

_cd(arguments)_

```javascript
console.dir(arguments)
```

_cg(arguments)_

```javascript
console.group();
console.log(arguments);
console.groupEnd();
```

# License

MIT License - http://www.opensource.org/licenses/MIT