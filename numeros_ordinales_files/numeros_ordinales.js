// Created by iWeb 3.0.3 local-build-20110623

setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({stroke_0:new IWStrokeParts([{rect:new IWRect(-3,4,5,260),url:'numeros_ordinales_files/stroke.png'},{rect:new IWRect(-3,-2,5,6),url:'numeros_ordinales_files/stroke_1.png'},{rect:new IWRect(2,-2,617,6),url:'numeros_ordinales_files/stroke_2.png'},{rect:new IWRect(619,-1,5,5),url:'numeros_ordinales_files/stroke_3.png'},{rect:new IWRect(619,4,6,260),url:'numeros_ordinales_files/stroke_4.png'},{rect:new IWRect(619,264,6,5),url:'numeros_ordinales_files/stroke_5.png'},{rect:new IWRect(2,264,617,6),url:'numeros_ordinales_files/stroke_6.png'},{rect:new IWRect(-3,264,5,7),url:'numeros_ordinales_files/stroke_7.png'}],new IWSize(623,268)),shadow_0:new IWShadow({blurRadius:10,offset:new IWPoint(4.2426,4.2426),color:'#000000',opacity:0.750000}),shadow_1:new IWShadow({blurRadius:10,offset:new IWPoint(4.2426,4.2426),color:'#000000',opacity:0.750000})});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('numeros_ordinales_files/numeros_ordinalesMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');Widget.onload();fixAllIEPNGs('Media/transparent.gif');IMpreload('numeros_ordinales_files','shapeimage_2','0');applyEffects()}
function onPageUnload()
{Widget.onunload();}
