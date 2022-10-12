"use strict";
(() => {
var exports = {};
exports.id = 242;
exports.ids = [242];
exports.modules = {

/***/ 2744:
/***/ ((module) => {

module.exports = require("mysql");

/***/ }),

/***/ 5659:
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
    switch(method){
        case "GET":
            let sqlListar = "select * from curso order by Nome";
            db.query(sqlListar, (err, result)=>{
                if (err) {
                    console.log(err);
                } else {
                    response.send(result);
                }
            });
            break;
        case "POST":
            const { CodCurso  } = request.body;
            const { Nome  } = request.body;
            const { CodDisc1  } = request.body;
            const { CodDisc2  } = request.body;
            const { CodDisc3  } = request.body;
            let sqlCadastrar = "insert into curso values (?, ?, ?, ?, ?)";
            db.query(sqlCadastrar, [
                CodCurso,
                Nome,
                CodDisc1,
                CodDisc2,
                CodDisc3
            ], (err, result)=>{
                console.log(err);
            });
            break;
        default:
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
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(5659));
module.exports = __webpack_exports__;

})();