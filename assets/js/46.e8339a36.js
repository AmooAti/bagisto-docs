(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{525:function(t,e,a){"use strict";a.r(e);var r=a(28),n=Object(r.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"blade-file-tracer"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#blade-file-tracer"}},[t._v("#")]),t._v(" Blade file tracer")]),t._v(" "),a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#introduction"}},[t._v("Introduction")])]),a("li",[a("a",{attrs:{href:"#configuration"}},[t._v("Configuration")])])])]),a("p"),t._v(" "),a("h2",{attrs:{id:"introduction"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[t._v("#")]),t._v(" Introduction")]),t._v(" "),a("p",[t._v("When you want to change or create a theme it can become difficult to find out which part contains the code that you need to work on."),a("br"),t._v("\nThis is why we added the blade file tracer as it will help developers, contributors & partners who deal with Bagisto to find the blade file of the templates/views and understand the structure of the project.")]),t._v(" "),a("h2",{attrs:{id:"configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configuration"}},[t._v("#")]),t._v(" Configuration")]),t._v(" "),a("p",[t._v("Let’s start to make this easier with just a simple config change."),a("br"),t._v("\nGo to your Bagisto root directory and open the file "),a("strong",[t._v("config/view.php")]),t._v(", inside this file change the "),a("code",[t._v("tracer")]),t._v(" value to "),a("code",[t._v("true")]),t._v(".")]),t._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[t._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*\n    |--------------------------------------------------------------------------\n    | Blade File Tracer\n    |--------------------------------------------------------------------------\n    |\n    | Shows blade file path in front\n    |\n    */")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'tracer'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])]),a("p",[t._v("Now return to your Bagisto root directory and run the following commands")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("php artisan view:clear\nphp artisan config:cache\n")])])]),a("p",[t._v("Now you are ready to visit your Storefront & Admin, you will see the blade file hint path in each block of your template.")])])}),[],!1,null,null,null);e.default=n.exports}}]);