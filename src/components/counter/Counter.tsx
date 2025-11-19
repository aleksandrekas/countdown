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

    useEffect(()=>{},[time.days])
    useEffect(()=>{},[time.hours])
    useEffect(()=>{},[time.minutes])
    useEffect(()=>{},[time.seconds])

    useEffect(()=>{
        const interval = setInterval(()=>{
        updateTime()
        },1000)


        return ()=> clearInterval(interval)
    },[])

    return (
        <div  className="counterContainer">
            <div className="timeSegment">
                <div className="display" id="day">
                    <div className="display_top">
                        <div style={{left:"-10px"}} className="round_thing"></div>
                        <div style={{right:"-10px"}} className="round_thing"></div>
                    </div>
                    <div className="display_bot">
                        <div style={{left:"-10px"}} className="round_thing"></div>
                        <div style={{right:"-10px"}} className="round_thing"></div>
                    </div>
                    <div className="overlay ">
                        <div className="overlay_top">
                        
                            <div style={{left:"-10px"}} className="round_thing"></div>
                            <div style={{right:"-10px"}} className="round_thing"></div>
                        </div>
                        <div className="overlay_bottom">
                            <div style={{left:"-10px"}} className="round_thing"></div>
                            <div style={{right:"-10px"}} className="round_thing"></div>
                        </div>
                    </div>
                </div>
                <p>days</p>
            </div>
            <div className="timeSegment">
                <div className="display">
                    <div className="display_top">
                        <div style={{left:"-10px"}} className="round_thing"></div>
                        <div style={{right:"-10px"}} className="round_thing"></div>
                    </div>
                    <div className="display_bot">
                        <div style={{left:"-10px"}} className="round_thing"></div>
                        <div style={{right:"-10px"}} className="round_thing"></div>
                    </div>
                    <div className="overlay ">
                        <div className="overlay_top">
                            <div style={{left:"-10px"}} className="round_thing"></div>
                            <div style={{right:"-10px"}} className="round_thing"></div>
                        </div>
                        <div className="overlay_bottom">
                            <div style={{left:"-10px"}} className="round_thing"></div>
                            <div style={{right:"-10px"}} className="round_thing"></div>
                        </div>
                    </div>
                </div>
                <p>hours</p>
            </div>
            <div className="timeSegment">
                <div className="display">
                    <div className="display_top">
                        <div style={{left:"-10px"}} className="round_thing"></div>
                        <div style={{right:"-10px"}} className="round_thing"></div>
                    </div>
                    <div className="display_bot">
                        <div style={{left:"-10px"}} className="round_thing"></div>
                        <div style={{right:"-10px"}} className="round_thing"></div>
                    </div>
                    <div className="overlay ">
                        <div className="overlay_top">
                            <div style={{left:"-10px"}} className="round_thing"></div>
                            <div style={{right:"-10px"}} className="round_thing"></div>
                        </div>
                        <div className="overlay_bottom">
                            <div style={{left:"-10px"}} className="round_thing"></div>
                            <div style={{right:"-10px"}} className="round_thing"></div>
                        </div>
                    </div>
                </div>
                <p>minutes</p>
            </div>
            <div className="timeSegment">
                <div className="display">
                    <div className="display_top">
                        <div style={{left:"-10px"}} className="round_thing"></div>
                        <div style={{right:"-10px"}} className="round_thing"></div>
                    </div>
                    <div className="display_bot">
                        <div style={{left:"-10px"}} className="round_thing"></div>
                        <div style={{right:"-10px"}} className="round_thing"></div>
                    </div>
                    <div className="overlay ">
                        <div className="overlay_top">
                            <div style={{left:"-10px"}} className="round_thing"></div>
                            <div style={{right:"-10px"}} className="round_thing"></div>
                        </div>
                        <div className="overlay_bottom">
                            <div style={{left:"-10px"}} className="round_thing"></div>
                            <div style={{right:"-10px"}} className="round_thing"></div>
                        </div>
                    </div>
                </div>
                <p>seconds</p>
            </div>
        </div>
    )
}