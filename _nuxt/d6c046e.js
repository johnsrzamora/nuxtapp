(window.webpackJsonp=window.webpackJsonp||[]).push([[11,3,6,14],{348:function(t,e,o){var content=o(350);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(79).default)("2c636b42",content,!0,{sourceMap:!1})},349:function(t,e,o){"use strict";o(348)},350:function(t,e,o){var n=o(78),r=o(168),l=o(232),c=n(!1),d=r(l);c.push([t.i,'body{background-color:#fff;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;scroll-behavior:smooth}@font-face{font-family:"NewFont";src:url('+d+')}.mainlayout{font-family:"NewFont";font-size:40px;font-weight:700;width:100%}.titleSections{font-family:"NewFont";font-size:70px;color:#fff;float:right;margin-right:25%;margin-top:10%}.homeContainer{width:100%;border:1px solid red;display:flex;justify-content:center;align-items:center;margin:0}.sectionContainer{width:100%;height:650px;background-color:#2b2b2b;margin-bottom:20px}#container,#inner{width:100%}#inner{margin:auto;height:300px;box-shadow:2px 2px 50px rgba(0,0,0,.2);transition:transform .5s;-webkit-transition:transform .5s;-moz-transition:transform .5s;-o-transition:transform .5s}.mainNavigation{width:100%;height:60px;background-color:red;margin:-8px;position:sticky;top:0;z-index:1}.homePage{font-family:"NewFont";font-size:72px}.firstContainer{width:100%;height:600px;transform:skew(-10deg);background:#2c2c2c}.firstContainer a{color:#fff;text-decoration:none}.navigationpane{background-color:#fff;width:100%;position:sticky;top:0;z-index:1}.mainColor{width:100%}.logo{font-size:30px;font-weight:bolder;padding:20px}.linkColorHolder,.logo{float:left;text-align:center}.linkColorHolder{width:100%;height:65px;opacity:.7;font-family:"Segoe UI";font-size:20px;font-weight:700;color:#3b3a3a}.linkColorHolder label{padding-top:10px}.linkColorHolder:hover{opacity:1;transition:.5s;color:#daa520}.colorContainer{margin:auto;width:100%}.innerlayout{margin:auto;overflow:hidden}.avatarHolder{margin:auto;width:100%;text-align:center}#cardHolder{border:1px solid red}.cardinnerlayout{width:65%;font-family:Cambria;font-size:15px;margin:auto;overflow:hidden}.skillsNav{margin:10px -8px -8px;width:100%}.progressBars{width:90%;margin-top:-30px}.progressBarholder{margin-top:-20px}.el-avatar--circle{border-radius:50%;border:5px solid #000}.el-menu--horizontal>.el-menu-item a{font-family:"Franklin Gothic Medium","Arial Narrow",Arial,sans-serif;color:#3b3a3a;text-decoration:none}.el-menu--horizontal>.el-menu-item a:hover{color:#000;text-decoration:none;border-bottom:none}',""]),t.exports=c},351:function(t,e,o){"use strict";o.r(e);var n={routesettings:[{routes:[{rname:"/",rcolor:"#FFD400",name:"Home"},{rname:"/about",rcolor:"#FFEA61",name:"About"},{rname:"/contact",rcolor:"#FFFFB7",name:"Contact"}]}]},r={data:function(){return{navRouting:n,nav:""}},computed:{},created:function(){this.animateNav()},mounted:function(){this.animateNav(),this.nav=this.navRouting.routesettings[0].routes,console.log(this.navRouting.routesettings)},methods:{animateNav:function(){this.$anime({})}}},l=(o(349),o(46)),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"navigationpane"},[o("div",{staticClass:"mainColor"},[o("div",{staticClass:"colorContainer"},[o("el-row",[o("el-col",{attrs:{span:18}},[o("div",{staticClass:"logo"},[o("span",[t._v("LI-ZHEN")])])]),t._v(" "),t._l(t.nav,(function(e){return o("el-col",{key:e.rname,attrs:{span:2}},[o("NuxtLink",{attrs:{to:e.rname}},[o("div",{staticClass:"linkColorHolder"},[o("h5",[t._v(t._s(e.name))])])])],1)}))],2)],1)]),t._v(" "),o("div",{staticClass:"line"})])}),[],!1,null,null,null);e.default=component.exports},352:function(t,e,o){"use strict";o.r(e),e.default={profile:[{name:"Stephen Zamora",settings:{font_color:"black",navbar_color:"gold"},expertise:[{title:"Developer",description:"Im a Jr. Website Developer",gigs:["Detail Online Tech Asia (2021 - Present)","Samatosa Information Tech Davao (2018 - 2019)","SEG WORKS PH (2016 - 2017)","Cavista  (2015 - 2016)"],trainings:["UM training center","Detail Online tech intern","Microsoft Associate SQL","javascript trainee"],skills:[{sname:"VueJS Framework",description:'one of the most powerful user interfrace frameworks that i"ve ever used. Im knowledgable of using routes, components, props, lifecyle concepts and advance data binding',rate:40},{sname:"Javascript",description:"JavaScript is a dynamic computer programming language. It is lightweight and most commonly used as a part of web pages, whose implementations allow client-side script to interact with the user and make dynamic pages. It is an interpreted programming language with object-oriented capabilities.",rate:60},{sname:"Node.JS",description:"This is my setup for back end setups. Im expert in making Rest APIs, database setups",rate:20},{sname:"HTML5",description:"Saba Diha",rate:80},{sname:"CSS",description:"Design2x",rate:70}],dir:"/skills",path:"/skills/developer",slug:"developer"},{title:"Multimedia",description:"A part time video & audio editor & graphics designer ",gigs:["Detail Online Tech Asia (2021 - Present)","Samatosa Information Tech Davao (2018 - 2019)","SEG WORKS PH (2016 - 2017)","Cavista  (2015 - 2016)"],trainings:["UM training center","Detail Online tech intern","Microsoft Associate SQL","javascript trainee"],skills:[{sname:"Adobe Premier / VSDC",description:"This are my tools for editing videos. Im an expert of explainer videos, vlogs ,virtual choirs, slideshows & advertisments",rate:80},{sname:"Audio Technician",description:"Im knowledgeable recording voice, instruments, and mixing as well. Putting audio effects like, compressors, reverbs, noise isolations etc.",rate:60},{sname:"Canva / Adobe Illustrator Desingner",description:"I do social media posters, tarpauline layouts, photo grade, advertisments etc",rate:45}],dir:"/skills",path:"/expertise/multimedia",slug:"multimedia"},{title:"Wedding Gigs",description:"A part time video & audio editor & graphics designer ",gigs:["Detail Online Tech Asia (2021 - Present)","Samatosa Information Tech Davao (2018 - 2019)","SEG WORKS PH (2016 - 2017)","Cavista  (2015 - 2016)"],trainings:["UM training center","Detail Online tech intern","Microsoft Associate SQL","javascript trainee"],skills:[{sname:"Adobe Premier / VSDC",description:"This are my tools for editing videos. Im an expert of explainer videos, vlogs ,virtual choirs, slideshows & advertisments",rate:80},{sname:"Audio Technician",description:"Im knowledgeable recording voice, instruments, and mixing as well. Putting audio effects like, compressors, reverbs, noise isolations etc.",rate:60},{sname:"Canva / Adobe Illustrator Desingner",description:"I do social media posters, tarpauline layouts, photo grade, advertisments etc",rate:20}],dir:"/skills",path:"/skills/multimedia",slug:"multimedia"}]}]}},353:function(t,e,o){var content=o(355);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(79).default)("3adf1cc5",content,!0,{sourceMap:!1})},354:function(t,e,o){"use strict";o(353)},355:function(t,e,o){var n=o(78),r=o(168),l=o(232),c=n(!1),d=r(l);c.push([t.i,'body{background-color:#fff;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;scroll-behavior:smooth}@font-face{font-family:"NewFont";src:url('+d+')}.mainlayout{font-family:"NewFont";font-size:40px;font-weight:700;width:100%}.titleSections{font-family:"NewFont";font-size:70px;color:#fff;float:right;margin-right:25%;margin-top:10%}.homeContainer{width:100%;border:1px solid red;display:flex;justify-content:center;align-items:center;margin:0}.sectionContainer{width:100%;height:650px;background-color:#2b2b2b;margin-bottom:20px}#container,#inner{width:100%}#inner{margin:auto;height:300px;box-shadow:2px 2px 50px rgba(0,0,0,.2);transition:transform .5s;-webkit-transition:transform .5s;-moz-transition:transform .5s;-o-transition:transform .5s}.mainNavigation{width:100%;height:60px;background-color:red;margin:-8px;position:sticky;top:0;z-index:1}.homePage{font-family:"NewFont";font-size:72px}.firstContainer{width:100%;height:600px;transform:skew(-10deg);background:#2c2c2c}.firstContainer a{color:#fff;text-decoration:none}.navigationpane{background-color:#fff;width:100%;position:sticky;top:0;z-index:1}.mainColor{width:100%}.logo{font-size:30px;font-weight:bolder;padding:20px}.linkColorHolder,.logo{float:left;text-align:center}.linkColorHolder{width:100%;height:65px;opacity:.7;font-family:"Segoe UI";font-size:20px;font-weight:700;color:#3b3a3a}.linkColorHolder label{padding-top:10px}.linkColorHolder:hover{opacity:1;transition:.5s;color:#daa520}.colorContainer{margin:auto;width:100%}.innerlayout{margin:auto;overflow:hidden}.avatarHolder{margin:auto;width:100%;text-align:center}#cardHolder{border:1px solid red}.cardinnerlayout{width:65%;font-family:Cambria;font-size:15px;margin:auto;overflow:hidden}.skillsNav{margin:10px -8px -8px;width:100%}.progressBars{width:90%;margin-top:-30px}.progressBarholder{margin-top:-20px}.el-avatar--circle{border-radius:50%;border:5px solid #000}.el-menu--horizontal>.el-menu-item a{font-family:"Franklin Gothic Medium","Arial Narrow",Arial,sans-serif;color:#3b3a3a;text-decoration:none}.el-menu--horizontal>.el-menu-item a:hover{color:#000;text-decoration:none;border-bottom:none}',""]),t.exports=c},357:function(t,e,o){"use strict";o.r(e);var n={data:function(){return{activeName:1,skillsInfo:"",gigsInfo:"",color:"",infoModel:"",title:"",fill:"fill",size:"",url:"https://scontent.fmnl25-1.fna.fbcdn.net/v/t1.6435-9/71198018_2610727072271836_2048907169234944000_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=0debeb&_nc_eui2=AeGz7B7xcRptZB0N3te4Lwvnu9o_2HIKgDC72j_YcgqAMJFd7R686qNBMPKk1sUsrMQyGFFLmKapp6M0DnRfCtrh&_nc_ohc=5DmMLcivbe0AX9yOS9x&_nc_ht=scontent.fmnl25-1.fna&oh=c71a1caef8c1004b0b50c6d75ee94bea&oe=6174979A",progressColors:["#0dbab1","#0db5ba","#0da6ba","#0d98ba","#0d8aba"]}},props:["infoData"],computed:{data:function(){var data=this.infoData;this.skillsInfo=data.skills,this.gigsInfo=data.gigs,console.log(data)}},mounted:function(){var data=this.infoData;this.skillsInfo=data.skills,this.gigsInfo=data.gigs,console.log(data)}},r=(o(354),o(46)),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("div",{staticClass:"mainlayout"},[o("div",{staticClass:"cardinnerlayout"},[o("el-row",{attrs:{gutter:0}},[o("el-col",{attrs:{span:24}},[o("el-card",{attrs:{"body-style":{padding:"5px"}}},[o("el-row",[o("el-col",{attrs:{span:12}},[o("div",{staticStyle:{padding:"20px"}},[o("div",{staticClass:"avatarHolder"},[o("el-avatar",{attrs:{shape:"circle",size:200,fit:t.fill,src:t.url}}),t._v(" "),o("span",[o("h2",[o("b",[t._v("Stephen Zamora")])])]),t._v(" "),o("span",[o("h3",[t._v("Jr. Web Developer")])])],1)])]),t._v(" "),o("el-col",{attrs:{span:12}},[o("div",{staticStyle:{padding:"20px"}},[o("span",[o("h2",[o("b",[t._v("Skills")])])]),t._v(" "),t._l(t.skillsInfo,(function(data,e){return o("el-collapse",{key:data.sname,attrs:{accordion:""},model:{value:t.activeName,callback:function(e){t.activeName=e},expression:"activeName"}},[o("el-collapse-item",[o("template",{slot:"title"},[o("div",{staticClass:"progressBars"},[o("span",[o("h3",[t._v(t._s(data.sname))])]),t._v(" "),o("div",{staticClass:"progressBarholder"},[o("el-progress",{attrs:{"text-inside":!1,"stroke-width":10,"show-text":!1,percentage:data.rate,color:t.progressColors[e]}})],1)])]),t._v(" "),o("div",[t._v(t._s(data.description))])],2)],1)}))],2)])],1)],1)],1),t._v(" "),o("el-col",{attrs:{span:24}},[o("el-card",{attrs:{"body-style":{padding:"20px"}}},[o("div",{staticStyle:{padding:"20px"}},[o("span",[o("b",[t._v("Gigs")])]),t._v(" "),o("el-timeline",t._l(t.gigsInfo,(function(data,e){return o("el-timeline-item",{key:data,attrs:{timestamp:"2018/4/12",placement:"top",color:t.progressColors[e]}},[o("el-card",[o("h4",[t._v(t._s(data))]),t._v(" "),o("p",[t._v("Tom committed 2018/4/12 20:46")])])],1)})),1)],1)])],1)],1)],1)])])}),[],!1,null,null,null);e.default=component.exports},358:function(t,e,o){var content=o(362);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(79).default)("3ca2af56",content,!0,{sourceMap:!1})},360:function(t,e,o){"use strict";var n=o(5),r=o(80).find,l=o(169),c="find",d=!0;c in[]&&Array(1).find((function(){d=!1})),n({target:"Array",proto:!0,forced:d},{find:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}}),l(c)},361:function(t,e,o){"use strict";o(358)},362:function(t,e,o){var n=o(78),r=o(168),l=o(232),c=n(!1),d=r(l);c.push([t.i,'body{background-color:#fff;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;scroll-behavior:smooth}@font-face{font-family:"NewFont";src:url('+d+')}.mainlayout{font-family:"NewFont";font-size:40px;font-weight:700;width:100%}.titleSections{font-family:"NewFont";font-size:70px;color:#fff;float:right;margin-right:25%;margin-top:10%}.homeContainer{width:100%;border:1px solid red;display:flex;justify-content:center;align-items:center;margin:0}.sectionContainer{width:100%;height:650px;background-color:#2b2b2b;margin-bottom:20px}#container,#inner{width:100%}#inner{margin:auto;height:300px;box-shadow:2px 2px 50px rgba(0,0,0,.2);transition:transform .5s;-webkit-transition:transform .5s;-moz-transition:transform .5s;-o-transition:transform .5s}.mainNavigation{width:100%;height:60px;background-color:red;margin:-8px;position:sticky;top:0;z-index:1}.homePage{font-family:"NewFont";font-size:72px}.firstContainer{width:100%;height:600px;transform:skew(-10deg);background:#2c2c2c}.firstContainer a{color:#fff;text-decoration:none}.navigationpane{background-color:#fff;width:100%;position:sticky;top:0;z-index:1}.mainColor{width:100%}.logo{font-size:30px;font-weight:bolder;padding:20px}.linkColorHolder,.logo{float:left;text-align:center}.linkColorHolder{width:100%;height:65px;opacity:.7;font-family:"Segoe UI";font-size:20px;font-weight:700;color:#3b3a3a}.linkColorHolder label{padding-top:10px}.linkColorHolder:hover{opacity:1;transition:.5s;color:#daa520}.colorContainer{margin:auto;width:100%}.innerlayout{margin:auto;overflow:hidden}.avatarHolder{margin:auto;width:100%;text-align:center}#cardHolder{border:1px solid red}.cardinnerlayout{width:65%;font-family:Cambria;font-size:15px;margin:auto;overflow:hidden}.skillsNav{margin:10px -8px -8px;width:100%}.progressBars{width:90%;margin-top:-30px}.progressBarholder{margin-top:-20px}.el-avatar--circle{border-radius:50%;border:5px solid #000}.el-menu--horizontal>.el-menu-item a{font-family:"Franklin Gothic Medium","Arial Narrow",Arial,sans-serif;color:#3b3a3a;text-decoration:none}.el-menu--horizontal>.el-menu-item a:hover{color:#000;text-decoration:none;border-bottom:none}',""]),t.exports=c},367:function(t,e,o){"use strict";o.r(e);o(37),o(47),o(29),o(58),o(360);var n=o(352),r={data:function(){return{expertise:n.default,dynamicRoutes:""}},mounted:function(){},computed:{data:function(){return this.filterData()}},methods:{filterData:function(){var t=this;return this.expertise.profile.map((function(element){return element.expertise})).filter((function(a){return null!=a}))[0].map((function(a){return{description:a.description,title:a.title,gigs:a.gigs,trainings:a.trainings,slug:a.slug,skills:a.skills}})).find((function(e){return e.slug===t.$route.params.expertise}))}}},l=(o(361),o(46)),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("Navigation"),t._v(" "),o("NuxtLink",{attrs:{to:"/skills"}},[t._v("Back to home")]),t._v(" "),o("InformationCards",{attrs:{infoData:t.data}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Navigation:o(351).default,InformationCards:o(357).default})}}]);