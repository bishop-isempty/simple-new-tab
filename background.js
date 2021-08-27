$(() => {
    chrome.topSites.get((e) => { 
        var c = $(".mycol").toArray();
        var s = $("span").toArray();
        console.log(c);
        e.forEach((_e,i) => {
            console.log(_e);
            let arr = _e.url.split("/");
            let result = arr[0] + "//" + arr[2] + "/favicon.ico";
            let img = $("<img>").attr("src",result).css({weight:"38px",height:"38px"}).css("display","block");
            $(c[i]).append(img);
            $(c[i]).attr("href",_e.url);
            $(s[i]).append(_e.title);
            $(s[i]).append($("<br>"));
            $(s[i]).css("text-overflow","ellipsis");
            $(s[i]).css("width","120px");
            $(s[i]).css("height","95px");
            $(s[i]).css("display","inline-block");
            $(s[i]).css("overflow","hidden");
            $(s[i]).css({"text-align": "-webkit-center"});
        });
    });
    // chrome.topSites.get({includeFavicon:true}).then(e => {console.log(e)});
})

