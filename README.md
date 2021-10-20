# Next locale database
## Installation
Get the latest version by NPM:
```bash
$ npm install next-locale-database
```
Get the latest version by yarn:
```bash
$ yarn add next-locale-database
```
## Usage
### Use hook
Import next-locale-database:
```javascript
import useLocale from "next-locale-database";
```
And use hook in your function component:
```javascript
  const {getLang} =  useLocale();
```
Get locale string in your component
```html
  <Component>
    { getLang('{"en": "Example", "vi", "Ví dụ"}') }
  </Component>
```
## License
MIT license. © kpwzto