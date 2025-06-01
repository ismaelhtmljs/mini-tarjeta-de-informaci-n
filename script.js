document.addEventListener("DOMContentLoaded",() => {
    var github = document.getElementById("github-alert");

    github.addEventListener("click",() => {
        alert("Gracias por ver mi red de github :P");
    });

    //darkmode
    var toggledarkmode = document.getElementById("toggledarkmode")
    var body = document.body;
    const save = localStorage.getItem("theme")

    if(save === "dark"){
        body.classList.add("dark")
    }
    Uploadtextbton()

    toggledarkmode.addEventListener("click",() => {
        body.classList.toggle("dark")

        if (body.classList.contains("dark")) {
            localStorage.setItem('theme','dark')
        }else{
            localStorage.setItem('theme','light')
        }

        Uploadtextbton()
    })

    function Uploadtextbton(){
        if (body.classList.contains('dark')) {
            toggledarkmode.textContent = "Modo claro";
        }else{
            toggledarkmode.textContent = "Modo oscuro";
        }
    }
});