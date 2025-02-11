import {BasePage} from "../../shared/BasePage";
import {Observable, EventData} from "data/observable";
import { Page } from "ui/page";
import {Image} from "ui/image";

let vm = new Observable();
let logo:Image;
class RendimentosPage extends BasePage{
    loaded(args:EventData){
        vm.set("selectedPage", "rendimentos");
        let page = <Page>args.object;
        // logo = page.getViewById<Image>("logo");
        page.bindingContext = vm;
    }
    fun(){
        logo.animate({
            rotate: 3600,
            duration: 3000
        });
    }
}
export = new RendimentosPage();
