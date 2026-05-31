// Created by iWeb 3.0.3 local-build-20110623

function createMediaStream_id2()
{return IWCreatePhotocast("file://localhost/Volumes/PORTABLE160/Sites/Site/numeros100-100000_main_files/rss.xml",true);}
function initializeMediaStream_id2()
{createMediaStream_id2().load('file://localhost/Volumes/PORTABLE160/Sites/Site',function(imageStream)
{var entryCount=imageStream.length;var headerView=widgets['widget1'];headerView.setPreferenceForKey(imageStream.length,'entryCount');NotificationCenter.postNotification(new IWNotification('SetPage','id2',{pageIndex:0}));});}
function layoutMediaGrid_id2(range)
{createMediaStream_id2().load('file://localhost/Volumes/PORTABLE160/Sites/Site',function(imageStream)
{if(range==null)
{range=new IWRange(0,imageStream.length);}
IWLayoutPhotoGrid('id2',new IWPhotoGridLayout(3,new IWSize(172,172),new IWSize(172,0),new IWSize(206,187),27,27,0,new IWSize(0,0)),new IWEmptyStroke(),imageStream,range,new IWShadow({blurRadius:10,offset:new IWPoint(4.2426,4.2426),color:'#000000',opacity:0.750000}),null,1.000000,{backgroundColor:'rgb(0, 0, 0)',reflectionHeight:100,reflectionOffset:2,captionHeight:100,fullScreen:0,transitionIndex:2},'Media/slideshow.html','widget1','widget2','widget3')});}
function relayoutMediaGrid_id2(notification)
{var userInfo=notification.userInfo();var range=userInfo['range'];layoutMediaGrid_id2(range);}
function onStubPage()
{var args=window.location.href.toQueryParams();parent.IWMediaStreamPhotoPageSetMediaStream(createMediaStream_id2(),args.id);}
if(window.stubPage)
{onStubPage();}
setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({stroke_0:new IWStrokeParts([{rect:new IWRect(-3,3,6,193),url:'numeros100-100000_main_files/stroke.png'},{rect:new IWRect(-5,-3,8,6),url:'numeros100-100000_main_files/stroke_1.png'},{rect:new IWRect(3,-3,625,6),url:'numeros100-100000_main_files/stroke_2.png'},{rect:new IWRect(628,-3,4,6),url:'numeros100-100000_main_files/stroke_3.png'},{rect:new IWRect(628,3,5,193),url:'numeros100-100000_main_files/stroke_4.png'},{rect:new IWRect(628,196,4,7),url:'numeros100-100000_main_files/stroke_5.png'},{rect:new IWRect(3,196,625,6),url:'numeros100-100000_main_files/stroke_6.png'},{rect:new IWRect(-2,196,5,6),url:'numeros100-100000_main_files/stroke_7.png'}],new IWSize(630,200))});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{IWRegisterNamedImage('comment overlay','Media/Photo-Overlay-Comment.png')
IWRegisterNamedImage('movie overlay','Media/Photo-Overlay-Movie.png')
loadMozillaCSS('numeros100-100000_main_files/numeros100-100000_mainMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');NotificationCenter.addObserver(null,relayoutMediaGrid_id2,'RangeChanged','id2')
Widget.onload();fixAllIEPNGs('Media/transparent.gif');applyEffects()
initializeMediaStream_id2()}
function onPageUnload()
{Widget.onunload();}
