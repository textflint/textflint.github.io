(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-88e10430"],{b85c:function(t,e,a){"use strict";a.d(e,"a",(function(){return n}));a("a4d3"),a("e01a"),a("d3b7"),a("d28b"),a("3ca3"),a("ddb0");var r=a("06c5");function n(t,e){var a;if("undefined"===typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(a=Object(r["a"])(t))||e&&t&&"number"===typeof t.length){a&&(t=a);var n=0,o=function(){};return{s:o,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,l=!0,s=!1;return{s:function(){a=t[Symbol.iterator]()},n:function(){var t=a.next();return l=t.done,t},e:function(t){s=!0,i=t},f:function(){try{l||null==a["return"]||a["return"]()}finally{if(s)throw i}}}}},c9e2:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("vxe-grid",{ref:"xTable",staticClass:"mb-10",attrs:{border:"",stripe:"",resizable:"","show-overflow":"",loading:t.loading,"scroll-x":{enabled:!1},columns:t.tableColumn,data:t.tableData,"tooltip-config":{showAll:!0,contentMethod:t.showTooltipMethod}},on:{"header-cell-dblclick":t.headerCellDBLClickEvent,"cell-dblclick":t.cellDBLClickEvent}})],1)},n=[],o=a("b85c"),i=(a("b0c0"),a("d3b7"),a("1276"),a("ac1f"),a("a026")),l=a("c695"),s=a.n(l),c=a("a388"),u=a.n(c);a("778e");i["default"].use(u.a);var d={props:["dataset","trans_type","metric"],data:function(){var t=[];try{t=a("de4a")("./"+this.$store.state.taskinfo.name+"/results/"+this.dataset+"/"+this.trans_type+"_"+this.metric+".json")}catch(f){t=[{attack_results:{}}]}var e=new Array,r=160;e.push({title:"Model/"+this.metric,field:"model",width:185,showOverflow:!0,titleHelp:{message:"Double click model or method name to get more information",icon:"vxe-icon--info"}});var n,i=new Array,l=Object(o["a"])(t);try{for(l.s();!(n=l.n()).done;){var s=n.value;for(var c in s.attack_results){var u=s.attack_results[c],d="";d=void 0!=u.sample_num?c+"("+u.sample_num+" samples )":c,-1==i.indexOf(d)&&(i.push(d),"subpopulation"==this.trans_type?e.push({title:d,children:[{field:"attack_results."+c+".trans",title:"trans",minWidth:r,sortable:!0,formatter:this.formatterNum}]}):e.push({title:d,children:[{field:"attack_results."+c+".ori",title:"ori",width:r,sortable:!0,formatter:this.formatterNum},{field:"attack_results."+c+".trans",title:"trans",width:r,sortable:!0,formatter:this.formatterNum}]}))}}}catch(f){l.e(f)}finally{l.f()}return{loading:!1,tableData:[],result_json:t,tableColumn:e}},created:function(){this.loading=!0},mounted:function(){this.loadList()},methods:{loadList:function(){var t=this;this.mockList().then((function(e){var a=t.$refs.xTable,r={domain:0,ut:250,domain_domain:500,domain_ut:1e3,ut_ut:2e3};a&&setTimeout((function(){a.reloadData(e).then((function(){t.loading=!1}))}),r[t.trans_type])}))},mockList:function(){var t=this;return new Promise((function(e){e(t.result_json)}))},formatterNum:function(t){var e=t.cellValue;return"null"==e?(e="\\",e):s.a.commafy(s.a.toNumber(e),{digits:2})},headerCellDBLClickEvent:function(t){var e=t.column;if("ori"!=e.title&&"trans"!=e.title&&-1==e.title.indexOf("Model")){var a=this,r=this.$router.resolve({path:"/chartdisplay",query:{task:a.$store.state.taskinfo.name,name:e.title.split("(")[0],display_type:"transformations",dataset:this.dataset,metric:this.metric,trans_type:this.trans_type}});window.open(r.href,"_blank")}},cellDBLClickEvent:function(t){var e=t.column,a=t.row;if(1==e.level){var r=this,n=this.$router.resolve({path:"/chartdisplay",query:{task:r.$store.state.taskinfo.name,name:a.model,display_type:"models",dataset:this.dataset,metric:this.metric,trans_type:this.trans_type}});window.open(n.href,"_blank")}},showTooltipMethod:function(t){var e=t.type,a=t.column,r=t.row,n=t._columnIndex,o=a.property;return"header"===e&&-1===n?a.title?"Doble click to display the result of "+a.title+" in chart":"":"body"===e&&0===n?r[o]?"Doble click to display the result of "+r.model+" in chart":"":null}}},f=d,h=a("2877"),m=Object(h["a"])(f,r,n,!1,null,null,null);e["default"]=m.exports}}]);