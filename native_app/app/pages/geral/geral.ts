import {BasePage} from "../../shared/BasePage";
import {Observable, EventData} from "data/observable";
import { Page } from "ui/page";
import { WebView } from "ui/web-view";

let vm = new Observable();
let webView = new WebView();

class SettingsPage extends BasePage {
    loaded(args:EventData){
        let page = <Page>args.object;
        vm.set("blackBackground", false);
        vm.set("selectedPage", "geral");
        webView.src = "https://jprodrigues70.github.io/hackathon/ciclo.html";
        page.bindingContext = vm;
    }
};
export = new SettingsPage();
