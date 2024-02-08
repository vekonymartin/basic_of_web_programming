//  
function messageOnConsole(){
    console.log("clicked!")

}

///
function messageWithPopup(){
    window.alert("clicked!")
}

///
function messageOnPage(){
    document.getElementById('message').innerHTML = 'clicked!'
}

// ----------------------------

//
function changeClassWithClick(){

    // long version
    // if(document.getElementById('img1').className == 'img1'){
    //     document.getElementById('img1').className = 'img1-after';
    // } else if(document.getElementById('img1').className == 'img1-after') {
    //     document.getElementById('img1').className = 'img1';
    // }

    // shorter version
    const img1 = document.getElementById('img1');
    img1.className = img1.className === 'img1' ? 'img1-after' : 'img1';
}

function showWindow() {
    document.getElementById('box').style.display = "none";
}