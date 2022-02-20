var Studentarray=[];
function submit(){
    var displayname=[];

    for(var a=1;a<=4;a++){
        var name=document.getElementById("student"+a).value;
        console.log(name);
        Studentarray.push(name);
    }


    console.log(Studentarray);
    
    for(var m=0;m<Studentarray.length;m++){
        displayname.push("<h4>Name="+Studentarray[m]+"</h4>");
        console.log(displayname);
    }
console.log(displayname);
document.getElementById("with_commas").innerHTML=displayname;

document.getElementById("without_commas").innerHTML=displayname.join(" ");
    
    document.getElementById("submitbutton").style.display="none";
    document.getElementById("sortbutton").style.display="inline-block";
}
function sorting(){
    Studentarray.sort();
    var displayname=[];
    for(var m=0;m<Studentarray.length;m++){
        displayname.push("<h4>Name="+Studentarray[m]+"</h4>");
        console.log(displayname);
    }
    document.getElementById("without_commas").innerHTML=displayname.join(" ");
}