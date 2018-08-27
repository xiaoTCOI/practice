// window.onload = function(){
	var sectionId;
	var spanCont;
	function getAllListItem() {
        // 返回页面中所有li标签
        var li = document.querySelectorAll('li');
        alert(li);
    }

    function findAllHtmlSpanInOneSection(sectionId) {
        // 返回某个section下所有span中内容为HTML的span标签
        sectionId = document.querySelector('.section');
        sectionSpan = sectionId.querySelector('span');
        alert(sectionSpan);
    }

    function findListItem(sectionId, spanCont) {
        // 返回某个section下，所有所包含span内容为spanCont的LI标签
        sectionId = document.querySelector('.section');
        spanCont = sectionId.querySelectorAll('span');
        alert(spanCont);
    }

    function getActiveLinkContent(sectionId) {
        // 返回某个section下，class为active的链接中包含的文字内容
        sectionId = document.getElementsByClassName('section')[1];
        active = sectionId.getElementsByClassName('active')[0].innerText;
        alert(active);
    }
// }