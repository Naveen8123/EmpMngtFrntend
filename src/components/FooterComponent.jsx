import React from 'react'

const FooterComponent = () => {
  return (        <footer className="footer">
    <div className="footer-content">
        <div className="contact-info"> {/* Contact Info Section */}
            <h3>Contact Us</h3>
            <p>
                <strong>Address:</strong> 123 Main Street, Bangalore, India {/* Replace with your address */}
            </p>
            <p>
                <strong>Phone:</strong> +91-9999999999 {/* Replace with your phone number */}
            </p>
            <p>
                <strong>Email:</strong> info@example.com {/* Replace with your email address */}
            </p>
        </div>
        <div className="copyright"> {/* Copyright Section */}
            <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
        </div>
        <div className="social-icons">
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            {/* ... other icons */}
        </div>
    </div>
</footer>

  )
}
export default FooterComponent
