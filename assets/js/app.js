// filtering internships selection
let eventItems = document.querySelectorAll('.event-item');
let items = [
    {
        title : 'Internship Human Resources - Psychology',
        location: 'Location: Brasov',
        duration: 'Duration: 2 months',
        startDate: 'Start date: July 1st',
        domain: 'Domain: HR',
        type: 'national',
        image: 'internship1.jpg',
        description: 'The incumbent is responsible for providing support in HR-related activities, the focus being in Recruitment and Employer Branding area. Additionally, the position holder will have the opportunity to gain knowledge on other HR processes.'
    },
     {
        title : 'Research Scientist Internship',
        location: 'Location: Seatle',
        duration: 'Duration: 4 months',
        startDate: 'Start date: June 15',
        domain: 'Domain: Research',
        type: 'international',
        image: 'antreprenoriat2.jpg',
        description: 'As a Research Scientist you will use your experience to develop new strategies to improve the performance of Amazon’s inbound systems and our vendor network. Working closely with fellow research scientists and product managers, you will use your experience in modeling, statistics, and simulation to design models of new policies, simulate their performance, and evaluate their benefits and impacts to cost, reliability, and speed of our fulfillment network. Using your analysis you will be present your findings to your peers, and work with product managers to integrate them into our product plans.'
    },
    {
        title : 'Research Intern – Children’s National Medical Center',
        location: 'Location: Timisoara',
        duration: 'Duration: 6 weeks',
        startDate: 'Start date: May 10',
        domain: 'Domain: Research',
        type: 'national',
        image: 'internship2.jpg',
        description: 'The Research Intern is an entry level clinical research position. The Intern will perform a variety of research, database and clerical duties of a routine and technical nature to support clinical trials and assist investigators to organize, gather and compile clinical research data.'
    },
    {
        title : 'Intern in Sales / Marketing',
        location: 'Location: Cluj',
        duration: 'Duration: 1 month',
        startDate: 'Start date: June 28',
        domain: 'Domain: Marketing',
        type: 'national',
        image: 'internship3.jpg',
        description: 'This position is responsible for assisting the Sales and Marketing team in the execution of our new lead generation strategy in conjunction with the recently launched Small Business Program for Connecticut and New Jersey. This role will help support the business through participation in our program of small business lead generation, qualification and conversion.'
    },
    {
        title : 'Internship Human Resources - Psychology',
        location: 'Location: Brasov',
        duration: 'Duration: 2 months',
        startDate: 'Start date: July 1st',
        domain: 'Domain: HR',
        type: 'national',
        image: 'internship4.jpg',
        description: 'The incumbent is responsible for providing support in HR-related activities, the focus being in Recruitment and Employer Branding area. Additionally, the position holder will have the opportunity to gain knowledge on other HR processes.'
    },
    {
        title : 'Internship/Design of a HMI Cockpit',
        location: 'Location: London',
        duration: 'Duration: 6 months',
        startDate: 'Start date: August 1st',
        domain: 'Domain: IT',
        type: 'international',
        image: 'portfolio-img-small3.jpg',
        description: 'The objective of this internship is to define a design method for an ARINC 661 application. You will be in charge of studying, more specifically the design of synoptic and virtual control panels linked to the system parameters of a helicopter.'
    }
    ];


let container = document.getElementById('container-internship');
let html = '';
for (var i=0; i<items.length; i++) {
    html += '<li class="event-item" data-national="' + items[i].type + '">' +
                '<div><img class="event-item-photo" src="assets/images/' + items[i].image + '"></div>' +
                '<span class="clearfix">&nbsp;</span>' +
                '<div class="event-item-content">' +
                  '<h3 class="event-item-content-heading">' + items[i].title + '</h3>' +
                  '<div class="event-item-content-details">' +
                      '<span>' + items[i].location + '</span>' +
                      '<span>' + items[i].duration + '</span>' +
                      '<span>' + items[i].startDate + '</span>' +
                      '<span>' + items[i].domain + '</span>' +
                      '<p>' + items[i].description + '</p>' +
                      '<button class="event-item-button" onclick="openPage()">Apply</button>'+
                  '</div>'+
              '</div>'+    
            '</li>';
}

container.innerHTML = html;



    
 
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

function openPage() {
    window.open('tobecontinued.html', '_blank');w
};

//     let applyBtn = document.querySelectorAll('.event-item-button');
//     console.log(applyBtn);

//     applyBtn.forEach(item => addEventListener('click', function(){
//         console.log(item);
//         window.open('tobecontinued.html', '_blank');
//         })
//     );

