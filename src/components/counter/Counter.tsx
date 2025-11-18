import "./counter.css"



export default function Counter(){
    return (
        <div className="counterContainer">
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
                    <div className="overlay flip">
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
                    <div className="overlay flip">
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
                    <div className="overlay flip">
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
                    <div className="overlay flip">
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