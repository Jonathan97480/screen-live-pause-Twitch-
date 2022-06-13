const minutes_text=document.getElementById('timer-minutes');
const seconds_text=document.getElementById('timer-seconds');
const minutes_text2=document.getElementById('timer-minutes2');
const seconds_text2=document.getElementById('timer-seconds2');
const block_time=document.getElementById("timer-container");




/**
 * Open popin form timer
 */
function open_popin_timer() {

    /* Create formulaire setting timer */
    let form_timer=document.createElement('form');
    form_timer.classList.add('form-timer');
    form_timer.style.display='flex';
    form_timer.style.flexDirection='column';
    form_timer.style.justifyContent='center';
    form_timer.style.alignItems='center';
    form_timer.style.flexWrap='nowrap';

    form_timer.style.position='fixed';




    let input_timer=document.createElement('input');
    input_timer.type='number';
    input_timer.name='timer';
    input_timer.placeholder='minutes';


    let input_timer_top_title=document.createElement('input');
    input_timer_top_title.type='text';
    input_timer_top_title.name='title';
    input_timer_top_title.placeholder='title';

    let inputSubmit=document.createElement('input');
    inputSubmit.type='submit';
    inputSubmit.value='start';

    /* TItle form */
    let title_form=document.createElement('h6');
    title_form.innerHTML='Setting timer';


    /* append child */
    form_timer.appendChild(title_form);
    form_timer.appendChild(input_timer_top_title);
    form_timer.appendChild(input_timer);
    form_timer.appendChild(inputSubmit);

    /* Get event sublit form timer */
    form_timer.addEventListener('submit', start_timer);

    document.getElementById('timer-container').appendChild(form_timer);
}





/**
 * get timer value from form and start timer
 * @param {HTMLFormElement} event 
 */
function start_timer(event) {

    event.preventDefault();

    if (event.target.timer.value=='') {

        alert('Please enter a value');


    } else {

        /* save value input form */
        let timer=event.target.timer.value*60;
        const title=event.target.title.value;


        /* close popin form timer */
        event.target.remove();


        /* update title page timer */
        document.querySelector('.timer-title').innerHTML=title.toUpperCase();

        /* start timer */
        const interval=setInterval(function () {
            timer--;
            let minute=Math.floor(timer/60);
            let second=timer%60;


            if (timer<=0) {
                document.getElementById('dialog').innerHTML="le live va biento commencer";
                clearInterval(interval);

                draw_timer({ minutes: '0', seconds: '0' });
            }

            draw_timer({ minutes: minute, seconds: second });


        }, 1000);



    }
}


/**
 * Update timer view
 * @param {minutes:string ,seconds:string} param 
 * @returns void
 */
function draw_timer({ minutes, seconds }) {

    let M=minutes.toString().split("");
    let S=seconds.toString().split("");

    if (M.length==1) {
        M.unshift("0");
    }

    if (S.length==1) {
        S.unshift("0");
    }

    minutes_text.innerHTML=M[0]
    minutes_text2.innerHTML=M[1]
    seconds_text.innerHTML=S[0]
    seconds_text2.innerHTML=S[1]

    if (minutes==0&&seconds==0) {
        block_time.style.display="none";
        return;
    }

    if (block_time.style.display==='none') {
        block_time.style.display="";

    }


}

/* open popin forn if html doc complete load  */
document.addEventListener('DOMContentLoaded', open_popin_timer);