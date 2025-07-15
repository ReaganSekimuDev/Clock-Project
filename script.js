
// <..........................................Stop Watch...............................>
let music = document.querySelector("#music");

let hours = document.getElementById("hours");
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");

const currentTime = document.querySelector("#currentTime");

let time;
let hrs = 0;
let min = 0;
let sec = 0;
let ctime ="";

function Stt() {
    time = setInterval(() => {
        sec++;
        if (sec <= 9) {
            seconds.innerHTML = "0"+sec;
        } else {
            seconds.innerHTML = sec;
        }
        if (sec === 60) {
            min++;
            if (min <= 9) {

                minutes.innerHTML = "0"+min;
            } else {
                minutes.innerHTML = min;
            }
            sec = 0+"0";
            if (min === 60) {
                hrs++;
                if (hrs <= 9) {
                    hours.innerHTML = "0"+hrs;
                } else {
                    hours.innerHTML = hrs;
                }
                min = 0;
                if (hrs == 24) {
                    hrs = 0+"0";
                }
            }
        }
    },1000)
    event.target.style.background = " #8e5603";
    event.target.style.outline = "none";
    event.target.style.border = "none";
    event.target.style.cursor = "pointer";
}
function Leav(){
    event.target.style.background = "";
    event.target.style.cursor = "pointer";
    event.target.style.border = "";
}

function Stp() {
    clearInterval(time)
    event.target.style.background = " #8e5603";
    event.target.style.outline = "none";
    event.target.style.border = "none";
    event.target.style.cursor = "pointer";
}
function Rst() {
    Stp()
    min = 0;
    hrs = 0;
    sec = 0;
    hours.innerHTML = 0+"0";
    minutes.innerHTML = 0+"0";
    seconds.innerHTML = 0+"0";
    event.target.style.background = " #8e5603";
    event.target.style.outline = "none";
    event.target.style.border = "none";
    event.target.style.cursor = "pointer";
    
}

// <........................................Real Time..........................................>

let tdate = setInterval( () => CurrentTime(),100)
function CurrentTime() {
    let date = new Date();
        ctime = date.getHours()+":"+date.getMinutes()+":"+date.getSeconds();
        currentTime.innerHTML = ctime;
}

// <.........................................Count Down...................................>

let hrs2 = document.querySelector("#hrs2");
let min2 = document.querySelector("#min2");
let sec2 = document.querySelector("#sec2");
let msec = document.querySelector("#msec");

let HoursTxt = document.getElementById("HoursTxt");
let MinutesTxt = document.getElementById("MinutesTxt");
let SecondsTxt = document.getElementById("SecondsTxt");

let Chours;
let Cmin;
let Csec;
let Cmic;

let CtimeH;
let CtimeM;
let CtimeS;
let CtimeU;
//music.play()

//<..........................................Hour Start Button..................................>

function CHSt(){
    Chours = Number(HoursTxt.value);
    HoursTxt.value = '';

    if (Chours > 0) {

        CtimeH = setInterval( FCtimeH ,3600000);
        CtimeM = setInterval( FCtimeM,60000);
        CtimeS = setInterval( FCtimeS,1000);
        CtimeU = setInterval( FCtimeU,1);

        Cmin = 60;
        Csec = 60;
        Cmic = 60;
        
        if (Chours <= 9) {
            hrs2.innerHTML = "0"+Chours;
        }else {
            hrs2.innerHTML = Chours; 
        }
        function FCtimeH() {
            Chours--;
                    if (Chours <= 9) {
            hrs2.innerHTML = "0"+Chours;
        }else {
            hrs2.innerHTML = Chours; 
        }
            if (Chours <= 0) {
                clearInterval(CtimeH);
                icon[1].classList.add("iconsSlide");
                music.play()
            }
        }

        if (Cmin <= 9) {
            min2.innerHTML = "0"+Cmin;
        }else {
            min2.innerHTML = Cmin; 
        }
        function FCtimeM() {
            Cmin--;
            if (Cmin === 0 && Chours > 0) {
                Cmin = 60;
            }
            else if (Cmin === 0 && Chours <=0 ) {
                clearInterval(CtimeM);
                icon[1].classList.add("iconsSlide");
                music.play()
            }
            if (Cmin <= 9) {
                min2.innerHTML = "0"+Cmin;
            }else {
                min2.innerHTML = Cmin; 
            }
        }
        
        if (Csec <= 9) {
            sec2.innerHTML = "0"+Csec;
        }else {
            sec2.innerHTML = Csec; 
        }
        function FCtimeS() {
            Csec--;
            if (Csec === 0 && Cmin > 0) {
                Csec = 60;
            } else if (Csec === 0 && Cmin <=0 ) {
                clearInterval(CtimeS);
                icon[1].classList.add("iconsSlide");
                music.play()
            }
            if (Csec <= 9) {
                sec2.innerHTML = "0"+Csec;
            }else {
                sec2.innerHTML = Csec; 
            }
        }

        if (Cmic <= 9) {
                msec.innerHTML = "0"+Cmic;
            }else {
                msec.innerHTML = Cmic; 
            }
        function FCtimeU() {
            Cmic--;
            if (Cmic === 0 && Csec > 0) {
                Cmic = 60;
            }
            else if (Cmic === 0 && Csec  <= 0){
                clearInterval(CtimeU);
                icon[1].classList.add("iconsSlide");
                music.play()
            }
            if (Cmic <= 9) {
                msec.innerHTML = "0"+Cmic;
            }else {
                msec.innerHTML = Cmic; 
            }
        }

    }
    event.target.stylye.background = "rgb(101, 5, 77)"
    event.target.style.border = "none"
}

//....................................Minutes Start Button...................................>

function CMSt(){
    Cmin = Number(MinutesTxt.value);
    MinutesTxt.value = '';

    if (Cmin > 0) {
        CtimeM = setInterval( FCtimeM,60000);
        CtimeS = setInterval( FCtimeS,1000);
        CtimeU = setInterval( FCtimeU,1);

        Csec = 60;
        Cmic = 60;
        
        if (Cmin <= 9) {
                min2.innerHTML = "0"+Cmin;
            }else {
                min2.innerHTML = Cmin; 
            }
        function FCtimeM() {
            Cmin--;
            if (Cmin <= 0) {
                clearInterval(CtimeM);
                icon[1].classList.add("iconsSlide");
                music.play()
            }
            if (Cmin <= 9) {
                min2.innerHTML = "0"+Cmin;
            }else {
                min2.innerHTML = Cmin; 
            }
        }

            if (Csec <= 9) {
                sec2.innerHTML = "0"+Csec;
            }else {
                sec2.innerHTML = Csec; 
            }
        function FCtimeS() {
            Csec--;
            if (Csec === 0 && Cmin > 0) {
                Csec = 60;
            }
            else if (Csec === 0 && Cmin <=0 ) {
                clearInterval(CtimeS);
                icon[1].classList.add("iconsSlide");
                music.play()
            }
            if (Csec <= 9) {
                sec2.innerHTML = "0"+Csec;
            }else {
                sec2.innerHTML = Csec; 
            }
        }

        if (Cmic <= 9) {
                msec.innerHTML = "0"+Cmic;
            }else {
                msec.innerHTML = Cmic; 
            }
        function FCtimeU() {
            Cmic--;
            if (Cmic === 0 && Csec > 0) {
                Cmic = 60;
            } else if (Cmic === 0 && Csec <=0 ) {
                clearInterval(CtimeU);
                icon[1].classList.add("iconsSlide");
                music.play()
            }
            if (Cmic <= 9) {
                msec.innerHTML = "0"+Cmic;
            }else {
                msec.innerHTML = Cmic; 
            }
        }

    }
    event.target.style.background = "rgb(101, 5, 77)"
    event.target.style.border = "none"
}

//<..................................Seconds Start Button...............................>

function CSSt(){
    Csec = Number(SecondsTxt.value);
    SecondsTxt.value = '';

    if (Csec > 0) {
        CtimeS = setInterval( FCtimeS,1000);
        CtimeU = setInterval( FCtimeU,1);

        Cmic = 60;

            if (Csec <= 9) {
                sec2.innerHTML = "0"+Csec;
            }else {
                sec2.innerHTML = Csec; 
            }
            function FCtimeS() {
                Csec--;
                if (Csec <= 9) {
                    sec2.innerHTML = "0"+Csec;
                }else {
                    sec2.innerHTML = Csec; 
                }
                if (Csec <= 0) {
                    clearInterval(CtimeS);
                    icon[1].classList.add("iconsSlide");
                    music.play()
            }
        }
        
            if (Cmic <= 9) {
                msec.innerHTML = "0"+Cmic;
            }else {
                msec.innerHTML = Cmic; 
            }
        function FCtimeU() {
            Cmic--;
            if (Cmic === 0 && Csec > 0) {
                Cmic = 60;
            }
            else if (Cmic === 0 && Csec <=0 ) {
                clearInterval(CtimeU)
                icon[1].classList.add("iconsSlide");
                music.play()
            }
            if (Cmic <= 9) {
                msec.innerHTML = "0"+Cmic;
            }else {
                msec.innerHTML = Cmic; 
            }
        }
    }
    event.target.style.background = "rgb(101, 5, 77)"
    event.target.style.border = "none"
}

//<..........................Stop Button && Resst Button................>
function CHStp() {
    clearInterval(CtimeH)
    clearInterval(CtimeM)
    clearInterval(CtimeS)
    clearInterval(CtimeU)
    icon[1].classList.remove("iconsSlide");
    music.pause()
    music.currentTime = 0;
    event.target.style.background = "rgb(101, 5, 77)"
    event.target.style.border = "none"

}
function CHRst() {
    /*
        background-color: rgb(101, 5, 77);
    border: none;
    */
    event.target.style.background = "rgb(101, 5, 77)"
    event.target.style.border = "none"
    CHStp();
    Chours = 0;
    Cmin = 0;
    Csec = 0;
    Cmic = 0;
    hrs2.innerHTML = "00";
    min2.innerHTML = "00";
    sec2.innerHTML = "00";
    msec.innerHTML = "00";
}

let select = document.getElementById("select");
let MinutesBtns = document.querySelector(".MinutesBtns");
let SecondsBtns = document.querySelector(".SecondsBtns");
let HoursBtns = document.querySelector(".HoursBtns");
let CountName = document.getElementById("CountName");

select.addEventListener('change', () => {
    if (select.value == "Minutes") {
        //CountName.innerHTML = "Minutes"
        
        HoursTxt.style.display = "none";
        SecondsTxt.style.display = "none";
        MinutesBtns.style.display = "block";
        
        SecondsBtns.style.display = "none";
        HoursBtns.style.display = "none";
        MinutesTxt.style.display = "block";
    }
    else if (select.value == "Seconds") {
        //CountName.innerHTML = "Seconds";
        
        HoursTxt.style.display = "none";
        MinutesTxt.style.display = "none"
        SecondsTxt.style.display = "block";
        
        MinutesBtns.style.display = "none";
        HoursBtns.style.display = "none";
        SecondsBtns.style.display = "block";
    } 
    else if (select.value == "Hours") {
        //CountName.innerHTML = "Hours";

        SecondsTxt.style.display = "none";
        MinutesTxt.style.display = "none"
        HoursTxt.style.display = "block";

        SecondsBtns.style.display = "none";
        MinutesBtns.style.display = "none";
        HoursBtns.style.display = "block";
    }
})

/*.................................Alarm-Section............................................*/

let alarm = document.querySelector("#timeInput");
//let b = document.querySelector("#b");
let alarmSong = document.getElementById("songg")
let alarmBtn = document.querySelectorAll("button")
let RealH;
let RealM;

let AlarmH;
let AlarmM;
let AlarmS
let a = 0;
let alarmInterval;
let alarmBtnColor_1;
let alarmBtnColor_2;

window.addEventListener('load', () => {
    let newD = new Date();
    alarm.value = newD.getHours() +":"+newD.getMinutes();
})
function clickEffect(alarmBtnNum) {
    setTimeout( () => {
        alarmBtn[alarmBtnNum].style.background = `${alarmBtnColor_1}`;
    },100)
    setTimeout( () => {
        alarmBtn[alarmBtnNum].style.background = `${alarmBtnColor_2}`;
    },200)
    
}
let check = document.getElementById("check");
function setAlarm() {
    alarmBtnColor_1 = "blue";
    alarmBtnColor_2 = "#173459";
    clickEffect(12)
    AlarmH = alarm.value.slice(0,2)
    AlarmM = alarm.value.slice(3,5)
    alarmInterval = setInterval(() => CheckAlarm(),100)
    check.style.display ="block";
}
function reSetAlarm(){
    icon[2].classList.remove("iconsSlide");
    let newD = new Date();
    alarm.value = newD.getHours() +":"+newD.getMinutes();
    alarmBtnColor_1 = "blue";
    alarmBtnColor_2 = "#173459";
    clickEffect(13)
    clearInterval(alarmInterval)
    alarmSong.pause();
    alarmSong.currentTime = 0;

    check.style.display ="none";
}
function CheckAlarm() {
    let date = new Date(); 
    HH = date.getHours();
    MM = date.getMinutes();
    
    if (HH == AlarmH && MM == AlarmM) {
        icon[2].classList.add("iconsSlide");
        alarmSong.play()
        if (alarmSong.currentTime >= 40){
            alarmSong.pause()
            alarmSong.currentTime = 0;
        }
        setTimeout( () => {
            icon[2].classList.remove("iconsSlide");
            //console.log("Finiseggg")
            alarmSong.pause()
            alarmSong.currentTime = 0;
        },1200000)
    }
    
    AlarmS = date.getSeconds();
    //b.innerHTML = AlarmS;
} 

function SetAlarmSOng(file) {
    let alarmReader = new FileReader()
    alarmReader.onload = (e) => {
        alarmSong.src = e.target.result;
    }
    alarmReader.readAsDataURL(file[0]);
}

let StopWatch = document.querySelector(".StopWatch");
let ClockType = document.querySelector("#ClockType");
let CountDown = document.querySelector(".CountDown");
let labelForSong = document.querySelector("#labelForSong");
let AlarmSection = document.getElementById("AlarmSection");

let icon = document.querySelectorAll(".icon");

ClockType.addEventListener("change", () => {
    if (ClockType.value == "StopWatch") {
        icon[1].style.display = "none";
        icon[2].style.display = "none";
        icon[0].style.display = "block";
        CountDown.style.display = "none";
        AlarmSection.style.display = "none";
        labelForSong.style.display = "none";
        StopWatch.style.display = "block";
    }
    else if (ClockType.value == "CountDown") {
        icon[0].style.display = "none";
        icon[2].style.display = "none";
        icon[1].style.display = "block";
        StopWatch.style.display = "none";
        AlarmSection.style.display = "none";
        labelForSong.style.display = "block";
        CountDown.style.display = "block";
    }
    else if(ClockType.value == "Alarm") {
        icon[0].style.display = "none";
        icon[2].style.display = "block";
        icon[1].style.display = "none";
        StopWatch.style.display = "none";
        CountDown.style.display = "none";
        labelForSong.style.display = "none";
        AlarmSection.style.display = "block";

    }
        
})



//........................Clock Color Animation..........................................

function ClockAnimation() {
    
    color = ["rgb(5, 244, 152)","rgb(199, 62, 3)","rgb(134, 199, 3)","rgb(230, 238, 6)","rgb(145, 157, 152)","rgb(125, 220, 2)","gold","fuchsia","white","aqua"]
    let clock = document.querySelector("#currentTime");
    setInterval( () => {
        let randomColor = Math.floor(Math.random() * color.length)
        clock.style.color = color[randomColor];
    },2000)
}
ClockAnimation()

function chooseSong(files) {
    let pp = document.querySelector("#pp");
    let reader = new FileReader();
    reader.onload = (e) => {
        music.src = e.target.result;
    }
    reader.readAsDataURL(files[0])
}

/*........................Additional Functionalities.............................*/
let refreshe = document.querySelector(".ref"); 
function refresh() {
    refreshe.classList.add("refresher")
    setTimeout(() => {
        location.reload()

    },1000)
}