import {observable, action, autorun, computed} from 'mobx';
import * as Storage from '../Storage';
/**
 *  这里存放的全局 state 应该与 特定用户 耦合性较低。多为APP本地状态管理有关的state。
 */

class AppStore {
    @observable mode: boolean = true;

    /**
     *  App store 变量初始化
     */
    __init(){
        console.log("Info: [appStore] 正在初始化 AppStore ");
        //尝试读取本地存储的 app_mode 值
        Storage.getItem("app_mode").then(
             v => {
                 this.mode = JSON.parse(v);
                 console.log("Info: [appStore] storage 读取到的 app_mode 为:",v);
                 if(this.mode === null){
                     console.log("Info: [appStore] storage读取到的 mode值为null，将设置为true");
                     this.mode = true;
                 }
                } , 
            e => {
                console.log("Info: [appStore] 读取app_mode失败，app_mode将为默认值")
            });
    };

    constructor(){
        this.__init();
    }

    @action.bound
    changeMode(m: boolean){
        this.mode = m;
        Storage.setItem("app_mode",JSON.stringify(m));
    }

}

export default new AppStore();