"use strict";
var BasePage_1 = require("../../shared/BasePage");
var observable_1 = require("data/observable");
var vm = new observable_1.Observable();
var logo;
var HomePage = (function (_super) {
    __extends(HomePage, _super);
    function HomePage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HomePage.prototype.loaded = function (args) {
        vm.set("selectedPage", "home");
        vm.set("text", "Bem vinda, Tais!");
        var page = args.object;
        logo = page.getViewById("logo");
        page.bindingContext = vm;
    };
    HomePage.prototype.fun = function () {
        logo.animate({
            rotate: 3600,
            duration: 3000
        });
    };
    return HomePage;
}(BasePage_1.BasePage));
module.exports = new HomePage();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVyZmlsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicGVyZmlsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxrREFBK0M7QUFDL0MsOENBQXNEO0FBSXRELElBQUksRUFBRSxHQUFHLElBQUksdUJBQVUsRUFBRSxDQUFDO0FBQzFCLElBQUksSUFBVSxDQUFDO0FBQ2Y7SUFBdUIsNEJBQVE7SUFBL0I7O0lBY0EsQ0FBQztJQWJHLHlCQUFNLEdBQU4sVUFBTyxJQUFjO1FBQ2pCLEVBQUUsQ0FBQyxHQUFHLENBQUMsY0FBYyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQy9CLEVBQUUsQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLGtCQUFrQixDQUFDLENBQUM7UUFDbkMsSUFBSSxJQUFJLEdBQVMsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUM3QixJQUFJLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBUSxNQUFNLENBQUMsQ0FBQztRQUN2QyxJQUFJLENBQUMsY0FBYyxHQUFHLEVBQUUsQ0FBQztJQUM3QixDQUFDO0lBQ0Qsc0JBQUcsR0FBSDtRQUNJLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDVCxNQUFNLEVBQUUsSUFBSTtZQUNaLFFBQVEsRUFBRSxJQUFJO1NBQ2pCLENBQUMsQ0FBQztJQUNQLENBQUM7SUFDTCxlQUFDO0FBQUQsQ0FBQyxBQWRELENBQXVCLG1CQUFRLEdBYzlCO0FBQ0QsaUJBQVMsSUFBSSxRQUFRLEVBQUUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QmFzZVBhZ2V9IGZyb20gXCIuLi8uLi9zaGFyZWQvQmFzZVBhZ2VcIjtcbmltcG9ydCB7T2JzZXJ2YWJsZSwgRXZlbnREYXRhfSBmcm9tIFwiZGF0YS9vYnNlcnZhYmxlXCI7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInVpL3BhZ2VcIjtcbmltcG9ydCB7SW1hZ2V9IGZyb20gXCJ1aS9pbWFnZVwiO1xuXG5sZXQgdm0gPSBuZXcgT2JzZXJ2YWJsZSgpO1xubGV0IGxvZ286SW1hZ2U7XG5jbGFzcyBIb21lUGFnZSBleHRlbmRzIEJhc2VQYWdle1xuICAgIGxvYWRlZChhcmdzOkV2ZW50RGF0YSl7XG4gICAgICAgIHZtLnNldChcInNlbGVjdGVkUGFnZVwiLCBcImhvbWVcIik7XG4gICAgICAgIHZtLnNldChcInRleHRcIiwgXCJCZW0gdmluZGEsIFRhaXMhXCIpO1xuICAgICAgICBsZXQgcGFnZSA9IDxQYWdlPmFyZ3Mub2JqZWN0O1xuICAgICAgICBsb2dvID0gcGFnZS5nZXRWaWV3QnlJZDxJbWFnZT4oXCJsb2dvXCIpO1xuICAgICAgICBwYWdlLmJpbmRpbmdDb250ZXh0ID0gdm07XG4gICAgfVxuICAgIGZ1bigpe1xuICAgICAgICBsb2dvLmFuaW1hdGUoe1xuICAgICAgICAgICAgcm90YXRlOiAzNjAwLFxuICAgICAgICAgICAgZHVyYXRpb246IDMwMDBcbiAgICAgICAgfSk7XG4gICAgfVxufVxuZXhwb3J0ID0gbmV3IEhvbWVQYWdlKCk7XG4iXX0=