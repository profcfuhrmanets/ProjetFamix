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
exports.DereferencedInvocation = void 0;
var famix_mse_exporter_1 = require("../../famix_mse_exporter");
var invocation_1 = require("./../famix/invocation");
var DereferencedInvocation = /** @class */ (function (_super) {
    __extends(DereferencedInvocation, _super);
    function DereferencedInvocation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // oneMany.Getter
    // @FameProperty(name = "referencer", opposite = "dereferencedInvocations")
    DereferencedInvocation.prototype.getReferencer = function () {
        return this.dereferencedInvocationReferencer;
    };
    // oneMany.Setter
    DereferencedInvocation.prototype.setReferencer = function (newReferencer) {
        this.dereferencedInvocationReferencer = newReferencer;
        newReferencer.getDereferencedInvocations().add(this);
    };
    DereferencedInvocation.prototype.getMSE = function () {
        var mse = new famix_mse_exporter_1.FamixMseExporter("FAMIX.DereferencedInvocation", this);
        this.addPropertiesToExporter(mse);
        return mse.getMSE();
    };
    DereferencedInvocation.prototype.addPropertiesToExporter = function (exporter) {
        _super.prototype.addPropertiesToExporter.call(this, exporter);
        exporter.addProperty("referencer", this.getReferencer());
    };
    return DereferencedInvocation;
}(invocation_1.Invocation));
exports.DereferencedInvocation = DereferencedInvocation;
