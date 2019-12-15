<p align="center">
<img src="https://i.ibb.co/CMzxD5f/logo.png" alt="Logo" />
</p>

## Official jsonstore library for the browser

### What's jsonstore?
jsonstore is a free single-click datastore available since March 2018 - just visit the website, copy your personal token and you can start storing data online for free.
Visit https://www.jsonstore.io/ or [visit the GitHub repository](https://github.com/bluzi/jsonstore)

### Usage
#### Add jsonstore to your website
```html
<html>
    <head>
        <title>...</title>
        <script src="https://cdn.jsdelivr.net/gh/bluzi/browser-jsonstore/dist/bundle.min.js"></script>
    </head>
    <body>
    ...
    </body>
</html>
```

or

```
npm i browser-jsonstore
```
```js
const jsonstore = require('browser-jsonstore');
```

#### Initiate with your token
```js
const db = jsonstore('<Your personal token>')
```

#### Store data
```js
await db.post('users/1', { name: 'jon snow', age: 31 });
```

#### Retrive data
```js
const firstUser = await db.get('users/1');
console.log(firstUser.name); // jon snow
```

#### Delete data
```js
await db.delete('users/1');
```

### Contribution
Any issues, suggestions or pull requests are welcome, please create an issue before you make a pull request so we can make sure everybody is on the same page.

### License
This project is licensed under the MIT License.