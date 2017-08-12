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
        vm.set("selectedPage", "rendimentos");
        var page = args.object;
        // logo = page.getViewById<Image>("logo");
        page.bindingContext = vm;
    };
    RendimentosPage.prototype.fun = function () {
        logo.animate({
            rotate: 3600,
            duration: 3000
        });
    };
    return RendimentosPage;
}(BasePage_1.BasePage));
module.exports = new RendimentosPage();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHV0b3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwcm9kdXRvcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsa0RBQStDO0FBQy9DLDhDQUFzRDtBQUl0RCxJQUFJLEVBQUUsR0FBRyxJQUFJLHVCQUFVLEVBQUUsQ0FBQztBQUMxQixJQUFJLElBQVUsQ0FBQztBQUNmO0lBQThCLG1DQUFRO0lBQXRDOztJQWFBLENBQUM7SUFaRyxnQ0FBTSxHQUFOLFVBQU8sSUFBYztRQUNqQixFQUFFLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBRSxhQUFhLENBQUMsQ0FBQztRQUN0QyxJQUFJLElBQUksR0FBUyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQzdCLDBDQUEwQztRQUMxQyxJQUFJLENBQUMsY0FBYyxHQUFHLEVBQUUsQ0FBQztJQUM3QixDQUFDO0lBQ0QsNkJBQUcsR0FBSDtRQUNJLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDVCxNQUFNLEVBQUUsSUFBSTtZQUNaLFFBQVEsRUFBRSxJQUFJO1NBQ2pCLENBQUMsQ0FBQztJQUNQLENBQUM7SUFDTCxzQkFBQztBQUFELENBQUMsQUFiRCxDQUE4QixtQkFBUSxHQWFyQztBQUNELGlCQUFTLElBQUksZUFBZSxFQUFFLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0Jhc2VQYWdlfSBmcm9tIFwiLi4vLi4vc2hhcmVkL0Jhc2VQYWdlXCI7XG5pbXBvcnQge09ic2VydmFibGUsIEV2ZW50RGF0YX0gZnJvbSBcImRhdGEvb2JzZXJ2YWJsZVwiO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ1aS9wYWdlXCI7XG5pbXBvcnQge0ltYWdlfSBmcm9tIFwidWkvaW1hZ2VcIjtcblxubGV0IHZtID0gbmV3IE9ic2VydmFibGUoKTtcbmxldCBsb2dvOkltYWdlO1xuY2xhc3MgUmVuZGltZW50b3NQYWdlIGV4dGVuZHMgQmFzZVBhZ2V7XG4gICAgbG9hZGVkKGFyZ3M6RXZlbnREYXRhKXtcbiAgICAgICAgdm0uc2V0KFwic2VsZWN0ZWRQYWdlXCIsIFwicmVuZGltZW50b3NcIik7XG4gICAgICAgIGxldCBwYWdlID0gPFBhZ2U+YXJncy5vYmplY3Q7XG4gICAgICAgIC8vIGxvZ28gPSBwYWdlLmdldFZpZXdCeUlkPEltYWdlPihcImxvZ29cIik7XG4gICAgICAgIHBhZ2UuYmluZGluZ0NvbnRleHQgPSB2bTtcbiAgICB9XG4gICAgZnVuKCl7XG4gICAgICAgIGxvZ28uYW5pbWF0ZSh7XG4gICAgICAgICAgICByb3RhdGU6IDM2MDAsXG4gICAgICAgICAgICBkdXJhdGlvbjogMzAwMFxuICAgICAgICB9KTtcbiAgICB9XG59XG5leHBvcnQgPSBuZXcgUmVuZGltZW50b3NQYWdlKCk7XG4iXX0=