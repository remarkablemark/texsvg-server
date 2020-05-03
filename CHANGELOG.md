# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## 1.0.0 (2020-05-03)


### Features

* **index:** add 404 route ([de5db13](https://github.com/remarkablemark/texsvg-server/commit/de5db13a254b27cea6dcdc1b8542a0b5ccfbf2a5))
* **index:** add error handler ([7cc0578](https://github.com/remarkablemark/texsvg-server/commit/7cc0578cf3c7a9e3c254a7785c674cef26688e68))
* **index:** add express app that converts TeX to SVG ([287858c](https://github.com/remarkablemark/texsvg-server/commit/287858c653c565f28bf5b022c060aa93ce57f524))
* **index:** add route GET /heartbeat that responds with 200 OK ([d516a63](https://github.com/remarkablemark/texsvg-server/commit/d516a636e2ede23221f1ee676044a22dbaff1572))
* **index:** hide `X-Powered-By: Express` request header ([6d235d0](https://github.com/remarkablemark/texsvg-server/commit/6d235d0a1f4cbb24baeb69a7d9ed5fa8f99268c6))
* **index:** use 'dev' output format for morgan during development ([991d459](https://github.com/remarkablemark/texsvg-server/commit/991d4598bae863b02e44d2b254c362afe85eee6d))
* **index:** use morgan to log all requests to stdout ([058458b](https://github.com/remarkablemark/texsvg-server/commit/058458bee4536c80d3bffed6299f63c821381a7d))
* **routes:** render error stacktrace during development ([462183a](https://github.com/remarkablemark/texsvg-server/commit/462183a32c574f9b7a275a821dceb531bbe9b29b))


### Bug Fixes

* **index:** do not try to listen to process.env.HOST ([dc8156a](https://github.com/remarkablemark/texsvg-server/commit/dc8156ae61acdead237e72e029c14f9bccc74dba))
* **index:** uppercase process.env.PORT ([45be621](https://github.com/remarkablemark/texsvg-server/commit/45be621287c41256b0b9bcb52d880fe9a5a048d3))
* **routes:** render blank svg if req.query.tex is undefined ([d8603a9](https://github.com/remarkablemark/texsvg-server/commit/d8603a9cdfaec018d4d77df6be5feece7aacde37))