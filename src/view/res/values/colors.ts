import * as day from './colors.day';
import * as night from './colors.night';

import appstore from '~m/status/appStore';

/*
 * 定义模式颜色 
 *
 * mode : false 表示当前APP为白天模式 , mode : true 表示当前APP为黑夜模式
 */
const lightgray = '#E9E9E9'

export interface ColorGuard{
    getColor: (mode : string) => object
}

export interface ColorLibrary{
    PrimaryColor : string;
    SecondaryColor : string;
    BottomTabInactiveColor : string;
    BottomTabActiveColor : string;
    LightGrayColor: string;
}

class AppColor implements ColorGuard {

    private static instance: AppColor;
    private colors: ColorLibrary;

    constructor(){
        this.colors = {
            PrimaryColor : day.PrimaryColor,
            SecondaryColor : day.SecondaryColor,
            BottomTabActiveColor : day.BottomTabActiveColor,
            BottomTabInactiveColor : day.BottomTabInactiveColor,
            LightGrayColor : lightgray,
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
        console.log("Info: [colors] getColor() : mode 值为 ",appstore.mode);
        if(appstore.mode !== null){
            if(appstore.mode){
                //返回夜间模式颜色对象
                console.log("Info: [colors] 夜间模式");
                this.switchToNight();
            }else if(this.colors.PrimaryColor !== day.PrimaryColor){
                console.log("Info: [colors] 白天模式");
                this.switchToDay();
            }
            //console.log("colors 内部返回的color为",this.colors);
            return this.colors;
        }else{
            console.log("Info: [colors] mode值为null，或为APP安装完成后初次加载，其值将设为默认(true)")
            return this.colors;
        }
        
    }

    private switchToNight(){
        this.colors.PrimaryColor = night.PrimaryColor;
        this.colors.SecondaryColor = night.SecondaryColor;
        this.colors.BottomTabActiveColor = night.BottomTabActiveColor;
        this.colors.BottomTabInactiveColor = night.BottomTabInactiveColor;
    }

    private switchToDay(){
        this.colors.PrimaryColor = day.PrimaryColor;
        this.colors.SecondaryColor = day.SecondaryColor;
        this.colors.BottomTabActiveColor = day.BottomTabActiveColor;
        this.colors.BottomTabInactiveColor = day.BottomTabInactiveColor;
    }
}

export default AppColor;
 
