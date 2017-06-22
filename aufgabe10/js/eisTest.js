var SendOrder;
(function (SendOrder) {
    window.addEventListener("load", init);
    let button = document.getElementById("button");
    function init(_event) {
        console.log("Init");
        // button.addEventListener("click", handleClickOnButton);
    }
    function handleClickOnButton(_event) {
        let order = document.getElementById("eissorten").children;
        //        let style: CSSStyleDeclaration = (<HTMLElement>_event.target).style;
        //        console.log(style.backgroundColor);
        //        sendRequest(order);
    }
    function sendRequest(_color) {
        let xhr = new XMLHttpRequest();
        xhr.open("GET", "http://localhost:8100?color=", true);
        xhr.open("GET", "https://eiia-2.herokuapp.com/?color=", true);
        xhr.addEventListener("readystatechange", handleStateChange);
        xhr.send();
    }
    function handleStateChange(_event) {
        var xhr = _event.target;
        if (xhr.readyState == XMLHttpRequest.DONE) {
            console.log("ready: " + xhr.readyState, " | type: " + xhr.responseType, " | status:" + xhr.status, " | text:" + xhr.statusText);
            console.log("response: " + xhr.response);
            alert(xhr.response);
        }
    }
})(SendOrder || (SendOrder = {}));
//# sourceMappingURL=eisTest.js.map