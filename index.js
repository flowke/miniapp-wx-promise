
let apiSpace = {
  // 网络
  net: [
    'request',

    'uploadFile',
    'downloadFile',

    'connectSocket',
    'sendSocketMessage',
    'closeSocket'
  ],

  // media
  media: [
    'chooseImage',
    'previewImage',
    'getImageInfo',
    'saveImageToPhotosAlbum',

    'startRecord',

    'playVoice',

    'getBackgroundAudioPlayerState',
    'playBackgroundAudio',
    'seekBackgroundAudio',

    'getAvailableAudioSources',

    'chooseVideo',
    'saveVideoToPhotosAlbum',

    'loadFontFace',


  ],

  // file
  file: [
    'saveFile',
    'getFileInfo',
    'getSavedFileList',
    'getSavedFileInfo',
    'openDocument',
  ],

  // 数据缓存
  dataCache:[
    'setStorage',
    'getStorage',
    'getStorageInfo',
    'removeStorage',
    'clearStorage',
  ],

  // location
  location:[
    'getLocation',
    'chooseLocation',

    'openLocation',
  ],

  // 设备

  device: [
    'getSystemInfo',

    // 网络状态
    'getNetworkType',

    'startAccelerometer',
    'stopAccelerometer',

    'startCompass',
    'stopCompass',

    'makePhoneCall',

    'scanCode',

    'setClipboardData',
    'getClipboardData',

    'openBluetoothAdapter',
    'closeBluetoothAdapter',
    'getBluetoothAdapterState',
    'startBluetoothDevicesDiscovery',
    'stopBluetoothDevicesDiscovery',
    'getBluetoothDevices',
    'getConnectedBluetoothDevices',
    'createBLEConnection',
    'closeBLEConnection',
    'getBLEDeviceServices',
    'getBLEDeviceCharacteristics',
    'readBLECharacteristicValue',
    'writeBLECharacteristicValue',
    'notifyBLECharacteristicValueChange',

    'startBeaconDiscovery',
    'stopBeaconDiscovery',
    'getBeacons',

    'setScreenBrightness',
    'getScreenBrightness',
    'setKeepScreenOn',

    'vibrateLong',
    'vibrateShort',
    'addPhoneContact',

    'getHCEState',
    'startHCE',
    'stopHCE',
    'sendHCEMessage',

    'startWifi',
    'stopWifi',
    'connectWifi',
    'getWifiList',
    'onGetWifiList',
    'setWifiList',
    'getConnectedWifi',
  ],

  // 界面
  userface: [
    // 交互反馈
    'showToast',
    'showLoading',
    'showModal',
    'showActionSheet',

    // 设置导航条
    'setNavigationBarTitle',

    'setTabBarBadge',
    'removeTabBarBadge',
    'showTabBarRedDot',
    'hideTabBarRedDot',
    'setTabBarStyle',
    'setTabBarItem',
    'showTabBar',
    'hideTabBar',

    'setBackgroundColor',
    'setBackgroundTextStyle',

    'setTopBarText',

    // 导航
    'navigateTo',
    'redirectTo',
    'reLaunch',
    'switchTab',
    'navigateBack',

    'startPullDownRefresh',

    ],

  thirdPf: [
    'getExtConfig',
  ],


  // 开发接口
  openAPI: [
    'login',
    'checkSession',
    // 授权
    'authorize',
    'getUserInfo',

    // 支付
    'requestPayment',

    // 设置
    'getSetting',
    'openSetting',

    'requestPayment',

    'showShareMenu',
    'hideShareMenu',
    'updateShareMenu',
    'getShareInfo',

    'chooseAddress',

    'addCard',
    'openCard',

    'openSetting',
    'getSetting',

    'getWeRunData',

    'navigateToMiniProgram',
    'navigateBackMiniProgram',

    'chooseInvoiceTitle',

    'checkIsSupportSoterAuthentication',
    'startSoterAuthentication',
    'checkIsSoterEnrolledInDevice',

    'setEnableDebug',

  ]
}

const apis = {};

for(let k in apiSpace){

  apis = apiSpace[k].reduce( (accu,apiName)=>{

    if(Object.prototype.toString.call(apiName)==='[object String]'){
      accu[apiName] = bindAPI(apiName)
    }else{
      accu[elt.name] = bindAPI(elt.name, elt.thisArg)
    }

    return accu;
  }, apis);

}

module.exports = apis;

function bindAPI(apiName, bindObj=wx){
  return function(obj={}) {
    return new Promise(function(resolve, reject){
      bindObj[apiName](Object.assign({}, obj, {
        success: resolve,
        fail: reject,
      }))
    });
  }
}
