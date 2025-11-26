import "./counter.css";
import { useState,useRef,useEffect } from "react";
type timeSegment = {
    first:string
    second:string
}
type timeType ={
    days:timeSegment
    hours:timeSegment
    minutes:timeSegment
    seconds:timeSegment
}

export default function Counter(){
    const [time,setTime] = useState<timeType>({
        days:{first:"0",second:"0"},
        hours:{first:"0",second:"0"},
        minutes:{first:"0",second:"0"},
        seconds:{first:"0",second:"0"}
    })


    const targetRef = useRef<Date>(new Date(Date.now() + 2 * 24 * 60 * 60 * 1000));
    const prevTime = useRef(time)
    const container = useRef<HTMLDivElement>(null)

    function splitDigits(num:number){
        const string = num.toString().padStart(2,'0') 

        return {
            first:string[0],
            second:string[1]
        }
    }

    function updateTime(){
        const now = new Date();
        const target = targetRef.current;
        if(!target) return
        const diff = target.getTime() - now.getTime();
        if(diff <= 0) return 
        setTime({
            days:splitDigits(Math.floor(diff / (1000 * 60 * 60 * 24))),
            hours:splitDigits(Math.floor((diff / (1000 * 60 * 60)) % 24)),
            minutes:splitDigits(Math.floor((diff / (1000 * 60)) % 60)),
            seconds:splitDigits( Math.floor((diff / 1000) % 60))
        });
    }

    function compareTimeSegments(segment:keyof timeType){
        return `${time[segment].first}${time[segment].second}` === `${prevTime.current[segment].first}${prevTime.current[segment].second}`
    }


    function flip(segment:keyof timeType){
        const seconds = container.current?.querySelector(`#${segment}`);
        if (!seconds) return;

        const overlayDiv = seconds.querySelector('.overlay');
        const displayDiv = seconds.querySelector('.display');
        if (!overlayDiv || !displayDiv) return;

        const displayTop = displayDiv.querySelector('.display_top p');
        const displaybot = displayDiv.querySelector('.display_bot p');
        const overlayTop = displayDiv.querySelector('.overlay_top p');
        const overlaybot = displayDiv.querySelector('.overlay_bottom p');
        if (!displayTop || !overlaybot || !displaybot || !overlayTop) return;

        const newValue = `${time[segment].first}${time[segment].second}`;
        overlayDiv.classList.add('flip');
        displayTop.textContent = newValue;
        overlaybot.textContent = newValue;
            
        setTimeout(() => {
            overlayDiv.classList.remove('flip');
            displaybot.textContent = newValue;
            overlayTop.textContent = newValue;
                
        }, 700);       
    }
        
    useEffect(() => {
        if(!compareTimeSegments('days')){
            flip('days')
        }
        if(!compareTimeSegments('hours')){
            flip('hours')
        }
        if(!compareTimeSegments('minutes')){
            flip('minutes')
        }
        if(!compareTimeSegments('seconds')){
            flip('seconds')
        }
        prevTime.current = time;

        
    }, [time]);
    
    
    useEffect(()=>{
        const interval = setInterval(()=>{
            updateTime()
        },1000)
        
        
        return ()=> clearInterval(interval)
    },[])
    
    



    return (
        <div ref={container}  className="counterContainer">
            <div className="timeSegment" id="days">
                <div className="display" >
                    <div className="display_top">
                        <p>00</p>

                    </div>
                    <div className="display_bot">
                        <p>00</p>

                    </div>
                    <div className="overlay ">
                        <div className="overlay_top">
                            <p>00</p>

                        </div>
                        <div className="overlay_bottom">
                            <p>00</p>

                        </div>
                    </div>
                </div>
                <h1>days</h1>
            </div>
            <div className="timeSegment" id="hours">
                <div className="display">
                    <div className="display_top">
                        <p>00</p>

                    </div>
                    <div className="display_bot">
                        <p>00</p>

                    </div>
                    <div className="overlay ">
                        <div className="overlay_top">
                            <p>00</p>

                        </div>
                        <div className="overlay_bottom">
                            <p>00</p>
  
                        </div>
                    </div>
                </div>
                <h1>hours</h1>
            </div>
            <div className="timeSegment" id="minutes">
                <div className="display">
                    <div className="display_top">
                        <p>00</p>
 
                    </div>
                    <div className="display_bot">
                        <p>00</p>

                    </div>
                    <div className="overlay ">
                        <div className="overlay_top">
                            <p>00</p>

                        </div>
                        <div className="overlay_bottom">
                            <p>00</p>

                        </div>
                    </div>
                </div>
                <h1>minutes</h1>
            </div>
            <div  className="timeSegment" id="seconds">
                <div className="display">
                    <div className="display_top">
                        <p>00</p>

                    </div>
                    <div className="display_bot">
                        <p>00</p>

                    </div>
                    <div className="overlay ">
                        <div className="overlay_top">
                            <p>00</p>

                        </div>
                        <div className="overlay_bottom">
                            <p>00</p>

                        </div>
                    </div>
                </div>
                <h1>seconds</h1>
            </div>
        </div>
    )
}