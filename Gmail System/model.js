
var rub = document.getElementById('firstname')
var mail = document.getElementById("emailname")
var basicurls = document.getElementById("basic-url")
var av = document.getElementById("avs")
var txtarea = document.getElementById("textareas")

function bttn()
{
    
if(rub.value == '')
{
    rub.style.borderColor = 'red'
}
if(mail.value == '')
{
    mail.style.borderColor = 'red'
}
if(basicurls.value == '')
{
    basicurls.style.borderColor = 'red'
}
if(av.value == '')
{
    av.style.borderColor = 'red'
}




if(validationEmail(mail.value)==false)
{
    alert("Please Add To @ Sign")
}
if(gmailEmail(mail.value)==false)
{
    alert("Only use 'gmail' tag")
}

if(textlength(txtarea.value)==false)
{
    alert("Exceeded Limited")
}
if(weblength(av.value)==false)
{
    alert("You must write 'www.'")
}
}

function validationEmail(vale)
{
    var b=false;
for(var i=0; i < vale.length; i++)
{
if(vale[i]=='@')
{
 b=true;
}
}
return b;
}

function gmailEmail(egmail)
{
    var d = false;
    for(var i = 0; i<egmail.length; i++)
    {
if(egmail[i]=='gmail')
{
    d =true
}
    }
    return d;
}


function textlength(txtlen)
{
var c = false;
for(var i= 10; i <txtlen.length; i++)
{
if(txtlen[i]==10)
{
c == true
}
return c;
}
}

function weblength(weblen)
{
var x = false;
for(var i=0; i <weblen.length; i++)
{
if(weblen[i]=='www.')
{
x == true
}
return x;
}
}

