(function(){"use strict";var e={603:function(e,t,a){var n=a(5471),i=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[t("h1",{staticStyle:{color:"#000"}},[e._v("Telephone Country Select")]),t("h2",{staticStyle:{color:"#000"}},[e._v("made with ❤ by Mon.")]),t("div",{staticStyle:{margin:"20px auto"}},[t("vue-country-dropdown",{attrs:{disabledFetchingCountry:!0,defaultCountryByAreaCode:90,immediateCallSelectEvent:!0,enabledFlags:!0,enabledCountryCode:!0,showNameInput:!0,showNotSelectedOption:!0,notSelectedOptionText:"Not Selected"},on:{onSelect:e.onSelect}})],1),t("div",[t("code",{staticStyle:{color:"#000"}},[e._v(e._s(e.selectedCountry))])])])},o=[],s=function(){var e=this,t=e._self._c;return t("div",{staticClass:"vue-country-select",class:{disabled:e.disabled}},[t("div",{directives:[{name:"click-outside",rawName:"v-click-outside",value:e.clickedOutside,expression:"clickedOutside"}],staticClass:"dropdown",class:{open:e.open},attrs:{tabindex:"0"},on:{click:e.toggleDropdown,keydown:[e.keyboardNav,function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"esc",27,t.key,["Esc","Escape"])?null:e.reset.apply(null,arguments)}]}},[t("span",{staticClass:"current"},[e.enabledFlags?t("div",{staticClass:"vti__flag",class:e.activeCountry&&e.activeCountry.iso2?e.activeCountry.iso2.toLowerCase():null}):e._e(),e.enabledCountryCode?t("span",{staticClass:"country-code",style:{width:e.showNameInput?"auto":"100%"},domProps:{textContent:e._s(e.activeCountry&&e.activeCountry.dialCode?` +${e.activeCountry.dialCode}`:null)}}):e._e(),e.showNameInput?t("span",{staticClass:"country-name",style:{width:e.showNameInput?"100%":"auto"}},[e._v(" "+e._s(e.activeCountry&&e.activeCountry.name?e.activeCountry.name:null)+" ")]):e._e(),t("span",{staticClass:"dropdown-arrow"},[e._v(e._s(e.open?"▲":"▼"))])]),t("ul",{directives:[{name:"show",rawName:"v-show",value:e.open,expression:"open"}],ref:"list",staticClass:"dropdown-list"},e._l(e.sortedCountries,(function(a,n){return t("li",{key:a.iso2+(a.preferred?"-preferred":""),staticClass:"dropdown-item",class:e.getItemClass(n,a.iso2),on:{click:function(t){return e.choose(a)},mousemove:function(t){e.selectedIndex=n}}},[e.enabledFlags?t("div",{staticClass:"vti__flag",class:a.iso2&&a.iso2.toLowerCase()}):e._e(),t("strong",{domProps:{textContent:e._s(a.name)}}),e.dropdownOptions&&!e.dropdownOptions.disabledDialCode?t("span",{domProps:{textContent:e._s(a.dialCode&&` +${a.dialCode}`)}}):e._e()])})),0)])])},r=[];a(8111),a(2489),a(116),a(1701);const l=[["Not Selected","",""],["Afghanistan (‫افغانستان‬‎)","af","93"],["Albania (Shqipëri)","al","355"],["Algeria (‫الجزائر‬‎)","dz","213"],["American Samoa","as","1684"],["Andorra","ad","376"],["Angola","ao","244"],["Anguilla","ai","1264"],["Antigua and Barbuda","ag","1268"],["Argentina","ar","54"],["Armenia (Հայաստան)","am","374"],["Aruba","aw","297"],["Australia","au","61",0],["Austria (Österreich)","at","43"],["Azerbaijan (Azərbaycan)","az","994"],["Bahamas","bs","1242"],["Bahrain (‫البحرين‬‎)","bh","973"],["Bangladesh (বাংলাদেশ)","bd","880"],["Barbados","bb","1246"],["Belarus (Беларусь)","by","375"],["Belgium (België)","be","32"],["Belize","bz","501"],["Benin (Bénin)","bj","229"],["Bermuda","bm","1441"],["Bhutan (འབྲུག)","bt","975"],["Bolivia","bo","591"],["Bosnia and Herzegovina (Босна и Херцеговина)","ba","387"],["Botswana","bw","267"],["Brazil (Brasil)","br","55"],["British Indian Ocean Territory","io","246"],["British Virgin Islands","vg","1284"],["Brunei","bn","673"],["Bulgaria (България)","bg","359"],["Burkina Faso","bf","226"],["Burundi (Uburundi)","bi","257"],["Cambodia (កម្ពុជា)","kh","855"],["Cameroon (Cameroun)","cm","237"],["Canada","ca","1",1,["204","226","236","249","250","289","306","343","365","387","403","416","418","431","437","438","450","506","514","519","548","579","581","587","604","613","639","647","672","705","709","742","778","780","782","807","819","825","867","873","902","905"]],["Cape Verde (Kabu Verdi)","cv","238"],["Caribbean Netherlands","bq","599",1],["Cayman Islands","ky","1345"],["Central African Republic (République centrafricaine)","cf","236"],["Chad (Tchad)","td","235"],["Chile","cl","56"],["China (中国)","cn","86"],["Christmas Island","cx","61",2],["Cocos (Keeling) Islands","cc","61",1],["Colombia","co","57"],["Comoros (‫جزر القمر‬‎)","km","269"],["Congo (DRC) (Jamhuri ya Kidemokrasia ya Kongo)","cd","243"],["Congo (Republic) (Congo-Brazzaville)","cg","242"],["Cook Islands","ck","682"],["Costa Rica","cr","506"],["Côte d’Ivoire","ci","225"],["Croatia (Hrvatska)","hr","385"],["Cuba","cu","53"],["Curaçao","cw","599",0],["Cyprus (Κύπρος)","cy","357"],["Czech Republic (Česká republika)","cz","420"],["Denmark (Danmark)","dk","45"],["Djibouti","dj","253"],["Dominica","dm","1767"],["Dominican Republic (República Dominicana)","do","1",2,["809","829","849"]],["Ecuador","ec","593"],["Egypt (‫مصر‬‎)","eg","20"],["El Salvador","sv","503"],["Equatorial Guinea (Guinea Ecuatorial)","gq","240"],["Eritrea","er","291"],["Estonia (Eesti)","ee","372"],["Ethiopia","et","251"],["Falkland Islands (Islas Malvinas)","fk","500"],["Faroe Islands (Føroyar)","fo","298"],["Fiji","fj","679"],["Finland (Suomi)","fi","358",0],["France","fr","33"],["French Guiana (Guyane française)","gf","594"],["French Polynesia (Polynésie française)","pf","689"],["Gabon","ga","241"],["Gambia","gm","220"],["Georgia (საქართველო)","ge","995"],["Germany (Deutschland)","de","49"],["Ghana (Gaana)","gh","233"],["Gibraltar","gi","350"],["Greece (Ελλάδα)","gr","30"],["Greenland (Kalaallit Nunaat)","gl","299"],["Grenada","gd","1473"],["Guadeloupe","gp","590",0],["Guam","gu","1671"],["Guatemala","gt","502"],["Guernsey","gg","44",1],["Guinea (Guinée)","gn","224"],["Guinea-Bissau (Guiné Bissau)","gw","245"],["Guyana","gy","592"],["Haiti","ht","509"],["Honduras","hn","504"],["Hong Kong (香港)","hk","852"],["Hungary (Magyarország)","hu","36"],["Iceland (Ísland)","is","354"],["India (भारत)","in","91"],["Indonesia","id","62"],["Iran (‫ایران‬‎)","ir","98"],["Iraq (‫العراق‬‎)","iq","964"],["Ireland","ie","353"],["Isle of Man","im","44",2],["Israel (‫ישראל‬‎)","il","972"],["Italy (Italia)","it","39",0],["Jamaica","jm","1876"],["Japan (日本)","jp","81"],["Jersey","je","44",3],["Jordan (‫الأردن‬‎)","jo","962"],["Kazakhstan (Казахстан)","kz","7",1],["Kenya","ke","254"],["Kiribati","ki","686"],["Kosovo","xk","383"],["Kuwait (‫الكويت‬‎)","kw","965"],["Kyrgyzstan (Кыргызстан)","kg","996"],["Laos (ລາວ)","la","856"],["Latvia (Latvija)","lv","371"],["Lebanon (‫لبنان‬‎)","lb","961"],["Lesotho","ls","266"],["Liberia","lr","231"],["Libya (‫ليبيا‬‎)","ly","218"],["Liechtenstein","li","423"],["Lithuania (Lietuva)","lt","370"],["Luxembourg","lu","352"],["Macau (澳門)","mo","853"],["Macedonia (FYROM) (Македонија)","mk","389"],["Madagascar (Madagasikara)","mg","261"],["Malawi","mw","265"],["Malaysia","my","60"],["Maldives","mv","960"],["Mali","ml","223"],["Malta","mt","356"],["Marshall Islands","mh","692"],["Martinique","mq","596"],["Mauritania (‫موريتانيا‬‎)","mr","222"],["Mauritius (Moris)","mu","230"],["Mayotte","yt","262",1],["Mexico (México)","mx","52"],["Micronesia","fm","691"],["Moldova (Republica Moldova)","md","373"],["Monaco","mc","377"],["Mongolia (Монгол)","mn","976"],["Montenegro (Crna Gora)","me","382"],["Montserrat","ms","1664"],["Morocco (‫المغرب‬‎)","ma","212",0],["Mozambique (Moçambique)","mz","258"],["Myanmar (Burma) (မြန်မာ)","mm","95"],["Namibia (Namibië)","na","264"],["Nauru","nr","674"],["Nepal (नेपाल)","np","977"],["Netherlands (Nederland)","nl","31"],["New Caledonia (Nouvelle-Calédonie)","nc","687"],["New Zealand","nz","64"],["Nicaragua","ni","505"],["Niger (Nijar)","ne","227"],["Nigeria","ng","234"],["Niue","nu","683"],["Norfolk Island","nf","672"],["North Korea (조선 민주주의 인민 공화국)","kp","850"],["Northern Mariana Islands","mp","1670"],["Norway (Norge)","no","47",0],["Oman (‫عُمان‬‎)","om","968"],["Pakistan (‫پاکستان‬‎)","pk","92"],["Palau","pw","680"],["Palestine (‫فلسطين‬‎)","ps","970"],["Panama (Panamá)","pa","507"],["Papua New Guinea","pg","675"],["Paraguay","py","595"],["Peru (Perú)","pe","51"],["Philippines","ph","63"],["Poland (Polska)","pl","48"],["Portugal","pt","351"],["Puerto Rico","pr","1",3,["787","939"]],["Qatar (‫قطر‬‎)","qa","974"],["Réunion (La Réunion)","re","262",0],["Romania (România)","ro","40"],["Russia (Россия)","ru","7",0],["Rwanda","rw","250"],["Saint Barthélemy","bl","590",1],["Saint Helena","sh","290"],["Saint Kitts and Nevis","kn","1869"],["Saint Lucia","lc","1758"],["Saint Martin (Saint-Martin (partie française))","mf","590",2],["Saint Pierre and Miquelon (Saint-Pierre-et-Miquelon)","pm","508"],["Saint Vincent and the Grenadines","vc","1784"],["Samoa","ws","685"],["San Marino","sm","378"],["São Tomé and Príncipe (São Tomé e Príncipe)","st","239"],["Saudi Arabia (‫المملكة العربية السعودية‬‎)","sa","966"],["Senegal (Sénégal)","sn","221"],["Serbia (Србија)","rs","381"],["Seychelles","sc","248"],["Sierra Leone","sl","232"],["Singapore","sg","65"],["Sint Maarten","sx","1721"],["Slovakia (Slovensko)","sk","421"],["Slovenia (Slovenija)","si","386"],["Solomon Islands","sb","677"],["Somalia (Soomaaliya)","so","252"],["South Africa","za","27"],["South Korea (대한민국)","kr","82"],["South Sudan (‫جنوب السودان‬‎)","ss","211"],["Spain (España)","es","34"],["Sri Lanka (ශ්‍රී ලංකාව)","lk","94"],["Sudan (‫السودان‬‎)","sd","249"],["Suriname","sr","597"],["Svalbard and Jan Mayen","sj","47",1],["Swaziland","sz","268"],["Sweden (Sverige)","se","46"],["Switzerland (Schweiz)","ch","41"],["Syria (‫سوريا‬‎)","sy","963"],["Taiwan (台灣)","tw","886"],["Tajikistan","tj","992"],["Tanzania","tz","255"],["Thailand (ไทย)","th","66"],["Timor-Leste","tl","670"],["Togo","tg","228"],["Tokelau","tk","690"],["Tonga","to","676"],["Trinidad and Tobago","tt","1868"],["Tunisia (‫تونس‬‎)","tn","216"],["Turkey (Türkiye)","tr","90"],["Turkmenistan","tm","993"],["Turks and Caicos Islands","tc","1649"],["Tuvalu","tv","688"],["U.S. Virgin Islands","vi","1340"],["Uganda","ug","256"],["Ukraine (Україна)","ua","380"],["United Arab Emirates (‫الإمارات العربية المتحدة‬‎)","ae","971"],["United Kingdom","gb","44",0],["United States","us","1",0],["Uruguay","uy","598"],["Uzbekistan (Oʻzbekiston)","uz","998"],["Vanuatu","vu","678"],["Vatican City (Città del Vaticano)","va","39",1],["Venezuela","ve","58"],["Vietnam (Việt Nam)","vn","84"],["Wallis and Futuna (Wallis-et-Futuna)","wf","681"],["Western Sahara (‫الصحراء الغربية‬‎)","eh","212",1],["Yemen (‫اليمن‬‎)","ye","967"],["Zambia","zm","260"],["Zimbabwe","zw","263"],["Åland Islands","ax","358",1]];var d=l.map((([e,t,a])=>({name:e,iso2:t&&t.toUpperCase(),dialCode:a})));const u=()=>fetch("https://ip2c.org/s").then((e=>e.text())).then((e=>{const t=(e||"").toString();return t&&"1"===t[0]||console.warn("unable to fetch the country"),t.substr(2,2)}));var c=u,h={name:"vue-country-code",props:{disabledFetchingCountry:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},disabledFormatting:{type:Boolean,default:!1},defaultCountry:{type:String,default:""},defaultCountryByAreaCode:{type:Number,default:0},enabledCountryCode:{type:Boolean,default:!1},enabledFlags:{type:Boolean,default:!0},preferredCountries:{type:Array,default:()=>[]},onlyCountries:{type:Array,default:()=>[]},ignoredCountries:{type:Array,default:()=>[]},dropdownOptions:{type:Object,default:()=>({})},selectedCountryCode:{type:Boolean,default:!1},immediateCallSelectEvent:{type:Boolean,default:!0},showNotSelectedOption:{type:Boolean,default:!1},notSelectedOptionText:{type:String,default:""},showNameInput:{type:Boolean,default:!1}},mounted(){this.initializeCountry(),this.immediateCallSelectEvent&&this.$emit("onSelect",this.activeCountry)},data(){return{activeCountry:{iso2:""},open:!1,manualTrigger:!1,selectedIndex:null,typeToFindInput:"",typeToFindTimer:null}},computed:{filteredCountries(){return this.onlyCountries.length?this.getCountries(this.onlyCountries):this.ignoredCountries.length?d.filter((({iso2:e})=>!this.ignoredCountries.includes(e.toUpperCase())&&!this.ignoredCountries.includes(e.toLowerCase()))):(this.showNotSelectedOption?""!==this.notSelectedOptionText&&(d[0].name=this.notSelectedOptionText):d.shift(),d)},sortedCountries(){const e=this.getCountries(this.preferredCountries).map((e=>({...e,preferred:!0})));return[...e,...this.filteredCountries]}},watch:{defaultCountry(e){const t=this.findCountry(e);this.choose(t)},defaultCountryByAreaCode(e){const t=this.findCountryByAreaCode(e);this.choose(t)}},methods:{initializeCountry(){if(this.defaultCountry){const e=this.findCountry(this.defaultCountry);if(e)return void(this.activeCountry=e)}if(this.defaultCountryByAreaCode){const e=this.findCountryByAreaCode(this.defaultCountryByAreaCode);if(e)return void(this.activeCountry=e)}this.activeCountry=this.findCountry(this.preferredCountries[0])||this.filteredCountries[0],this.disabledFetchingCountry||c().then((e=>{this.choose(this.findCountry(e)||this.activeCountry)}))},getCountries(e=[]){return e.map((e=>this.findCountry(e))).filter(Boolean)},findCountry(e=""){return d.find((t=>t.iso2===e.toUpperCase()))},findCountryByAreaCode(e=0){return d.find((t=>t.dialCode===e.toString()))},getItemClass(e,t){const a=this.selectedIndex===e,n=e===this.preferredCountries.length-1,i=!!~this.preferredCountries.map((e=>e.toUpperCase())).indexOf(t);return{highlighted:a,"last-preferred":n,preferred:i}},choose(e){this.activeCountry=e,this.$emit("onSelect",this.activeCountry)},toggleDropdown(){this.disabled||(this.open=!this.open)},manualDropdown(){this.disabled||(this.manualTrigger=!0,this.open=!0)},clickedOutside(){this.manualTrigger?this.manualTrigger=!1:this.open=!1},keyboardNav(e){if(40===e.keyCode){this.open=!0,null===this.selectedIndex?this.selectedIndex=0:this.selectedIndex=Math.min(this.sortedCountries.length-1,this.selectedIndex+1);let e=this.$refs.list.children[this.selectedIndex];e.offsetTop+e.clientHeight>this.$refs.list.scrollTop+this.$refs.list.clientHeight&&(this.$refs.list.scrollTop=e.offsetTop-this.$refs.list.clientHeight+e.clientHeight)}else if(38===e.keyCode){this.open=!0,null===this.selectedIndex?this.selectedIndex=this.sortedCountries.length-1:this.selectedIndex=Math.max(0,this.selectedIndex-1);let e=this.$refs.list.children[this.selectedIndex];e.offsetTop<this.$refs.list.scrollTop&&(this.$refs.list.scrollTop=e.offsetTop)}else if(13===e.keyCode)null!==this.selectedIndex&&this.choose(this.sortedCountries[this.selectedIndex]),this.open=!this.open;else{this.typeToFindInput+=e.key,clearTimeout(this.typeToFindTimer),this.typeToFindTimer=setTimeout((()=>{this.typeToFindInput=""}),700);let t=this.sortedCountries.slice(this.preferredCountries.length).findIndex((e=>e.name.toLowerCase().startsWith(this.typeToFindInput)));if(~t){this.selectedIndex=this.preferredCountries.length+t;let e=this.$refs.list.children[this.selectedIndex];(e.offsetTop<this.$refs.list.scrollTop||e.offsetTop+e.clientHeight>this.$refs.list.scrollTop+this.$refs.list.clientHeight)&&(this.$refs.list.scrollTop=e.offsetTop-this.$refs.list.clientHeight/2)}}},reset(){this.selectedIndex=this.sortedCountries.map((e=>e.iso2)).indexOf(this.activeCountry.iso2),this.open=!1}},directives:{"click-outside":{bind:function(e,t,a){if("function"!==typeof t.value){var n=a.context.name,i="[Vue-click-outside:] provided expression "+t.expression+" is not a function, but has to be";n&&(i+="Found in component "+n),console.warn(i)}var o=t.modifiers.bubble,s=function(a){(o||!e.contains(a.target)&&e!==a.target)&&t.value(a)};e.__vueClickOutside__=s,document.addEventListener("click",s)},unbind:function(e){document.removeEventListener("click",e.__vueClickOutside__),e.__vueClickOutside__=null}}}},p=h,f=a(1656),y=(0,f.A)(p,s,r,!1,null,null,null),m=y.exports,C={name:"app",components:{VueCountryDropdown:m},data(){return{selectedCountry:null}},methods:{onSelect(e){this.selectedCountry=e}}},g=C,v=(0,f.A)(g,i,o,!1,null,null,null),b=v.exports;n.Ay.config.productionTip=!1,new n.Ay({render:e=>e(b)}).$mount("#app")}},t={};function a(n){var i=t[n];if(void 0!==i)return i.exports;var o=t[n]={exports:{}};return e[n].call(o.exports,o,o.exports,a),o.exports}a.m=e,function(){var e=[];a.O=function(t,n,i,o){if(!n){var s=1/0;for(u=0;u<e.length;u++){n=e[u][0],i=e[u][1],o=e[u][2];for(var r=!0,l=0;l<n.length;l++)(!1&o||s>=o)&&Object.keys(a.O).every((function(e){return a.O[e](n[l])}))?n.splice(l--,1):(r=!1,o<s&&(s=o));if(r){e.splice(u--,1);var d=i();void 0!==d&&(t=d)}}return t}o=o||0;for(var u=e.length;u>0&&e[u-1][2]>o;u--)e[u]=e[u-1];e[u]=[n,i,o]}}(),function(){a.d=function(e,t){for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={524:0};a.O.j=function(t){return 0===e[t]};var t=function(t,n){var i,o,s=n[0],r=n[1],l=n[2],d=0;if(s.some((function(t){return 0!==e[t]}))){for(i in r)a.o(r,i)&&(a.m[i]=r[i]);if(l)var u=l(a)}for(t&&t(n);d<s.length;d++)o=s[d],a.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return a.O(u)},n=self["webpackChunkvue_country_dropdown"]=self["webpackChunkvue_country_dropdown"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=a.O(void 0,[504],(function(){return a(603)}));n=a.O(n)})();
//# sourceMappingURL=app.6e9b583b.js.map