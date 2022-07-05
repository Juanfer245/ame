(()=>{"use strict";var e={538:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0});var r=n(426),i=n(56),o=new r.CsvStringifierFactory,a=new i.CsvWriterFactory(o);t.createArrayCsvStringifier=function(e){return o.createArrayCsvStringifier(e)},t.createObjectCsvStringifier=function(e){return o.createObjectCsvStringifier(e)},t.createArrayCsvWriter=function(e){return a.createArrayCsvWriter(e)},t.createObjectCsvWriter=function(e){return a.createObjectCsvWriter(e)}},426:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0});var r=n(106),i=n(96),o=n(554),a=function(){function e(){}return e.prototype.createArrayCsvStringifier=function(e){var t=i.createFieldStringifier(e.fieldDelimiter,e.alwaysQuote);return new r.ArrayCsvStringifier(t,e.recordDelimiter,e.header)},e.prototype.createObjectCsvStringifier=function(e){var t=i.createFieldStringifier(e.fieldDelimiter,e.alwaysQuote);return new o.ObjectCsvStringifier(t,e.header,e.recordDelimiter,e.headerIdDelimiter)},e}();t.CsvStringifierFactory=a},912:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0});var n=["\n","\r\n"],r=function(){function e(e,t){void 0===t&&(t="\n"),this.fieldStringifier=e,this.recordDelimiter=t,function(e){if(-1===n.indexOf(e))throw new Error("Invalid record delimiter `"+e+"` is specified")}(t)}return e.prototype.getHeaderString=function(){var e=this.getHeaderRecord();return e?this.joinRecords([this.getCsvLine(e)]):null},e.prototype.stringifyRecords=function(e){var t=this,n=Array.from(e,(function(e){return t.getCsvLine(t.getRecordAsArray(e))}));return this.joinRecords(n)},e.prototype.getCsvLine=function(e){var t=this;return e.map((function(e){return t.fieldStringifier.stringify(e)})).join(this.fieldStringifier.fieldDelimiter)},e.prototype.joinRecords=function(e){return e.join(this.recordDelimiter)+this.recordDelimiter},e}();t.CsvStringifier=r},106:function(e,t,n){var r,i=this&&this.__extends||(r=function(e,t){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},r(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)});Object.defineProperty(t,"__esModule",{value:!0});var o=function(e){function t(t,n,r){var i=e.call(this,t,n)||this;return i.header=r,i}return i(t,e),t.prototype.getHeaderRecord=function(){return this.header},t.prototype.getRecordAsArray=function(e){return e},t}(n(912).CsvStringifier);t.ArrayCsvStringifier=o},554:function(e,t,n){var r,i=this&&this.__extends||(r=function(e,t){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},r(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)});Object.defineProperty(t,"__esModule",{value:!0});var o=n(912),a=n(585),s=function(e){function t(t,n,r,i){var o=e.call(this,t,r)||this;return o.header=n,o.headerIdDelimiter=i,o}return i(t,e),t.prototype.getHeaderRecord=function(){return this.isObjectHeader?this.header.map((function(e){return e.title})):null},t.prototype.getRecordAsArray=function(e){var t=this;return this.fieldIds.map((function(n){return t.getNestedValue(e,n)}))},t.prototype.getNestedValue=function(e,t){return this.headerIdDelimiter?t.split(this.headerIdDelimiter).reduce((function(e,t){return(e||{})[t]}),e):e[t]},Object.defineProperty(t.prototype,"fieldIds",{get:function(){return this.isObjectHeader?this.header.map((function(e){return e.id})):this.header},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"isObjectHeader",{get:function(){return a.isObject(this.header&&this.header[0])},enumerable:!0,configurable:!0}),t}(o.CsvStringifier);t.ObjectCsvStringifier=s},56:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0});var r=n(598),i=function(){function e(e){this.csvStringifierFactory=e}return e.prototype.createArrayCsvWriter=function(e){var t=this.csvStringifierFactory.createArrayCsvStringifier({header:e.header,fieldDelimiter:e.fieldDelimiter,recordDelimiter:e.recordDelimiter,alwaysQuote:e.alwaysQuote});return new r.CsvWriter(t,e.path,e.encoding,e.append)},e.prototype.createObjectCsvWriter=function(e){var t=this.csvStringifierFactory.createObjectCsvStringifier({header:e.header,fieldDelimiter:e.fieldDelimiter,recordDelimiter:e.recordDelimiter,headerIdDelimiter:e.headerIdDelimiter,alwaysQuote:e.alwaysQuote});return new r.CsvWriter(t,e.path,e.encoding,e.append)},e}();t.CsvWriterFactory=i},598:function(e,t,n){var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(i,o){function a(e){try{c(r.next(e))}catch(e){o(e)}}function s(e){try{c(r.throw(e))}catch(e){o(e)}}function c(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,s)}c((r=r.apply(e,t||[])).next())}))},i=this&&this.__generator||function(e,t){var n,r,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(o){return function(s){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,r=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!((i=(i=a.trys).length>0&&i[i.length-1])||6!==o[0]&&2!==o[0])){a=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){a.label=o[1];break}if(6===o[0]&&a.label<i[1]){a.label=i[1],i=o;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(o);break}i[2]&&a.ops.pop(),a.trys.pop();continue}o=t.call(e,a)}catch(e){o=[6,e],r=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,s])}}};Object.defineProperty(t,"__esModule",{value:!0});var o=n(582),a=function(){function e(e,t,n,r){void 0===r&&(r=!1),this.csvStringifier=e,this.append=r,this.fileWriter=new o.FileWriter(t,this.append,n)}return e.prototype.writeRecords=function(e){return r(this,void 0,void 0,(function(){var t,n;return i(this,(function(r){switch(r.label){case 0:return t=this.csvStringifier.stringifyRecords(e),n=this.headerString+t,[4,this.fileWriter.write(n)];case 1:return r.sent(),this.append=!0,[2]}}))}))},Object.defineProperty(e.prototype,"headerString",{get:function(){return!this.append&&this.csvStringifier.getHeaderString()||""},enumerable:!0,configurable:!0}),e}();t.CsvWriter=a},96:function(e,t){var n,r=this&&this.__extends||(n=function(e,t){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},n(e,t)},function(e,t){function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)});Object.defineProperty(t,"__esModule",{value:!0});var i=[",",";"],o=function(){function e(e){this.fieldDelimiter=e}return e.prototype.isEmpty=function(e){return null==e||""===e},e.prototype.quoteField=function(e){return'"'+e.replace(/"/g,'""')+'"'},e}();t.FieldStringifier=o;var a=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return r(t,e),t.prototype.stringify=function(e){if(this.isEmpty(e))return"";var t=String(e);return this.needsQuote(t)?this.quoteField(t):t},t.prototype.needsQuote=function(e){return e.includes(this.fieldDelimiter)||e.includes("\n")||e.includes('"')},t}(o),s=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return r(t,e),t.prototype.stringify=function(e){return this.isEmpty(e)?"":this.quoteField(String(e))},t}(o);t.createFieldStringifier=function(e,t){return void 0===e&&(e=","),void 0===t&&(t=!1),function(e){if(-1===i.indexOf(e))throw new Error("Invalid field delimiter `"+e+"` is specified")}(e),t?new s(e):new a(e)}},582:function(e,t,n){var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(i,o){function a(e){try{c(r.next(e))}catch(e){o(e)}}function s(e){try{c(r.throw(e))}catch(e){o(e)}}function c(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,s)}c((r=r.apply(e,t||[])).next())}))},i=this&&this.__generator||function(e,t){var n,r,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(o){return function(s){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,r=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!((i=(i=a.trys).length>0&&i[i.length-1])||6!==o[0]&&2!==o[0])){a=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){a.label=o[1];break}if(6===o[0]&&a.label<i[1]){a.label=i[1],i=o;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(o);break}i[2]&&a.ops.pop(),a.trys.pop();continue}o=t.call(e,a)}catch(e){o=[6,e],r=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,s])}}};Object.defineProperty(t,"__esModule",{value:!0});var o=n(918),a=n(147),s=o.promisify(a.writeFile),c=function(){function e(e,t,n){void 0===n&&(n="utf8"),this.path=e,this.append=t,this.encoding=n}return e.prototype.write=function(e){return r(this,void 0,void 0,(function(){return i(this,(function(t){switch(t.label){case 0:return[4,s(this.path,e,this.getWriteOption())];case 1:return t.sent(),this.append=!0,[2]}}))}))},e.prototype.getWriteOption=function(){return{encoding:this.encoding,flag:this.append?"a":"w"}},e}();t.FileWriter=c},585:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.isObject=function(e){return"[object Object]"===Object.prototype.toString.call(e)}},918:function(e,t){var n=this&&this.__spreadArrays||function(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;var r=Array(e),i=0;for(t=0;t<n;t++)for(var o=arguments[t],a=0,s=o.length;a<s;a++,i++)r[i]=o[a];return r};Object.defineProperty(t,"__esModule",{value:!0}),t.promisify=function(e){return function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];return new Promise((function(r,i){e.apply(null,n(t,[function(e,t){e?i(e):r(t)}]))}))}}},112:function(e,t,n){var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(i,o){function a(e){try{c(r.next(e))}catch(e){o(e)}}function s(e){try{c(r.throw(e))}catch(e){o(e)}}function c(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,s)}c((r=r.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.deactivate=t.activate=void 0;const i=n(496),o=n(867);t.activate=function(e){return r(this,void 0,void 0,(function*(){const t=i.extensions.getExtension("ms-dotnettools.vscode-dotnet-runtime");yield null==t?void 0:t.activate();const n=i.commands.registerCommand("ooxml-validator-vscode.validateOOXML",(e=>o.default.validate(e)));e.subscriptions.push(n)}))},t.deactivate=function(){}},376:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Header=void 0,t.Header=class{constructor(e){this.id=e.id,this.title=e.title}}},328:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})},498:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})},16:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})},725:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.ValidationError=void 0,t.ValidationError=class{constructor(e){var t,n,r,i;this.Id=e.Id,this.Description=e.Description,this.Namespaces=null===(t=e.Path)||void 0===t?void 0:t.Namespaces,this.NamespacesDefinitions=null===(n=e.Path)||void 0===n?void 0:n.NamespacesDefinitions,this.XPath=null===(r=e.Path)||void 0===r?void 0:r.XPath,this.PartUri=null===(i=e.Path)||void 0===i?void 0:i.PartUri,this.ErrorType=e.ErrorType}}},4:function(e,t,n){var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),i=this&&this.__exportStar||function(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||r(t,e,n)};Object.defineProperty(t,"__esModule",{value:!0}),i(n(376),t),i(n(328),t),i(n(498),t),i(n(16),t),i(n(725),t)},867:function(e,t,n){var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(i,o){function a(e){try{c(r.next(e))}catch(e){o(e)}}function s(e){try{c(r.throw(e))}catch(e){o(e)}}function c(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,s)}c((r=r.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.effEss=void 0;const i=n(81),o=n(538),a=n(17),s=n(837),c=n(496),l=n(4);t.effEss={createDirectory:c.workspace.fs.createDirectory,writeFile:c.workspace.fs.writeFile};class d{}t.default=d,d.createLogFile=(e,n)=>r(void 0,void 0,void 0,(function*(){let r=(0,a.normalize)(n),i=(0,a.extname)((0,a.basename)(r));if(".csv"!==i&&".json"!==i&&(r=`${r}.csv`,i=".csv"),(0,a.isAbsolute)(r)){if(yield t.effEss.createDirectory(c.Uri.file((0,a.dirname)(r))),c.workspace.getConfiguration("ooxml").get("overwriteLogFile")||(r=`${r.substring(0,r.length-i.length)}.${(new Date).toISOString().replaceAll(":","_")}${i}`),".json"===i){const n=new s.TextEncoder;yield t.effEss.writeFile(c.Uri.file(r),n.encode(JSON.stringify(e,null,2)))}else{const t=(0,o.createObjectCsvWriter)({path:r,header:Object.keys(e[0]).map((e=>new l.Header({id:e,title:e})))}),n=e.map((e=>{const t=Object.assign({},e);for(const[e,n]of Object.entries(t))t[e]=JSON.stringify(n,null,2);return t}));yield t.writeRecords(n)}return r}yield c.window.showErrorMessage("OOXML Validator\nooxml.outPutFilePath must be an absolute path")})),d.getWebviewContent=(e,t,n,r)=>{if(e&&e.length){let n="";return e.forEach((e=>{var t,r;n+=`<dl class="row">\n              <dt class="col-sm-3">Id</dt>\n              <dd class="col-sm-9">${e.Id}</dd>\n              <dt class="col-sm-3">Description</dt>\n              <dd class="col-sm-9">${null===(t=e.Description)||void 0===t?void 0:t.replace(/</g,"&lt;")}</dd>\n              <dt class="col-sm-3">XPath</dt>\n              <dd class="col-sm-9">\n                ${e.XPath}\n              </dd>\n              <dt class="col-sm-3">Part URI</dt>\n              <dd class="col-sm-9">${e.PartUri}</dd>\n              <dt class="col-sm-3">NamespacesDefinitions</dt>\n              <dd class="col-sm-9">\n                <ul>\n                  ${null===(r=e.NamespacesDefinitions)||void 0===r?void 0:r.map((e=>`<li>${e}</li>`)).join("")}\n                </ul>\n              </dd>\n            </dl>`})),`<!DOCTYPE html>\n        <html lang="en">\n        <head>\n            <meta charset="UTF-8">\n            <meta name="viewport" content="width=device-width, initial-scale=1.0">\n            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"></head>\n            <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"><\/script>\n            <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"><\/script>\n            <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"><\/script>\n            <style>\n              label#error-btn:after {\n                content:'View Errors';\n              }\n\n              [aria-expanded="true"] label#error-btn:after {\n                content:'Hide Errors';\n              }\n            </style>\n            <title>OOXML Validation Errors</title>\n            <body>\n              <div class="container-fluid pt-3 ol-3">\n              <div class="row pb-3">\n                <div class="col">\n                  <h1>There Were ${e.length} Validation Errors Found</h1>\n                  <h2>Validating against ${t}</h2>\n  ${r?`<h3>A log of these errors was saved as "${r}"</h3>`:'<h3>No log of these errors was saved.</h3><h4>Set "ooxml.outPutFilePath" in settings.json to save a log (csv or json) of the errors</h4>'}\n                </div>\n              </div>\n              <div class="row pb-3">\n                <div class="col">\n                <div class="btn-group-toggle"\n                  data-toggle="collapse"\n                  data-target="#collapseExample"\n                  aria-expanded="false"\n                  aria-controls="collapseExample"\n                >\n                  <label class="btn btn-outline-secondary" id="error-btn">\n                    <input\n                      class="btn btn-outline-secondary"\n                      type="checkbox"\n                      checked\n                    />\n                  </label>\n                  </div>\n                </div>\n              </div>\n              <div class="row pb-3">\n                <div class="col">\n                  <div class="collapse" id="collapseExample">\n                    <div class="card card-body">\n                      ${n}\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </body>\n        </html>`}return e&&!e.length?`<!DOCTYPE html>\n      <html lang="en">\n      <head>\n          <meta charset="UTF-8">\n          <meta name="viewport" content="width=device-width, initial-scale=1.0">\n          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"></head>\n          <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"><\/script>\n          <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"><\/script>\n          <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"><\/script>\n          <title>OOXML Validation Errors</title>\n          <body>\n            <div class="container pt-3 ol-3">\n              <div class="row">\n                <div class="col">\n                <div class="jumbotron">\n                <h1 class="display-4 text-center">No Errors Found!!</h1>\n                <h2>Validating Against ${t}</h2>\n                <p class="lead text-center">OOXML Validator did not find any validation errors in ${n}.</p>\n              </div>\n                </div>\n              </div>\n            </div>\n          </body>\n        </html>`:'<!DOCTYPE html>\n            <html lang="en">\n            <head>\n                <meta charset="UTF-8">\n                <meta name="viewport" content="width=device-width, initial-scale=1.0">\n                <style>\n                .container {\n                  display: -webkit-box;\n                  display: -ms-flexbox;\n                  display: flex;\n                  -webkit-box-align: center;\n                      -ms-flex-align: center;\n                          align-items: center;\n                  -webkit-box-pack: center;\n                      -ms-flex-pack: center;\n                          justify-content: center;\n                  min-height: 100vh;\n                  background-color: #ededed;\n                }\n\n                .loader {\n                  max-width: 15rem;\n                  width: 100%;\n                  height: auto;\n                  stroke-linecap: round;\n                }\n\n                circle {\n                  fill: none;\n                  stroke-width: 3.5;\n                  -webkit-animation-name: preloader;\n                          animation-name: preloader;\n                  -webkit-animation-duration: 3s;\n                          animation-duration: 3s;\n                  -webkit-animation-iteration-count: infinite;\n                          animation-iteration-count: infinite;\n                  -webkit-animation-timing-function: ease-in-out;\n                          animation-timing-function: ease-in-out;\n                  -webkit-transform-origin: 170px 170px;\n                          transform-origin: 170px 170px;\n                  will-change: transform;\n                }\n                circle:nth-of-type(1) {\n                  stroke-dasharray: 550;\n                }\n                circle:nth-of-type(2) {\n                  stroke-dasharray: 500;\n                }\n                circle:nth-of-type(3) {\n                  stroke-dasharray: 450;\n                }\n                circle:nth-of-type(4) {\n                  stroke-dasharray: 300;\n                }\n                circle:nth-of-type(1) {\n                  -webkit-animation-delay: -0.15s;\n                          animation-delay: -0.15s;\n                }\n                circle:nth-of-type(2) {\n                  -webkit-animation-delay: -0.3s;\n                          animation-delay: -0.3s;\n                }\n                circle:nth-of-type(3) {\n                  -webkit-animation-delay: -0.45s;\n                  -moz-animation-delay:  -0.45s;\n                          animation-delay: -0.45s;\n                }\n                circle:nth-of-type(4) {\n                  -webkit-animation-delay: -0.6s;\n                  -moz-animation-delay: -0.6s;\n                          animation-delay: -0.6s;\n                }\n\n                @-webkit-keyframes preloader {\n                  50% {\n                    -webkit-transform: rotate(360deg);\n                            transform: rotate(360deg);\n                  }\n                }\n\n                @keyframes preloader {\n                  50% {\n                    -webkit-transform: rotate(360deg);\n                            transform: rotate(360deg);\n                  }\n                }\n                </style>\n                <title>OOXML Validation Errors</title>\n            </head>\n            <body>\n            <div class="container">\n            <div style="display: block">\n              <div style="display: block">\n                 <h1>Validating OOXML File</h1>\n              </div>\n                  <svg class="loader" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 340 340">\n                    <circle cx="170" cy="170" r="160" stroke="#E2007C"/>\n                    <circle cx="170" cy="170" r="135" stroke="#404041"/>\n                    <circle cx="170" cy="170" r="110" stroke="#E2007C"/>\n                    <circle cx="170" cy="170" r="85" stroke="#404041"/>\n                  </svg>\n                </div>\n\n          </div>\n            </body>\n            </html>'},d.validate=e=>r(void 0,void 0,void 0,(function*(){var t,n;const r=c.window.createWebviewPanel("validateOOXML","OOXML Validate",c.ViewColumn.One,{enableScripts:!0});try{r.webview.html=d.getWebviewContent();const o=new Map;o.set("2007","Office2006"),o.set("2010","Office2010"),o.set("2013","Office2013"),o.set("2016","Office2016"),o.set("2019","Office2019"),o.set("2021","Office2021"),o.set("365","Microsoft365");const s=c.workspace.getConfiguration("ooxml").get("fileFormatVersion"),u=null==s?void 0:s.toString(),f=[...o.keys()],p=u&&f.includes(u)?o.get(u):[...o.values()].pop();yield c.commands.executeCommand("dotnet.showAcquisitionLog");const h="mikeebowen.ooxml-validator-vscode";let v=c.workspace.getConfiguration("ooxml").get("dotNetPath");if(!v&&(v=(yield c.commands.executeCommand("dotnet.acquire",{version:"3.1",requestingExtensionId:h})).dotnetPath,!v))throw new Error("Could not resolve the dotnet path!");const y=c.extensions.getExtension(h);if(!y)throw new Error("Could not find OOXML Validate extension.");const m=[(0,a.join)(y.extensionPath,"OOXMLValidator","OOXMLValidatorCLI.dll"),e.fsPath,p];yield c.commands.executeCommand("dotnet.ensureDotnetDependencies",{command:v,arguments:m});const g=(0,i.spawnSync)(v,m),b=null===(t=null==g?void 0:g.stderr)||void 0===t?void 0:t.toString();if((null==b?void 0:b.length)>0)return c.window.showErrorMessage(`Failed to run OOXML Validator. The error was:\n${b}`,{modal:!0}),void r.dispose();const w=null===(n=null==g?void 0:g.stdout)||void 0===n?void 0:n.toString(),O=JSON.parse(w).map((e=>new l.ValidationError(e)));let x;if(O.length){const t=c.workspace.getConfiguration("ooxml").get("outPutFilePath");let n;t&&(n=yield d.createLogFile(O,t)),x=d.getWebviewContent(O,p,(0,a.basename)(e.fsPath),n),r.webview.html=x}else x=d.getWebviewContent([],p,(0,a.basename)(e.fsPath)),r.webview.html=x}catch(e){let t=e.message||e;Object.values(e).some((e=>{const n=e.toString&&e.toString();if(n&&n.includes("dotnet."))return t='The ".NET Install Tool for Extension Authors" VS Code extensionMUST be installed\nor the ooxml.dotNetPath must be set to th absolute path to the .Net Runtime\nfor the OOXML Validator extension to work.',!0})),null==r||r.dispose(),yield c.window.showErrorMessage(t,{modal:!0})}}))},496:e=>{e.exports=require("vscode")},81:e=>{e.exports=require("child_process")},147:e=>{e.exports=require("fs")},17:e=>{e.exports=require("path")},837:e=>{e.exports=require("util")}},t={},n=function n(r){var i=t[r];if(void 0!==i)return i.exports;var o=t[r]={exports:{}};return e[r].call(o.exports,o,o.exports,n),o.exports}(112);module.exports=n})();