# CSS Grid Answer Sheet

There are 28 problems, which are great to learn the basics about CSS grid, on [CSS Grid](https://cssgridgarden.com/).

For the CSS grid cheatsheet, you can visit [A Complete Guide to Grid](https://css-tricks.com/snippets/css/complete-guide-grid/).

Below are the answers to the problems.

## Answers

### Level 1  

```css
grid-column-start: 3;
```

### Level 2

```css
grid-column-start: 5;
```

### Level 3

```css
grid-column-end: 4;
```

### Level 4

```css
grid-column-end: 2;
```

### Level 5

```css
grid-column-end: -2;
```

### Level 6

```css
grid-column-start: -3;
```

### Level 7

```css
grid-column-end: span 2;
```

### Level 8

```css
grid-column-end: span 5;
```

### Level 9

```css
grid-column-start: span 3;
```

### Level 10

```css
grid-column: 4 / 6;
```

> grid-column: grid-column-start / grid-column-end;

### Level 11

```css
grid-column: 2 / span 3;
```

### Level 12

```css
grid-row-start: 3;
```

### Level 13

```css
grid-row: 3 / span 3;
```

> grid-row: grid-row-start / grid-row-end;

### Level 14

```css
grid-column: 2 / 3;
grid-row: 5 / 6;
```

### Level 15

```css
grid-column: 2 / -1;
grid-row: 1 / -1;
```

### Level 16

```css
grid-area: 1 / 2 / 4 / 6;
```

> grid-area: grid-row-start / grid-column-start / grid-row-end / grid-column-end

### Level 17

```css
grid-area: 2 / 3 / 5 / 6;
```

### Level 18

```css
order: 1;
```

### Level 19

```css
order: -1;
```

### Level 20

```css
grid-template-columns: 50% 50%;
```

### Level 21

```css
grid-template-columns: repeat(8, 12.5%);
```

### Level 22

```css
grid-template-columns: 100px 3em 40%;
```

### Level 23

```css
grid-template-columns: 1fr 5fr;
```

### Level 24

```css
grid-template-columns: 50px 1fr 1fr 1fr 50px;
```

### Level 25

```css
grid-template-columns: 75px 3fr 2fr;
```

### Level 26

```css
grid-template-rows: 50px 0fr 0fr 0fr 1fr;
```

### Level 27

```css
grid-template: 60% 1fr / 200px 1fr;
```

> grid-template: grid-template-rows / grid-template-columns

### Level 28 (End)

```css
grid-template: 1fr 50px / 20% 1fr;
```
