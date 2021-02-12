"use strict";
// automatically generated code, please do not change
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.AbstractFile = void 0;
var famix_mse_exporter_1 = require("../../famix_mse_exporter");
var entity_1 = require("./../famix/entity");
var AbstractFile = /** @class */ (function (_super) {
    __extends(AbstractFile, _super);
    function AbstractFile() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // @FameProperty(name = "name")
    AbstractFile.prototype.getName = function () {
        return this.abstractFileName;
    };
    AbstractFile.prototype.setName = function (abstractFileName) {
        this.abstractFileName = abstractFileName;
    };
    AbstractFile.prototype.getMSE = function () {
        var mse = new famix_mse_exporter_1.FamixMseExporter("FILE.AbstractFile", this);
        this.addPropertiesToExporter(mse);
        return mse.getMSE();
    };
    AbstractFile.prototype.addPropertiesToExporter = function (exporter) {
        _super.prototype.addPropertiesToExporter.call(this, exporter);
        exporter.addProperty("name", this.getName());
    };
    return AbstractFile;
}(entity_1.Entity));
exports.AbstractFile = AbstractFile;
