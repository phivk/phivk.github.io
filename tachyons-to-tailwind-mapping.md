# Tachyons to Tailwind CSS Mapping Guide

## Typography

| Tachyons        | Tailwind         | Description            |
| --------------- | ---------------- | ---------------------- |
| `f1`            | `text-6xl`       | Largest font size      |
| `f2`            | `text-5xl`       | Very large font size   |
| `f3`            | `text-4xl`       | Large font size        |
| `f4`            | `text-3xl`       | Medium-large font size |
| `f5`            | `text-2xl`       | Medium font size       |
| `f6`            | `text-xl`        | Small-medium font size |
| `f7`            | `text-lg`        | Small font size        |
| `normal`        | `font-normal`    | Normal font weight     |
| `b`             | `font-bold`      | Bold font weight       |
| `fw1`           | `font-hairline`  | Font weight 100        |
| `fw2`           | `font-thin`      | Font weight 200        |
| `fw3`           | `font-light`     | Font weight 300        |
| `fw4`           | `font-normal`    | Font weight 400        |
| `fw5`           | `font-medium`    | Font weight 500        |
| `fw6`           | `font-semibold`  | Font weight 600        |
| `fw7`           | `font-bold`      | Font weight 700        |
| `fw8`           | `font-extrabold` | Font weight 800        |
| `fw9`           | `font-black`     | Font weight 900        |
| `i`             | `italic`         | Italic text            |
| `tracked`       | `tracking-wide`  | Wide letter spacing    |
| `tracked-tight` | `tracking-tight` | Tight letter spacing   |
| `lh-solid`      | `leading-none`   | Line height 1          |
| `lh-title`      | `leading-tight`  | Line height 1.25       |
| `lh-copy`       | `leading-normal` | Line height 1.5        |

## Spacing

| Tachyons    | Tailwind          | Description                             |
| ----------- | ----------------- | --------------------------------------- |
| `pa0`       | `p-0`             | Padding all 0                           |
| `pa1`       | `p-1`             | Padding all scale 1                     |
| `pa2`       | `p-2`             | Padding all scale 2                     |
| `pa3`       | `p-4`             | Padding all scale 3                     |
| `pa4`       | `p-8`             | Padding all scale 4                     |
| `pa5`       | `p-16`            | Padding all scale 5                     |
| `pa6`       | `p-32`            | Padding all scale 6                     |
| `pa7`       | `p-64`            | Padding all scale 7                     |
| `pl0`-`pl7` | `pl-0` to `pl-64` | Padding left (similar pattern)          |
| `pr0`-`pr7` | `pr-0` to `pr-64` | Padding right (similar pattern)         |
| `pt0`-`pt7` | `pt-0` to `pt-64` | Padding top (similar pattern)           |
| `pb0`-`pb7` | `pb-0` to `pb-64` | Padding bottom (similar pattern)        |
| `ph0`-`ph7` | `px-0` to `px-64` | Padding horizontal (similar pattern)    |
| `pv0`-`pv7` | `py-0` to `py-64` | Padding vertical (similar pattern)      |
| `ma0`-`ma7` | `m-0` to `m-64`   | Margin all (similar to padding pattern) |
| `ml0`-`ml7` | `ml-0` to `ml-64` | Margin left (similar pattern)           |
| `mr0`-`mr7` | `mr-0` to `mr-64` | Margin right (similar pattern)          |
| `mt0`-`mt7` | `mt-0` to `mt-64` | Margin top (similar pattern)            |
| `mb0`-`mb7` | `mb-0` to `mb-64` | Margin bottom (similar pattern)         |
| `mh0`-`mh7` | `mx-0` to `mx-64` | Margin horizontal (similar pattern)     |
| `mv0`-`mv7` | `my-0` to `my-64` | Margin vertical (similar pattern)       |

## Borders

| Tachyons   | Tailwind       | Description               |
| ---------- | -------------- | ------------------------- |
| `ba`       | `border`       | Border all sides          |
| `bt`       | `border-t`     | Border top                |
| `br`       | `border-r`     | Border right              |
| `bb`       | `border-b`     | Border bottom             |
| `bl`       | `border-l`     | Border left               |
| `bn`       | `border-0`     | No border                 |
| `b--black` | `border-black` | Border color black        |
| `b--white` | `border-white` | Border color white        |
| `bw0`      | `border-0`     | Border width 0            |
| `bw1`      | `border`       | Border width 1px          |
| `bw2`      | `border-2`     | Border width 2px          |
| `bw3`      | `border-4`     | Border width 4px          |
| `bw4`      | `border-8`     | Border width 8px          |
| `bw5`      | `border-16`    | Border width 16px         |
| `br0`      | `rounded-none` | Border radius 0           |
| `br1`      | `rounded-sm`   | Border radius small       |
| `br2`      | `rounded`      | Border radius medium      |
| `br3`      | `rounded-lg`   | Border radius large       |
| `br4`      | `rounded-xl`   | Border radius extra large |
| `br-100`   | `rounded-full` | Border radius 100%        |
| `br-pill`  | `rounded-full` | Pill border radius        |

## Widths & Heights

| Tachyons       | Tailwind        | Description                         |
| -------------- | --------------- | ----------------------------------- |
| `w1`           | `w-4`           | Width scale 1                       |
| `w2`           | `w-8`           | Width scale 2                       |
| `w3`           | `w-16`          | Width scale 3                       |
| `w4`           | `w-32`          | Width scale 4                       |
| `w5`           | `w-64`          | Width scale 5                       |
| `w-10`         | `w-1/10`        | Width 10%                           |
| `w-20`         | `w-1/5`         | Width 20%                           |
| `w-25`         | `w-1/4`         | Width 25%                           |
| `w-30`         | `w-3/10`        | Width 30%                           |
| `w-33`         | `w-1/3`         | Width 33%                           |
| `w-34`         | `w-34/100`      | Width 34%                           |
| `w-40`         | `w-2/5`         | Width 40%                           |
| `w-50`         | `w-1/2`         | Width 50%                           |
| `w-60`         | `w-3/5`         | Width 60%                           |
| `w-70`         | `w-7/10`        | Width 70%                           |
| `w-75`         | `w-3/4`         | Width 75%                           |
| `w-80`         | `w-4/5`         | Width 80%                           |
| `w-90`         | `w-9/10`        | Width 90%                           |
| `w-100`        | `w-full`        | Width 100%                          |
| `w-third`      | `w-1/3`         | Width 33.33%                        |
| `w-two-thirds` | `w-2/3`         | Width 66.66%                        |
| `w-auto`       | `w-auto`        | Width auto                          |
| `h1`-`h5`      | `h-4` to `h-64` | Heights (similar pattern to widths) |
| `h-25`         | `h-1/4`         | Height 25%                          |
| `h-50`         | `h-1/2`         | Height 50%                          |
| `h-75`         | `h-3/4`         | Height 75%                          |
| `h-100`        | `h-full`        | Height 100%                         |
| `min-h-100`    | `min-h-full`    | Min height 100%                     |
| `vh-25`        | `h-screen/4`    | 25% of viewport height              |
| `vh-50`        | `h-screen/2`    | 50% of viewport height              |
| `vh-75`        | `h-screen-3/4`  | 75% of viewport height              |
| `vh-100`       | `h-screen`      | 100% of viewport height             |
| `min-vh-100`   | `min-h-screen`  | Min height 100% of viewport         |

## Display & Positioning

| Tachyons      | Tailwind       | Description                                      |
| ------------- | -------------- | ------------------------------------------------ |
| `dn`          | `hidden`       | Display none                                     |
| `di`          | `inline`       | Display inline                                   |
| `db`          | `block`        | Display block                                    |
| `dib`         | `inline-block` | Display inline-block                             |
| `dit`         | `inline-table` | Display inline-table                             |
| `dt`          | `table`        | Display table                                    |
| `dtc`         | `table-cell`   | Display table-cell                               |
| `dt-row`      | `table-row`    | Display table-row                                |
| `dt--fixed`   | `table-fixed`  | Table layout fixed                               |
| `flex`        | `flex`         | Display flex                                     |
| `inline-flex` | `inline-flex`  | Display inline-flex                              |
| `static`      | `static`       | Position static                                  |
| `relative`    | `relative`     | Position relative                                |
| `absolute`    | `absolute`     | Position absolute                                |
| `fixed`       | `fixed`        | Position fixed                                   |
| `sticky`      | `sticky`       | Position sticky                                  |
| `top-0`       | `top-0`        | Top 0                                            |
| `right-0`     | `right-0`      | Right 0                                          |
| `bottom-0`    | `bottom-0`     | Bottom 0                                         |
| `left-0`      | `left-0`       | Left 0                                           |
| `z-0`         | `z-0`          | Z-index 0                                        |
| `z-1`         | `z-10`         | Z-index 1 (10 in Tailwind)                       |
| `z-2`         | `z-20`         | Z-index 2 (20 in Tailwind)                       |
| `z-3`         | `z-30`         | Z-index 3 (30 in Tailwind)                       |
| `z-4`         | `z-40`         | Z-index 4 (40 in Tailwind)                       |
| `z-5`         | `z-50`         | Z-index 5 (50 in Tailwind)                       |
| `z-999`       | `z-50`         | Z-index 999 (50 in Tailwind is highest default)  |
| `z-9999`      | `z-50`         | Z-index 9999 (50 in Tailwind is highest default) |

## Flexbox

| Tachyons            | Tailwind            | Description                   |
| ------------------- | ------------------- | ----------------------------- |
| `flex`              | `flex`              | Display flex                  |
| `flex-auto`         | `flex-auto`         | Flex 1 1 auto                 |
| `flex-none`         | `flex-none`         | Flex 0 0 auto                 |
| `flex-column`       | `flex-col`          | Flex direction column         |
| `flex-row`          | `flex-row`          | Flex direction row            |
| `flex-wrap`         | `flex-wrap`         | Flex wrap                     |
| `flex-nowrap`       | `flex-nowrap`       | Flex nowrap                   |
| `flex-wrap-reverse` | `flex-wrap-reverse` | Flex wrap reverse             |
| `items-start`       | `items-start`       | Align items flex-start        |
| `items-end`         | `items-end`         | Align items flex-end          |
| `items-center`      | `items-center`      | Align items center            |
| `items-baseline`    | `items-baseline`    | Align items baseline          |
| `items-stretch`     | `items-stretch`     | Align items stretch           |
| `justify-start`     | `justify-start`     | Justify content flex-start    |
| `justify-end`       | `justify-end`       | Justify content flex-end      |
| `justify-center`    | `justify-center`    | Justify content center        |
| `justify-between`   | `justify-between`   | Justify content space-between |
| `justify-around`    | `justify-around`    | Justify content space-around  |
| `content-start`     | `content-start`     | Align content flex-start      |
| `content-end`       | `content-end`       | Align content flex-end        |
| `content-center`    | `content-center`    | Align content center          |
| `content-between`   | `content-between`   | Align content space-between   |
| `content-around`    | `content-around`    | Align content space-around    |
| `content-stretch`   | `content-stretch`   | Align content stretch         |
| `self-start`        | `self-start`        | Align self flex-start         |
| `self-end`          | `self-end`          | Align self flex-end           |
| `self-center`       | `self-center`       | Align self center             |
| `self-baseline`     | `self-baseline`     | Align self baseline           |
| `self-stretch`      | `self-stretch`      | Align self stretch            |
| `order-0`           | `order-none`        | Order 0                       |
| `order-1`           | `order-1`           | Order 1                       |
| `order-2`           | `order-2`           | Order 2                       |
| `order-3`           | `order-3`           | Order 3                       |
| `order-4`           | `order-4`           | Order 4                       |
| `order-5`           | `order-5`           | Order 5                       |
| `order-last`        | `order-last`        | Order 99999                   |

## Colors

To map your Tachyons color classes to Tailwind, you should:

1. For text colors: Replace `.color-name` with `.text-color-name` (e.g., `.black` → `.text-black`)
2. For background colors: Replace `.bg-color-name` with `.bg-color-name` (these remain the same)

## How to Convert Your Templates

1. Search for Tachyons classes in your HTML/template files
2. Replace them with the corresponding Tailwind classes using this mapping
3. For multiple classes, split them and convert each one separately

Example conversion:

```html
<!-- Tachyons -->
<div class="p-4 flex items-center justify-between bg-white">
  <!-- Tailwind -->
  <div class="p-4 flex items-center justify-between bg-white"></div>
</div>
```

For specific templates, modify the templates one by one, replacing the Tachyons classes with their Tailwind equivalents.

## Handling Custom Utilities

If you have custom utilities defined for Tachyons, you might need to create similar custom utilities for Tailwind in your `tailwind.config.js` file under the `theme.extend` section.
