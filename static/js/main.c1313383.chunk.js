(this.webpackJsonppatrocima=this.webpackJsonppatrocima||[]).push([[0],{13:function(e,a,t){},16:function(e,a,t){},17:function(e,a,t){"use strict";t.r(a);var s=t(1),c=t.n(s),n=t(6),i=t.n(n),o=(t(13),t(4)),r=t(0),l=function(e){return Object(r.jsx)("nav",{id:"menu",className:"navbar navbar-default navbar-fixed-top",children:Object(r.jsxs)("div",{className:"container",children:[Object(r.jsxs)("div",{className:"navbar-header",children:[Object(r.jsxs)("button",{type:"button",className:"navbar-toggle collapsed","data-toggle":"collapse","data-target":"#bs-example-navbar-collapse-1",children:[" ",Object(r.jsx)("span",{className:"sr-only",children:"Toggle navigation"})," ",Object(r.jsx)("span",{className:"icon-bar"})," ",Object(r.jsx)("span",{className:"icon-bar"})," ",Object(r.jsx)("span",{className:"icon-bar"})," "]}),Object(r.jsx)("a",{className:"navbar-brand page-scroll",href:"#page-top",children:Object(r.jsx)("img",{src:"img/patrocima.png",className:"logo justify-content-start navbar-left"})})," "]}),Object(r.jsx)("div",{className:"collapse navbar-collapse",id:"bs-example-navbar-collapse-1",children:Object(r.jsxs)("ul",{className:"nav navbar-nav navbar-right",children:[Object(r.jsx)("li",{children:Object(r.jsx)("a",{href:"#features",className:"page-scroll",children:"Proceso"})}),Object(r.jsx)("li",{children:Object(r.jsx)("a",{href:"#portfolio",className:"page-scroll",children:"Talentos"})}),Object(r.jsx)("li",{children:Object(r.jsx)("a",{href:"#services",className:"page-scroll",children:"Invert\xed"})}),Object(r.jsx)("li",{children:Object(r.jsx)("a",{href:"#team",className:"page-scroll",children:"Equipo"})})]})})]})})},d=function(e){return Object(r.jsx)("header",{id:"header",children:Object(r.jsx)("div",{className:"intro",children:Object(r.jsx)("div",{className:"overlay",children:Object(r.jsx)("div",{className:"container",children:Object(r.jsx)("div",{className:"row",children:Object(r.jsxs)("div",{className:"col-md-8 col-md-offset-2 intro-text",children:[Object(r.jsxs)("h1",{children:[e.data?e.data.title:"Loading",Object(r.jsx)("span",{})]}),Object(r.jsx)("p",{children:e.data?e.data.paragraph:"Loading"}),Object(r.jsx)("a",{href:"#features",className:"btn btn-custom btn-lg page-scroll",children:"Conocer m\xe1s"})," "]})})})})})})},m=function(e){return Object(r.jsx)("div",{id:"features",className:"text-center",children:Object(r.jsxs)("div",{className:"container",children:[Object(r.jsx)("div",{className:"col-md-10 col-md-offset-1 section-title",children:Object(r.jsx)("h2",{children:"Proceso"})}),Object(r.jsx)("div",{className:"row",children:e.data?e.data.map((function(e,a){return Object(r.jsxs)("div",{className:"col-xs-6 col-md-3",children:[" ",Object(r.jsx)("i",{className:e.icon}),Object(r.jsx)("h3",{children:e.title}),Object(r.jsx)("p",{children:e.text})]},"".concat(e.title,"-").concat(a))})):"Loading..."})]})})},j=function(e){return Object(r.jsxs)("div",{id:"about",children:[Object(r.jsx)("div",{className:"container",children:Object(r.jsxs)("div",{className:"row",children:[Object(r.jsxs)("div",{className:"col-xs-12 col-md-6",children:[" ",Object(r.jsx)("img",{src:"img/about.jpg",className:"img-responsive",alt:""})," "]}),Object(r.jsx)("div",{className:"col-xs-12 col-md-6",children:Object(r.jsxs)("div",{className:"about-text",children:[Object(r.jsx)("h2",{children:"Misi\xf3n"}),Object(r.jsx)("p",{children:e.data?e.data.paragraph:"loading..."}),Object(r.jsx)("p",{children:e.data?e.data.paragraph2:"loading..."}),Object(r.jsx)("p",{children:e.data?e.data.paragraph3:"loading..."}),Object(r.jsx)("h3",{children:e.data?e.data.paragraph4:"loading..."})]})})]})}),Object(r.jsx)("div",{id:"footer",children:Object(r.jsx)("div",{className:"container text-center",children:Object(r.jsx)("p",{children:"\xa9 2022 patrocima"})})})]})},b=t(3),p=t(2),u={name:"",email:""},g=function(e){var a=Object(s.useState)(u),t=Object(o.a)(a,2),c=t[0],n=c.name,i=c.email,l=t[1],d=function(e){var a=e.target,t=a.name,s=a.value;l((function(e){return Object(p.a)(Object(p.a)({},e),{},Object(b.a)({},t,s))}))};return Object(r.jsx)("div",{id:"services",className:"text-center",children:Object(r.jsxs)("div",{className:"container",children:[Object(r.jsxs)("div",{className:"section-title",children:[Object(r.jsx)("h2",{children:"Convertite en sponsor"}),Object(r.jsx)("h3",{children:"Si te suscribis ahora obten\xe9s AR$500 para que realices tu primera inversi\xf3n."}),Object(r.jsx)("p",{children:"Comenza a invertir en alg\xfan talento. Suscribite a nuestro newsletter y enterate cuando salen los primeros tokens."})]}),Object(r.jsxs)("form",{name:"sentMessage",validate:!0,onSubmit:function(e){e.preventDefault(),console.log(n,i);var a={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:n,email:i})};fetch("https://t3dbgp.deta.dev/talent/",a).then((function(e){return e.json()})).then((function(e){return alert("Formulario enviado")}))},children:[Object(r.jsxs)("div",{className:"row",children:[Object(r.jsx)("div",{className:"col-md-6",children:Object(r.jsxs)("div",{className:"form-group",children:[Object(r.jsx)("input",{type:"text",id:"name",name:"name",className:"form-control",placeholder:"Nombre",required:!0,onChange:d}),Object(r.jsx)("p",{className:"help-block text-danger"})]})}),Object(r.jsx)("div",{className:"col-md-6",children:Object(r.jsxs)("div",{className:"form-group",children:[Object(r.jsx)("input",{type:"email",id:"email",name:"email",className:"form-control",placeholder:"Email",required:!0,onChange:d}),Object(r.jsx)("p",{className:"help-block text-danger"})]})}),Object(r.jsx)("div",{className:"col-md-10"}),Object(r.jsx)("button",{type:"submit",className:"btn btn-custom col-md-2",children:"Suscribirme"})]}),Object(r.jsx)("div",{id:"success"})]}),Object(r.jsx)("div",{className:"row",children:e.data?e.data.map((function(e,a){return Object(r.jsxs)("div",{className:"col-md-4",children:[" ",Object(r.jsxs)("div",{className:"service-desc",children:[Object(r.jsx)("h3",{children:e.name}),Object(r.jsx)("p",{children:e.text})]})]},"".concat(e.name,"-").concat(a))})):"loading"})]})})},h=function(e){return Object(r.jsx)("div",{id:"portfolio",className:"text-center",children:Object(r.jsxs)("div",{className:"container",children:[Object(r.jsxs)("div",{className:"section-title",children:[Object(r.jsx)("h2",{children:"Talentos"}),Object(r.jsx)("p",{children:"Dedicaci\xf3n. Expertise. Pasi\xf3n."})]}),Object(r.jsxs)("div",{className:"row",children:[Object(r.jsx)("div",{className:"container talent-item",children:Object(r.jsxs)("div",{className:"row",children:[Object(r.jsxs)("div",{className:"col-xs-12 col-md-6",children:[" ",Object(r.jsx)("img",{src:"img/talento/01.jpg",className:"img-responsive",alt:""})," "]}),Object(r.jsx)("div",{className:"col-xs-12 col-md-6",children:Object(r.jsxs)("div",{className:"about-text talent-description",children:[Object(r.jsx)("h2",{children:"Mel Krywoj"}),Object(r.jsx)("h3",{children:"Apasionada por lo que hace, en su libertad elige este deporte una y otra vez."}),Object(r.jsx)("p",{children:'Hoy es una promesa del tenis Argentino y sue\xf1a con pisar las "grandes ligas" a nivel internacional postul\xe1ndose en el top 50 del mundo.'}),Object(r.jsx)("p",{children:"Correr, aguantar y jugar con variantes son sus fuertes. Su vida est\xe1 dedicada al tenis, lo sufre, lo transpira, lo piensa, lo ama y lo vuelve a elegir cada vez que golpea una pelota."}),Object(r.jsxs)("a",{href:"https://www.youtube.com/watch?v=BR4yI8vLgX0",children:[Object(r.jsx)("i",{className:"fa fa-youtube"})," Ver presentaci\xf3n"]})]})})]})}),Object(r.jsx)("div",{className:"container talent-item",children:Object(r.jsxs)("div",{className:"row",children:[Object(r.jsx)("div",{className:"col-xs-12 col-md-6",children:Object(r.jsxs)("div",{className:"about-text talent-description",children:[Object(r.jsx)("h2",{children:"Agustina Zeballos"}),Object(r.jsx)("h3",{children:"A pura garra, busca posicionarse como una de las maximas exponentes del golf."}),Object(r.jsx)("p",{children:"Desde muy peque\xf1a, Zeballos se destac\xf3 por su juego y gan\xf3 campeonatos. Con solo 11 a\xf1os gan\xf3 un certamen del Ranking mayor en el club N\xe1utico Hacoaj y lleg\xf3 a h\xe1ndicap 0."}),Object(r.jsx)("p",{children:"La joven golfista se convirti\xf3 en la primera mujer argentina en jugar el certamen del ANWA."}),Object(r.jsxs)("a",{href:"https://www.youtube.com/watch?v=gw13rpv-ZtM",children:[Object(r.jsx)("i",{className:"fa fa-youtube"})," Ver presentaci\xf3n"]})]})}),Object(r.jsxs)("div",{className:"col-xs-12 col-md-6",children:[" ",Object(r.jsx)("img",{src:"img/talento/02.jpg",className:"img-responsive",alt:""})," "]})]})}),Object(r.jsx)("div",{className:"container talent-item",children:Object(r.jsxs)("div",{className:"row",children:[Object(r.jsxs)("div",{className:"col-xs-12 col-md-6",children:[" ",Object(r.jsx)("img",{src:"img/talento/03.jpg",className:"img-responsive",alt:""})," "]}),Object(r.jsx)("div",{className:"col-xs-12 col-md-6",children:Object(r.jsxs)("div",{className:"about-text talent-description",children:[Object(r.jsx)("h2",{children:"Mora Robirosa"}),Object(r.jsx)("h3",{children:"Espera poder llegar a mucha gente con su voz, y con lo que tiene para transmitir."}),Object(r.jsx)("p",{children:"Tiene mas de 15.000 reproducciones en Spotify donde public\xf3 3 sencillos y 2 colaboraciones con otros artistas. "}),Object(r.jsx)("p",{children:"Mora Robirosa es de Buenos Aires, Argentina y apenas est\xe1 empezando a crecer en este largo camino como artista. Escribe su m\xfasica traduciendo sus emociones a palabras y de palabras a melod\xedas que concluyen en canciones."}),Object(r.jsxs)("a",{href:"https://www.youtube.com/watch?v=AZZgZVyqZN0",children:[Object(r.jsx)("i",{className:"fa fa-youtube"})," Ver presentaci\xf3n"]})]})})]})})]})]})})},x=function(e){return Object(r.jsx)("div",{id:"team",className:"text-center",children:Object(r.jsxs)("div",{className:"container",children:[Object(r.jsxs)("div",{className:"col-md-8 col-md-offset-2 section-title",children:[Object(r.jsx)("h2",{children:"Conoc\xe9 al equipo"}),Object(r.jsx)("p",{children:"Buscamos apoyar el talento de la comunidad."})]}),Object(r.jsx)("div",{id:"row",children:e.data?e.data.map((function(e,a){return Object(r.jsx)("div",{className:"col-md-4 col-sm-6 team",children:Object(r.jsxs)("div",{className:"thumbnail",children:[" ",Object(r.jsx)("img",{src:e.img,alt:"...",className:"team-img"}),Object(r.jsxs)("div",{className:"caption",children:[Object(r.jsx)("h4",{children:e.name}),Object(r.jsx)("p",{children:e.job})]})]})},"".concat(e.name,"-").concat(a))})):"loading"})]})})},O={name:"",email:"",message:""},v=function(e){var a=Object(s.useState)(O),t=Object(o.a)(a,2),c=t[0],n=c.name,i=c.email,l=c.message,d=t[1],m=function(e){var a=e.target,t=a.name,s=a.value;d((function(e){return Object(p.a)(Object(p.a)({},e),{},Object(b.a)({},t,s))}))};return Object(r.jsx)("div",{children:Object(r.jsx)("div",{id:"contact",children:Object(r.jsxs)("div",{className:"container",children:[Object(r.jsx)("div",{className:"col-md-8",children:Object(r.jsxs)("div",{className:"row",children:[Object(r.jsxs)("div",{className:"section-title",children:[Object(r.jsx)("h2",{children:"\xbfTen\xe9s talento y necesitas apoyo econ\xf3mico?"}),Object(r.jsx)("p",{children:"Mandanos un mensaje y te vamos a estar contactando a la brevedad para asesorarte sobre el sistema de acuerdos."})]}),Object(r.jsxs)("form",{name:"sentMessage",validate:!0,onSubmit:function(e){e.preventDefault(),console.log(n,i,l);var a={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:n,email:i,message:l})};fetch("https://t3dbgp.deta.dev/newsletter/",a).then((function(e){return e.json()})).then((function(e){return alert("Formulario enviado")}))},children:[Object(r.jsxs)("div",{className:"row",children:[Object(r.jsx)("div",{className:"col-md-6",children:Object(r.jsxs)("div",{className:"form-group",children:[Object(r.jsx)("input",{type:"text",id:"name",name:"name",className:"form-control",placeholder:"Nombre",required:!0,onChange:m}),Object(r.jsx)("p",{className:"help-block text-danger"})]})}),Object(r.jsx)("div",{className:"col-md-6",children:Object(r.jsxs)("div",{className:"form-group",children:[Object(r.jsx)("input",{type:"email",id:"email",name:"email",className:"form-control",placeholder:"Email",required:!0,onChange:m}),Object(r.jsx)("p",{className:"help-block text-danger"})]})})]}),Object(r.jsxs)("div",{className:"form-group",children:[Object(r.jsx)("textarea",{name:"message",id:"message",className:"form-control",rows:"4",placeholder:"Mensaje",required:!0,onChange:m}),Object(r.jsx)("p",{className:"help-block text-danger"})]}),Object(r.jsx)("div",{id:"success"}),Object(r.jsx)("button",{type:"submit",className:"btn btn-custom btn-lg",children:"Enviar mensaje"})]})]})}),Object(r.jsxs)("div",{className:"col-md-3 col-md-offset-1 contact-info",children:[Object(r.jsxs)("div",{className:"contact-item",children:[Object(r.jsx)("h3",{children:"Informaci\xf3n de contacto"}),Object(r.jsxs)("p",{children:[Object(r.jsxs)("span",{children:[Object(r.jsx)("i",{className:"fa fa-map-marker"})," Direcci\xf3n"]}),e.data?e.data.address:"loading"]})]}),Object(r.jsx)("div",{className:"contact-item",children:Object(r.jsxs)("p",{children:[Object(r.jsxs)("span",{children:[Object(r.jsx)("i",{className:"fa fa-envelope-o"})," Email"]})," ",e.data?e.data.email:"loading"]})})]})]})})})},f=t(7),N=t(8),y=t.n(N),w=(t(16),new y.a('a[href*="#"]',{speed:1e3,speedAsDuration:!0}),function(){var e=Object(s.useState)({}),a=Object(o.a)(e,2),t=a[0],c=a[1];return Object(s.useEffect)((function(){c(f)}),[]),Object(r.jsxs)("div",{children:[Object(r.jsx)(l,{}),Object(r.jsx)(d,{data:t.Header}),Object(r.jsx)(m,{data:t.Features}),Object(r.jsx)(h,{data:t.Gallery}),Object(r.jsx)(v,{data:t.Contact}),Object(r.jsx)(g,{data:t.Services}),Object(r.jsx)(x,{data:t.Team}),Object(r.jsx)(j,{data:t.About})]})});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(w,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e){e.exports=JSON.parse('{"Header":{"title":"Invert\xed en la pr\xf3xima superestrella","paragraph":"Convertite en sponsor de promesas locales y obten\xe9 beneficios con el crecimiento de su carrera."},"About":{"paragraph":"Patrocima es una plataforma que conecta a personas con un gran talento (artistas, deportistas, atletas, influencers, youtubers, etc) con aquellas que quieren impulsar su carrera con un compromiso financiero.","paragraph2":"Nuestro objetivo es permitir que cada talento con gran potencial se financie y logre llevar su carrera al m\xe1ximo. Por otro lado, el usuario se beneficiar\xe1 con un porcentaje peque\xf1o de sus ganancias futuras.","paragraph3":"Hay miles de talentosos que tienen la oportunidad de lograrlo, pero carecen de capital y red.","paragraph4":"Juntos, podemos potenciar su crecimiento."},"Gallery":[{"title":"Project Title","largeImage":"img/portfolio/01-large.jpg","smallImage":"img/portfolio/01-small.jpg"},{"title":"Project Title","largeImage":"img/portfolio/02-large.jpg","smallImage":"img/portfolio/02-small.jpg"},{"title":"Project Title","largeImage":"img/portfolio/03-large.jpg","smallImage":"img/portfolio/03-small.jpg"},{"title":"Project Title","largeImage":"img/portfolio/04-large.jpg","smallImage":"img/portfolio/04-small.jpg"},{"title":"Project Title","largeImage":"img/portfolio/05-large.jpg","smallImage":"img/portfolio/05-small.jpg"},{"title":"Project Title","largeImage":"img/portfolio/06-large.jpg","smallImage":"img/portfolio/06-small.jpg"},{"title":"Project Title","largeImage":"img/portfolio/07-large.jpg","smallImage":"img/portfolio/07-small.jpg"},{"title":"Project Title","largeImage":"img/portfolio/08-large.jpg","smallImage":"img/portfolio/08-small.jpg"},{"title":"Project Title","largeImage":"img/portfolio/09-large.jpg","smallImage":"img/portfolio/09-small.jpg"}],"Services":[{"icon":"fa fa-plane","name":"\xbfQue es un token?","text":"Un token es la representaci\xf3n digital en el mundo Blockchain de algo que tiene valor dentro de un contexto. Podriamos imaginarlo en este escenario como comprar acciones de tu artista favorito."},{"icon":"fa fa-pie-chart","name":"\xbfComo funciona un token?","text":"A medida que el talento reciba ganancias vas a participar por un porcentaje proporcional a la cantidad de tokens que poseas. Cada talento va a tener un numero limitado de tokens."},{"icon":"fa fa-wordpress","name":"\xbfQuien puede comprar el token? (Invertir)","text":"Cualquier persona mayor de 18 a\xf1os que tenga una cuenta bancaria o de binance. Puedes comprarlo mediante crypto o de la manera tradicional."},{"icon":"fa fa-cart-arrow-down","name":"\xbfQue ocurre si me arrepiento de haber comprado el token?","text":"Puedes venderlo en el mercado de tokens. Los mismos van a subir o bajar su valor de acuerdo a la oferta y la demanda."},{"icon":"fa fa-cloud-download","name":"\xbfComo puedo ver si el talento tiene exito?","text":"Principalmente tendras acceso a visibilidad de las finanzas de tu talento que debera llevar un registro de sus ingresos laborales, pero no podras divulgar su informaci\xf3n."},{"icon":"fa fa-language","name":"\xbfQue ocurre si el talento fracasa?","text":"Es parte del riesgo, es una inversion de riesgo. Van a haber personas exitosas y personas que no tanto. No necesariamente vas a necesitar que sea una superestrella para festejar sus ganancias."}],"Testimonials":[{"img":"img/testimonials/01.jpg","text":"\\"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.\\"","name":"John Doe"},{"img":"img/testimonials/02.jpg","text":"\\"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.\\"","name":"Johnathan Doe"},{"img":"img/testimonials/03.jpg","text":"\\"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.\\"","name":"John Doe"}],"Team":[{"img":"img/team/03.jpg","name":"Sol Almagro","job":"CMO & Co-Founder"},{"img":"img/team/01.jpg","name":"Vicente Robirosa","job":"CEO & Co-Founder"},{"img":"img/team/02.jpg","name":"Oliver Balfour","job":"CTO & Co-Founder"}],"Contact":{"address":"Recoleta, Buenos Aires, Argentina","phone":"+1 123 456 1234","email":"info@patrocima.com","facebook":"fb.com","twitter":"twitter.com","youtube":"youtube.com"},"Features":[{"icon":"fa fa-comments-o","title":"Acuerdo","text":"Trabajamos con el talento para formular un acuerdo justo de reparto de ingresos."},{"icon":"fa fa-bullhorn","title":"TalenToken","text":"Los t\xe9rminos del acuerdo junto con los detalles sobre el talento se anuncian en la plataforma y se emiten los token (similar a las acciones de bolsa)."},{"icon":"fa fa-group","title":"Comunidad","text":"Los patrocinadores tienen la oportunidad de invertir comprando el token del talento, recibiendo un contrato que estipula los t\xe9rminos."},{"icon":"fa fa-magic","title":"\xc9xito","text":"Cuando el talento se convierte en profesional, comparte una parte de sus ganancias con los patrocinadores."}]}')}},[[17,1,2]]]);
//# sourceMappingURL=main.c1313383.chunk.js.map