// filtering internships selection
let eventItems = document.querySelectorAll('.event-item');

function national() {
    eventItems.forEach(item => {
        if (item.hasAttribute('data-international')) {
            item.classList.add('hidden');            
        } else {
            item.classList.remove('hidden');  
        }
    });
};

function international() {
    eventItems.forEach(item => {
        if (item.hasAttribute('data-national')) {
            item.classList.add('hidden');
        } else {
            item.classList.remove('hidden');
        }
    });
};


// open new page on click 'apply' buttons
let applyBtn = document.querySelectorAll('.event-item-button');

applyBtn.forEach(item => addEventListener('click', function(){
    window.open('tobecontinued.html', '_blank');
    })
)


