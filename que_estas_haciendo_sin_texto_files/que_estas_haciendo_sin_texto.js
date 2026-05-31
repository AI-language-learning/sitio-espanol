// Created by iWeb 3.0.3 local-build-20110623

function createMediaStream_id2()
{return IWCreatePhotocast("file://localhost/Volumes/PORTABLE160/Sites/Site/que_estas_haciendo_sin_texto_files/rss.xml",false);}
function initializeMediaStream_id2()
{createMediaStream_id2().load('file://localhost/Volumes/PORTABLE160/Sites/Site',function(imageStream)
{var entryCount=imageStream.length;var headerView=widgets['widget1'];headerView.setPreferenceForKey(imageStream.length,'entryCount');NotificationCenter.postNotification(new IWNotification('SetPage','id2',{pageIndex:0}));});}
function layoutMediaGrid_id2(range)
{createMediaStream_id2().load('file://localhost/Volumes/PORTABLE160/Sites/Site',function(imageStream)
{if(range==null)
{range=new IWRange(0,imageStream.length);}
IWLayoutPhotoGrid('id2',new IWPhotoGridLayout(3,new IWSize(172,172),new IWSize(172,0),new IWSize(206,187),27,27,0,new IWSize(0,0)),new IWEmptyStroke(),imageStream,range,new IWShadow({blurRadius:10,offset:new IWPoint(4.2426,4.2426),color:'#000000',opacity:0.750000}),null,1.000000,{backgroundColor:'rgb(255, 255, 255)',reflectionHeight:0,reflectionOffset:2,captionHeight:0,fullScreen:1,transitionIndex:1},'Media/slideshow.html','widget1','widget2','widget3')});}
function relayoutMediaGrid_id2(notification)
{var userInfo=notification.userInfo();var range=userInfo['range'];layoutMediaGrid_id2(range);}
function onStubPage()
{var args=window.location.href.toQueryParams();parent.IWMediaStreamPhotoPageSetMediaStream(createMediaStream_id2(),args.id);}
if(window.stubPage)
{onStubPage();}
setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({stroke_0:new IWStrokeParts([{rect:new IWRect(-3,3,5,224),url:'que_estas_haciendo_sin_texto_files/stroke.png'},{rect:new IWRect(-3,-3,5,6),url:'que_estas_haciendo_sin_texto_files/stroke_1.png'},{rect:new IWRect(2,-3,610,6),url:'que_estas_haciendo_sin_texto_files/stroke_2.png'},{rect:new IWRect(612,-2,5,5),url:'que_estas_haciendo_sin_texto_files/stroke_3.png'},{rect:new IWRect(612,3,5,224),url:'que_estas_haciendo_sin_texto_files/stroke_4.png'},{rect:new IWRect(612,227,6,6),url:'que_estas_haciendo_sin_texto_files/stroke_5.png'},{rect:new IWRect(2,227,610,6),url:'que_estas_haciendo_sin_texto_files/stroke_6.png'},{rect:new IWRect(-3,227,5,5),url:'que_estas_haciendo_sin_texto_files/stroke_7.png'}],new IWSize(616,230))});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{IWRegisterNamedImage('comment overlay','Media/Photo-Overlay-Comment.png')
IWRegisterNamedImage('movie overlay','Media/Photo-Overlay-Movie.png')
loadMozillaCSS('que_estas_haciendo_sin_texto_files/que_estas_haciendo_sin_textoMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');NotificationCenter.addObserver(null,relayoutMediaGrid_id2,'RangeChanged','id2')
Widget.onload();fixAllIEPNGs('Media/transparent.gif');applyEffects()
initializeMediaStream_id2()}
function onPageUnload()
{Widget.onunload();}
