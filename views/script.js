var datafinal="";

function ShortURL()
{
    
    var longurlvalue=document.getElementById("longURL").value;
   
    $.post("http://linkmini.me/api/url/shorten",{longUrl: longurlvalue}, function (data, status) {
        document.getElementById("shorturl").value=data.shortUrl;
       
        //datafinal=data;    
    });
}

function funcopy() {
    /* Get the text field */
    var copyText = document.getElementById("shorturl");
  
    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /*For mobile devices*/
  
    /* Copy the text inside the text field */
    document.execCommand("copy");
  
    /* Alert the copied text */
    alert("Copied the text: " + copyText.value);
}

function checkURL(o) {
    if (/^(http:\/\/www\.|https:\/\/www\.|www\.)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?/.test(o.value)) {
        o.value = "http://" + o.value;
    }
}

function checkForEnterKey(){
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("mini").click();
    }
}