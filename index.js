var timer=document.querySelector('#timer');
var startbtn=document.querySelector('#startbtn');
var resetbtn=document.querySelector('#resetbtn');
var stopbtn=document.querySelector('#stopbtn');
startbtn.addEventListener('click',()=>{startTimer()});
stopbtn.addEventListener('click',()=>{stopTimer()});
resetbtn.addEventListener('click',()=>{resetTimer()});


var hrs= 00;
var mins=00;
var secs= 00;
var millisecs=00;
var myVar;


function startTimer()
{  
    clearInterval(myVar)
    myVar = setInterval(()=>{
        millisecs+=1
        if(millisecs==100)
        {
            millisecs=0;
            secs+=1
        }
        if(secs==60)
        {
            secs=0;
            mins+=1
        }
        if(mins==60)
        {
            mins=0;
            hrs+=1
        }
        
        timer.innerText=`${hrs<10? `0${hrs}`: hrs}:${mins<10? `0${mins}`: mins}:${secs<10? `0${secs}`: secs}:${millisecs<10? `0${millisecs}`: millisecs}`;
    },10);
}

function stopTimer()
{ 
    timer.innerText=`${hrs<10? `0${hrs}`: hrs}:${mins<10? `0${mins}`: mins}:${secs<10? `0${secs}`: secs}:${millisecs<10? `0${millisecs}`: millisecs}`;
    clearInterval(myVar);
}

function resetTimer()
{
    hrs=00;
    mins=00;
    secs=00;
    millisecs=00;
    timer.innerText=`${hrs<10? `0${hrs}`: hrs}:${mins<10? `0${mins}`: mins}:${secs<10? `0${secs}`: secs}:${millisecs<10? `0${millisecs}`: millisecs}`;
    clearInterval(myVar);
}