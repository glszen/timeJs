function comeIn() {

    const name = document.getElementById("username").value;

    if (name.trim() !== ""){ //Show timer

        document.getElementById("enteredName").textContent = name;

        document.getElementById("gif").style.display ="none";

        document.querySelector(".card").style.display ="none";

        document.getElementById("timer").style.display = "block";

        document.getElementById("back").style.display = "block";
    }
    else
    {
    alert("Please enter a name.");
}
    }

    function back(){ //Hide timer

        document.getElementById("timer").style.display = "none";

        document.getElementById("gif").style.display="block";

        document.querySelector(".card").style.display = "block";

        document.getElementById("back").style.display = "none";

        document.getElementById("username").value = "";
        document.getElementById("enteredName").textContent= "";
    }


function date_time(id) //For timer
{
    date = new Date;
    h= date.getHours();
    if(h<10)
    {
        h="0" + h;
    }
    m = date.getMinutes();
    if (m<10)
    {
        m="0" + m;
    }
    s = date.getSeconds();
    if (s<10)
    {
        s="0" + s;
    }
    document.getElementById("s").innerHTML = ''+s;
    document.getElementById("m").innerHTML = ''+m;
    document.getElementById("h").innerHTML = ''+h;
    setTimeout('date_time("'+"s"+'");' , 1000);
    return true;
}
window.onload = date_time('s');
