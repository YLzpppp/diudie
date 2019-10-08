import { types } from '@babel/core'

/*
 * @Author: liuzhipeng 
 * @Date: 2019-10-04 11:52:56 
 * @Last Modified by: liuzhipeng
 * @Last Modified time: 2019-10-04 22:22:27
 */

 /*
  *  created_at: DateTime;  (  "2019-10-03 23:12:00" )
  */


// 对应graphql => me: User
interface User {
    id?: string;
    name?: string;
    account?: string;
    avatar?: string;
    api_token?: string;
    created_at?: string;
    updated_at?: string;
    count_posts?: number;
    count_fans?: number;
    count_follows?: number;
    count_likes?: number;
    count_videos?: number;
    balance?: number;
    followed_id?: string;
    transactions?: [Transaction];
    posts?: [Post];
    fans?: [Follow];
    follows?: [Follow];
    exchanges?: [Exchange];
    golds?: [Gold];
    videos?: [Video];
    wallet?: [Wallet];
}
interface Transaction {
    wallet?: Wallet;
    amount?: number;
    balance?: number;
    remark?: string;
    created_at?: string;
}
interface Post {
    id?: string;
    title?: string;
    body?: string;
    type?: string;
    count_comments?: number;
    count_likes?: number;
    count_hits?: number;
    published_at?: string;
    liked_id?: string;
    cover?: Image;
    user?: User;
    category?: Category;
    video?: Video;
    comments?: Comment; // (count:number=10,page:number)
}
interface Image {
    id?: string;
    user?: User;
    width: number;
    height: number;
    url: string;
}
interface Category {
    id?: string;
    name?: string;
    logo?: string;
    description?: string;
    user?: User;
    count_fans?: number;
    count_posts?: number;
}
interface Follow {
    id?: string;
    created_at?: string;
    updated_at?: string;
    user?: User;
    followedCategory?: Category;
    followedUser?: User;
}
interface Exchange {
    user?: User;
    gold?: number;
    rmb?: number;
    exchange_rate?: number;
    gold_balance?: number;
    created_at?: string;
    updated_at?: string;
}
interface Gold {
    user?: User;
    gold?: number;
    balance?: number;
    remark?: string;
    created_at?: string;
    time_ago?: string;
}
interface Video {
    id?: string; 
    url?: string;
    width?: number;
    height?: number;
    user?: User;
    covers?: [Image];
}
interface Wallet {
    id?: number;
    user?: User;
    type?: string;
    pay_account?: string;
    real_name?: string;
    pay_infos?: [payInfos];
    balance?: number;
    total_withdraw_amount?: number;
    today_withdraw_left?: number;
    available_balance?: number;
    withdraws?: WithdrawPaginator; // (count:number=10,page:number)
}
interface payInfos {
    real_name?: string;
    pay_account?: string;
    time?: string;
}
interface WithdrawPaginator {
    paginatorInfo?: PaginatorInfo;
    data?: [Withdraw];
}
interface PaginatorInfo {
    count?: number;
    currentPage?: number;
    firstItem?: number;
    hasMorePages?: boolean;
    lastItem?: number
    lastPage?: number;
    perPage?: number;
    total?: number;
}
interface Withdraw {
    id?: string;
    status?: number;
    amount?: number;
    remark?: string;
    trade_no?: string;
    to_account?: string;
    to_platform?: string;
    transaction_id?: number;
    created_at?: string;
    time_ago?: string;
    updated_at?: string;
}


export default class InterfaceGenerators {

    static Test(){
        for(let item:any of Users){
            console.log(item[0],item[1]);
        }
    }
}