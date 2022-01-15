import React, {useEffect, useRef, useState} from "react";
import '../../component/SkillList'
import SkillList from "../../component/SkillList";
import Card from "../../component/Card"
import './style.scss'
const LandingPage = () => {
    const indicatorRef = useRef(null);
    const introDivRef = useRef(null);
    const [toggleContent, setToggleContent] = useState(false);

    const onScroll = () => {
        if (toggleContent) 
            return;
        

        setToggleContent(true);
        const topPosition = indicatorRef.current.getBoundingClientRect().top;
        console.log(topPosition);
        if (topPosition < -10) {
            indicatorRef.current.className = "indicator scroll";

            function scrollToTargetAdjusted() {
                introDivRef.current.scrollTo({block: "start"});
                setTimeout(setToggleContent(false), 4000);
            }
            setTimeout(scrollToTargetAdjusted, 3000);

        } else {
            indicatorRef.current.className = "indicator";

            function scrollToTargetAdjusted() {
                indicatorRef.current.scrollTo({block: "start"});
                setTimeout(setToggleContent(false), 4000);
            }
            setTimeout(scrollToTargetAdjusted, 2000);

        }
    }
    useEffect(() => { // effect
        indicatorRef.current.scrollTo({block: "start"});
        window.addEventListener('scroll', onScroll);
        return() => { // cleanup
            window.removeEventListener('scroll', onScroll);
        }
    }, []);

    return (<div className="landing-container">
        <div className="indicator"
            ref={indicatorRef}></div>
        <div className="left">
            <div className="greet">Hi</div>
            <div className="first-half">I'm Dr</div>
        </div>
        <div className="right">
            <div className="second-half">avid</div>
        </div>
        {/* <div className="indicator"></div> */}
        <div className="content">
            <div className="about cards-container vertical-center"
                ref={introDivRef}>
                <Card width="30">
                    <div className="title">
                        About Me
                    </div>
                    <div>
                        A passionate developer who likes to work with a lot of technologies, a Hobby developer, a pro open-source advocate, a tech-enthusist and a part time tech journalist.
                    </div>
                </Card>
                <Card width="70" type="secondary" customClass="vertical-center">
                    <div className="title">A quote which i like</div>
                    <div className="decorative-text large quote flex">
                    A jack of all trades is a master of none, but oftentimes better than a master of one
                    </div>
                </Card>
            </div>
            <div className="card-70 right experience">
                <div className="title">Domains i have worked on</div>
                <ul>
                    <li>Front end - Web and App(linux)</li>
                    <li>Backend - web (RESTAPI)</li>
                    <li>Cloud - Cloudflare,  Azure</li>
                    <li>Linux - Virtualization (KVM),Web and app servers and basic system admin</li>
                    <li>Basic ML - Matlab modals</li>
                    <li>CI C/D - App deployment  performance testing and basic automation</li>
                </ul>
            </div>
            <div className="card-75 experience">
                <div className="title">My Hobby projects</div>
                <div>Whatsapp analyser</div>
                <div>Letter</div>
                <div>Tortinental</div>
                <div>Sudoku solver</div>
                <div>
                    <a href="https://github.com/Dravigon/">For more please visit my github--></a>
                </div>
            </div>
            <div className="card-100 skills">
                <div className="title">
                    What Ive worked with
                </div>
                <SkillList></SkillList>
            </div>
        </div>
    </div>
    )
    }
    
    
    export default LandingPage;
