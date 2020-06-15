function getRandomRGBValue(){
    return Math.min(math.floor(math.random()*255+1),255);
//function to change color
}function getRandomColor(){
    var r=getRandomRGBValue();
    var g= getRandomRGBValue;
    var b= getRandomRGBValue;
    return "#"+(((1<<24)+(r<<16)+(g<<8)+b).toString(16).slice(1));

}function changeThemeColor(){
    var metaThemeColor=document.querySelector("meta[name=theme-color]");
    metaThemeColor.setAttribute("content",getRandomColor());
    setTimeout(function(){
        changeThemeColor();
    }
}
changeThemeColor();