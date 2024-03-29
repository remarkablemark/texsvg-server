# texsvg-server

[![Run on Replit](https://replit.com/badge/github/remarkablemark/texsvg-server)](https://replit.com/github/remarkablemark/texsvg-server)

[![Build Status](https://travis-ci.org/remarkablemark/texsvg-server.svg?branch=master)](https://travis-ci.org/remarkablemark/texsvg-server)
[![Coverage Status](https://coveralls.io/repos/github/remarkablemark/texsvg-server/badge.svg?branch=master)](https://coveralls.io/github/remarkablemark/texsvg-server?branch=master)
![GitHub last commit](https://img.shields.io/github/last-commit/remarkablemark/texsvg-server)

Web API that converts [TeX](https://en.wikipedia.org/wiki/TeX) to [SVG](https://en.wikipedia.org/wiki/Scalable_Vector_Graphics).

Built with:

- [Node.js](https://nodejs.org/en/)
- [Express](https://expressjs.com/)
- [texsvg](https://www.npmjs.com/package/texsvg)

### Example

Quadratic Formula:

```
/?tex=x=\frac{-b\pm\sqrt{b^2-4ac}}{2a}
```

![x equals begin fraction negative b plus or minus begin square root b squared minus 4 times a times c end square root over 2 times a end fraction](https://texsvg-server-github.remarkablemark.repl.co/?tex=x=\frac{-b\pm\sqrt{b^2-4ac}}{2a} 'Quadratic Formula')

See https://texsvg-server-github.remarkablemark.repl.co/?tex=x=\frac{-b\pm\sqrt{b^2-4ac}}{2a}

> To ensure the SVG renders correctly, [URI encode](https://meyerweb.com/eric/tools/dencoder/) the TeX.

[Replit](https://replit.com/@remarkablemark/texsvg-server-GitHub) | [JSFiddle](https://jsfiddle.net/remarkablemark/1k7t6s9o/)

## Prerequisites

- [Node.js](https://nodejs.org/en/)
- [npm](https://www.npmjs.com/get-npm)

## Installation

Clone the repository:

```sh
git clone https://github.com/remarkablemark/texsvg-server.git
cd texsvg-server
```

Install the dependencies:

```sh
npm install
```

## Scripts

In the project directory, you can run:

### `npm start`

Runs the server in **production** mode using [PM2](https://github.com/Unitech/pm2).

### `npm run dev`

Runs the server in **development** mode.

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The server will restart if you make edits.

### `npm test`

Runs integration tests.

### `npm run test:watch`

Runs integration tests in watch mode.

### `npm run release`

Generates a release.

## License

[MIT](LICENSE)
