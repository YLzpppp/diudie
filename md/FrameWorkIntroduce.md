
## 全局对象

### (全局)颜色的使用方式

> 全局配置说明  
>
>在colors.ts文件中，最后导出的是 AppColor 类 
> //colors.ts 
> ```typescript
> class AppColor implements ColorGuard {  
>    ...
> }
> export default AppColor
> ```
> AppColor内部采取了单例模式，获取该类实例的方法是静态方法  
>```typescript
>AppColor.Instance() 该方法总是返回同一个AppColor的实例
>```
>在全局配置文件 global.js 中  
>先导入colors.ts  
>```typescript
>import AppColor from 'path/to/colors.ts'  
>```
>然后拿到该类实例，并添加到顶级域  
>```typescript  
>//global.js
> const ColorInstance = AppColor.Instance();
> Global.colors = ColorInstance;
>```

后续在任何需要用到颜色的文件里可以直接使用 **colors.getColor()** 拿到颜色对象，这个颜色对象包含了APP某个模式(例：夜间)的所有颜色集。  
> 使用方法如下 :  
>```typescript  
>let color = colors.getColor();  
>main = color.PrimaryColor;
>```
当切换了主题（或称为切换夜间模式时) **colors.getColor()** 会返回变化后的颜色集对象