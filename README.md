# texsvg server

API server that converts [TeX](https://en.wikipedia.org/wiki/TeX) to [SVG](https://en.wikipedia.org/wiki/Scalable_Vector_Graphics).

Built with:

- [Node.js](https://nodejs.org/en/)
- [Express](https://expressjs.com/)
- [texsvg](https://www.npmjs.com/package/texsvg)

## Prerequisites

- [Node.js](https://nodejs.org/en/)
- [npm](https://www.npmjs.com/get-npm)

## Installation

Clone repository:

```sh
$ git clone https://github.com/remarkablemark/texsvg-server.git
$ cd texsvg-server
```

Install dependencies:

```sh
$ npm install
```

## Scripts

In the project directory, you can run:

### `npm start`

Runs the server in **production** mode using [PM2](https://github.com/Unitech/pm2).

### `npm run dev`

Runs the server in **development** mode.

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The server will restart if you make edits.

## License

[MIT](LICENSE)
