import { PermissionsAndroid } from 'react-native';

async function requestWifiPermission(){
    try {
        const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.CAMERA,
            {
              title: '请求摄像头权限',
              message:
                '发布照片内容需要借用你的摄像头，' +
                '然后你就可以拍摄并发布酷炫的皂片啦。',
              buttonNeutral: '晚点再询问我',
              buttonNegative: '不可以',
              buttonPositive: '好的',
            },
          );
        if(granted === PermissionsAndroid.RESULTS.GRANTED){
            console.log("摄像权限获取成功");
        }else{
            console.log("用户拒绝给与权限");
        } 
    }catch(e){
        console.log("摄像头权限获取失败");
    }
}
/*
READ_CALENDAR: 'android.permission.READ_CALENDAR'
WRITE_CALENDAR: 'android.permission.WRITE_CALENDAR'
CAMERA: 'android.permission.CAMERA'
READ_CONTACTS: 'android.permission.READ_CONTACTS'
WRITE_CONTACTS: 'android.permission.WRITE_CONTACTS'
GET_ACCOUNTS: 'android.permission.GET_ACCOUNTS'
ACCESS_FINE_LOCATION: 'android.permission.ACCESS_FINE_LOCATION'
ACCESS_COARSE_LOCATION: 'android.permission.ACCESS_COARSE_LOCATION'
RECORD_AUDIO: 'android.permission.RECORD_AUDIO'
READ_PHONE_STATE: 'android.permission.READ_PHONE_STATE'
CALL_PHONE: 'android.permission.CALL_PHONE'
READ_CALL_LOG: 'android.permission.READ_CALL_LOG'
WRITE_CALL_LOG: 'android.permission.WRITE_CALL_LOG'
ADD_VOICEMAIL: 'com.android.voicemail.permission.ADD_VOICEMAIL'
USE_SIP: 'android.permission.USE_SIP'
PROCESS_OUTGOING_CALLS: 'android.permission.PROCESS_OUTGOING_CALLS'
BODY_SENSORS: 'android.permission.BODY_SENSORS'
SEND_SMS: 'android.permission.SEND_SMS'
RECEIVE_SMS: 'android.permission.RECEIVE_SMS'
READ_SMS: 'android.permission.READ_SMS'
RECEIVE_WAP_PUSH: 'android.permission.RECEIVE_WAP_PUSH'
RECEIVE_MMS: 'android.permission.RECEIVE_MMS'
READ_EXTERNAL_STORAGE: 'android.permission.READ_EXTERNAL_STORAGE'
WRITE_EXTERNAL_STORAGE: 'android.permission.WRITE_EXTERNAL_STORAGE'

返回值都以常量形式记录在PermissionsAndroid.RESULTS中：

GRANTED: 'granted'， 表示用户已授权
DENIED: 'denied'， 表示用户已拒绝
NEVER_ASK_AGAIN: 'never_ask_again'，表示用户已拒绝，且不愿被再次询问。

*/