"use strict";
var BasePage_1 = require("../../shared/BasePage");
var observable_1 = require("data/observable");
var web_view_1 = require("ui/web-view");
var vm = new observable_1.Observable();
var webView = new web_view_1.WebView();
var SettingsPage = (function (_super) {
    __extends(SettingsPage, _super);
    function SettingsPage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SettingsPage.prototype.loaded = function (args) {
        var page = args.object;
        vm.set("blackBackground", false);
        vm.set("selectedPage", "geral");
        webView.src = "https://jprodrigues70.github.io/hackathon/ciclo.html";
        page.bindingContext = vm;
    };
    return SettingsPage;
}(BasePage_1.BasePage));
;
module.exports = new SettingsPage();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VyYWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJnZXJhbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsa0RBQStDO0FBQy9DLDhDQUFzRDtBQUV0RCx3Q0FBc0M7QUFFdEMsSUFBSSxFQUFFLEdBQUcsSUFBSSx1QkFBVSxFQUFFLENBQUM7QUFDMUIsSUFBSSxPQUFPLEdBQUcsSUFBSSxrQkFBTyxFQUFFLENBQUM7QUFFNUI7SUFBMkIsZ0NBQVE7SUFBbkM7O0lBUUEsQ0FBQztJQVBHLDZCQUFNLEdBQU4sVUFBTyxJQUFjO1FBQ2pCLElBQUksSUFBSSxHQUFTLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDN0IsRUFBRSxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUNqQyxFQUFFLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBRSxPQUFPLENBQUMsQ0FBQztRQUNoQyxPQUFPLENBQUMsR0FBRyxHQUFHLHNEQUFzRCxDQUFDO1FBQ3JFLElBQUksQ0FBQyxjQUFjLEdBQUcsRUFBRSxDQUFDO0lBQzdCLENBQUM7SUFDTCxtQkFBQztBQUFELENBQUMsQUFSRCxDQUEyQixtQkFBUSxHQVFsQztBQUFBLENBQUM7QUFDRixpQkFBUyxJQUFJLFlBQVksRUFBRSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtCYXNlUGFnZX0gZnJvbSBcIi4uLy4uL3NoYXJlZC9CYXNlUGFnZVwiO1xuaW1wb3J0IHtPYnNlcnZhYmxlLCBFdmVudERhdGF9IGZyb20gXCJkYXRhL29ic2VydmFibGVcIjtcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidWkvcGFnZVwiO1xuaW1wb3J0IHsgV2ViVmlldyB9IGZyb20gXCJ1aS93ZWItdmlld1wiO1xuXG5sZXQgdm0gPSBuZXcgT2JzZXJ2YWJsZSgpO1xubGV0IHdlYlZpZXcgPSBuZXcgV2ViVmlldygpO1xuXG5jbGFzcyBTZXR0aW5nc1BhZ2UgZXh0ZW5kcyBCYXNlUGFnZSB7XG4gICAgbG9hZGVkKGFyZ3M6RXZlbnREYXRhKXtcbiAgICAgICAgbGV0IHBhZ2UgPSA8UGFnZT5hcmdzLm9iamVjdDtcbiAgICAgICAgdm0uc2V0KFwiYmxhY2tCYWNrZ3JvdW5kXCIsIGZhbHNlKTtcbiAgICAgICAgdm0uc2V0KFwic2VsZWN0ZWRQYWdlXCIsIFwiZ2VyYWxcIik7XG4gICAgICAgIHdlYlZpZXcuc3JjID0gXCJodHRwczovL2pwcm9kcmlndWVzNzAuZ2l0aHViLmlvL2hhY2thdGhvbi9jaWNsby5odG1sXCI7XG4gICAgICAgIHBhZ2UuYmluZGluZ0NvbnRleHQgPSB2bTtcbiAgICB9XG59O1xuZXhwb3J0ID0gbmV3IFNldHRpbmdzUGFnZSgpO1xuIl19