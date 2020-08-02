# CV

## What is it
CV, created with [this template](https://github.com/EyalPerry/dev-cv)

## Prerequisites:
- nodejs v 12.3.*
- npm v 6.*

## Installation
- `npm ci`

## Usage
- `npm run start`
- edit https://github.com/vlamitin/dev-cv/blob/master/public/cv.json
- save pdf with chrome browser
- or run make pdf

## How to Use
0) install Node.js, and run the 'npm install' command in the project root folder.
1) run the 'npm start' command in the project root folder and wait for the website to load on http://localhost:3000.
3) Change the title tag in src/index.html (this will be the default file name when you print).
4) Modify the data in public/cv.json.
5) Replace public/headshot.png with your own.
6) Add more resources to the public folder and use them in public/cv.json. (optional)
7) Change the font in the src/index.html stylesheet tag + src/page.scss to something more you.
8) Print to PDF with Google Chrome.

### How to use Multipage
0) You can break down your cv across multiple pages pretty easily:
Just divide up an experience or education list into two (or three, or N) - across multiple page entries in cv.json.
Then- make sure to omit the label key from the objects which reside on pages other than the first. 

1) Each page entry in cv.json will be printed on it's own page.

## Generated pdf
[Vladimir_Mitin_CV.pdf](https://github.com/vlamitin/cv/blob/master/Vladimir_Mitin_CV.pdf)
