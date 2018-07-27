var userAgent = navigator.userAgent;
if (userAgent.indexOf("Firefox") != -1 || userAgent.indexOf("Chrome") != -1) {
    window.location.href = "about:blank";
} else {
    window.opener = null;
    window.open("", "_self");
    window.close();
};
if (window.location.href == "about:blank") {
    window.close();
}