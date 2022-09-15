"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createAPIEndpoint = exports.BASE_URL = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var BASE_URL = 'http://localhost:5060/';
exports.BASE_URL = BASE_URL;

var createAPIEndpoint = function createAPIEndpoint(endpoint) {
  var url = BASE_URL + 'api/' + endpoint + '/';
  return {
    fetch: function fetch() {
      return _axios["default"].get(url);
    },
    fetchById: function fetchById(id) {
      return _axios["default"].get(url + id);
    },
    post: function post(newRecord) {
      return _axios["default"].post(url, newRecord);
    },
    put: function put(id, updatedRecord) {
      return _axios["default"].put(url + id, updatedRecord);
    },
    "delete": function _delete(id) {
      return _axios["default"]["delete"](url + id);
    }
  };
};

exports.createAPIEndpoint = createAPIEndpoint;