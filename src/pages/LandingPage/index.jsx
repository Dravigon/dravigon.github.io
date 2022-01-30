import React, {useEffect, useRef, useState} from "react";
import '../../component/SkillList'
import SkillList from "../../component/SkillList";
import Card from "../../component/Card"
import './style.scss'
import Experience from "../../component/Experience";
const LandingPage = () => {
    const indicatorRef = useRef(null);
    const introDivRef = useRef(null);
    const projectsDivRef = useRef(null);
    const [toggleContent, setToggleContent] = useState(false);

    useEffect(()=>{
        console.log('toggle');
        console.log({toggleContent})

        if(toggleContent){
            indicatorRef.current.className = "indicator scroll";
        }
        else{
            indicatorRef.current.className = "indicator";
        }

    },[toggleContent])
    const onScroll = () => {
        const topPosition = indicatorRef.current.getBoundingClientRect().top;
        if (topPosition <= -10) {
            setToggleContent(true);
        } else {
            setToggleContent(false)
        }
    }
    useEffect(() => { // effect
        indicatorRef.current.scrollTo({block: "start"});
        window.addEventListener('scroll', onScroll);
        return() => { // cleanup
            window.removeEventListener('scroll', onScroll);
        }
    }, []);

    function scrollToAbout(){
        console.log("clicked about")
        window.scrollTo(0, 30); 
        setTimeout(introDivRef.current.scrollTo({block: "start"}), 1500);    
    }
    function scrollToProject(){
        console.log("clicked about")
        window.scrollTo(0, 30); 
        setTimeout(projectsDivRef.current.scrollIntoView({block: "start"}), 2000);    
    }

    return (<div className="landing-container">
        <div className="indicator"
            ref={indicatorRef}></div>
        <div className="left">
            <div className="rotated-menu">
                <a onClick={scrollToAbout}>About</a>
                <a onClick={scrollToProject}>Projects</a>
                <a>Hobbies</a>
            </div>
            <div className="greet">Hi</div>
            <div className="first-half">I'm Dravid</div>
        </div>
        <div className="right">
            <div className="rotated-menu">Know more about me --></div>
        </div>
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
            <Experience ref={projectsDivRef}></Experience>
            <div className="card-75 experience card-sm-100" >
                <div className="title">My Hobby projects</div>
                <div>Whatsapp analyser</div>
                <div>Letter</div>
                <div>Tortinental</div>
                <div>Sudoku solver</div>
                <div>
                    <a href="https://github.com/Dravigon/">For more please visit my github--></a>
                </div>
            </div>
            <div className="card-100 skills card-sm-100">
                <div className="title" >
                    What Ive worked with
                </div>
                <SkillList></SkillList>
            </div>
        </div>
    </div>
    )
    }
    
    
    export default LandingPage;
