import {BasePage} from "../../shared/BasePage";
import {Observable, EventData} from "data/observable";
import { Page } from "ui/page";
import {Image} from "ui/image";

let vm = new Observable();
let logo:Image;
class RendimentosPage extends BasePage{
    loaded(args:EventData){
        vm.set("selectedPage", "produtos");
        let page = <Page>args.object;
        page.bindingContext = vm;
    }
}
export = new RendimentosPage();
