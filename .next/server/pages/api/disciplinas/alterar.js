"use strict";
(() => {
var exports = {};
exports.id = 171;
exports.ids = [171];
exports.modules = {

/***/ 2744:
/***/ ((module) => {

module.exports = require("mysql");

/***/ }),

/***/ 51:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var mysql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2744);
/* harmony import */ var mysql__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mysql__WEBPACK_IMPORTED_MODULE_0__);

function handler(request, response) {
    const db = mysql__WEBPACK_IMPORTED_MODULE_0___default().createPool({
        host: "bdescola.cv3u8hudbuno.us-east-1.rds.amazonaws.com",
        user: "admin",
        password: "Dandrade06!",
        database: "bd_escola"
    });
    const { method  } = request;
    if (method === "PUT") {
        const { CodDisciplina  } = request.body;
        const { Nome_Disciplina  } = request.body;
        let sql = "update disciplinas set Nome_Disciplina = ? where CodDisciplina = ?";
        db.query(sql, [
            Nome_Disciplina,
            CodDisciplina
        ], (err, result)=>{
            if (err) {
                console.log(err);
            } else {
                response.send(result);
            }
        });
    } else {
        response.setHeader("Allow", [
            "GET",
            "PUT"
        ]);
        response.status(405).end(`Method ${method} Not Allowed`);
    }
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(51));
module.exports = __webpack_exports__;

})();