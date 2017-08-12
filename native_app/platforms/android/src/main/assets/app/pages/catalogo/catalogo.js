"use strict";
var BasePage_1 = require("../../shared/BasePage");
var observable_1 = require("data/observable");
var vm = new observable_1.Observable();
var CatalogoPage = (function (_super) {
    __extends(CatalogoPage, _super);
    function CatalogoPage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CatalogoPage.prototype.loaded = function (args) {
        var page = args.object;
        vm.set("selectedPage", "catalogo");
        page.bindingContext = vm;
    };
    return CatalogoPage;
}(BasePage_1.BasePage));
;
module.exports = new CatalogoPage();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2F0YWxvZ28uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjYXRhbG9nby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsa0RBQStDO0FBQy9DLDhDQUFzRDtBQUd0RCxJQUFJLEVBQUUsR0FBRyxJQUFJLHVCQUFVLEVBQUUsQ0FBQztBQUMxQjtJQUEyQixnQ0FBUTtJQUFuQzs7SUFNQSxDQUFDO0lBTEcsNkJBQU0sR0FBTixVQUFPLElBQWM7UUFDakIsSUFBSSxJQUFJLEdBQVMsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUM3QixFQUFFLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBRSxVQUFVLENBQUMsQ0FBQztRQUNuQyxJQUFJLENBQUMsY0FBYyxHQUFHLEVBQUUsQ0FBQztJQUM3QixDQUFDO0lBQ0wsbUJBQUM7QUFBRCxDQUFDLEFBTkQsQ0FBMkIsbUJBQVEsR0FNbEM7QUFBQSxDQUFDO0FBQ0YsaUJBQVMsSUFBSSxZQUFZLEVBQUUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QmFzZVBhZ2V9IGZyb20gXCIuLi8uLi9zaGFyZWQvQmFzZVBhZ2VcIjtcbmltcG9ydCB7T2JzZXJ2YWJsZSwgRXZlbnREYXRhfSBmcm9tIFwiZGF0YS9vYnNlcnZhYmxlXCI7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInVpL3BhZ2VcIjtcblxubGV0IHZtID0gbmV3IE9ic2VydmFibGUoKTtcbmNsYXNzIENhdGFsb2dvUGFnZSBleHRlbmRzIEJhc2VQYWdlIHtcbiAgICBsb2FkZWQoYXJnczpFdmVudERhdGEpe1xuICAgICAgICBsZXQgcGFnZSA9IDxQYWdlPmFyZ3Mub2JqZWN0O1xuICAgICAgICB2bS5zZXQoXCJzZWxlY3RlZFBhZ2VcIiwgXCJjYXRhbG9nb1wiKTtcbiAgICAgICAgcGFnZS5iaW5kaW5nQ29udGV4dCA9IHZtO1xuICAgIH1cbn07XG5leHBvcnQgPSBuZXcgQ2F0YWxvZ29QYWdlKCk7XG4iXX0=