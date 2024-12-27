import React from 'react';
import './AboutUs.css'; // Import your CSS file

const AboutUs = () => {
    return (
        <div id='about' className="about-us-container">
            <section className="about-section">
                <h2>About Sri Manjunatha Catering</h2>
                <p>
                    Sri Manjunatha Catering is an award-winning catering service in Bangalore and is the food service provider with the largest number of chefs in Bangalore (over 375 chefs!). Driven by the philosophy that satisfied customers are the best asset and any investment to enhance customer satisfaction is the best investment, SJS brings a fresh perspective to the domain of marriage catering in Bangalore.
                </p>
                <p>
                    We desire to exceed customer expectations and bring total perfection to our every activity to make your life events even more memorable. Driven by a passionate team and dedicated leadership, we set and adhere to high standards always.
                </p>
            </section>

            <section className="mission-vision-section">
                <div className="mission">
                    <h3>Our Mission</h3>
                    <p>
                        Our mission as best catering service providers in Bangalore is to delight our customers through the highest quality of service; delivered with a sense of warmth, friendliness, individual pride, passion, and company spirit. We are committed to provide our customers with healthy, fresh ingredients that have no artificial flavors or preservatives.
                    </p>
                </div>
                <div className="vision">
                    <h3>Our Vision</h3>
                    <p>
                        Our vision as best catering service providers in Bangalore is to not provide our customers with a canned, processed, and cheaply imitated form of food; but rather it is to provide a uniquely fresh, authentic, and all natural food involving an efficient shopping experience that will make them come back for more.
                    </p>
                </div>
            </section>

            <section className="why-choose-us-section">
                <h2>Why Choose Sri Manjunatha Catering</h2>
                <ul className="why-choose-list">
                    <li>World-class chefs and cooks and large food spread choices and cuisines (Different types of Indian cuisines, Chinese, Continental, Tandoori etc.)</li>
                    <li>Authentic taste and attention to detail in every step</li>
                    <li>Capable of handling all types of food and event requirements (both veg and non-veg)</li>
                    <li>Experienced and passionate team, dedicated leadership and management</li>
                    <li>Proven reliability to handle a large number of guests and complex events</li>
                    <li>Hygienic food preparation and serving with all safety protocols</li>
                    <li>Ability to deliver customized solutions at all touchpoints</li>
                    <li>Transparent pricing and fair dealing</li>
                    <li>Excellent customer satisfaction and reviews</li>
                </ul>
                <p>We come to you with our large catering network to make your marriage celebration a special one.</p>
            </section>

            <section className="core-values-section">
                <h2>Our Core Values</h2>
                <ul className="core-values-list">
                    <li>Discipline</li>
                    <li>Perseverance</li>
                    <li>Respect</li>
                    <li>Integrity</li>
                    <li>Innovation</li>
                    <li>On Time</li>
                </ul>
            </section>
        </div>
    );
};

export default AboutUs;