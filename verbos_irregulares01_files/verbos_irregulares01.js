// Created by iWeb 3.0.3 local-build-20110623

function createMediaStream_id2()
{return IWCreatePhotocast("file://localhost/Volumes/PORTABLE160/Sites/Site/verbos_irregulares01_files/rss.xml",true);}
function initializeMediaStream_id2()
{createMediaStream_id2().load('file://localhost/Volumes/PORTABLE160/Sites/Site',function(imageStream)
{var entryCount=imageStream.length;var headerView=widgets['widget1'];headerView.setPreferenceForKey(imageStream.length,'entryCount');NotificationCenter.postNotification(new IWNotification('SetPage','id2',{pageIndex:0}));});}
function layoutMediaGrid_id2(range)
{createMediaStream_id2().load('file://localhost/Volumes/PORTABLE160/Sites/Site',function(imageStream)
{if(range==null)
{range=new IWRange(0,imageStream.length);}
IWLayoutPhotoGrid('id2',new IWPhotoGridLayout(2,new IWSize(258,258),new IWSize(258,0),new IWSize(309,272),27,27,0,new IWSize(0,0)),new IWEmptyStroke(),imageStream,range,new IWShadow({blurRadius:10,offset:new IWPoint(4.2426,4.2426),color:'#000000',opacity:0.750000}),null,1.000000,{backgroundColor:'rgb(0, 0, 0)',reflectionHeight:100,reflectionOffset:2,captionHeight:100,fullScreen:0,transitionIndex:2},'Media/slideshow.html','widget1','widget2','widget3')});}
function relayoutMediaGrid_id2(notification)
{var userInfo=notification.userInfo();var range=userInfo['range'];layoutMediaGrid_id2(range);}
function onStubPage()
{var args=window.location.href.toQueryParams();parent.IWMediaStreamPhotoPageSetMediaStream(createMediaStream_id2(),args.id);}
if(window.stubPage)
{onStubPage();}
setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({stroke_0:new IWStrokeParts([{rect:new IWRect(-3,2,6,504),url:'verbos_irregulares01_files/stroke.png'},{rect:new IWRect(-3,-3,6,5),url:'verbos_irregulares01_files/stroke_1.png'},{rect:new IWRect(3,-3,669,5),url:'verbos_irregulares01_files/stroke_2.png'},{rect:new IWRect(672,-3,5,5),url:'verbos_irregulares01_files/stroke_3.png'},{rect:new IWRect(672,2,5,504),url:'verbos_irregulares01_files/stroke_4.png'},{rect:new IWRect(672,506,5,4),url:'verbos_irregulares01_files/stroke_5.png'},{rect:new IWRect(3,506,669,6),url:'verbos_irregulares01_files/stroke_6.png'},{rect:new IWRect(-3,506,6,5),url:'verbos_irregulares01_files/stroke_7.png'}],new IWSize(675,509))});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{IWRegisterNamedImage('comment overlay','Media/Photo-Overlay-Comment.png')
IWRegisterNamedImage('movie overlay','Media/Photo-Overlay-Movie.png')
loadMozillaCSS('verbos_irregulares01_files/verbos_irregulares01Moz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');NotificationCenter.addObserver(null,relayoutMediaGrid_id2,'RangeChanged','id2')
Widget.onload();fixAllIEPNGs('Media/transparent.gif');applyEffects()
initializeMediaStream_id2()}
function onPageUnload()
{Widget.onunload();}
