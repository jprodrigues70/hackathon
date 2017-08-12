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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImhvbWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLGtEQUErQztBQUMvQyw4Q0FBc0Q7QUFJdEQsSUFBSSxFQUFFLEdBQUcsSUFBSSx1QkFBVSxFQUFFLENBQUM7QUFDMUIsSUFBSSxJQUFVLENBQUM7QUFDZjtJQUF1Qiw0QkFBUTtJQUEvQjs7SUFjQSxDQUFDO0lBYkcseUJBQU0sR0FBTixVQUFPLElBQWM7UUFDakIsRUFBRSxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDL0IsRUFBRSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztRQUNuQyxJQUFJLElBQUksR0FBUyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQzdCLElBQUksR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFRLE1BQU0sQ0FBQyxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxjQUFjLEdBQUcsRUFBRSxDQUFDO0lBQzdCLENBQUM7SUFDRCxzQkFBRyxHQUFIO1FBQ0ksSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUNULE1BQU0sRUFBRSxJQUFJO1lBQ1osUUFBUSxFQUFFLElBQUk7U0FDakIsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUNMLGVBQUM7QUFBRCxDQUFDLEFBZEQsQ0FBdUIsbUJBQVEsR0FjOUI7QUFDRCxpQkFBUyxJQUFJLFFBQVEsRUFBRSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtCYXNlUGFnZX0gZnJvbSBcIi4uLy4uL3NoYXJlZC9CYXNlUGFnZVwiO1xuaW1wb3J0IHtPYnNlcnZhYmxlLCBFdmVudERhdGF9IGZyb20gXCJkYXRhL29ic2VydmFibGVcIjtcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidWkvcGFnZVwiO1xuaW1wb3J0IHtJbWFnZX0gZnJvbSBcInVpL2ltYWdlXCI7XG5cbmxldCB2bSA9IG5ldyBPYnNlcnZhYmxlKCk7XG5sZXQgbG9nbzpJbWFnZTtcbmNsYXNzIEhvbWVQYWdlIGV4dGVuZHMgQmFzZVBhZ2V7XG4gICAgbG9hZGVkKGFyZ3M6RXZlbnREYXRhKXtcbiAgICAgICAgdm0uc2V0KFwic2VsZWN0ZWRQYWdlXCIsIFwiaG9tZVwiKTtcbiAgICAgICAgdm0uc2V0KFwidGV4dFwiLCBcIkJlbSB2aW5kYSwgVGFpcyFcIik7XG4gICAgICAgIGxldCBwYWdlID0gPFBhZ2U+YXJncy5vYmplY3Q7XG4gICAgICAgIGxvZ28gPSBwYWdlLmdldFZpZXdCeUlkPEltYWdlPihcImxvZ29cIik7XG4gICAgICAgIHBhZ2UuYmluZGluZ0NvbnRleHQgPSB2bTtcbiAgICB9XG4gICAgZnVuKCl7XG4gICAgICAgIGxvZ28uYW5pbWF0ZSh7XG4gICAgICAgICAgICByb3RhdGU6IDM2MDAsXG4gICAgICAgICAgICBkdXJhdGlvbjogMzAwMFxuICAgICAgICB9KTtcbiAgICB9XG59XG5leHBvcnQgPSBuZXcgSG9tZVBhZ2UoKTtcbiJdfQ==