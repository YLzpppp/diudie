/*
 * @Author: liuzhipeng 
 * @Date: 2019-10-04 21:37:44 
 * @Last Modified by: liuzhipeng
 * @Last Modified time: 2019-10-04 22:22:17
 */


const RequireParamsProp:any = [
    ["Post","comments","count:number=10,page:number"],
    ["Wallet","withdraws","count:number=10,page:number"]
];
const User:[ [string,string] ] = [
    ["id","string"],
    ["name","string"],
    ["account","string"],
    ["avatar","string"],
    ["api_token","string"],
    ["created_at","string"],
    ["updated_at","string"],
    ["count_posts","string"],
    ["count_fans","string"],
    ["count_follows","string"],
    ["count_likes","string"],
    ["count_videos","string"],
    ["balance","string"],
    ["followed_id","string"],
    ["transactions","string"],
    ["posts","string"],
    ["fans","string"],
    ["follows","[Follow]"],
    ["exchanges","[Exchange]"],
    ["golds","[Gold]"],
    ["videos","[Video]"],
    ["wallet","[Wallet]"]
];
const Transaction:[[string,string]] = [
    ["wallet","Wallet"],
    ["amount","number"],
    ["balance","number"],
    ["remark","string"],
    ["created_at","string"]
];
const Post:[[string,string]] = [
    ["id","string"],
    ["title","string"],
    ["body","string"],
    ["type","string"],
    ["count_comments","number"],
    ["count_likes","number"],
    ["count_hits","number"],
    ["published_at","string"],
    ["liked_id","string"],
    ["cover","Image"],
    ["user","User"],
    ["category","Category"],
    ["video","Video"],
    ["comments","Comment"]
];
const Image:[[string,string]] = [
    ["id","string"],
    ["user","User"],
    ["width","number"],
    ["height","number"],
    ["url","string"],
];
const Category:[[string,string]] = [
    ["id","string"],
    ["name","string"],
    ["logo","string"],
    ["description","string"],
    ["user","User"],
    ["count_fans","number"],
    ["count_posts","number"]
];
const Follow:[[string,string]] = [
    ["id","string"],
    ["created_at","string"],
    ["updated_at","string"],
    ["user","User"],
    ["followedCategory","Category"],
    ["followedUser","User"]
];
const Exchange:[[string,string]] = [
    ["user","User"],
    ["gold","number"],
    ["rmb","number"],
    ["exchange_rate","number"],
    ["gold_balance","number"],
    ["created_at","string"],
    ["updated_at","string"]
];
const Gold:[[string,string]] = [
    ["user","User"],
    ["gold","number"],
    ["balance","number"],
    ["remark","string"],
    ["created_at","string"],
    ["time_ago","string"]
];
const Video:[[string,string]] = [
    ["id","string"],
    ["url","string"],
    ["width","number"],
    ["height","number"],
    ["user","User"],
    ["covers","[Image]"]
];
const Wallet:[[string,string]] = [
    ["id","number"],
    ["user","User"],
    ["type","string"],
    ["pay_account","string"],
    ["real_name","string"],
    ["pay_infos","[payInfos]"],
    ["balance","number"],
    ["total_withdraw_amount","number"],
    ["total_withdraw_left","number"],
    ["available_balance","number"],
    ["withdraws","WithdrawPaginator"]
];
const payInfos:[[string,string]] = [
    ["real_name","string"],
    ["pay_account","string"],
    ["time","string"]
];
const WithdrawPaginator:[[string,string]] = [
    ["paginatorInfo","PaginatorInfo"],
    ["data","[Withdraw]"]
];
const PaginatorInfo:[[string,string]] = [
    ["count","number"],
    ["currentPage","number"],
    ["firstItem","number"],
    ["hasMorePages","boolean"],
    ["lastItem","number"],
    ["lastPage","number"],
    ["perPage","number"],
    ["total","number"]
];
const Withdraw:[[string,string]] = [
    ["id","string"],
    ["status","number"],
    ["amount","number"],
    ["remark","string"],
    ["trade_no","string"],
    ["to_account","string"],
    ["to_platform","string"],
    ["transaction_id","number"],
    ["created_at": "string"],
    ["time_ago","string"],
    ["updated_at","string"]
];
export {RequireParamsProp,User,Transaction,Post,
Image,Category,Follow,Exchange,Gold,Video,Wallet,
payInfos,WithdrawPaginator,PaginatorInfo,Withdraw}