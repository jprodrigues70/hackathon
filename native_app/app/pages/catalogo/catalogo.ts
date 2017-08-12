import {BasePage} from "../../shared/BasePage";
import {Observable, EventData} from "data/observable";
import { Page } from "ui/page";

let vm = new Observable();
class CatalogoPage extends BasePage {
    loaded(args:EventData){
        let page = <Page>args.object;
        vm.set("selectedPage", "catalogo");
        page.bindingContext = vm;
    }
};
export = new CatalogoPage();
