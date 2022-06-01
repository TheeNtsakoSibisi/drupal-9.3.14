# Lilium Framework

- [Lilium Framework](#lilium-framework)
- [Getting Started](#getting-started)
	- [Installation](#installation)
	- [Usage](#usage)
- [Documentation](#documentation)
	- [Breakpoints](#breakpoints)
	- [Flexbox](#flexbox)
	- [Fluid (Responsive) Typography](#fluid-responsive-typography)
		- [Example](#example)
	- [Gradients](#gradients)
		- [Background](#background)
		- [Text](#text)
	- [Grid](#grid)
		- [Columns](#columns)
		- [Responsive](#responsive)
		- [Offset](#offset)

A group of mixins, functions and variables to get your frontend project started.

# Getting Started

## Installation

```cmd
npm install starlette-sass-helpers
```

## Usage

Include the following "import" in your sass files. 

```scss
@import "path/to/your/node_modules/starlette-sass-helpers/scss/lilium";
```

Remember to change out "path/to/your/" to match your folder structure.

For example, if your sass file is located at "/assets/sass/layout.scss" then the code would change to this:

```scss
@import "../../node_modules/starlette-sass-helpers/scss/lilium";
```

# Documentation

## Breakpoints

```scss
body {
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

## Flexbox

See [how flexbox works](https://developer.mozilla.org/en-US/docs/Glossary/Flexbox). 

```scss
body {
    @include flexbox;
    @include flex-direction( col );
}
```

![New Feature](https://user-images.githubusercontent.com/19154356/124391000-9c725d80-dcee-11eb-953f-4044ca557752.png)

## Fluid (Responsive) Typography

| Mixin | Param 1 | Param 2 |
|---|---|---|
| font-size | Mobile font size | Desktop font size |

As the screen size changes the font size will change accordingly. This all happens between the mobile and desktop breakpoints.

When it hits the mobile breakpoint it will stay a fixed size (example below - 16px). Same goes for desktop (example below - 35px).

The responsive size will never be smaller than the mobile font size or bigger than the desktop font size. 

### Example

```scss
h1 {
    // 16px - mobile font size
    // 35px - desktop font size
    @include font-size( 16px, 35px );
}
```

## Gradients

| Direction | Colors |
|---|---|
| down / up / right / left | List of colors (space separated) |

### Background

```scss
body {
    @include linear-gradient( down, red orange yellow green blue purple pink );
}
```

### Text

```scss
h1 {
    @include text-background-gradient( left, rgba(255,255,255,0) #444444 );
}
```

## Grid

Uses a 24 grid column structure.

`col-1` is the smallest size column (4.16%).

![](https://user-images.githubusercontent.com/19154356/124390915-22da6f80-dcee-11eb-859b-6268b143a8e9.png)

### Columns

```html
<div class="container">
    <div class="row">
        <div class="col-1"> 1 </div>
        <div class="col-2"> 2 </div>
        <div class="col-3"> 3 </div>
        <div class="col-4"> 4 </div>
        <div class="col-5"> 5 </div>
        <div class="col-6"> 6 </div>
        <div class="col-7"> 7 </div>
        <div class="col-8"> 8 </div>
        <div class="col-9"> 9 </div>
        <div class="col-10"> 10 </div>
        <div class="col-11"> 11 </div>
        <div class="col-12"> 12 </div>
        <div class="col-13"> 13 </div>
        <div class="col-14"> 14 </div>
        <div class="col-15"> 15 </div>
        <div class="col-16"> 16 </div>
        <div class="col-17"> 17 </div>
        <div class="col-18"> 18 </div>
        <div class="col-19"> 19 </div>
        <div class="col-20"> 20 </div>
        <div class="col-21"> 21 </div>
        <div class="col-22"> 22 </div>
        <div class="col-23"> 23 </div>
        <div class="col-24"> 24 </div>
    </div>
</div>
```

### Responsive

```html
<div class="container">
    <div class="row">
        <div class="col-sm-1"> </div>
        <div class="col-md-1"> </div>
        <div class="col-lg-1"> </div>
        <div class="col-xl-1"> </div>
    </div>
</div>
```

### Offset

```html
<div class="container">
    <div class="row">
        <div class="col-1"> </div>
        <div class="offset-col-1"> </div>
    </div>
</div>
```
