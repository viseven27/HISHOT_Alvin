
function releasePreloader() {
  // $(".preloader").delay(5000).fadeOut("slow");
  setTimeout(() => {
    document.querySelector("body").classList.remove("no-scroll");
    document.querySelector(".preloader").classList.add("fade-out");
    setTimeout(() => {
      document.querySelector(".preloader").remove();
    }, 1000);
  }, 5000)
}

var navNode = document.querySelector("nav");
let prevScrollpos = window.pageYOffset;
// get nav rendered background color 
// var navBg = navNode.computedStyleMap().get("background-color").toString().replaceAll(",", "").slice(0, -1); // Not work in Firefox currently
var navBg = "rgb(86 40 130"; // if nav background-color changed manually this must be changed
navNode.style.backgroundColor = navBg + ` / ${prevScrollpos > 100 ? 100 : prevScrollpos}%)`;

function hideNavBar() {
  navNode.style.top = "-200px";
}

function toggleNavbar() {
  if (window.innerWidth <= 768) {
    document.getElementById("menu").classList.toggle("show");
    document.querySelector("nav").classList.toggle("show");
  }
}

window.onscroll = () => {
  var currentScrollPos = window.pageYOffset;

  // navbar bg full transparent when on top of the page
  navNode.style.backgroundColor = navBg + ` / ${currentScrollPos > 100 ? 100 : currentScrollPos}%)`;

  // hide navbar on scroll down, show on scroll up
  if (prevScrollpos > currentScrollPos) {
    navNode.style.top = "0px";
  } else {
    if (!document.querySelector(".div-menu").classList.contains("show") || window.innerWidth > 768)
      hideNavBar();
  }
  // console.log(prevScrollpos, currentScrollPos)
  prevScrollpos = Number(window.pageYOffset);
}

function tryParseDate(dateString) {
  let date = new Date(dateString);
  if (date == "Invalid Date") {
    // alert("Invalid Event Date, make sure the format is correct!");
    throw "Error when parsing event date string!";
  }
  return date;
}

// index = 0 workshop, index 1 = seminar, index 2 = study tour
const events = [
  [
    // Workshop
    {
      "title": "Unlocking the Power of Data: A Data Science Workshop",
      "description": "The first HISHOT 2023 workshop will provide an excellent platform to gain new insights from seasoned experts in the field of Computer Vision. This workshop will present a discussion about how this transformative technological sophistication can revolutionize various industrial developments today.",
      "activities": [
        {
          "activityName": "Intro to Data Science",
          "speakerName": "David Brando Wilando",
          "linkedInURL": "",
          "pictureURL": "./assets/David Brando Wilando.jpg"
        }
      ],
      "date": "22 July 2023",
      "time": "13.00",
      "location": "Zoom Meetings",
      // "price": "Rp15.000,00",
      "registrationStart": "08 July 2023",
      "registrationEnd": "19 July 2023",
      "registrationUrl": "https://registration.himtibinus.or.id/events/51"
    }, {
      "title": "Seeing Beyond the Pixels: Exploring Computer Vision",
      "description": "The second HISHOT 2023 workshop will discuss the scientific field of data science with an experienced expert through exploration and in-depth discussion of this technology trend. Don't miss the opportunity to increase your skills and connect with professional networks on this platform.",
      "activities": [
        {
          "activityName": "Hands-On Computer Vision",
          "speakerName": "Nanda Pratama",
          "linkedInURL": "https://www.linkedin.com/in/nanda-pratama/",
          "pictureURL": "./assets/Nanda Pratama.jpg"
        }
      ],
      "date": "29 July 2023",
      "time": "13.00",
      "location": "Zoom Meetings",
      // "price": "Rp15.000,00",
      "registrationStart": "08 July 2023",
      "registrationEnd": "26 July 2023",
      "registrationUrl": "https://registration.himtibinus.or.id/events/52"
    },
  ],
  [
    // Seminar
    {
      "title": "AI for Good: How Artificial Intelligence Can Improve Human Life",
      "description": "This seminar event will serve as an exceptional platform to gain insights into the latest developments in the field of Artificial Intelligence and how this technology can enhance our interactions with machines and our understanding of the world around us.",
      "activities": [
        {
          "activityName": "ChatGPT:The Evolution of Conversation AI",
          "speakerName": "ADHELLA SUBALIE",
          "linkedInURL": "https://www.linkedin.com/in/adhella-subalie",
          "pictureURL": "assets/speaker-1.jpg"
        },
        {
          "activityName": "Computer Vision:Enhancing the Way We See the World with AI",
          "speakerName": "JONATHAN JORDY",
          "linkedInURL": "https://www.linkedin.com/in/jonathanjordy",
          "pictureURL": "assets/speaker-2.jpg"
        }
      ],
      "date": "17 June 2023",
      "time": "13.00",
      "location": "Binus Alam Sutera",
      // "price": "Rp20.000,00",
      "registrationStart": "05 June 2023",
      "registrationEnd": "14 June 2023",
      "registrationUrl": "https://registration.himtibinus.or.id/events/50"
    }
  ],
  [
    {
      //stdn
      "title": "Domestic Study Tour",
      // "description": "Coming Soon",
      "description": "STDN is one of the many events held by HISHOT 2023. This activity gives you a lot of insight into the development of the world of technology in Indonesian industry. We will see the real implementation of rapid technological movements in one of the large companies in Indonesia, namely the Technology Services Company. IBM Information.",
      "pictureURL": [
        "assets/IBM.jpg",
      ],
      "date": "13 October 2023",
      "time": "08.30-16.00",
      "location": "Jasa Teknologi Informasi IBM",
      "price": "Free!",
      "registrationStart": "25 September 2023",
      "registrationEnd": "8 October 2023",
      "registrationUrl": "https://registration.himtibinus.or.id/events/50"
    }, {
      // stln
      "title": "International Study Tour",
      "description": "Explore the wider world of technology by joining a study tour abroad with HISHOT. You have the opportunity to broaden your knowledge and experience of studying in Singapore.",
      "pictureURL": ["./assets/stln_6.png",
        "./assets/stln_izenoo.png",
        "./assets/stln_7.png",
        "./assets/stln_1.png",
        "./assets/stln_9.png",
        "./assets/stln_5.png",
        "./assets/stln_2.png",
        "./assets/stln_theshoppes.png",
        "./assets/stln_singaporescience.png",
        "./assets/stln_snowcity.png",

      ],
      "date": "14 December 2023",
      "endDate": "17 December 2023",
      // "time": "13.00",
      "location": "Singapore",
      "price": "Rp5.400.000,00",
      "registrationStart": "26 August 2023",
      "registrationEnd": "9 September 2023",
      "registrationUrl": "https://registration.himtibinus.or.id/events/65"
    }
  ]
];


function parseNewLine(str) {
  return String(str).replaceAll("\n", "<br>");
}

const activityComponent1 = (activity) => {
  return (
    `<div class="activity activity-variant1">
              <div class="speaker-profile flex flex-col">
                <div class="speaker-profile-picture">
                  <div class="circle-frame-var1">
                    <img loading="lazy" src="${activity.pictureURL}" class="speaker-photo">
                  </div>
                  <div class="frame-line frame-line-1-var1 frame-line-magenta"></div>
                  <div class="frame-line frame-line-2-var1 frame-line-magenta"></div>
                  <div class="frame-line frame-line-3-var1 frame-line-magenta"></div>
                  <div class="frame-line frame-line-4-var1 frame-line-magenta"></div>
                </div>
                <div class="speaker-detail flex flex-col mt-2">
                  <p class="underline text-center">Speaker</p>
                  <div class="content-speaker mt-3 flex">
                    <p class="speaker-name">${parseNewLine(activity.speakerName)}</p>
                    ${activity.linkedInURL ? `<a href="${activity.linkedInURL}" target="_blank" class="self-center ml-1">
                      <img src="assets/ph_linkedin-logo-bold.svg" alt="LinkedIn">
                    </a>`: ""
    }

                  </div>
                </div>
              </div>
              <div class="activity-detail">
                <div class="border-glow-magenta p-2 bold w-max">
                  What will be discovered?
                </div>
                <div class="activity-title">
                ${activity.activityName}
                </div>
              </div>
            </div>`
  );
}

const activityComponent2 = (activity) => {

  return (
    `         <div class="activity activity-variant2 flex-row-reverse">
              <div class="speaker-profile flex flex-col">
                <div class="speaker-profile-picture flex justify-end">
                  <div class="frame-line frame-line-1-var2 frame-line-blue"></div>
                  <div class="frame-line frame-line-2-var2 frame-line-blue"></div>
                  <div class="frame-line frame-line-3-var2 frame-line-blue"></div>
                  <div class="frame-line frame-line-4-var2 frame-line-blue"></div>
                  <div class="circle-frame-var2">
                    <img loading="lazy" src="${activity.pictureURL}" class="speaker-photo">
                  </div>
                </div>
                <div class="speaker-detail self-end  mt-2">
                    <p class="underline text-center">Speaker</p>
                    <div class="content-speaker mt-3 flex">
                      <p class="speaker-name2">${parseNewLine(activity.speakerName)}</p>
                      <a href="${activity.linkedInURL}" class="self-center ml-1">
                        <img src="assets/ph_linkedin-logo-bold.svg" alt="LinkedIn">
                      </a>
                    </div>
                </div>
              </div>
              <div class="activity-detail">
                <div class="border-glow-blue p-2 bold w-max">
                  What will be discovered?
                </div>
                <div class="activity-title">
                  ${activity.activityName}
                </div>
              </div>
            </div>`
  );
}

const activityComponent3 = (activity) => {

  return (
    `<div class="activity activity-variant1 ">
              <div class="speaker-profile flex flex-col">
                <div class="speaker-profile-picture">
                  <div class="circle-frame-var2">
                    <img loading="lazy" src="${activity.pictureURL}" class="speaker-photo">
                  </div>
                  <div class="frame-line frame-line-1-var1 frame-line-blue"></div>
                  <div class="frame-line frame-line-2-var1 frame-line-blue"></div>
                  <div class="frame-line frame-line-3-var1 frame-line-blue"></div>
                  <div class="frame-line frame-line-4-var3 frame-line-blue"></div>
                </div>
                
                <div class="speaker-detail mt-2">
                    <p class="underline text-center">Speaker</p>
                  <div class="content-speaker2 mt-3 flex">
                    <p class="speaker-name3">${parseNewLine(activity.speakerName)}</p>
                    ${activity.linkedInURL ? `<a href="${activity.linkedInURL}" target="_blank" class="self-center ml-1">
                      <img src="assets/ph_linkedin-logo-bold.svg" alt="LinkedIn">
                    </a>`: ""
    }
                  </div>
                </div>
                
              </div>
              <div class="activity-detail">
                <div class="border-glow-blue p-2 bold w-max">
                  What will be discovered?
                </div>
                <div class="activity-title">
                ${activity.activityName}
                </div>
              </div>
            </div>`
  );
}

const eventComponent = (event, idx) => {
  var activities = ``;
  var curdate = new Date();
  var eventDate = tryParseDate(event.registrationEnd);
  var diff = (eventDate.getTime() + 86400000) - curdate.getTime();
  for (var i = 0; i < event.activities.length; i++) {
    if (event.activities.length == 1) {
      activities += activityComponent3(event.activities[i]);
    }
    else if ((i + 1) % 2 == 0) {
      activities += activityComponent2(event.activities[i]);
    } else {
      activities += activityComponent1(event.activities[i]);
    }
  }
  return `<div class="flex flex-col items-center">
        <h2 class="event-title text-4xl m-4 bold text-center">${event.title}</h2>
        <p class="event-description">${event.description}</p>
        <div class="event-container flex flex-wrap justify-center">
          <div class="activity-list">
          ${activities}
          </div>
          <div class="event-details flex flex-col">
            <div class="flex flex-col gap-4">
              <div class="event-detail flex items-center">
                <img src="./assets/calendar.svg">
                ${new Date(event.date).toLocaleDateString("en-US", { weekday: "long" })}, ${event.date}
              </div>
              <div class="event-detail flex items-center">
                <img loading="lazy" src="./assets/clock.svg">
                ${event.time}
              </div>
              <div class="event-detail flex items-center">
                <img loading="lazy" src="./assets/location.svg">
                ${event.location}
              </div>
              ${event.price ?
      `         <div class="event-detail flex items-center">
                <img loading="lazy" src="./assets/money.svg">
                ${event.price} Only
              </div>`: ""}

            </div>

            <div class="registration-container">
              <h2 class="bold">Registration Period</h2>
              <p>${event.registrationStart} - ${event.registrationEnd}</p>
              <div class="countdown-container">
                <div class="countdown" cnt-id="${idx}">
                  <div class="countdown-text">-</div>
                  <div class="countdown-text">-</div>
                  <p>:</p>
                  <div class="countdown-text">-</div>
                  <div class="countdown-text">-</div>
                  <p>:</p>
                  <div class="countdown-text">-</div>
                  <div class="countdown-text">-</div>
                  <p>:</p>
                  <div class="countdown-text">-</div>
                  <div class="countdown-text">-</div>
                </div>
                <div class="countdown-detail">
                  <p>Days</p>
                  <p>Hours</p>
                  <p>Minutes</p>
                  <p>Seconds</p>
                </div>
              </div>
                ${diff < 0 ? "" : `<a href="${event?.registrationUrl}" target="_blank">
                <button class="event-register-btn" >
                  <img loading="lazy" src="./assets/register-icon.png" >Register Now!
                </button>
              </a>`}          
            </div>
          </div>
        </div>
      </div>
`
}



const studyTourComponent = (event, idx) => {
  var num = idx % 2;
  var curdate = new Date();
  console.log(event)
  var eventDate = tryParseDate(event.registrationEnd);
  var diff = (eventDate.getTime() + 86400000) - curdate.getTime();
  var picSlide;

  if (event.pictureURL.length >= 1) {
    var c = "";
    event.pictureURL.forEach((e) => {
      c += `<img class="swiper-slide studyTourImg" onload=detectWrapEvent() loading="lazy" src="${e}">`;
    })


    picSlide = `
          <div class="swiper studyTourImgSlide" id="studyTourImgSlide-${idx}">
          <!-- Additional required wrapper -->
            <div class="swiper-wrapper">
                <!-- Slides -->
                ${c}
            </div>
        </div>`
  }
  return `<div class="flex flex-col items-center">
        <h2 class="event-title text-4xl m-4 bold text-center">${event.title}</h2>
        <p class="event-description">${event.description}</p>
        <div class="event-container flex flex-wrap justify-center">
          <div class="activity-list">
          <div class="${num == 0 ? "stdn" : "stln"} studyTourImgContainer">
          
          ${event.pictureURL.length == 1 ? `<img loading="lazy" class="studyTourImg" src= "${event.pictureURL[0]}" onload=detectWrapEvent()>` :
      `${picSlide}`
    }
          </div>  
          </div>
          <div class="event-details flex flex-col">
            <div class="flex flex-col gap-4">
            
              <div class="event-detail flex items-center">
                <img src="./assets/calendar.svg">
                ${new Date(event.date).toLocaleDateString("en-US", { weekday: "long" })}, ${event.date} ${event.endDate ? `- ${new Date(event.endDate).toLocaleDateString("en-US", { weekday: "long" })}, ${event.endDate}` : ""}
              </div>
              ${event.time ?
      `<div class="event-detail flex items-center">
                <img loading="lazy" src="./assets/clock.svg">
                ${event.time}
              </div>`: ""}
              <div class="event-detail flex items-center">
                <img loading="lazy" src="./assets/location.svg">
                ${event.location}
              </div>
              ${event.price ?
      `         <div class="event-detail flex items-center">
                <img loading="lazy" src="./assets/money.svg">
                ${event.price}
              </div>`: ""}
            </div>
            
            <div class="registration-container">
              <h2 class="bold">Registration Period</h2>
               <p>${event.registrationStart} - ${event.registrationEnd}</p>
                <div class="countdown-container">
                  <div class="countdown" cnt-id="${idx}">
                    <div class="countdown-text">-</div>
                    <div class="countdown-text">-</div>
                    <p>:</p>
                    <div class="countdown-text">-</div>
                    <div class="countdown-text">-</div>
                    <p>:</p>
                    <div class="countdown-text">-</div>
                    <div class="countdown-text">-</div>
                    <p>:</p>
                    <div class="countdown-text">-</div>
                    <div class="countdown-text">-</div>
                  </div>
                  <div class="countdown-detail">
                    <p>Days</p>
                    <p>Hours</p>
                    <p>Minutes</p>
                    <p>Seconds</p>
                  </div>
                </div>
              ${diff < 0 ? "" :
      event.date == null ?
        `<button class="event-register-btn">
                  Coming Soon!
                </button>` :
        `<a href="${event?.registrationUrl}" target="_blank">
                  <button class="event-register-btn">
                    <img loading="lazy" src="./assets/register-icon.png">Register Now!
                  </button>
                </a>`
    }
            </div>
          </div>
        </div>
      </div>`

}

function currentDiv(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  if (n > x.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = x.length }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" w3-opacity-off", "");
  }
  x[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " w3-opacity-off";
}

const sliderComponent = (events) => {
  let c = '';
  events.forEach((event) => {
    c += `<div class="swiper-slide">
    ${event}
            </div>`;
  })

  return (
    `   <div class="swiper sample-slider">
          <!-- Additional required wrapper -->
          <div class="swiper-wrapper">
            <!-- Slides -->
            ${c}
          </div>
          
          <div class="swiper-pagination"></div>
          <!-- If we need navigation buttons -->
          <div class="swiper-button-prev arrow-left"></div>
          <div class="swiper-button-next arrow-right"></div>

        </div>`
  )
}

let tba = `<div class="event-details event-st">
  tba
</div>`;

var option = 0;

function createSlider(id) {
  if (document.querySelector(".sample-slider")) {
    try {
      const swiper = new Swiper('.sample-slider', {
        loop: true,                         //loop
        navigation: {                       //navigation(arrow)
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        pagination: {
          el: '.swiper-pagination',
        },
      })
    } catch (err) {
      // in case failed to create swiper
      console.log(err, "retrying in 1 sec...");
      return setTimeout(() => {
        createSlider(id);
      }, 1000)
    }
  }
}

function renderEvents(target) {
  console.log(option);
  let str = '';
  if (events[option].length > 1) {
    let nodes = [];
    events[option].forEach((event, idx) => {
      if (option == 2) {
        nodes = [...nodes, studyTourComponent(event, idx)]
      } else
        nodes = [...nodes, eventComponent(event, idx)]
    })
    str = sliderComponent(nodes);
  } else if (events[option].length == 1) {
    if (option == 2) str = studyTourComponent(events[option][0], 0);
    else str = eventComponent(events[option][0], 0);
  } else {
    str = tba;
  }
  target.innerHTML = str;
  if (option == 2) {
    document.querySelectorAll(".studyTourImgSlide").forEach((e) => {
      new Swiper(`#${e.id} `, {
        loop: true,
        slidesPerView: 1,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false
        }
      })
    })
  }
  createSlider();
}

function detectWrapEvent() {
  var elm = document.querySelectorAll(".event-container > *")
  try {
    var curr = elm[1].getBoundingClientRect()
    var prev = elm[0].getBoundingClientRect()
    var container = document.querySelectorAll(".event-container");
    if (curr.bottom > prev.bottom) {
      container.forEach(elm => {
        elm.classList.add("event-hide-line");
      })
    }
    else {
      container.forEach(elm => {
        elm.classList.remove("event-hide-line");
      })
    };
  } catch (e) {
    // console.log("Error when detecting wrap ", e);
  }

}

function detectWrapActivity() {
  try {
    var elm = document.querySelectorAll(".activity > *")
    var curr = elm[1].getBoundingClientRect()
    var prev = elm[0].getBoundingClientRect()
    var targets = document.querySelectorAll(".speaker-profile-picture");
    if (curr.bottom > prev.bottom) {
      targets.forEach(elm => {
        elm.classList.add("speaker-profile-picture-wrap")
      })
    } else {
      targets.forEach(elm => {
        elm.classList.remove("speaker-profile-picture-wrap")
      })
    }
  } catch (e) {
    console.log("Error when detecting wrap ", e);
  }

}

window.addEventListener("resize", () => {
  detectWrapEvent();
  detectWrapActivity();
})



window.onload = () => {
  releasePreloader();
  detectWrapEvent();
  detectWrapActivity();

  // initialize event list
  let elms = document.querySelectorAll(".event-item");
  let target = document.querySelector(".event-details-container");
  let str;
  elms.forEach(elm => {
    if (elm.hasAttribute('selected')) {
      switch (elm.id) {
        case 'event-workshop':
          option = 0;
          break;
        case 'event-seminar':
          option = 1;
          break;
        case 'event-studyTour':
          option = 2;
          break;
      }
      renderEvents(target);
      return;
    }
  })
}

function changeEventCategory(elm) {
  let id = elm.id;
  let elms = document.querySelectorAll(".event-item");
  if (!elms.length) {
    return console.error("No event element");
  }
  elms.forEach(e => {
    if (e.id != id && e.hasAttribute('selected')) {
      e.removeAttribute('selected');
    } else if (e.id == id) {
      if (e.hasAttribute('selected')) return;
      e.setAttribute('selected', '');
    }
  })
  let target = document.querySelector(".event-details-container");
  switch (id) {
    case 'event-workshop':
      option = 0;
      break;
    case 'event-seminar':
      option = 1;
      break;
    case 'event-studyTour':
      option = 2;
      break;
  }

  target.classList.add('fade-out');
  setTimeout(() => {
    renderEvents(target);
    detectWrapEvent();
    detectWrapActivity();
    target.classList.remove('fade-out');
  }, 500)
}

function updateCountDown(date, cntdwn) {
  var curdate = new Date();
  var eventDate = tryParseDate(date);
  var diff = (eventDate.getTime() + 86400000) - curdate.getTime();
  var cntStr = "";
  if (diff > 0) {
    cntStr = [...cntStr, Math.floor(diff / 1000 / 60 / 60 / 24).toString().padStart(2, '0')];
    cntStr = [...cntStr, Math.floor(diff / 1000 / 60 / 60 % 24).toString().padStart(2, '0')];
    cntStr = [...cntStr, Math.floor(diff / 1000 / 60 % 60).toString().padStart(2, '0')];
    cntStr = [...cntStr, Math.floor(diff / 1000 % 60).toString().padStart(2, '0')];
    cntStr = cntStr.join(":");
  } else {
    cntStr = "00:00:00:00";
  }

  for (let i = 0; i < cntStr.length; i++) {
    cntStr[i] == cntdwn[i].innerText ? null : cntdwn[i].innerText = cntStr[i];
  }
}

var countdownUpdater = setInterval(() => {
  document.querySelectorAll(".countdown").forEach((item) => {
    updateCountDown(events[option][item?.getAttribute("cnt-id")].registrationEnd, item.children);
  });
}, 1000);


// FAQ

const faqItems = document.querySelectorAll(".faq_accordion_item");

for (const faqItem of faqItems) {
  const faqHeader = faqItem.querySelector(".faq_accordion_header");

  faqHeader.addEventListener("click", function() {
    const faqAnswer = faqItem.querySelector(".faq_accordion_answer");
    if (faqAnswer.classList.contains("faq_accordion_answer__expand")) {
      faqAnswer.classList.remove("faq_accordion_answer__expand");
    } else {
      faqAnswer.classList.add("faq_accordion_answer__expand");
    }

    const plus = faqHeader.querySelector(".faq_plus-vertical");
    if (plus.classList.contains("faq_plus-vertical__close")) {
      plus.classList.remove("faq_plus-vertical__close");
    } else {
      plus.classList.add("faq_plus-vertical__close");
    }


    for (const otherFaqItem of faqItems) {
      if (otherFaqItem !== faqItem) {
        const faqAnswer = otherFaqItem.querySelector(".faq_accordion_answer");
        if (faqAnswer.classList.contains("faq_accordion_answer__expand")) {
          faqAnswer.classList.remove("faq_accordion_answer__expand");
          // closed = i;
        }

        const faqHeader = otherFaqItem.querySelector(".faq_accordion_header");
        const plus = faqHeader.querySelector(".faq_plus-vertical");
        if (plus.classList.contains("faq_plus-vertical__close")) {
          plus.classList.remove("faq_plus-vertical__close");
          // closed = i;
        }
      }
    }
  });
}