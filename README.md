# css-loader going crazy

## How to run project

```
npm install
npm run demo
```

## What's wrong?

Everywhere across the entire Internet I read that I can use css-modules in this way:

```javascript
import styles from "./style.css";
// import { className } from "./style.css";

element.innerHTML = '<div class="' + styles.className + '">';
```

This code is copied from official https://github.com/css-modules/css-modules

## But it doesn't work! 

Webpack config:

```javascript
module.exports = {
    mode: 'development',
    entry: {
        bundle: "./src/index.js"
    },
    output: {
        filename: "bundle.js",
    },

    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {
                        loader: "css-loader",
                        options: {
                            modules: true
                        }
                    }
                ]
            }
        ]
    }
};
```

CSS (`index.css`):

```css
.testClass {
    color: red;
}
```

JS: (`index.js`):

```javascript

import styles from "./index.css";

console.log(styles.testClass); // undefined!!! WHY WHY WHY
console.log(styles.locals.testClass); // _22890ashYFWamah25O4_Va - correct


```

What the heck is going on? 

Why all examples across the Internet seems to show that library works differently than it really does? 