import React from "react";
// import {useNavigate} from 'react-router-dom's
import "./Landing.css"
// import { FaFacebookF } from 'react-icons/fa'

const Landing = () => {
    // JS
    // const navigate = useNavigate()

    return (
        <>
            <div class="banner">
                <p class="red-text">IT & BBA COLLEGE IN ITAHARI</p>
                <p>
                    <span class="red-text">I</span>tahari <span class="red-text">I</span>nternational <span class="red-text">C</span>ollege
                </p>
            </div>


            <div class="Section">
                <div class="about_Img">
                    <img src={require('../Assets/about.jpg')} alt="IIC Logo" />
                </div>
                <div class="content">
                    <h2><u>Itahari International College</u></h2>
                    <p>Since 2017, Itahari International College has embarked on a journey of providing higher education in Eastern region of Nepal. It is a joint partnership between Islington College (Kathmandu), Vishwa Adarsha College (Itahari), and Godawari College (Itahari). It is the first college to provide a direct UK university degree in Itahari. It has directly partnered with London Metropolitan University, and this partnership is committed on producing intellectuals who can compete globally. Thus, Itahari International College is able to offer BSc (Hons) Computing and BA (Hons) Business Administration degree based on a “support-delivery” model. Itahari International College is one of the flagship institutions of Innovate Nepal Group (ING).</p>
                </div>
            </div>

            <div class="Bsc">
                <div class="Bsc_Text">
                    <p>Bachelors Degree in<br />Information Technology</p>
                    <p>1. BSc Hons Computing</p>
                </div>
                <div class="Bsc_Img">
                    <img src={require('../Assets/bit.jpg')} alt="IIC Logo" />
                </div>
            </div>

            <div class="BBA">
                <div class="BBA_Img">
                    <img src={require('../Assets/bba.jpg')} alt="IIC Logo" />
                </div>
                <div class="degree-info">
                    <div class="BBA_Info">
                        <h3>Bachelors in<br />Business Administration</h3>
                        <span class="degree-name">BA (Hons) Business Administration</span>
                        <p class="degree-option">1. BBA (International Business)</p>
                        <p class="degree-option">2. BBA (Advertising and Marketing)</p>
                        <p class="degree-option">3. BBA (Digital Business Management)</p>
                        <p class="degree-option">4. BBA (Event & Tourism Management)</p>
                    </div>
                </div>
            </div>

            <div class="Admission">
                <div class="Admission_Content">
                    <div class="Admission_Header">
                        <h1 class="Admission_Title">Admission Procedure</h1>
                        <div class="Admission_Underline"></div>
                        <p class="Admission_Subtitle">Interested students who have completed or appeared their higher secondary final exams can directly apply to the college with their academic certificates, citizenship certificate or passport or birth certificate or citizenship of either of the parents. The students awaiting results can get provisional admissions. Once at the college, the admission team will assess the entry requirement mentioned below and assist in admission process. Applicants should possess the minimum qualifications mentioned here under.</p>
                    </div>
                    <div class="Admission_EntryRequirements">
                        <h2 class="Admission_EntryRequirements_Title">Entry Requirement</h2>
                        <br />
                        <ol>
                            <li>NEB +2 overall aggregate of 2.2 CGPA (55%) or above with each subject (theory and practical) grade D or above, and SEE Mathematics score of C (50%) or above.</li>
                            <li>For A-Levels, a minimum of 3.5 credits and at least a grade of D and above.</li>
                        </ol>
                    </div>
                    <div class="Admission_EnglishProficiency">
                        <h2 class="Admission_EnglishProficiency_Title">English Proficiency</h2>
                        <br />
                        <ol>
                            <li>English NEB XII Marks  60% or 2.4 GPA
                                Applicants not meeting the aforementioned criteria for English can demonstrate their English proficiency with the following internationally recognised English Tests:</li>
                        </ol>
                        <p>Applicants not meeting the aforementioned criteria for English can demonstrate their English proficiency with the following internationally recognised English Tests:</p>
                    </div>
                    <div class="Admission_BIT">
                        <h2 class="Admission_BIT_Title">For Level 4 or Year 1 BIT</h2>
                        <br />
                        <ol>
                            <li>Pass in General Paper or English Language or IELTS 6 or PTE 53.</li>
                        </ol>
                    </div>
                    <div class="Admission_BBA">
                        <h2 class="Admission_BBA_Title">For Level 4 or Year 1 BBA</h2>
                        <br />
                        <ol>
                            <li>Pass in General Paper or English Language or IELTS 6 or PTE 53.</li>
                        </ol>
                    </div>
                </div>
                <div class="Admission_Img">
                    <img src={require('../Assets/admission.jpg')} alt="IIC Logo" />
                </div>
            </div>


            <div class="Event">
                <div class="Event_Title">Event</div>
                <div class="Img">

                    <div class="Img_Item">
                        <img src={require('../Assets/bit.jpg')} alt="Event Photo" />
                        <div class="Img_Item_Text">Sports Week</div>
                    </div>

                    <div class="Img_Item">
                        <img src={require('../Assets/bit.jpg')} alt="Event Photo" />
                        <div class="Img_Item_Text">Sports Week</div>
                    </div>

                    <div class="Img_Item">
                        <img src={require('../Assets/bit.jpg')} alt="Event Photo" />
                        <div class="Img_Item_Text">Sports Week</div>
                    </div>

                    <div class="Img_Item">
                        <img src={require('../Assets/bit.jpg')} alt="Event Photo" />
                        <div class="Img_Item_Text">Sports Week</div>
                    </div>

                    <div class="Img_Item">
                        <img src={require('../Assets/bit.jpg')} alt="Event Photo" />
                        <div class="Img_Item_Text">Christmas</div>
                    </div>

                    <div class="Img_Item">
                        <img src={require('../Assets/bit.jpg')} alt="Event Photo" />
                        <div class="Img_Item_Text">Christmas</div>
                    </div>

                    <div class="Img_Item">
                        <img src={require('../Assets/bit.jpg')} alt="Event Photo" />
                        <div class="Img_Item_Text">Christmas</div>
                    </div>

                    <div class="Img_Item">
                        <img src={require('../Assets/bit.jpg')} alt="Event Photo" />
                        <div class="Img_Item_Text">Christmas</div>
                    </div>

                    <div class="Img_Item">
                        <img src={require('../Assets/bit.jpg')} alt="Event Photo" />
                        <div class="Img_Item_Text">Holi</div>
                    </div>

                    <div class="Img_Item">
                        <img src={require('../Assets/bit.jpg')} alt="Event Photo" />
                        <div class="Img_Item_Text">Holi</div>
                    </div >

                    <div class="Img_Item">
                        <img src={require('../Assets/bit.jpg')} alt="Event Photo" />
                        <div class="Img_Item_Text">Holi</div>
                    </div >

                    <div class="Img_Item">
                        <img src={require('../Assets/bit.jpg')} alt="Event Photo" />
                        <div class="Img_Item_Text">Holi</div>
                    </div >

                    <div class="Img_Item">
                        <img src={require('../Assets/bit.jpg')} alt="Event Photo" />
                        <div class="Img_Item_Text">Carnival</div>
                    </div >

                    <div class="Img_Item">
                        <img src={require('../Assets/bit.jpg')} alt="Event Photo" />
                        <div class="Img_Item_Text">Carnival</div>
                    </div>

                    <div class="Img_Item">
                        <img src={require('../Assets/bit.jpg')} alt="Event Photo" />
                        <div class="Img_Item_Text">Carnival</div>
                    </div>

                    <div class="Img_Item">
                        <img src={require('../Assets/bit.jpg')} alt="Event Photo" />
                        <div class="Img_Item_Text">Carnival</div>
                    </div>

                </div >
            </div >


            <div class="register-division">
                <h2 class="register-title">Register Now - Autumn Intake 2023</h2>

                <p class="register-description">
                    Please fill the form below in order for us to help you with the application process. Once you submit the form <br />below, we will contact you shortly with further details.
                </p>

                <form action="#" method="POST">
                    <div className="row1">
                        <div class="form-row">
                            <input type="text" id="first-name" name="first-name" required placeholder="First name" />
                        </div>

                        <div class="form-row">
                            <input type="text" id="last-name" name="last-name" required placeholder="Last name" />
                        </div>
                    </div>

                    <div className="row2">
                        <div class="form-row">
                            <input type="tel" id="phone-number" name="phone-number" required placeholder="Phone number" />
                        </div>

                        <div class="form-row">
                            <input type="email" id="email" name="email" required placeholder="Email" />
                        </div>
                    </div>

                    <div class="form-row">
                        <select id="programme" name="programme" required>
                            <option value="">Select Programme</option>
                            <option value="BBA">BSc (Hons) Computing </option>
                            <option value="BIT">BBA Bachelors in Business Administration</option>
                        </select>
                    </div>

                    <div class="form-row">

                        <select id="referral" name="referral" required>
                            <option value="">Select Referral</option>
                            <option value="1">TV</option>
                            <option value="2">Event</option>
                            <option value="3">BootCamp</option>
                            <option value="4">Advertisement</option>
                            <option value="5">Facebook</option>
                            <option value="6">Instagram</option>
                            <option value="7">Youtube</option>
                            <option value="8">Family</option>
                            <option value="9">Friends</option>
                        </select>
                    </div>

                    <div class="form-row">
                        <input type="submit" value="Submit"></input>
                    </div>
                </form>


                <div class="Contact">
                    <div class="Contact_title">Contact Us</div>
                    <div class="map">
                        <div class="map_text">
                            Sundar Haraicha - 4, Morang
                            <span class="contact-info">+97721431038, +97721431039, 9869258083</span>
                            <span class="contact-info">info@iic.edu.np</span>
                        </div>
                    </div>
                </div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2127.511073304417!2d87.30179519290544!3d26.655303632085797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ef6ea070e7b18b%3A0x2959e2a3e2bf54e0!2sItahari+Int&#39;l+College!5e0!3m2!1sen!2snp!4v1528259945147" width="600" height="450" frameborder="0" allowfullscreen></iframe>
            </div>

            <footer>
                <p>©2023 Itahari International College. All Rights Reserved.</p>
                {/* <FaFacebookF onClick={()=>navigate('https://www.facebook.com/')}/> */}
            </footer>

        </>

    )
}

export default Landing

