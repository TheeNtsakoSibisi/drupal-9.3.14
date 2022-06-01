# Flexbox

See [how flexbox works](https://developer.mozilla.org/en-US/docs/Glossary/Flexbox). 

```scss
body {
    @include flexbox;
    @include flex-direction( column );
}
```

# Breakpoints

```scss
body {
    @include breakpoint(400px) { 
        color: orange;
    }
    @include breakpoint(sm) { 
        color: green;
    }
    @include breakpoint(sm, max) { 
        color: blue;
    }
    @include breakpoint(sm, between) {
        color: red;
    }
    @include breakpoint(lg, between) {
        color: black;
    }
}
```

The above code compiles to this

```css
@media(min-width: 400px) {
    body {
        color: orange;
    }
}
@media(min-width: 576px) {
    body {
        color: green;
    }
}
@media(max-width: 575px) {
    body {
        color: blue;
    }
}
@media(min-width: 576px)and (max-width: 767px) {
    body {
        color: red;
    }
}
@media(min-width: 992px)and (max-width: 1199px) {
    body {
        color: #000;
    }
}
```