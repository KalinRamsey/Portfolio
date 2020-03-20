
function main(){
    // Load each section on corresponding button click
    handleContentDisplay();
}

function handleContentDisplay() {
    $('#about-btn').on('click', e=>{
        // hide current content
        hideContent();
        // show corresponding content
        $('#about').css('display', 'block');
    });

    $('#port-btn').on('click', e=>{
        // hide current content
        hideContent();
        // show corresponding content
        $('#portfolio').css('display', 'block');
    });

    $('#contact-btn').on('click', e=>{
        // hide current content
        hideContent();
        // show corresponding content
        $('#contact').css('display', 'block');
    });
}

function hideContent(){
    $('#about, #portfolio, #contact').css('display', 'none');
}

$(main);