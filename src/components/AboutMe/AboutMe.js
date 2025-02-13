import "./AboutMe.css";
import portrait from "../../assets/portrait.jpg";

function AboutMe() {
    return (
        <div className="about-me section" id="about">
            <h2 className="section-header">About Me</h2>
            <div className="about-container">
                <img className="portrait" src={portrait} alt="portrait" />
                <div>
                    <p>
                    Hey there, I'm Giap! I'm currently pursuing a third-year B.S. in Computer Engineering at HUST University.
                    </p>
                    <br />
                    <p>
                    I love creating things that help humanity. In my spare time, playing sports and reading books.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default AboutMe