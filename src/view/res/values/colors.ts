import * as day from './colors.day';
import * as night from './colors.night';

import appstore from '~m/status/appStore';

/*
 * 定义模式颜色 
 *
 * mode : false 表示当前APP为白天模式 , mode : true 表示当前APP为黑夜模式
 */

export interface ColorGuard{
    getColor: (mode : string) => object
}

export interface ColorLibrary{
    PrimaryColor : string;
    SecondaryColor : string;
}

class AppColor implements ColorGuard {

    private static instance: AppColor;
    private colors: ColorLibrary;

    constructor(){
        this.colors = {
            PrimaryColor : day.PrimaryColor,
            SecondaryColor : day.SecondaryColor
        }
    }
    public static Instance(){
        if(AppColor.instance === undefined || AppColor.instance === null){
            AppColor.instance = new AppColor();
        }
        return AppColor.instance;
    }

    public getColor() : object {
        //console.log("colors 内部 mode : ",appstore.mode);
        if(appstore.mode){
            //返回夜间模式颜色对象
            console.log("切换到夜间模式");
            this.switchToNight();
        }else if(this.colors.PrimaryColor !== day.PrimaryColor){
            console.log("切换到白天模式");
            this.switchToDay();
        }
        //console.log("colors 内部返回的color为",this.colors);
        return this.colors;
    }

    private switchToNight(){
        this.colors.PrimaryColor = night.PrimaryColor;
        this.colors.SecondaryColor = night.SecondaryColor;
    }

    private switchToDay(){
        this.colors.PrimaryColor = day.PrimaryColor;
        this.colors.SecondaryColor = day.SecondaryColor;
    }
}

export default AppColor;
 
