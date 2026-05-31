// Created by iWeb 3.0.3 local-build-20110623

setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({stroke_0:new IWStrokeParts([{rect:new IWRect(-3,3,4,532),url:'cine_critica_files/stroke.png'},{rect:new IWRect(-3,-3,4,6),url:'cine_critica_files/stroke_1.png'},{rect:new IWRect(1,-3,624,6),url:'cine_critica_files/stroke_2.png'},{rect:new IWRect(625,-3,9,6),url:'cine_critica_files/stroke_3.png'},{rect:new IWRect(625,3,7,532),url:'cine_critica_files/stroke_4.png'},{rect:new IWRect(625,535,6,4),url:'cine_critica_files/stroke_5.png'},{rect:new IWRect(1,535,624,6),url:'cine_critica_files/stroke_6.png'},{rect:new IWRect(-3,535,4,6),url:'cine_critica_files/stroke_7.png'}],new IWSize(630,538))});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('cine_critica_files/cine_criticaMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');Widget.onload();fixAllIEPNGs('Media/transparent.gif');IMpreload('cine_critica_files','shapeimage_2','0');IMpreload('cine_critica_files','shapeimage_2','1');IMpreload('cine_critica_files','shapeimage_2','2');IMpreload('cine_critica_files','shapeimage_2','3');applyEffects()}
function onPageUnload()
{Widget.onunload();}
