import { Dimensions } from 'react-native';
import DeviceInfo from 'react-native-device-info';
import AppColor from '~values/colors';

const Global = global || window || {};

/*
 * 设备信息常量 ，不需要的可注释掉 
 */
const mSCREEN_WIDTH = Dimensions.get('window').width;
const mSCREEN_HEIGHT = Dimensions.get('window').height;
const mUniqueId = DeviceInfo.getUniqueIdSync();
const mBrand = DeviceInfo.getBrandSync();
const mDeviceId= DeviceInfo.getDeviceIdSync();
const mIpAddress = DeviceInfo.getIpAddressSync();
const mInstallReferrer = DeviceInfo.getInstallReferrer();
const mMacAddress = DeviceInfo.getMacAddressSync();
const mPhoneNumber = DeviceInfo.getPhoneNumberSync();
const mSystemVersion = DeviceInfo.getSystemVersionSync();
const misEmulator = DeviceInfo.isEmulatorSync();
const mhasNotch = DeviceInfo.hasNotchSync();

const device = {
    width: mSCREEN_WIDTH,
    height: mSCREEN_HEIGHT,
    UniqueId: mUniqueId,
    DeviceId: mDeviceId,
    Brand: mBrand,
    IpAddress: mIpAddress,
    MacAddress: mMacAddress,
    PhoneNumber: mPhoneNumber,
    SystemVersion: mSystemVersion,
    isEmulator: misEmulator,
    hasNotch: mhasNotch
}
console.log(device);

Global.Device = device;

const ColorInstance = AppColor.Instance();
Global.colors = ColorInstance;

