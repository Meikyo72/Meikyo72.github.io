(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,n){e.exports=n(31)},24:function(e,t,n){},26:function(e,t,n){},31:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(7),s=n.n(a),i=(n(24),n(8)),c=n(9),u=n(10),l=n(14),d=n(11),p=n(13),g=n(1),w=(n(26),[{question:"Action List",answers:[{type:"Correct",content:"Vad, vem och n\xe4r"},{type:"Wrong",content:"Lista med filmer"},{type:"Wrong",content:"Automatiserad d\ufffdrr med sensor i d\xf6rrkarmen"}]},{question:"AD",answers:[{type:"Correct",content:"Architecture Design"},{type:"Wrong",content:"Any Design"},{type:"Wrong",content:"Android Dreams"}]},{question:"ADRC",answers:[{type:"Correct",content:"Average Daily Remuneration Cost"},{type:"Wrong",content:"Available Data Rendered Correct"},{type:"Wrong",content:"Accumulated Daily Rodent Catch"}]},{question:"AKM",answers:[{type:"Correct",content:"Applied Knowledge Management"},{type:"Wrong",content:"Abnormal Knitting Manager"},{type:"Wrong",content:"Art Knowledge Mesures"}]},{question:"AM",answers:[{type:"Correct",content:"Appliacations Management"},{type:"Wrong",content:"Ask Mama"},{type:"Wrong",content:"Assembler Master"}]},{question:"API",answers:[{type:"Correct",content:"Appliacation Program Interface"},{type:"Wrong",content:"Anti Personel Intrusion"},{type:"Wrong",content:"Armed Potato Infestation"}]},{question:"ASAP",answers:[{type:"Correct",content:"As Soon As Possible"},{type:"Wrong",content:"Airforce Simpleton At Party"},{type:"Wrong",content:"Arbitrary Sell All Program"}]},{question:"AQA",answers:[{type:"Correct",content:"Assignment Quality Audit"},{type:"Wrong",content:"Anchor Qualified Application"},{type:"Wrong",content:"Awareness Quantified Allies"}]},{question:"B's",answers:[{type:"Correct",content:"Benefits"},{type:"Wrong",content:"Bananas"},{type:"Wrong",content:"Bitcoins"}]},{question:"BAP",answers:[{type:"Correct",content:"Bemanning Av Prospects"},{type:"Wrong",content:"Bud American Pilsner"},{type:"Wrong",content:"Byte Av Praliner"}]},{question:"BCS",answers:[{type:"Correct",content:"Bid Control Sheet"},{type:"Wrong",content:"Bid\xe9 Containing Sheet"},{type:"Wrong",content:"Better Call Someone"}]}]);var m=function(e){return o.a.createElement("h2",{className:"question"},e.content)};var h=function(e){return o.a.createElement("div",{className:"questionCount"},"Fr\xe5ga ",o.a.createElement("span",null,e.counter)," av ",o.a.createElement("span",null,e.total))};var y=function(e){return o.a.createElement("li",{className:"answerOption"},o.a.createElement("input",{type:"radio",className:"radioCustomButton",name:"radioGroup",checked:!1,id:e.answerType,value:e.answerType,disabled:e.answer,onChange:e.onAnswerSelected}),o.a.createElement("label",{className:"radioCustomLabel",htmlFor:e.answerType},e.answerContent))};var f=function(e){return o.a.createElement("div",{className:"quiz"},o.a.createElement(h,{counter:e.questionId,total:e.questionTotal}),o.a.createElement(m,{content:e.question}),o.a.createElement("ul",{className:"answerOptions"},e.answerOptions.map(function(t){return o.a.createElement(y,{key:t.content,answerContent:t.content,answerType:t.type,answer:e.answer,questionId:e.questionId,onAnswerSelected:e.onAnswerSelected})})))},v=n(12),A=n.n(v);var C=function(e){return o.a.createElement("div",{className:"result"},"Du har ",o.a.createElement("strong",null,e.quizResult)," korrekta svar av ",e.quizLength,"!")},q=n(2),b=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(l.a)(this,Object(d.a)(t).call(this,e))).state={counter:0,questionId:1,question:"",answerOptions:[],answer:"",answersCount:{Correct:0,Wrong:0},result:""},n.handleAnswerSelected=n.handleAnswerSelected.bind(Object(g.a)(Object(g.a)(n))),n}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentWillMount",value:function(){var e=Object(q.shuffle)(w),t=e.map(function(e){return Object(q.shuffle)(e.answers)});this.setState({question:e[0].question,answerOptions:t[0]})}},{key:"setUserAnswer",value:function(e){var t=A()(this.state.answersCount,Object(i.a)({},e,{$apply:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return++e}}));this.setState({answersCount:t,answer:e}),console.log(e),"Correct"===e?document.body.style="background: green;":"Wrong"===e&&(document.body.style="background: red;")}},{key:"setNextQuestion",value:function(){document.body.style="background: white;";var e=this.state.counter+1,t=this.state.questionId+1;this.setState({counter:e,questionId:t,question:w[e].question,answerOptions:Object(q.shuffle)(w[e].answers),answer:""})}},{key:"handleAnswerSelected",value:function(e){var t=this;this.setUserAnswer(e.currentTarget.value),this.state.questionId<w.length?setTimeout(function(){return t.setNextQuestion()},2e3):setTimeout(function(){return t.setResults(t.getResults())},2e3)}},{key:"getResults",value:function(){var e=this.state.answersCount,t=Object.keys(e),n=t.map(function(t){return e[t]}),r=Math.max.apply(null,n);return t.filter(function(t){return e[t]===r})}},{key:"setResults",value:function(e){1===e.length?this.setState({result:e[0]}):this.setState({result:e[0]+" and "+e[1]})}},{key:"renderQuiz",value:function(){return o.a.createElement(f,{answer:this.state.answer,answerOptions:this.state.answerOptions,questionId:this.state.questionId,question:this.state.question,questionTotal:w.length,onAnswerSelected:this.handleAnswerSelected})}},{key:"renderResult",value:function(){return o.a.createElement(C,{quizResult:this.state.answersCount.Correct,quizLength:w.length})}},{key:"render",value:function(){return console.log(this.state.answersCount.Correct),o.a.createElement("div",{className:"App"},o.a.createElement("div",{className:"App-header"},o.a.createElement("h2",null,"Onboarding Quiz programmerad i React av Petri"),o.a.createElement("h3",null,"Beta version")),this.state.result?this.renderResult():this.renderQuiz())}}]),t}(r.Component),W=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function k(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}s.a.render(o.a.createElement(b,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("","/service-worker.js");W?(function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):k(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):k(e)})}}()}},[[15,2,1]]]);
//# sourceMappingURL=main.99dd84de.chunk.js.map