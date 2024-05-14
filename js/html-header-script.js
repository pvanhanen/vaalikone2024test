// function closeThis(id){const ELEM=document.getElementById(id);ELEM.remove();}
// function scrollToTop(){window.scrollTo(0,0);}
// function toggleScrollToTopVisibility(){const SCROLL_ICON=document.getElementById("icon-scroll-top");if(window.scrollY<window.innerHeight){SCROLL_ICON.style.display="none";}else{SCROLL_ICON.style.display="block";}
// if(window.scrollY>150){document.getElementById("header").style.maxHeight="65px";document.getElementById("site-logo").style.maxHeight="65px";document.getElementById("header-menu").style.maxHeight="65px";}else if(window.innerWidth>1400&&window.scrollY<50){document.getElementById("header").style.maxHeight="100px";document.getElementById("site-logo").style.maxHeight="100px";document.getElementById("header-menu").style.maxHeight="100px";}else{null;}}
function hamburgerMenuToggle() {
    if (document.getElementById("hamburger-menu-content").style.display == "none") {
        document.getElementById("hamburger-menu-content").style.display = "block";
    }
    else {
        document.getElementById("hamburger-menu-content").style.display = "none";
    }
}
// function searchBoxToggle(){if(document.getElementById("searchBox").style.display=="none"){document.getElementById("searchBox").style.display="block";document.getElementById("hamburger-menu-content").style.display="none";}else{document.getElementById("searchBox").style.display="none";}}
// window.onload=()=>{toggleScrollToTopVisibility();}
