function main(){
    // Load each section on corresponding button click
    handleContentDisplay();
    handleContactSubmission();
}

function handleContactSubmission (){
    $('#contactForm').submit(e => {
        e.preventDefault();

        let subject = e.target.subject.value;
        let actionSubject = subject.split(' ').join('%20');
        // console.log(actionSubject);

        let message = e.target.message.value;
        let actionMessage = message.split(' ').join('%20');
        // console.log(actionMessage);
        
        let actionQuotes = "mailto:kalinramsey@gmail.com?subject=" + actionSubject + "&body=" + actionMessage;
        if (e.target.phone.value){
            actionQuotes += "%20\nCall%20Me%20at%20" + e.target.phone.value;
        }
        console.log(actionQuotes);

        $('#contactForm').attr('action', `${actionQuotes}`);
        
        e.currentTarget.submit();
    });
}

function handleContentDisplay() {
    $('#port-btn').on('click', e=>{
        // hide current content
        hideContent();
        // show corresponding content
        $('#portfolio').css('display', 'block');
    });
    
    $('#about-btn').on('click', e=>{
        // hide current content
        hideContent();
        // show corresponding content
        $('#about').css('display', 'block');
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