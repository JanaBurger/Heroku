namespace SendOrder {
    window.addEventListener("load", init);

    let button: HTMLElement = document.getElementById("button");
    
    function init(_event: Event): void {
        console.log("Init");
       // button.addEventListener("click", handleClickOnButton);
        
    }

    function handleClickOnButton(_event: Event): void {
        let order: HTMLCollection = document.getElementById("eissorten").children;
   
//        let style: CSSStyleDeclaration = (<HTMLElement>_event.target).style;
//        console.log(style.backgroundColor);
//        sendRequest(order);
    }

    function sendRequest(_color: string): void {
        let xhr: XMLHttpRequest = new XMLHttpRequest();
        xhr.open("GET", "http://localhost:8100?color=" , true);
        xhr.open("GET", "https://eiia-2.herokuapp.com/?color=" , true);
        xhr.addEventListener("readystatechange", handleStateChange);
        xhr.send();
    }

    function handleStateChange(_event: ProgressEvent): void {
        var xhr: XMLHttpRequest = (<XMLHttpRequest>_event.target);
        if (xhr.readyState == XMLHttpRequest.DONE) {
            console.log("ready: " + xhr.readyState, " | type: " + xhr.responseType, " | status:" + xhr.status, " | text:" + xhr.statusText);
            console.log("response: " + xhr.response);
            alert(xhr.response);
        }
    }
}