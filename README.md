# Frontend Mentor - Article preview component solution

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge./src/images/huddle-screenshot.png

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- See the social media share links when they click the share icon

### Screenshot

![](./src/Frontend%20Mentor%20_%20Article%20preview%20component.png)

## My process

### Built with

- Semantic HTML5 markup
- Sass ( using scss syntax )

### What I learned

I probably learned about the tricks about creating triangles using css.

```html
<div class="arrow-down"></div>
```

```css
.arrow-down {
  position: absolute;
  left: 50%;
  transform: translate(-50%);
  width: 0;
  height: 0;
  border-top: 20px solid $dark-grayish-blue;
  border-left: 20px solid transparent;
  border-right: 20px solid transparent;
  bottom: -1.2rem;
}
```

## Author

- Frontend Mentor - [@george5-star](https://www.frontendmentor.io/profile/george5-star)
