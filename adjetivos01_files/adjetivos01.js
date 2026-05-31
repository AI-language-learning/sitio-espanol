// Created by iWeb 3.0.3 local-build-20110623

function createMediaStream_id2()
{return IWCreatePhotocast("file://localhost/Volumes/PORTABLE160/Sites/Site/adjetivos01_files/rss.xml",true);}
function initializeMediaStream_id2()
{createMediaStream_id2().load('file://localhost/Volumes/PORTABLE160/Sites/Site',function(imageStream)
{var entryCount=imageStream.length;var headerView=widgets['widget1'];headerView.setPreferenceForKey(imageStream.length,'entryCount');NotificationCenter.postNotification(new IWNotification('SetPage','id2',{pageIndex:0}));});}
function layoutMediaGrid_id2(range)
{createMediaStream_id2().load('file://localhost/Volumes/PORTABLE160/Sites/Site',function(imageStream)
{if(range==null)
{range=new IWRange(0,imageStream.length);}
IWLayoutPhotoGrid('id2',new IWPhotoGridLayout(3,new IWSize(172,172),new IWSize(172,32),new IWSize(206,219),27,27,0,new IWSize(0,0)),new IWEmptyStroke(),imageStream,range,null,null,1.000000,null,'Media/slideshow.html','widget1','widget2','widget3')});}
function relayoutMediaGrid_id2(notification)
{var userInfo=notification.userInfo();var range=userInfo['range'];layoutMediaGrid_id2(range);}
function onStubPage()
{var args=window.location.href.toQueryParams();parent.IWMediaStreamPhotoPageSetMediaStream(createMediaStream_id2(),args.id);}
if(window.stubPage)
{onStubPage();}
setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({shadow_1:new IWShadow({blurRadius:6,offset:new IWPoint(-0.0000,7.0000),color:'#000000',opacity:0.700000}),stroke_0:new IWStrokeParts([{rect:new IWRect(-2,2,4,191),url:'adjetivos01_files/stroke.png'},{rect:new IWRect(-2,-2,4,4),url:'adjetivos01_files/stroke_1.png'},{rect:new IWRect(2,-2,256,4),url:'adjetivos01_files/stroke_2.png'},{rect:new IWRect(258,-2,4,4),url:'adjetivos01_files/stroke_3.png'},{rect:new IWRect(258,2,4,191),url:'adjetivos01_files/stroke_4.png'},{rect:new IWRect(258,193,4,4),url:'adjetivos01_files/stroke_5.png'},{rect:new IWRect(2,193,256,4),url:'adjetivos01_files/stroke_6.png'},{rect:new IWRect(-2,193,4,4),url:'adjetivos01_files/stroke_7.png'}],new IWSize(260,195)),shadow_3:new IWShadow({blurRadius:7,offset:new IWPoint(-0.0000,7.0000),color:'#000000',opacity:0.700000}),shadow_5:new IWShadow({blurRadius:7,offset:new IWPoint(-0.0000,7.0000),color:'#000000',opacity:0.700000}),shadow_6:new IWShadow({blurRadius:7,offset:new IWPoint(-0.0000,7.0000),color:'#000000',opacity:0.700000}),shadow_4:new IWShadow({blurRadius:7,offset:new IWPoint(-0.0000,7.0000),color:'#000000',opacity:0.700000}),shadow_0:new IWShadow({blurRadius:7,offset:new IWPoint(-0.0000,7.0000),color:'#000000',opacity:0.700000}),shadow_7:new IWShadow({blurRadius:7,offset:new IWPoint(-0.0000,7.0000),color:'#000000',opacity:0.700000}),shadow_2:new IWShadow({blurRadius:7,offset:new IWPoint(-0.0000,7.0000),color:'#000000',opacity:0.700000})});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{IWRegisterNamedImage('comment overlay','Media/Photo-Overlay-Comment.png')
IWRegisterNamedImage('movie overlay','Media/Photo-Overlay-Movie.png')
loadMozillaCSS('adjetivos01_files/adjetivos01Moz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');NotificationCenter.addObserver(null,relayoutMediaGrid_id2,'RangeChanged','id2')
adjustLineHeightIfTooBig('id3');adjustFontSizeIfTooBig('id3');adjustLineHeightIfTooBig('id4');adjustFontSizeIfTooBig('id4');Widget.onload();applyEffects()
initializeMediaStream_id2()}
function onPageUnload()
{Widget.onunload();}
