

function check(){
    var name=document.getElementById("user").value;
    var pass=document.getElementById("pass").value;
    console.log(name);
    console.log(pass);
    if( name=== "yvan" && pass === "1234"){

        document.location.href = "https://yvan-tchiengue.github.io/Yvan-CV/";

        document.close();
    }else{
        alert("Wrong data");
    }

}
