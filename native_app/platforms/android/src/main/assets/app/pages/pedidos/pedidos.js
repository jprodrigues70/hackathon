"use strict";
var BasePage_1 = require("../../shared/BasePage");
var observable_1 = require("data/observable");
var vm = new observable_1.Observable();
var logo;
var RendimentosPage = (function (_super) {
    __extends(RendimentosPage, _super);
    function RendimentosPage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RendimentosPage.prototype.loaded = function (args) {
        vm.set("selectedPage", "pedidos");
        var page = args.object;
        page.bindingContext = vm;
    };
    return RendimentosPage;
}(BasePage_1.BasePage));
module.exports = new RendimentosPage();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVkaWRvcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInBlZGlkb3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLGtEQUErQztBQUMvQyw4Q0FBc0Q7QUFJdEQsSUFBSSxFQUFFLEdBQUcsSUFBSSx1QkFBVSxFQUFFLENBQUM7QUFDMUIsSUFBSSxJQUFVLENBQUM7QUFDZjtJQUE4QixtQ0FBUTtJQUF0Qzs7SUFNQSxDQUFDO0lBTEcsZ0NBQU0sR0FBTixVQUFPLElBQWM7UUFDakIsRUFBRSxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUUsU0FBUyxDQUFDLENBQUM7UUFDbEMsSUFBSSxJQUFJLEdBQVMsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUM3QixJQUFJLENBQUMsY0FBYyxHQUFHLEVBQUUsQ0FBQztJQUM3QixDQUFDO0lBQ0wsc0JBQUM7QUFBRCxDQUFDLEFBTkQsQ0FBOEIsbUJBQVEsR0FNckM7QUFDRCxpQkFBUyxJQUFJLGVBQWUsRUFBRSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtCYXNlUGFnZX0gZnJvbSBcIi4uLy4uL3NoYXJlZC9CYXNlUGFnZVwiO1xuaW1wb3J0IHtPYnNlcnZhYmxlLCBFdmVudERhdGF9IGZyb20gXCJkYXRhL29ic2VydmFibGVcIjtcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidWkvcGFnZVwiO1xuaW1wb3J0IHtJbWFnZX0gZnJvbSBcInVpL2ltYWdlXCI7XG5cbmxldCB2bSA9IG5ldyBPYnNlcnZhYmxlKCk7XG5sZXQgbG9nbzpJbWFnZTtcbmNsYXNzIFJlbmRpbWVudG9zUGFnZSBleHRlbmRzIEJhc2VQYWdle1xuICAgIGxvYWRlZChhcmdzOkV2ZW50RGF0YSl7XG4gICAgICAgIHZtLnNldChcInNlbGVjdGVkUGFnZVwiLCBcInBlZGlkb3NcIik7XG4gICAgICAgIGxldCBwYWdlID0gPFBhZ2U+YXJncy5vYmplY3Q7XG4gICAgICAgIHBhZ2UuYmluZGluZ0NvbnRleHQgPSB2bTtcbiAgICB9XG59XG5leHBvcnQgPSBuZXcgUmVuZGltZW50b3NQYWdlKCk7XG4iXX0=