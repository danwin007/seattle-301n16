# Wiki Notes for Reading 01 for Code 301

## Responsive Web Design
- industry response to sharp growth in mobile internet use

**Responsive vs Adaptive vs Mobile**
- Responsive and adaptive are similar
- responsive = react to change, these pages change based on viewport width
- adaptive = easily modified, these pages are built to a group of preset factors
- mobile = generally means building a new version of the site specifically for mobile. Not the best idea, can create more headaches

Responsive is the most popular technique.

**Flexible Layouts**
- practice of building the layout of the site with a flexible grid that resizes to any width.
- use percentages or em units instead of fixed measurement like pixels or inches
- Protip: target / context = result
- this is tied to the **flexible grid** concept

**Media Queries**
- provide the ability to specify diff styles for diff browser/device situations, width of viewport, or device orientation.

- best practice to use the @media rule inside of an existing style sheet

Common Media Types
- all, screen, print, tv, braille
- default type is "screen"

Logical Operators in Media Queries
- and, not, only 
- default type is "all"

Height & Width Media Features
- can use min or max as prefixes
- ex: mid-width: 320px, max-width: 780px

Orientation
- landscape or portrait

Aspect Ratio
- aspect-ratio, device-aspect-ratio 
- ex: @media all and (min-device-aspect-ratio: 16/9)

Pixel Ratio / good for identifying HD devices
- pixel-ratio
- device-pixel-ratio

Resolution Media Feature
- ex: @media print and (min-resolution: 300dpi)

Other Media Features
- color, color-index, monochrome
- grid, scan

Breakpoints
- this is the minimum pixel width where you decide that elements should change positioning rather than scale smaller/larger
- this shouldn't be determined by common viewport sizes
- breakpoints should only be introduced when features break, look weird, or hamper user experience. Not simply a blanket rule based on pixel width.

**Mobile First**

This approach focuses on designing the site experience for smaller viewports as the default. Then use media queries to add styles as viewport grows.

Idea being that mobile users shouldn't have to load the styles for a desktop site. This is a waste of bandwidth and will slow down your site.

You can also disable certain graphics or animations when mobile is detected. 

**Viewport**

The `viewport` meta tag helps ID the scale, size, and resolution of a website.

EX:
`<meta name="viewport" content="width=device-width">`

Letting devices know the intended width of the website allows the site to be sized properly on the screen.

- `device-height`
- `device-width`

**Viewport Scale**
- `minimum-scale`
- `maximum-scale`
- `initial-scale`
- `user-scalable` / controls zooming

**Viewport Resolution**
- `target-densitydpi`
- `device-dpi`
- `high-dpi`
- `medium-dpi`
- `low-dpi`

**Combining Viewport Values**
You can combine multiple `viewport` values with comma separations within the `content` attribute value.
ex: `<meta name="viewport" content="width=device-width, initial-scale=1">`

**CSS Viewport Rule**
Best practice is to move `viewport` info to an @ rule within the CSS. This helps keep style separated from content.

**Flexible Media**
To ensure that media scales with viewport, best practice is to use `max-width` with a value of `100%`.

ex: `max-width: 100%`

**Flexible Embedded Media**
Max width doesn't work with everything. 

You will need new tactics when dealing with `iframes`.

Workaround: put embedded el into a parent element, absolutely positioned. Give parent element `width: 100%` so that it scales with viewport. The parent el needs `height` of `0` to trigger `hasLayout` mechanism in browser.

---

# All About Floats

I'm starting this article and hoping it ends by telling us how much floats suck.

Two paragraphs in, I am partially satisfied.

**Float properties**
- left, right, none, inherit
- sister property of `clear`

**Clear properties**
- both, left, right, none

**Collapsing**
- an annoying necessity
- can be fixed by clearing the float *after* the floated el in container but *before* the close of the container

**Techniques for clearing floats**
- The Empty Div Method / drop in an empty div with `style="clear: both;"`
- The Overflow Method / set the `overflow` CSS property on a parent el. 
- The Easy Clearing Method / use CSS pseudo selector `:after`, typically applied to special class.

**Problems with floats**
- pushdown / use `overflow:hidden`
- double margin bug / set `display: inline` on the float
- 3px job / set a width or height on affected text
- bottom margin bug / use bottom padding on parent el 

TLDR: floats still suck. Hopefully less if you use these tricks. 