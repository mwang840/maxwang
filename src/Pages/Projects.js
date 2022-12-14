import React from "react";
import udcsSchelduler from "../assets/Capture.JPG"
import pi from "../assets/pi.jpg"
import "./Projects.css"

function Projects(){
    return <div>
        <h1>Projects</h1>
        <h5>A description of the personal projects that I have worked on during my undergraduate study.</h5>
        <br></br>
        <h5>The projects listed are diverse in languages and purposes and each entry down below has a link to its GitHub repository.</h5>
        <br></br>
        <h5>Whether it be testing out what I have learned during school or learning a new programming concept during a project that I am working on, I learn something new.</h5>
        <br></br>
        <h5> And with the help of the internet, I can learn more things and even add cool features to this website.</h5>
        <br></br>
        <table class="center">
            <tr>
                <td>
                    <h5>UD CIS Scheduler Frontend Website</h5>
                    <a href="https://github.com/UD-CISC275-S22/cis-scheduler-team-007">View Source</a><img src={udcsSchelduler} alt="CISC Schelduler" style={{width:250, height:100, display: "absolute", top:0, left:10, right:0, bottom:10}}></img>
                </td>
                <td>
                <p>The features of the website allows undergraduate students to</p>
                    <ul>
                        <li>
                            <p>A modal that greets students and gives instructions how to schedule courses</p>
                        </li>
                        <li>
                            <p>Add, change names and delete plans</p>
                        </li>
                        <li>
                            <p>Add, delete, name schedules set the season and the year of the semester</p>
                        </li>
                        <li><p>Plan out courses throughout each semester</p></li>
                    </ul>
                </td>
            </tr>
            <tr>
                <td>
                    <h5>React.js in a nutshell</h5>
                    <p><a href="https://github.com/mwang840/React-In-A-nutshell">View Source</a></p>
                </td>
                <td>
                    <p>A small project, that me and two other undergraduate students made, which explains the basic functionality of the React framework using
                        hooks
                    </p>
                    </td>
            </tr>
            <tr>
                <td>
                    <h5>Assembly Pi Projects</h5>
                    <a href="https://github.com/mwang840/AssemblyProjects">View Source</a>
                    <img src = {pi} alt="pi" style={{width:250, height:100, display: "absolute", top:0, left:10, right:0, bottom:10}}></img>
                </td>
                <td>
                    <p>Displays some images on to the pi hat written in Assembly Language</p>
                </td>
            </tr>
            <tr>
                <td>
                    <h5>This Website</h5>
                    <a href="https://github.com/mwang840/maxwang">View Source</a>

                </td>
                <td>
                    <p>This website source right here! How awesome is that!</p>
                </td>
            </tr>
        </table>
    </div>
}

export default Projects;