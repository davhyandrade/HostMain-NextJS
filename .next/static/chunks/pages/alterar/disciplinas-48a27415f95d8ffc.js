(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[556],{5e3:function(i,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/alterar/disciplinas",function(){return n(7211)}])},7211:function(i,e,n){"use strict";n.r(e),n.d(e,{default:function(){return u}});var t=n(5893),s=n(7294),a=n(196),o=n(1163),l=n(6947);function u(){var i=function(){setTimeout(function(){m.push("/alterar"),document.querySelector(".position-section").style.width="87%"},500)},e=function(e){e.preventDefault(),a.Z.put("/api/disciplinas/alterar",{CodDisciplina:r,Nome_Disciplina:u.nome_disciplina}).then(function(i){200===i.status&&alert("Altera\xe7\xe3o realizada com sucesso!!")}),setTimeout(function(){i()},1e3)},n=(0,s.useContext)(l.G).handleChangeData,u=(0,s.useContext)(l.G).data,c=(0,s.useContext)(l.G).setData,d=(0,s.useContext)(l.G).alterarDisciplinas,r=d[0].CodDisciplina,p=d[0].Nome_Disciplina,m=(0,o.useRouter)();return void 0===d[0]&&(alert("404 error: not found - C\xf3digo inexistente"),m.push("/alterar"),window.location.reload()),(0,s.useEffect)(function(){c({nome_disciplina:p})},[]),"undefined"!=typeof document&&(document.querySelector(".position-section").style.width="100%"),(0,t.jsx)("div",{id:"modal",children:(0,t.jsx)("div",{children:(0,t.jsxs)("form",{onSubmit:e,children:[(0,t.jsx)("h1",{children:"Alterar Disciplinas"}),(0,t.jsxs)("div",{children:[(0,t.jsx)("label",{htmlFor:"input-nome-disciplina",children:"Nome"}),(0,t.jsx)("input",{onChange:n,name:"nome_disciplina",defaultValue:p,id:"input-nome-disciplina",className:"input-text",type:"text",placeholder:"Digite o nome da disciplina",required:!0})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("label",{htmlFor:"input-codigo-disciplina",children:"C\xf3digo"}),(0,t.jsx)("input",{name:"codigo_disciplina",value:r,id:"input-codigo-disciplina",className:"input-number input-text",type:"text",placeholder:"Digite o c\xf3digo da disciplina",pattern:"\\d*",required:!0})]}),(0,t.jsxs)("div",{className:"field-buttons",children:[(0,t.jsx)("input",{onClick:i,name:"btn_submit_2",className:"btn-submit",type:"reset",value:"Cancelar"}),(0,t.jsx)("input",{name:"btn_submit_1",className:"btn-submit",type:"submit",value:"Salvar"})]})]})})})}}},function(i){i.O(0,[196,774,888,179],function(){return i(i.s=5e3)}),_N_E=i.O()}]);