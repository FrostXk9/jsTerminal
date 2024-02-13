let InitializedServ = document.getElementById("display");
let InitialServ = document.getElementById("filesOpen");
const someFilename = [];
const userName = [];
const folderName = [];
const fileInit = document.getElementById("createFile");
const printFile = document.getElementById("identifyFile")
let x = '&times;';
const terminal = document.getElementById("terminal");
const output = document.getElementById("output");
const renderDisplay = document.getElementById("ogTerminal");
const confg = document.getElementById("config");
const settings = document.getElementById("settings")

// console.log(terminal, output, renderDisplay);

function init(){
    InitialServ.innerHTML =`
    <div class="file-out">
        <div  id="createdOne" class="fsy">${someFilename} <span data-leave>${x}</span></div>
    </div>
    `;
    const closeFile = document.querySelector("[data-leave]");

    const createdOne = document.getElementById("createdOne");

    // console.log(closeFile, createdOne);

    closeFile.addEventListener("click", function(e){
        e.preventDefault();
        createdOne.style.display = "none";
    });
    
    initV2();
}

function initV2(){
    InitializedServ.innerHTML = `
    <textarea name="txtarea" id="gTerminal" cols="30" rows="10"></textarea>
    `;
    let reactiveState = document.getElementById("gTerminal");
    reactiveState.addEventListener("input", function(){
        if (reactiveState.spellcheck === true){
            // alert("mmm yah")
        }
    });
}


terminal.addEventListener("click", function(){
    renderDisplay.innerHTML =`
     Terminal/users/${userName}/${folderName}> 
    `;
});

output.addEventListener("click", function (){
    renderDisplay.innerHTML =`
        Hello from output
    `;
});

confg.addEventListener("click", function (){
    renderDisplay.innerHTML =`
        Hello from config
    `;
});

settings.addEventListener("click", function (){
    renderDisplay.innerHTML =`
        Hello from settings
    `;
});

// CreateFile
class CreateFolder {
    constructor(filename, extension) {
        this.filename = filename;
        this.extension = extension;
    }
}

// loads terminal window
const terminaWindow = document.querySelector(".innTerminal");


// btn to open terminal window
const showTerminal = document.getElementById("activateTerminal");

showTerminal.addEventListener("click", function(e){
    
    e.preventDefault();

    terminaWindow.style.display = 'block';

});

const killterminal = document.getElementById("closeTerminal");

killterminal.addEventListener("click", function(e){

    e.preventDefault();

    terminaWindow.style.display = 'none';

});

window.addEventListener("load", function (){
    terminaWindow.style.display = 'none';
});


function access (){

    fileInit.addEventListener("click", function (e){
        
        e.preventDefault();

        let ux = new CreateFolder("Test", ".bs");

        if(ux.extension !== '.bs'){

            console.log('ext not found');

            printFile.innerHTML = `<div id="renderedfile"><span id="err">.</span> ".bs" extension not found</div>`;

        } else {

            console.log('found ext');

            printFile.innerHTML = `<div id="renderedfile">${ux.filename + ux.extension}</div>`;
            
            someFilename.push(ux.filename + ux.extension);

            folderName.push(ux.filename);

            init();
        }

    });

}

access();

// let foldClass = new CreateFolder("File", "new date", "extension")
// console.log(foldClass)
