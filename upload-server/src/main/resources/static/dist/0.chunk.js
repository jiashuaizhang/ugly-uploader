webpackJsonp([0],{

/***/ 43:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(45)

var Component = __webpack_require__(19)(
  /* script */
  __webpack_require__(44),
  /* template */
  __webpack_require__(46),
  /* scopeId */
  "data-v-e68d3418",
  /* cssModules */
  null
)
Component.options.__file = "E:\\代码\\个人工作区\\ugly-uploader\\upload-page\\src\\views\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-e68d3418", Component.options)
  } else {
    hotAPI.reload("data-v-e68d3418", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 44:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            formValidate: {
                destDir: 'F:\\temp\\upload',
                files: []
            },
            ruleValidate: {
                destDir: [{ required: false, pattern: '^[c-zC-Z]:(\\\\[^\\\\/:*?"<>|]+)*\\\\?$', message: '上传路径格式错误', trigger: 'blur' }]
            },
            loading: false,
            mainHeight: window.innerHeight - 50 + 'px'
        };
    },

    methods: {
        handleSubmit: function handleSubmit(name) {
            var _this = this;

            this.$refs[name].validate(function (valid) {
                if (valid) {
                    console.dir(_this.formValidate.files);
                    if (_this.formValidate.files.length == 0) {
                        _this.$Message.warning({
                            content: '请选择文件',
                            duration: 0,
                            closable: true
                        });
                        return;
                    }
                    _this.loading = true;
                    var params = new FormData();
                    params.append('destDir', _this.formValidate.destDir);
                    _this.formValidate.files.forEach(function (file) {
                        return params.append('files', file);
                    });
                    var config = {
                        headers: { 'Content-Type': 'multipart/form-data' }
                    };
                    _this.$http.post('upload', params, config).then(function (response) {
                        console.dir(response);
                        _this.loading = false;
                        _this.$Message.success({
                            content: '上传成功',
                            duration: 0,
                            closable: true
                        });
                    }).catch(function (error) {
                        console.dir(error);
                        _this.loading = false;
                        _this.$Message.error({
                            content: '上传失败，起来查bug',
                            duration: 0,
                            closable: true
                        });
                    });
                }
            });
        },
        handleUpload: function handleUpload(file) {
            this.formValidate.files.push(file);
            return false;
        },
        handleReset: function handleReset() {
            this.$refs['formValidate'].resetFields();
            this.formValidate.files = [];
        }
    }
});

/***/ }),

/***/ 45:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 46:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticStyle: {
      "background": "#eeeeee"
    }
  }, [_c('Spin', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.loading),
      expression: "loading"
    }],
    attrs: {
      "fix": ""
    }
  }, [_c('Icon', {
    staticClass: "demo-spin-icon-load",
    attrs: {
      "type": "ios-loading",
      "size": "18"
    }
  }), _vm._v(" "), _c('div', [_vm._v("上传中")])], 1), _vm._v(" "), _c('Row', {
    attrs: {
      "type": "flex",
      "justify": "center"
    }
  }, [_c('Col', {
    staticStyle: {
      "height": "50px"
    },
    attrs: {
      "span": "8"
    }
  })], 1), _vm._v(" "), _c('Row', {
    attrs: {
      "type": "flex",
      "justify": "center"
    }
  }, [_c('Col', {
    style: ({
      'height': _vm.mainHeight
    }),
    attrs: {
      "span": "20"
    }
  }, [_c('Layout', [_c('Content', {
    staticStyle: {
      "display": "flex",
      "justify-content": "center",
      "background": "#eeeeee"
    }
  }, [_c('Card', {
    staticClass: "Card"
  }, [_c('br'), _vm._v(" "), _c('h1', {
    staticStyle: {
      "text-align": "center",
      "font-size": "32px"
    }
  }, [_vm._v("难看的上传页")]), _vm._v(" "), _c('br'), _vm._v(" "), _c('div', {
    staticStyle: {
      "background-color": "#dddddd",
      "height": "2px"
    }
  }), _vm._v(" "), _c('br'), _vm._v(" "), _c('Form', {
    ref: "formValidate",
    staticClass: "Form",
    attrs: {
      "model": _vm.formValidate,
      "rules": _vm.ruleValidate,
      "label-width": 80
    }
  }, [_c('FormItem', {
    attrs: {
      "label": "上传路径",
      "prop": "destDir"
    }
  }, [_c('Input', {
    attrs: {
      "placeholder": "请输入上传路径"
    },
    model: {
      value: (_vm.formValidate.destDir),
      callback: function($$v) {
        _vm.$set(_vm.formValidate, "destDir", $$v)
      },
      expression: "formValidate.destDir"
    }
  })], 1), _vm._v(" "), _c('Row', [_c('Col', {
    attrs: {
      "span": "6.5"
    }
  }, [_c('label', {
    staticClass: "ivu-form-item-label",
    staticStyle: {
      "width": "80px"
    }
  }, [_vm._v("上传文件")])]), _vm._v(" "), _c('Col', {
    attrs: {
      "span": "17.5"
    }
  }, [_c('Upload', {
    attrs: {
      "multiple": "",
      "before-upload": _vm.handleUpload,
      "action": ""
    }
  }, [_c('Button', {
    attrs: {
      "icon": "ios-cloud-upload-outline"
    }
  }, [_vm._v("选择")])], 1)], 1)], 1), _vm._v(" "), _c('Card', {
    attrs: {
      "dis-hover": ""
    }
  }, _vm._l((_vm.formValidate.files), function(file) {
    return _c('div', [_vm._v(_vm._s(file.name))])
  }), 0), _vm._v(" "), _c('FormItem', [_c('Button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": function($event) {
        return _vm.handleSubmit('formValidate')
      }
    }
  }, [_vm._v("上传")]), _vm._v(" "), _c('Button', {
    staticStyle: {
      "margin-left": "8px"
    },
    on: {
      "click": function($event) {
        return _vm.handleReset()
      }
    }
  }, [_vm._v("重置")])], 1)], 1)], 1)], 1)], 1)], 1)], 1)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-e68d3418", module.exports)
  }
}

/***/ })

});
//# sourceMappingURL=0.chunk.js.map