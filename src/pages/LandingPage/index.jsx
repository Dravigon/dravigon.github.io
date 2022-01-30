import React, {useEffect, useRef, useState} from "react";
import '../../component/SkillList'
import SkillList from "../../component/SkillList";
import Card from "../../component/Card"
import './style.scss'
import Experience from "../../component/Experience";
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
            <div className="rotated-menu">
                <a>About</a>
                <a>Projects</a>
                <a>Hobbies</a>
            </div>
            <div className="greet">Hi</div>
            <div className="first-half">I'm Dravid</div>
        </div>
        <div className="right">
            <div className="rotated-menu">To know more about me --></div>
        </div>
        {/* <div className="indicator"></div> */}
        <div className="content">
            <div className="about cards-container vertical-center"
                ref={introDivRef}>
                <Card width="30" customClass="card-sm-100">
                    <div className="title">
                        About Me
                    </div>
                    <div>
                        A passionate developer who likes to work with a lot of technologies, a Hobby developer, a pro open-source advocate, a tech-enthusist and a part time tech journalist.
                    </div>
                </Card>
                <Card width="70" type="secondary" customClass="vertical-center card-sm-100 md-center">
                    <div className="title">A quote which i like</div>
                    <div className="decorative-text large quote flex">
                    A jack of all trades is a master of none, but oftentimes better than a master of one
                    </div>
                </Card>
            </div>
            <div className="card-70 right md-center experience card-sm-100">
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
            <Experience></Experience>
            <div className="card-100 skills card-sm-100">
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
