// Created by iWeb 3.0.3 local-build-20110623

setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({shadow_1:new IWShadow({blurRadius:10,offset:new IWPoint(4.2426,4.2426),color:'#000000',opacity:0.750000}),stroke_0:new IWStrokeParts([{rect:new IWRect(-3,3,6,625),url:'proresivo_files/stroke.png'},{rect:new IWRect(-3,-2,6,5),url:'proresivo_files/stroke_1.png'},{rect:new IWRect(3,-3,638,6),url:'proresivo_files/stroke_2.png'},{rect:new IWRect(641,-4,4,7),url:'proresivo_files/stroke_3.png'},{rect:new IWRect(641,3,5,625),url:'proresivo_files/stroke_4.png'},{rect:new IWRect(641,628,4,4),url:'proresivo_files/stroke_5.png'},{rect:new IWRect(3,628,638,5),url:'proresivo_files/stroke_6.png'},{rect:new IWRect(-3,628,6,4),url:'proresivo_files/stroke_7.png'}],new IWSize(643,630)),shadow_0:new IWShadow({blurRadius:10,offset:new IWPoint(4.2426,4.2426),color:'#000000',opacity:0.750000})});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('proresivo_files/proresivoMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');Widget.onload();fixAllIEPNGs('Media/transparent.gif');applyEffects()}
function onPageUnload()
{Widget.onunload();}
