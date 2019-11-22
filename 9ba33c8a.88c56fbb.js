(window.webpackJsonp=window.webpackJsonp||[]).push([[97],{231:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return a})),t.d(n,"rightToc",(function(){return i})),t.d(n,"default",(function(){return l}));t(52),t(25),t(20),t(21),t(53),t(0);var r=t(288);function o(){return(o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}var a={title:"Debugging"},i=[],c={rightToc:i},u="wrapper";function l(e){var n=e.components,t=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,["components"]);return Object(r.b)(u,o({},c,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("p",null,"For development purposes it might come handy to enable logging and debug mode:"),Object(r.b)("pre",null,Object(r.b)("code",o({parentName:"pre"},{className:"language-typescript"}),"return MikroORM.init({\n  logger: console.log.bind(console),\n  debug: true,\n});\n")),Object(r.b)("p",null,"By doing this ",Object(r.b)("inlineCode",{parentName:"p"},"MikroORM")," will start using provided logger function to dump all queries:"),Object(r.b)("pre",null,Object(r.b)("code",o({parentName:"pre"},{}),"[query-logger] SELECT `e0`.* FROM `author` AS `e0` WHERE `e0`.`name` = ? LIMIT ? [took 2 ms]\n[query-logger] START TRANSACTION [took 1 ms]\n[query-logger] INSERT INTO `author` (`name`, `email`, `created_at`, `updated_at`, `terms_accepted`) VALUES (?, ?, ?, ?, ?) [took 2 ms]\n[query-logger] COMMIT [took 2 ms]\n")),Object(r.b)("p",null,"It is also useful for debugging problems with entity discovery, as you will see information\nabout every processed entity:"),Object(r.b)("pre",null,Object(r.b)("code",o({parentName:"pre"},{}),"ORM entity discovery started\n- processing entity Author\n- using cached metadata for entity Author\n- processing entity Book\n- processing entity BookTag\n- entity discovery finished after 13 ms\n")))}l.isMDXComponent=!0},288:function(e,n,t){"use strict";t.d(n,"a",(function(){return c})),t.d(n,"b",(function(){return s}));var r=t(0),o=t.n(r),a=o.a.createContext({}),i=function(e){var n=o.a.useContext(a),t=n;return e&&(t="function"==typeof e?e(n):Object.assign({},n,e)),t},c=function(e){var n=i(e.components);return o.a.createElement(a.Provider,{value:n},e.children)};var u="mdxType",l={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},p=Object(r.forwardRef)((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,u=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===n.indexOf(r)&&(t[r]=e[r]);return t}(e,["components","mdxType","originalType","parentName"]),p=i(t),s=r,d=p[c+"."+s]||p[s]||l[s]||a;return t?o.a.createElement(d,Object.assign({},{ref:n},u,{components:t})):o.a.createElement(d,Object.assign({},{ref:n},u))}));function s(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=p;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c[u]="string"==typeof e?e:r,i[1]=c;for(var s=2;s<a;s++)i[s]=t[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}p.displayName="MDXCreateElement"}}]);