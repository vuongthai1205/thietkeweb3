var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

const tokenAddress = '0xA77c39B6F740F1A9908f7d329bc6121d66818613';
const tokenSymbol = 'OttoMatic';
const tokenDecimals = 18;
const tokenImage = '../assets.codepen.io/4625073/1.jpg';


const maticAddress = '0xcc42724c6683b7e57334c4e856f4c9965ed682bd';
const maticSymbol = 'MATIC';
const maticDecimals = 18;
const maticImage = '../bscscan.com/token/images/matic_32.png';

async function addTokenFunction() {

    try {

        const wasAdded = await ethereum.request({
            method: 'wallet_watchAsset',
            params: {
                type: 'ERC20',
                options: {
                    address: tokenAddress,
                    symbol: tokenSymbol,
                    decimals: tokenDecimals,
                    image: tokenImage,
                },
            },
        });

        if (wasAdded) {
            console.log('Thanks for your interest!');
        } else {
            console.log('OttoMatic Coin has not been added');
        }
    } catch (error) {
        console.log(error);
    }
}

async function addMaticFunction() {

    try {

        const wasAdded = await ethereum.request({
            method: 'wallet_watchAsset',
            params: {
                type: 'ERC20',
                options: {
                    address: maticAddress,
                    symbol: maticSymbol,
                    decimals: maticDecimals,
                    image: maticImage,
                },
            },
        });

        if (wasAdded) {
            console.log('Thanks for your interest!');
        } else {
            console.log('OttoMatic Coin has not been added');
        }
    } catch (error) {
        console.log(error);
    }
}

}
/*
     FILE ARCHIVED ON 15:08:58 Jul 29, 2022 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 02:36:56 May 31, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 116.792
  exclusion.robots: 0.123
  exclusion.robots.policy: 0.11
  cdx.remote: 0.086
  esindex: 0.011
  LoadShardBlock: 71.599 (3)
  PetaboxLoader3.datanode: 85.977 (5)
  load_resource: 80.259
  PetaboxLoader3.resolve: 47.341
  loaddict: 14.089
*/