"use strict";
exports.id = 914;
exports.ids = [914];
exports.modules = {

/***/ 4914:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ MainContainer),
  "G": () => (/* binding */ divContext)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/components/Menu.tsx



function Menu() {
    const { 0: isButtonMenuAtivo , 1: setIsButtonMenuAtivo  } = (0,external_react_.useState)({});
    if (false) {}
    return /*#__PURE__*/ jsx_runtime_.jsx("nav", {
        className: "menu",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "position-menu",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    id: "btn-logo",
                    translate: "no",
                    children: "HostMain"
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "btn-menu",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: `${isButtonMenuAtivo.cadastrar && "ativo"}`,
                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/cadastrar",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    onClick: ()=>setIsButtonMenuAtivo({
                                            cadastrar: true
                                        }),
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                src: "https://i.postimg.cc/m2Tj0tJV/vetor-calendario.png",
                                                alt: "vetor"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                children: "Cadastrar"
                                            })
                                        ]
                                    })
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: `${isButtonMenuAtivo.listar && "ativo"}`,
                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/listar",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    onClick: ()=>setIsButtonMenuAtivo({
                                            listar: true
                                        }),
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                src: "https://i.postimg.cc/J7xZHKYc/vetor-list.png",
                                                alt: "vetor"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                children: "Listar"
                                            })
                                        ]
                                    })
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: `${isButtonMenuAtivo.alterar && "ativo"}`,
                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/alterar",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    onClick: ()=>setIsButtonMenuAtivo({
                                            alterar: true
                                        }),
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                src: "https://i.postimg.cc/fWPWP9VQ/vetor-alterar.png",
                                                alt: "vetor"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                children: "Alterar"
                                            })
                                        ]
                                    })
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: `${isButtonMenuAtivo.excluir && "ativo"}`,
                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/excluir",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    onClick: ()=>setIsButtonMenuAtivo({
                                            excluir: true
                                        }),
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    src: "https://i.postimg.cc/6pcpY1RY/vetor-excluir.png",
                                                    alt: "vetor"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    children: "Excluir"
                                                })
                                            ]
                                        })
                                    })
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: `${isButtonMenuAtivo.pesquisar && "ativo"}`,
                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/pesquisar",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    onClick: ()=>setIsButtonMenuAtivo({
                                            pesquisar: true
                                        }),
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    src: "https://i.postimg.cc/MHpDfLyN/vetor-pesquisa.png",
                                                    alt: "vetor"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    children: "Pesquisar"
                                                })
                                            ]
                                        })
                                    })
                                })
                            })
                        })
                    ]
                })
            ]
        })
    });
}

;// CONCATENATED MODULE: ./src/components/Header.tsx

function Header() {
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "header-section",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "position-header-section",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                            src: "https://i.postimg.cc/9QcLN3Bd/image-removebg-preview-2022-10-03-T163131-505.png",
                            alt: "Vetor Planeta"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            children: "CRUD"
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("details", {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("summary", {
                                children: [
                                    "Developed by ",
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        children: "David"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        href: "https://github.com/davhyandrade",
                                        children: "GitHub"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        href: "https://www.instagram.com/_davhy/",
                                        children: "Instagram"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        href: "https://www.davhyandrade.com.br/",
                                        children: "Site"
                                    })
                                ]
                            })
                        ]
                    })
                })
            ]
        })
    });
}

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: ./src/components/MainContainer.tsx





const divContext = /*#__PURE__*/ (0,external_react_.createContext)({});
function MainContainer({ children  }) {
    const { 0: alterarAlunos , 1: setAlterarAlunos  } = (0,external_react_.useState)({
        [0]: {
            Matricula: "",
            Nome: "",
            Endereco: "",
            Cidade: "",
            CodCurso: ""
        }
    });
    const { 0: alterarDisciplinas , 1: setAlterarDisciplinas  } = (0,external_react_.useState)({
        [0]: {
            CodCurso: "",
            CodDisciplina: "",
            Nome_Disciplina: ""
        }
    });
    const { 0: alterarCursos , 1: setAlterarCursos  } = (0,external_react_.useState)({
        [0]: {
            CodCurso: "",
            Nome: "",
            CodDisc1: "",
            CodDisc2: "",
            CodDisc3: ""
        }
    });
    const { 0: data , 1: setData  } = (0,external_react_.useState)({});
    const handleChangeData = (data)=>{
        setData((prevData)=>({
                ...prevData,
                [data.target.name]: data.target.value
            }));
    };
    const router = (0,router_.useRouter)();
    if (false) {}
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Menu, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(divContext.Provider, {
                value: {
                    handleChangeData,
                    data,
                    setData,
                    setAlterarAlunos,
                    alterarAlunos,
                    setAlterarDisciplinas,
                    alterarDisciplinas,
                    setAlterarCursos,
                    alterarCursos
                },
                children: /*#__PURE__*/ jsx_runtime_.jsx("section", {
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "position-section",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(Header, {}),
                            children
                        ]
                    })
                })
            })
        ]
    });
}


/***/ })

};
;