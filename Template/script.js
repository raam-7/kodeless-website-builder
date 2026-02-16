// Object storing component templates
const componentTemplates = 
{

"blog1":`
  <div class="component p-4 rounded relative" style="margin-top: 20px;">
  <button class="remove-btn" style="position: absolute; top: 8px; right: 40px; background-color: red; color: white; padding: 4px 8px; border-radius: 4px; font-size: 14px;">X</button>
  <div class="navbar-edit-buttons" style="display: flex; flex-wrap: wrap; gap: 8px; margin-top: 15px;">
    <button class="edit-navbar-brand" style="padding: 6px 10px; font-size: 12px; background-color: #3498db; color: white; border: none; border-radius: 4px; cursor: pointer;">Edit Brand Name</button>
    <button class="edit-navbar-links" style="padding: 6px 10px; font-size: 12px; background-color: #2ecc71; color: white; border: none; border-radius: 4px; cursor: pointer;">Edit Links</button>
    <button class="edit-navbar-bg" style="padding: 6px 10px; font-size: 12px; background-color: #f39c12; color: white; border: none; border-radius: 4px; cursor: pointer;">Edit Navbar Background</button>
    <button class="edit-navbar-text-color" style="padding: 6px 10px; font-size: 12px; background-color: #e74c3c; color: white; border: none; border-radius: 4px; cursor: pointer;">Edit Navbar Text Color</button>
    <button class="edit-navbar-signup-btn" style="padding: 6px 10px; font-size: 12px; background-color: #9b59b6; color: white; border: none; border-radius: 4px; cursor: pointer;">Edit Signup Button Text</button>
    <button class="edit-navbar-signup-text-color" style="padding: 6px 10px; font-size: 12px; background-color: #34495e; color: white; border: none; border-radius: 4px; cursor: pointer;">Edit Signup Button Text Color</button>
  
</div>

<!-- Container for dynamically added links -->
<div id="navbar-links-container" style="margin-top: 10px;"></div>



  <nav class="custom-navbar">
      <div class="custom-logo">
          <span class="custom-logo-icon">B.</span>
      </div>
      <div class="custom-brand">My Website</div>
      <ul class="custom-nav-links">
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
      </ul>
      <button class="custom-signup-btn">Sign Up</button>
  </nav>
</div>
`,

    "blog2": `
        <div class="component p-4 rounded relative">
            <button class="remove-btn" style="position: absolute; top: 8px; right: 8px; background-color: red; color: white; padding: 4px 8px; border-radius: 4px; font-size: 14px;">X</button>
             <button class="edit-navbar-brand">Edit Brand Name</button>
            <button class="edit-navbar-links">Edit Links</button>
          <button class="edit-navbar-bg">Edit Navbar Background</button>
          <button class="edit-navbar-text-color">Edit Navbar Text Color</button>
         <button class="edit-navbar-signup-btn">Edit Signup Button Text</button>
           <button class="edit-navbar-signup-text-color">Edit Signup Button Text Color</button>
            <div class="navbar-container">
                <nav class="navbar-dark">
                    <div class="custom-logo">
                        <span class="custom-logo-icon">B.</span>
                    </div>
                    <div class="custom-brand">My Website</div>
                    <ul class="custom-nav-links">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul> 
                    <button class="custom-signup-btn">Sign Up</button>
                </nav>
            </div>
        </div>
    `,
    "blog3": `
        <div class="component p-4 rounded relative" style="margin-top: 20px;">
            <button class="remove-btn" style="position: absolute; top: 8px; right: 8px; background-color: red; color: white; padding: 4px 8px; border-radius: 4px; font-size: 14px;">X</button>
            <div class="navbar-container">
                <nav class="navbar-gradient">
                    <div class="custom-logo">
                        <span class="custom-logo-icon">B.</span>
                    </div>
                    <div class="custom-brand">My Website</div>
                    <ul class="custom-nav-links">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                    <button class="custom-signup-btn">Sign Up</button>
                </nav>
            </div>
        </div>
    `,
    "blog4": `
        <div class="component p-4 rounded relative" style="margin-top: 20px;">
            <button class="remove-btn" style="position: absolute; top: 8px; right: 8px; background-color: red; color: white; padding: 4px 8px; border-radius: 4px; font-size: 14px;">X</button>
            <div class="navbar-container">
                <nav class="navbar-minimal">
                    <span class="minimal-title">My Website</span>
                </nav>
            </div>
        </div>
    `,
    "blog5": `
    <div class="component p-4 rounded relative" style="margin-top: 20px;">
            <button class="remove-btn" style="position: absolute; top: 8px; right: 8px; background-color: red; color: white; padding: 4px 8px; border-radius: 4px; font-size: 14px;">X</button>
        <div class="navbar-container">
            <nav class="navbar-normal">
                <div class="custom-logo">
                    <span class="custom-logo-icon">B.</span>
                </div>
                <div class="custom-brand">My Website</div>
                <ul class="custom-nav-links">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
                <button class="custom-signup-btn">Sign Up</button>
            </nav>
        </div>
    `,
    "About": `
   <div class="about-component p-4 rounded relative" style="margin-top: 20px;">
  <button class="remove-btn">X</button>
  <div style="display: flex; flex-wrap: wrap; gap: 10px; margin-top: 10px; padding: 10px; background-color: rgba(0, 0, 0, 0.05); border-radius: 8px;">
    <button class="edit-about-title" style="background-color: #4a90e2; color: white; border: none; padding: 8px 12px; border-radius: 5px; cursor: pointer; font-size: 14px; transition: background-color 0.3s ease, transform 0.2s;">Edit About Us Title</button>
    <button class="edit-about-subtitle" style="background-color: #4a90e2; color: white; border: none; padding: 8px 12px; border-radius: 5px; cursor: pointer; font-size: 14px; transition: background-color 0.3s ease, transform 0.2s;">Edit About Us Subtitle</button>
    <button class="edit-core-values" style="background-color: #4a90e2; color: white; border: none; padding: 8px 12px; border-radius: 5px; cursor: pointer; font-size: 14px; transition: background-color 0.3s ease, transform 0.2s;">Edit Core Values</button>
    <button class="edit-about-cta-title" style="background-color: #4a90e2; color: white; border: none; padding: 8px 12px; border-radius: 5px; cursor: pointer; font-size: 14px; transition: background-color 0.3s ease, transform 0.2s;">Edit CTA Title</button>
    <button class="edit-about-cta-description" style="background-color: #4a90e2; color: white; border: none; padding: 8px 12px; border-radius: 5px; cursor: pointer; font-size: 14px; transition: background-color 0.3s ease, transform 0.2s;">Edit CTA Description</button>
    <button class="edit-about-cta-button" style="background-color: #4a90e2; color: white; border: none; padding: 8px 12px; border-radius: 5px; cursor: pointer; font-size: 14px; transition: background-color 0.3s ease, transform 0.2s;">Edit CTA Button Text</button>
</div>



  <!-- Hero Section -->
  <section class="about-hero">
    <div class="about-container">
      <h1 class="about-title">We Are <span>Innovators</span></h1>
      <p class="about-subtitle">Bringing transformative ideas to life through cutting-edge technology and a passion for creativity.</p>
    </div>
  </section>

  <!-- Company Info Section -->
  <section>
    <div class="about-container">
      
    </div>
  </section>

  <!-- Core Values Section -->
  <section class="core-values">
    <div class="about-container">
      <h2 class="values-title">Our Core Values</h2>
      <div class="values-list">
        <div class="value-item">
          <h3>Innovation</h3>
          <p>We believe in constantly evolving, driving forward new ideas and solutions that create lasting impact.</p>
        </div>
        <div class="value-item">
          <h3>Integrity</h3>
          <p>Trust is at the core of what we do. We strive to build lasting relationships based on transparency and honesty.</p>
        </div>
        <div class="value-item">
          <h3>Excellence</h3>
          <p>We are committed to excellence in everything we do, continuously improving to exceed expectations.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Call to Action Section -->
  <section class="about-cta">
    <div class="about-container">
      <h2>Ready to Collaborate?</h2>
      <p>Let’s bring your ideas to life with our expert team. Join us on this journey of innovation and success.</p>
      <a href="#" class="cta-button">Get In Touch</a>
    </div>
  </section>
</div>

    `,
    "About2": `
    <div class="component p-4 rounded relative" style="margin-top: 20px;">
    <button class="remove-btn" style="position: absolute; top: 8px; right: 8px; background-color: red; color: white; padding: 4px 8px; border-radius: 4px; font-size: 14px;">X</button>
    <section class="company-section">
        <!-- Hero Section -->
        <div class="company-hero">
            <div class="company-container">
                <h1 class="company-title">We Are <span>Innovators</span></h1>
                <p class="company-subtitle">Bringing transformative ideas to life through cutting-edge technology and a passion for creativity.</p>
            </div>
        </div>

        <!-- Company Info Section -->
        

        <!-- Core Values Section -->
        <div class="company-values">
            <div class="company-container">
                <h2 class="values-title">Our Core Values</h2>
                <div class="values-grid">
                    <div class="value-box">
                        <h3>Innovation</h3>
                        <p>We believe in constantly evolving, driving forward new ideas and solutions that create lasting impact.</p>
                    </div>
                    <div class="value-box">
                        <h3>Integrity</h3>
                        <p>Trust is at the core of what we do. We strive to build lasting relationships based on transparency and honesty.</p>
                    </div>
                    <div class="value-box">
                        <h3>Excellence</h3>
                        <p>We are committed to excellence in everything we do, continuously improving to exceed expectations.</p>
                    </div>
                </div>
            </div>
        </div>

        <!-- Call to Action Section -->
        <div class="company-cta">
            <div class="company-container">
                <h2>Ready to Collaborate?</h2>
                <p>Let’s bring your ideas to life with our expert team. Join us on this journey of innovation and success.</p>
                <a href="#" class="cta-button">Get In Touch</a>
            </div>
        </div>
    </section>
</div>

    `,
    "About3": `
    <div class="component p-4 rounded relative" style="margin-top: 20px;">
           <button class="remove-btn" style="position: absolute; top: 8px; right: 8px; background-color: red; color: white; padding: 4px 8px; border-radius: 4px; font-size: 14px;">X</button>
 <section class="company-overview">
    <!-- Hero Section -->
    <div class="hero-banner">
        <div class="hero-container">
            <h1 class="hero-heading">We Are <span>Innovators</span></h1>
            <p class="hero-description">
                Bringing transformative ideas to life through cutting-edge technology and a passion for creativity.
            </p>
        </div>
    </div>

    <!-- About Us Section -->


    <!-- Core Values Section -->
    <div class="principles">
        <div class="principles-container">
            <h2 class="principles-title">Our Core Principles</h2>
            <div class="principles-grid">
                <div class="principle-card">
                    <h3>Innovation</h3>
                    <p>We continuously evolve, driving new ideas and solutions that create lasting impact.</p>
                </div>
                <div class="principle-card">
                    <h3>Integrity</h3>
                    <p>Trust is at the heart of what we do. We build lasting relationships through transparency.</p>
                </div>
                <div class="principle-card">
                    <h3>Excellence</h3>
                    <p>We are committed to excellence in everything, improving continuously to exceed expectations.</p>
                </div>
            </div>
        </div>
    </div>

    <!-- Call to Action Section -->
    <div class="engagement">
        <div class="engagement-container">
            <h2>Ready to Collaborate?</h2>
            <p>Let’s bring your ideas to life with our expert team. Join us on this journey of innovation and success.</p>
            <a href="#" class="cta-button">Get In Touch</a>
        </div>
    </div>
</section>
`
  ,
  "About4": `
    <div class="component p-4 rounded relative" style="margin-top: 20px;">
           <button class="remove-btn" style="position: absolute; top: 8px; right: 8px; background-color: red; color: white; padding: 4px 8px; border-radius: 4px; font-size: 14px;">X</button>
 <section class="about-section">
    <!-- Hero Section -->
    <div class="hero-container">
        <div class="hero-content">
            <h1 class="hero-title">We Are <span>Visionaries</span></h1>
            <p class="hero-subtext">
                Turning bold ideas into reality with technology, creativity, and passion.
            </p>
        </div>
    </div>

    <!-- About Company -->
    

    <!-- Core Values -->
    <div class="values-container">
        <h2 class="values-heading">Our Core Values</h2>
        <div class="values-grid">
            <div class="value-box">
                <h3>Creativity</h3>
                <p>We foster innovation by thinking outside the box and challenging norms.</p>
            </div>
            <div class="value-box">
                <h3>Trust</h3>
                <p>Our foundation is built on transparency, integrity, and honesty.</p>
            </div>
            <div class="value-box">
                <h3>Growth</h3>
                <p>We strive for continuous learning and self-improvement to drive success.</p>
            </div>
        </div>
    </div>

    <!-- Call to Action -->
    <div class="contact-section">
        <div class="contact-container">
            <h2>Let’s Build Something Great Together</h2>
            <p>Get in touch with us and take your vision to the next level.</p>
            <a href="#" class="cta-btn">Contact Us</a>
        </div>
    </div>
</section>

`
  ,
  "About5": `
    <div class="component p-4 rounded relative" style="margin-top: 20px;">
           <button class="remove-btn" style="position: absolute; top: 8px; right: 8px; background-color: red; color: white; padding: 4px 8px; border-radius: 4px; font-size: 14px;">X</button>

`
  ,
  "Contact": `
  <div class="component p-4 rounded relative" style="margin-top: 20px;">
         <button class="remove-btn" style="position: absolute; top: 8px; right: 8px; background-color: red; color: white; padding: 4px 8px; border-radius: 4px; font-size: 14px;">X</button>
         <button class="edit-contact-title">Edit Contact Title</button>
<div style="display: flex; flex-wrap: wrap; gap: 10px; margin-top: 10px; padding: 10px; background-color: rgba(0, 0, 0, 0.05); border-radius: 8px;">
    <button class="edit-contact-description" style="background-color: #4a90e2; color: white; border: none; padding: 8px 12px; border-radius: 5px; cursor: pointer; font-size: 14px; transition: background-color 0.3s ease, transform 0.2s;">Edit Contact Description</button>
    <button class="edit-contact-placeholders" style="background-color: #4a90e2; color: white; border: none; padding: 8px 12px; border-radius: 5px; cursor: pointer; font-size: 14px; transition: background-color 0.3s ease, transform 0.2s;">Edit Form Placeholders</button>
    <button class="edit-contact-button" style="background-color: #4a90e2; color: white; border: none; padding: 8px 12px; border-radius: 5px; cursor: pointer; font-size: 14px; transition: background-color 0.3s ease, transform 0.2s;">Edit Submit Button Text</button>
    <button class="edit-contact-bg" style="background-color: #4a90e2; color: white; border: none; padding: 8px 12px; border-radius: 5px; cursor: pointer; font-size: 14px; transition: background-color 0.3s ease, transform 0.2s;">Change Background Color</button>
    <button class="edit-contact-text-color" style="background-color: #4a90e2; color: white; border: none; padding: 8px 12px; border-radius: 5px; cursor: pointer; font-size: 14px; transition: background-color 0.3s ease, transform 0.2s;">Change Text Color</button>
</div>



         <div class="contact-section-1">
  <h2>Contact Us</h2>
  <p>We'd love to hear from you! Reach out to us for any inquiries.</p>
  <form>
    <input type="text" placeholder="Your Name" required>
    <input type="email" placeholder="Your Email" required>
    <textarea placeholder="Your Message" required></textarea>
    <button type="submit">Send Message</button>
  </form>
</div>

`,
"Contact2": `
<div class="component p-4 rounded relative" style="margin-top: 20px;">
         <button class="remove-btn" style="position: absolute; top: 8px; right: 8px; background-color: red; color: white; padding: 4px 8px; border-radius: 4px; font-size: 14px;">X</button>
<div class="contact-section-2">
  <div class="contact-info">
    <h2>Contact Us</h2>
    <p>We'd love to hear from you! Reach out to us for any inquiries.</p>
  </div>
  <div class="contact-form">
    <form>
      <input type="text" placeholder="Your Name" required>
      <input type="email" placeholder="Your Email" required>
      <textarea placeholder="Your Message" required></textarea>
      <button type="submit">Send Message</button>
    </form>
  </div>
</div>`,

"Contact3": `
<div class="component p-4 rounded relative" style="margin-top: 20px;">
         <button class="remove-btn" style="position: absolute; top: 8px; right: 8px; background-color: red; color: white; padding: 4px 8px; border-radius: 4px; font-size: 14px;">X</button>
<div class="contact-section-3">
  <div class="contact-card">
    <h2>Contact Us</h2>
    <p>We'd love to hear from you! Reach out to us for any inquiries.</p>
    <form>
      <input type="text" placeholder="Your Name" required>
      <input type="email" placeholder="Your Email" required>
      <textarea placeholder="Your Message" required></textarea>
      <button type="submit">Send Message</button>
    </form>
  </div>
</div>`,

"Contact4": `
<div class="component p-4 rounded relative" style="margin-top: 20px;">
         <button class="remove-btn" style="position: absolute; top: 8px; right: 8px; background-color: red; color: white; padding: 4px 8px; border-radius: 4px; font-size: 14px;">X</button>
<div class="contact-section-4">
  <h2>Contact Us</h2>
  <p>We'd love to hear from you! Reach out to us for any inquiries.</p>
  <form>
    <input type="text" placeholder="Your Name" required>
    <input type="email" placeholder="Your Email" required>
    <textarea placeholder="Your Message" required></textarea>
    <button type="submit">Send Message</button>
  </form>
</div>`,

"Contact5":`
<div class="component p-4 rounded relative" style="margin-top: 20px;">
         <button class="remove-btn" style="position: absolute; top: 8px; right: 8px; background-color: red; color: white; padding: 4px 8px; border-radius: 4px; font-size: 14px;">X</button>
<div class="contact-section-5">
  <h2>Contact Us</h2>
  <p>We'd love to hear from you! Reach out to us for any inquiries.</p>
  <form>
    <input type="text" placeholder="Your Name" required>
    <input type="email" placeholder="Your Email" required>
    <textarea placeholder="Your Message" required></textarea>
    <button type="submit">Send Message</button>
  </form>
</div>
`,

"Test":`
<div class="component p-4 rounded relative" style="margin-top: 20px;">
         <button class="remove-btn" style="position: absolute; top: 8px; right: 8px; background-color: red; color: white; padding: 4px 8px; border-radius: 4px; font-size: 14px;">X</button>
      <div style="display: flex; flex-wrap: wrap; gap: 10px; margin-top: 10px; padding: 10px; background-color: rgba(0, 0, 0, 0.05); border-radius: 8px;">
    <button class="edit-testimonial-title" style="background-color: #e67e22; color: white; border: none; padding: 8px 12px; border-radius: 5px; cursor: pointer; font-size: 14px; transition: background-color 0.3s ease, transform 0.2s;">Edit Testimonial Title</button>
    <button class="edit-testimonial" style="background-color: #e67e22; color: white; border: none; padding: 8px 12px; border-radius: 5px; cursor: pointer; font-size: 14px; transition: background-color 0.3s ease, transform 0.2s;">Edit a Testimonial</button>
    <button class="add-testimonial" style="background-color: #e67e22; color: white; border: none; padding: 8px 12px; border-radius: 5px; cursor: pointer; font-size: 14px; transition: background-color 0.3s ease, transform 0.2s;">Add New Testimonial</button>
    <button class="edit-testimonial-bg" style="background-color: #e67e22; color: white; border: none; padding: 8px 12px; border-radius: 5px; cursor: pointer; font-size: 14px; transition: background-color 0.3s ease, transform 0.2s;">Change Background Color</button>
    <button class="edit-testimonial-text-color" style="background-color: #e67e22; color: white; border: none; padding: 8px 12px; border-radius: 5px; cursor: pointer; font-size: 14px; transition: background-color 0.3s ease, transform 0.2s;">Change Text Color</button>
</div>



  <div class="testimonial-section-1">
  <h2>What Our Clients Say</h2>
  <div class="testimonial-container">
    <div class="testimonial">
      <p>"This company is amazing! Their service exceeded my expectations."</p>
      <p><strong>- John Doe</strong></p>
    </div>
    <div class="testimonial">
      <p>"I highly recommend them. They are professional and reliable."</p>
      <p><strong>- Jane Smith</strong></p>
    </div>
    <div class="testimonial">
      <p>"Their team is efficient, friendly, and gets the job done right."</p>
      <p><strong>- Michael Johnson</strong></p>
    </div>
  </div>
</div>
`,

"Test2":`
<div class="component p-4 rounded relative" style="margin-top: 20px;">
<button class="remove-btn" style="position: absolute; top: 8px; right: 8px; background-color: red; color: white; padding: 4px 8px; border-radius: 4px; font-size: 14px;">X</button>
<div class="client-feedback">
  <h2>Client Feedback</h2>
  <div class="feedback-wrapper">
    <div class="feedback-card">
      <p>"Exceptional service and great results!"</p>
      <p><strong>- Alice Brown</strong></p>
    </div>
    <div class="feedback-card">
      <p>"Professional and efficient."</p>
      <p><strong>- David Wilson</strong></p>
    </div>
    <div class="feedback-card">
      <p>"Highly recommended for quality work."</p>
      <p><strong>- Emily Davis</strong></p>
    </div>
  </div>
</div>

`,
"Test3":`
<div class="component p-4 rounded relative" style="margin-top: 20px;">
<button class="remove-btn" style="position: absolute; top: 8px; right: 8px; background-color: red; color: white; padding: 4px 8px; border-radius: 4px; font-size: 14px;">X</button>
<div class="customer-testimonials">
  <h2>Testimonials</h2>
  <div class="testimonial-grid">
    <div class="testimonial-item">
      <blockquote>"Impressive attention to detail and outstanding support!"</blockquote>
      <p><strong>- Frank Green</strong></p>
    </div>
    <div class="testimonial-item">
      <blockquote>"The team went above and beyond!"</blockquote>
      <p><strong>- Grace Lee</strong></p>
    </div>
    <div class="testimonial-item">
      <blockquote>"Reliable and innovative services."</blockquote>
      <p><strong>- Henry Clark</strong></p>
    </div>
  </div>
</div>

`,

"Test4":`
<div class="component p-4 rounded relative" style="margin-top: 20px;">
<button class="remove-btn" style="position: absolute; top: 8px; right: 8px; background-color: red; color: white; padding: 4px 8px; border-radius: 4px; font-size: 14px;">X</button>
<div class="testimonial-section-4">
  <h2>Happy Clients</h2>
  <div class="testimonial-cards">
    <div class="testimonial-content">
      <p>"Absolutely fantastic! Will use again."</p>
      <p><strong>- Isabella Martinez</strong></p>
    </div>
    <div class="testimonial-content">
      <p>"Top-notch service from start to finish."</p>
      <p><strong>- Jack Thompson</strong></p>
    </div>
    <div class="testimonial-content">
      <p>"Great experience and results."</p>
      <p><strong>- Karen Walker</strong></p>
    </div>
  </div>
</div>

`,

"Test5":`
<div class="component p-4 rounded relative" style="margin-top: 20px;">
<button class="remove-btn" style="position: absolute; top: 8px; right: 8px; background-color: red; color: white; padding: 4px 8px; border-radius: 4px; font-size: 14px;">X</button>
<div class="testimonial-section-5">
  <h2>Customer Reviews</h2>
  <div class="testimonial-box">
    <div class="testimonial-text">
      <p>"Quick and efficient service. Thumbs up!"</p>
      <p><strong>- Laura Scott</strong></p>
    </div>
    <div class="testimonial-text">
      <p>"Friendly staff and excellent results."</p>
      <p><strong>- Matt Turner</strong></p>
    </div>
    <div class="testimonial-text">
      <p>"I am thoroughly impressed with their work."</p>
      <p><strong>- Natalie White</strong></p>
    </div>
  </div>
</div>

`,

"Log":`
<div class="component p-4 rounded relative" style="margin-top: 20px;">
<button class="remove-btn" style="position: absolute; top: 8px; right: 8px; background-color: red; color: white; padding: 4px 8px; border-radius: 4px; font-size: 14px;">X</button>
<div style="display: flex; flex-wrap: wrap; gap: 10px; margin-top: 10px; padding: 10px; background-color: rgba(0, 0, 0, 0.05); border-radius: 8px;">
    <button class="edit-login-title" style="background-color: #3498db; color: white; border: none; padding: 8px 12px; border-radius: 5px; cursor: pointer; font-size: 14px; transition: background-color 0.3s ease, transform 0.2s;">Edit Login Title</button>
    <button class="edit-login-placeholders" style="background-color: #3498db; color: white; border: none; padding: 8px 12px; border-radius: 5px; cursor: pointer; font-size: 14px; transition: background-color 0.3s ease, transform 0.2s;">Edit Input Placeholders</button>
    <button class="edit-login-button" style="background-color: #3498db; color: white; border: none; padding: 8px 12px; border-radius: 5px; cursor: pointer; font-size: 14px; transition: background-color 0.3s ease, transform 0.2s;">Edit Submit Button</button>
    <button class="edit-login-bg" style="background-color: #3498db; color: white; border: none; padding: 8px 12px; border-radius: 5px; cursor: pointer; font-size: 14px; transition: background-color 0.3s ease, transform 0.2s;">Change Background Color</button>
    <button class="edit-login-text-color" style="background-color: #3498db; color: white; border: none; padding: 8px 12px; border-radius: 5px; cursor: pointer; font-size: 14px; transition: background-color 0.3s ease, transform 0.2s;">Change Text Color</button>
</div>


<div class="floating-form">
    <div class="floating-header">Register Now</div>
    <div class="floating-group">
        <input type="text" id="name">
        <label for="name">Name</label>
    </div>
    <div class="floating-group">
        <input type="email" id="email">
        <label for="email">Email</label>
    </div>
    <div class="floating-group">
        <input type="password" id="password">
        <label for="password">Password</label>
    </div>
    <div class="floating-footer">
        <button class="floating-btn">Submit</button>
    </div>
</div>

`,

"Log2":`
<div class="component p-4 rounded relative" style="margin-top: 20px;">
<button class="remove-btn" style="position: absolute; top: 8px; right: 8px; background-color: red; color: white; padding: 4px 8px; border-radius: 4px; font-size: 14px;">X</button>
<div class="signup-container">
    <div class="background-circles"></div>
    <div class="background-circles"></div>
    <h2>Sign Up</h2>
    <br>
    <div class="circle-input" data-label="Username">
        <input type="text" placeholder="Username">
    </div><br>
    <div class="circle-input" data-label="Email">
        <input type="email" placeholder="Email">
    </div><br>
    <div class="circle-input" data-label="Password">
        <input type="password" placeholder="Password">
    </div><br>
    <button class="signup-button">Sign Up</button>
</div>



`,

"Log3":`
<div class="component p-4 rounded relative" style="margin-top: 20px;">
<button class="remove-btn" style="position: absolute; top: 8px; right: 8px; background-color: red; color: white; padding: 4px 8px; border-radius: 4px; font-size: 14px;">X</button>
<div class="signup-container">
    <div class="signup-header">
        Join Us Now
    </div>
    <div class="signup-body">
        <h2>Create Account</h2>
        <div class="input-group">
            <label for="username">Username</label>
            <input type="text" id="username" placeholder="Enter your username">
        </div>
        <div class="input-group">
            <label for="email">Email</label>
            <input type="email" id="email" placeholder="Enter your email">
        </div>
        <div class="input-group">
            <label for="password">Password</label>
            <input type="password" id="password" placeholder="Enter your password">
        </div>
        <button class="signup-button">Sign Up</button>
    </div>
    <div class="signup-footer">
        Already have an account? <a href="#">Sign In</a>
    </div>
</div>


`,

"Log4":`
<div class="component p-4 rounded relative" style="margin-top: 20px;">
<button class="remove-btn" style="position: absolute; top: 8px; right: 8px; background-color: red; color: white; padding: 4px 8px; border-radius: 4px; font-size: 14px;">X</button>
    <div class="container">
        <center><h1>Sign Up</h1></center>
        <form action="#" method="post">
            <input type="text" name="username" placeholder="Username" required>
            <input type="email" name="email" placeholder="Email ID" required>
            <input type="password" name="password" placeholder="Password" required>
            <input type="submit" value="Sign Up">
        </form>
    </div>

`,

"Log5":`
<div class="component p-4 rounded relative" style="margin-top: 20px;">
<button class="remove-btn" style="position: absolute; top: 8px; right: 8px; background-color: red; color: white; padding: 4px 8px; border-radius: 4px; font-size: 14px;">X</button>
<div class="signup-container5">
    <div class="input-group">
        <label for="username">Username</label>
        <input type="text" id="username" placeholder="Enter your username">
    </div>
    <div class="input-group">
        <label for="email">Email</label>
        <input type="email" id="email" placeholder="Enter your email">
    </div>
    <div class="input-group">
        <label for="password">Password</label>
        <input type="password" id="password" placeholder="Enter your password">
    </div><br>
    <button class="signup-button">Sign Up</button>
    <div class="signup-footer">
        Already have an account? <a href="#">Sign In</a>
    </div>
</div>


`,

"Footer": `
<div class="component p-4 rounded relative" style="margin-top: 20px;">
  <button class="remove-btn" style="position: absolute; top: 8px; right: 8px; background-color: red; color: white; padding: 4px 8px; border-radius: 4px; font-size: 14px;">X</button>
  <button class="edit-btn" style="position: absolute; top: 8px; right: 80px; background-color: blue; color: white; padding: 4px 8px; border-radius: 4px; font-size: 14px;">Edit Links</button>
  <button class="edit-style-btn" style="position: absolute; top: 8px; right: 170px; background-color: green; color: white; padding: 4px 8px; border-radius: 4px; font-size: 14px;">Customize Style</button>
  
  <footer class="footer" style="background-color: #222; padding: 10px; text-align: center;">
    <div class="footer-content">
      <p style="color: white;">&copy; 2025 My Website. All rights reserved.</p>
      <div class="social-icons">
        <a href="#" class="social-icon" style="color: lightblue;">Facebook</a>
        <a href="#" class="social-icon" style="color: lightblue;">Twitter</a>
        <a href="#" class="social-icon" style="color: lightblue;">Instagram</a>
      </div>
    </div>
  </footer>
</div>
`,
"Footer2": `
<div class="component p-4 rounded relative" style="margin-top: 20px;">
  <button class="remove-btn" style="position: absolute; top: 8px; right: 8px; background-color: red; color: white; padding: 4px 8px; border-radius: 4px; font-size: 14px;">X</button>
  <button class="edit-footer2-links-btn" style="position: absolute; top: 8px; right: 80px; background-color: blue; color: white; padding: 4px 8px; border-radius: 4px; font-size: 14px;">Edit Links</button>
  <button class="customize-footer2-style-btn" style="position: absolute; top: 8px; right: 170px; background-color: green; color: white; padding: 4px 8px; border-radius: 4px; font-size: 14px;">Customize Style</button>
  
  <footer class="bottom-section" style="background-color: #222; padding: 10px; text-align: center;">
    <div class="bottom-content">
      <p style="color: white;">&copy; 2025 My New Website. All rights reserved.</p>
      <div class="icon-links">
        <a href="#" class="icon-item" style="color: lightblue;">Facebook</a>
        <a href="#" class="icon-item" style="color: lightblue;">Twitter</a>
        <a href="#" class="icon-item" style="color: lightblue;">Instagram</a>
      </div>
    </div>
  </footer>
</div>
`,

"Footer3": `
<div class="component p-4 rounded relative" style="margin-top: 20px;">
  <button class="remove-btn" style="position: absolute; top: 8px; right: 8px; background-color: red; color: white; padding: 4px 8px; border-radius: 4px; font-size: 14px;">X</button>
  <button class="edit-footer3-links-btn" style="position: absolute; top: 8px; right: 80px; background-color: blue; color: white; padding: 4px 8px; border-radius: 4px; font-size: 14px;">Edit Links</button>
  <button class="customize-footer3-style-btn" style="position: absolute; top: 8px; right: 170px; background-color: green; color: white; padding: 4px 8px; border-radius: 4px; font-size: 14px;">Customize Style</button>

  <footer class="bottom-bar" style="background-color: #222; padding: 10px; text-align: center;">
    <div class="bottom-wrapper">
      <p style="color: white;">&copy; 2025 My New Website. All rights reserved.</p>
      <div class="icon-list">
        <a href="#" class="icon-link" style="color: lightblue;">Facebook</a>
        <a href="#" class="icon-link" style="color: lightblue;">Twitter</a>
        <a href="#" class="icon-link" style="color: lightblue;">Instagram</a>
      </div>
    </div>
  </footer>
</div>
`,

"Footer4": `
<div class="component p-4 rounded relative" style="margin-top: 20px;">
  <button class="remove-btn" style="position: absolute; top: 8px; right: 8px; background-color: red; color: white; padding: 4px 8px; border-radius: 4px; font-size: 14px;">X</button>
  <button class="edit-footer4-links-action" style="position: absolute; top: 8px; right: 80px; background-color: blue; color: white; padding: 4px 8px; border-radius: 4px; font-size: 14px;">Edit Links</button>

<button class="customize-footer4-style-action" style="position: absolute; top: 8px; right: 190px; background-color: green; color: white; padding: 4px 8px; border-radius: 4px; font-size: 14px;">Customize Style</button>

  <footer class="footer-container" style="background-color: #333; color: white; padding: 20px; text-align: center;">
    
    <!-- Top Section -->
    <div class="footer-top">
      <p>Stay connected with us for the latest updates!</p>
    </div>

    <!-- Middle Section - Social Links -->
    <div class="footer-middle">
      <div class="social-links">
        <a href="#" class="social-btn" style="color: lightblue;">Facebook</a>
        <a href="#" class="social-btn" style="color: lightblue;">Twitter</a>
        <a href="#" class="social-btn" style="color: lightblue;">Instagram</a>
      </div>
    </div>

    <!-- Bottom Section - Copyright -->
    <div class="footer-bottom">
      <p>&copy; 2025 My Awesome Website. All rights reserved.</p>
    </div>

  </footer>
</div>
`,

"Footer5": `
<div class="component p-4 rounded relative footer-component" style="margin-top: 20px;">
  <button class="remove-btn" style="position: absolute; top: 8px; right: 40px; background-color: red; color: white; padding: 4px 8px; border-radius: 4px; font-size: 14px;">X</button>
  

  <footer class="footer2">
    <div class="footer2-container">
      <div class="footer2-top">
        <p class="footer-text">Stay Connected</p>
      </div>
      <div class="footer2-middle">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Contact</a>
      </div>
      <div class="footer2-social">
        <a href="#">Facebook</a>
        <a href="#">Twitter</a>
        <a href="#">Instagram</a>
      </div>
      <div class="footer2-bottom">
        <p class="footer-copyright">&copy; 2025 My Website. All rights reserved.</p>
      </div>
    </div>
  </footer>
</div>

`,


}
document.addEventListener("click", function (event) {
  let parentComponent = event.target.closest(".component");

  if (!parentComponent) return; // Prevents errors if no component is found

  // ---------------------- LOGIN FORM EDITS ----------------------

  // Edit "Register Now" Title
  if (event.target.classList.contains("edit-login-title")) {
    let loginTitle = parentComponent.querySelector(".floating-header");
    let newTitle = prompt("Enter new title for login form:", loginTitle.textContent);
    if (newTitle) {
      loginTitle.textContent = newTitle;
    }
  }

  // Edit Input Placeholders
  if (event.target.classList.contains("edit-login-placeholders")) {
    let nameInput = parentComponent.querySelector("#name");
    let emailInput = parentComponent.querySelector("#email");
    let passwordInput = parentComponent.querySelector("#password");

    let newNamePlaceholder = prompt("Enter new placeholder for Name:", nameInput.placeholder || "Name");
    let newEmailPlaceholder = prompt("Enter new placeholder for Email:", emailInput.placeholder || "Email");
    let newPasswordPlaceholder = prompt("Enter new placeholder for Password:", passwordInput.placeholder || "Password");

    if (newNamePlaceholder) nameInput.placeholder = newNamePlaceholder;
    if (newEmailPlaceholder) emailInput.placeholder = newEmailPlaceholder;
    if (newPasswordPlaceholder) passwordInput.placeholder = newPasswordPlaceholder;
  }

  // Edit Submit Button Text
  if (event.target.classList.contains("edit-login-button")) {
    let submitButton = parentComponent.querySelector(".floating-btn");
    let newButtonText = prompt("Enter new text for Submit button:", submitButton.textContent);
    if (newButtonText) {
      submitButton.textContent = newButtonText;
    }
  }

  // Change Background Color of Login Form
  if (event.target.classList.contains("edit-login-bg")) {
    let newBgColor = prompt("Enter a background color (e.g., #ff0000, rgb(255,0,0)):");
    if (newBgColor) {
      parentComponent.querySelector(".floating-form").style.backgroundColor = newBgColor;
    }
  }

  // Change Text Color of Login Form
  if (event.target.classList.contains("edit-login-text-color")) {
    let newTextColor = prompt("Enter a text color (e.g., white, #ffffff, rgb(255,255,255)):");
    if (newTextColor) {
      parentComponent.querySelector(".floating-form").style.color = newTextColor;
    }
  }
});
  
document.addEventListener("click", function (event) {
  let parentComponent = event.target.closest(".component");

  if (!parentComponent) return; // Prevents errors if no component is found

  // ---------------------- TESTIMONIAL SECTION EDITS ----------------------

  // Edit "What Our Clients Say" Title
  if (event.target.classList.contains("edit-testimonial-title")) {
    let testimonialTitle = parentComponent.querySelector(".testimonial-section-1 h2");
    let newTitle = prompt("Enter new title:", testimonialTitle.textContent);
    if (newTitle) {
      testimonialTitle.textContent = newTitle;
    }
  }

  // Edit Individual Testimonial
  if (event.target.classList.contains("edit-testimonial")) {
    let testimonials = parentComponent.querySelectorAll(".testimonial");
    let testimonialArray = Array.from(testimonials);

    let selectedIndex = prompt(
      `Enter the testimonial number to edit (1 - ${testimonials.length}):`
    );
    let index = parseInt(selectedIndex, 10) - 1;

    if (!isNaN(index) && index >= 0 && index < testimonialArray.length) {
      let testimonialElement = testimonialArray[index];

      let newText = prompt("Enter new testimonial text:", testimonialElement.querySelector("p").textContent.replace(/"/g, ''));
      let newAuthor = prompt("Enter new author name:", testimonialElement.querySelector("strong").textContent.replace("-", "").trim());

      if (newText) testimonialElement.querySelector("p").textContent = `"${newText}"`;
      if (newAuthor) testimonialElement.querySelector("strong").textContent = `- ${newAuthor}`;
    } else {
      alert("Invalid number selected.");
    }
  }

  // Add New Testimonial
  if (event.target.classList.contains("add-testimonial")) {
    let testimonialContainer = parentComponent.querySelector(".testimonial-container");

    let newTestimonialText = prompt("Enter testimonial text:");
    let newTestimonialAuthor = prompt("Enter author name:");

    if (newTestimonialText && newTestimonialAuthor) {
      let newTestimonial = document.createElement("div");
      newTestimonial.classList.add("testimonial");
      newTestimonial.innerHTML = `
        <p>"${newTestimonialText}"</p>
        <p><strong>- ${newTestimonialAuthor}</strong></p>
        <button class="remove-testimonial" style="margin-left: 10px; color: red; cursor: pointer;">Remove</button>
      `;
      testimonialContainer.appendChild(newTestimonial);
    }
  }

  // Remove a Testimonial
  if (event.target.classList.contains("remove-testimonial")) {
    let testimonialElement = event.target.closest(".testimonial");
    if (testimonialElement) {
      testimonialElement.remove();
    }
  }

  // Change Background Color of Testimonial Section
  if (event.target.classList.contains("edit-testimonial-bg")) {
    let newBgColor = prompt("Enter a background color (e.g., #ff0000, rgb(255,0,0)):");
    if (newBgColor) {
      parentComponent.querySelector(".testimonial-section-1").style.backgroundColor = newBgColor;
    }
  }

  // Change Text Color of Testimonial Section
  if (event.target.classList.contains("edit-testimonial-text-color")) {
    let newTextColor = prompt("Enter a text color (e.g., white, #ffffff, rgb(255,255,255)):");
    if (newTextColor) {
      parentComponent.querySelectorAll(".testimonial p, .testimonial strong").forEach(element => {
        element.style.color = newTextColor;
      });
    }
  }
});


document.addEventListener("click", function (event) {
  let parentComponent = event.target.closest(".component, .about-component");

  if (!parentComponent) return; // Prevents errors if no component is found

  // ---------------------- CONTACT US SECTION EDITS ----------------------

  // Edit "Contact Us" Title
  if (event.target.classList.contains("edit-contact-title")) {
    let contactTitle = parentComponent.querySelector(".contact-section-1 h2");
    let newTitle = prompt("Enter new Contact Us title:", contactTitle.textContent);
    if (newTitle) {
      contactTitle.textContent = newTitle;
    }
  }

  // Edit "Contact Us" Description
  if (event.target.classList.contains("edit-contact-description")) {
    let contactDescription = parentComponent.querySelector(".contact-section-1 p");
    let newDescription = prompt("Enter new Contact Us description:", contactDescription.textContent);
    if (newDescription) {
      contactDescription.textContent = newDescription;
    }
  }

  // Edit Contact Form Placeholder Texts
  if (event.target.classList.contains("edit-contact-placeholders")) {
    let nameInput = parentComponent.querySelector("input[type='text']");
    let emailInput = parentComponent.querySelector("input[type='email']");
    let messageTextarea = parentComponent.querySelector("textarea");

    let newNamePlaceholder = prompt("Enter new placeholder for Name:", nameInput.placeholder);
    let newEmailPlaceholder = prompt("Enter new placeholder for Email:", emailInput.placeholder);
    let newMessagePlaceholder = prompt("Enter new placeholder for Message:", messageTextarea.placeholder);

    if (newNamePlaceholder) nameInput.placeholder = newNamePlaceholder;
    if (newEmailPlaceholder) emailInput.placeholder = newEmailPlaceholder;
    if (newMessagePlaceholder) messageTextarea.placeholder = newMessagePlaceholder;
  }

  // Edit Contact Form Submit Button Text
  if (event.target.classList.contains("edit-contact-button")) {
    let submitButton = parentComponent.querySelector("button[type='submit']");
    let newButtonText = prompt("Enter new text for Submit button:", submitButton.textContent);
    if (newButtonText) {
      submitButton.textContent = newButtonText;
    }
  }

  // Change Background Color of Contact Section
  if (event.target.classList.contains("edit-contact-bg")) {
    let newBgColor = prompt("Enter a background color (e.g., red, #ff0000, rgb(255,0,0)):");
    if (newBgColor) {
      parentComponent.querySelector(".contact-section-1").style.backgroundColor = newBgColor;
    }
  }

  // Change Text Color of Contact Section
  if (event.target.classList.contains("edit-contact-text-color")) {
    let newTextColor = prompt("Enter a text color (e.g., white, #ffffff, rgb(255,255,255)):");
    if (newTextColor) {
      parentComponent.querySelector(".contact-section-1").style.color = newTextColor;
    }
  }
});

document.addEventListener("click", function (event) {
  let parentComponent = event.target.closest(".component, .about-component");

  if (!parentComponent) return; // Prevent errors if no component is found

  // Edit "About Us" Hero Title
  if (event.target.classList.contains("edit-about-title")) {
    let aboutTitle = parentComponent.querySelector(".about-title");
    let newTitle = prompt("Enter new About Us title:", aboutTitle.textContent);
    if (newTitle) {
      aboutTitle.textContent = newTitle;
    }
  }

  // Edit "About Us" Subtitle
  if (event.target.classList.contains("edit-about-subtitle")) {
    let aboutSubtitle = parentComponent.querySelector(".about-subtitle");
    let newSubtitle = prompt("Enter new About Us subtitle:", aboutSubtitle.textContent);
    if (newSubtitle) {
      aboutSubtitle.textContent = newSubtitle;
    }
  }

  // Edit Core Values (Titles & Descriptions)
  if (event.target.classList.contains("edit-core-values")) {
    let values = parentComponent.querySelectorAll(".value-item");

    values.forEach((value) => {
      let title = value.querySelector("h3");
      let description = value.querySelector("p");

      let newTitle = prompt(`Enter new title for ${title.textContent}:`, title.textContent);
      let newDescription = prompt(`Enter new description for "${title.textContent}":`, description.textContent);

      if (newTitle) title.textContent = newTitle;
      if (newDescription) description.textContent = newDescription;
    });
  }

  // Edit Call to Action (CTA) Title
  if (event.target.classList.contains("edit-about-cta-title")) {
    let ctaTitle = parentComponent.querySelector(".about-cta h2");
    let newCTATitle = prompt("Enter new CTA title:", ctaTitle.textContent);
    if (newCTATitle) {
      ctaTitle.textContent = newCTATitle;
    }
  }

  // Edit Call to Action (CTA) Description
  if (event.target.classList.contains("edit-about-cta-description")) {
    let ctaDescription = parentComponent.querySelector(".about-cta p");
    let newCTADescription = prompt("Enter new CTA description:", ctaDescription.textContent);
    if (newCTADescription) {
      ctaDescription.textContent = newCTADescription;
    }
  }

  // Edit Call to Action (CTA) Button Text
  if (event.target.classList.contains("edit-about-cta-button")) {
    let ctaButton = parentComponent.querySelector(".cta-button");
    let newCTAButtonText = prompt("Enter new text for CTA button:", ctaButton.textContent);
    if (newCTAButtonText) {
      ctaButton.textContent = newCTAButtonText;
    }
  }
});


document.addEventListener("click", function (event) {
  let parentComponent = event.target.closest(".component");

  if (!parentComponent) return; // Prevents errors if no component is found

  // Debugging: Log the clicked button
  console.log("Clicked:", event.target.className);

  // Edit Navbar Brand Name
  if (event.target.classList.contains("edit-navbar-brand")) {
    let brand = parentComponent.querySelector(".custom-brand");
    if (brand) {
      let newBrandName = prompt("Enter new brand name:", brand.textContent);
      if (newBrandName) {
        brand.textContent = newBrandName;
      }
    } else {
      console.error("Brand element not found!");
    }
  }

  // Edit Navbar Links
  if (event.target.classList.contains("edit-navbar-links")) {
    let navLinks = parentComponent.querySelectorAll(".custom-nav-links li a");

    if (navLinks.length > 0) {
      navLinks.forEach((link) => {
        let newName = prompt(`Enter new name for ${link.textContent}:`, link.textContent);
        if (newName) {
          link.textContent = newName;
        }
      });
    } else {
      console.error("Navbar links not found!");
    }
  }

  // Edit Navbar Background Color
  if (event.target.classList.contains("edit-navbar-bg")) {
    let navbar = parentComponent.querySelector(".custom-navbar");
    if (navbar) {
      let newBgColor = prompt("Enter new navbar background color (CSS format, e.g., #ff0000 or red):", navbar.style.backgroundColor);
      if (newBgColor) {
        navbar.style.backgroundColor = newBgColor;
      }
    } else {
      console.error("Navbar element not found!");
    }
  }

  // Edit Navbar Text Color
  if (event.target.classList.contains("edit-navbar-text-color")) {
    let navbar = parentComponent.querySelector(".custom-navbar");
    if (navbar) {
      let newTextColor = prompt("Enter new text color for navbar (CSS format, e.g., #ffffff or white):", navbar.style.color);
      if (newTextColor) {
        navbar.style.color = newTextColor;
        let navLinks = parentComponent.querySelectorAll(".custom-nav-links li a");
        navLinks.forEach(link => link.style.color = newTextColor);
        let brand = parentComponent.querySelector(".custom-brand");
        if (brand) brand.style.color = newTextColor;
      }
    } else {
      console.error("Navbar element not found!");
    }
  }
 


  // Edit Signup Button Text
  if (event.target.classList.contains("edit-navbar-signup-btn")) {
    let signupBtn = parentComponent.querySelector(".custom-signup-btn");
    if (signupBtn) {
      let newBtnText = prompt("Enter new text for the signup button:", signupBtn.textContent);
      if (newBtnText) {
        signupBtn.textContent = newBtnText;
      }
    } else {
      console.error("Signup button not found!");
    }
  }

  // Edit Signup Button Text Color
  if (event.target.classList.contains("edit-navbar-signup-text-color")) {
    let signupBtn = parentComponent.querySelector(".custom-signup-btn");
    if (signupBtn) {
      let newTextColor = prompt("Enter new text color for the signup button (CSS format, e.g., #ffffff or white):", signupBtn.style.color);
      if (newTextColor) {
        signupBtn.style.color = newTextColor;
      }
    } else {
      console.error("Signup button not found!");
    }
  }
});

document.addEventListener("click", function (event) {
  let parentComponent = event.target.closest(".component");

  // Edit Social Media Links for Footer4
  if (event.target.classList.contains("edit-footer4-links-action")) {
    let socialLinks = parentComponent.querySelectorAll(".social-btn");

    socialLinks.forEach((link) => {
      let newName = prompt(`Enter new name for ${link.textContent}:`, link.textContent);
      if (newName) {
        link.textContent = newName;
      }
    });
  }

  // Customize Background, Background Image & Text Color for Footer4
  if (event.target.classList.contains("customize-footer4-style-action")) {
    let footer = parentComponent.querySelector(".footer-container");
    let socialLinks = parentComponent.querySelectorAll(".social-btn");

    let newBgColor = prompt("Enter a new background color (CSS format, e.g., #ff0000 or red):", footer.style.backgroundColor);
    if (newBgColor) {
      footer.style.backgroundColor = newBgColor;
    }

    let newTextColor = prompt("Enter a new text color for links (CSS format, e.g., #ffffff or white):", socialLinks[0].style.color);
    if (newTextColor) {
      socialLinks.forEach(link => link.style.color = newTextColor);
    }

    let newBgImage = prompt("Enter a new background image URL (leave empty to remove):", "");
    if (newBgImage) {
      footer.style.backgroundImage = `url('${newBgImage}')`;
      footer.style.backgroundSize = "cover";
      footer.style.backgroundPosition = "center";
    } else {
      footer.style.backgroundImage = "none";
    }
  }
});

document.addEventListener("click", function (event) {
  let parentComponent = event.target.closest(".component");

  // Edit Social Media Links for Footer3
  if (event.target.classList.contains("edit-footer3-links-btn")) {
    let socialLinks = parentComponent.querySelectorAll(".icon-link");

    socialLinks.forEach((link) => {
      let newName = prompt(`Enter new name for ${link.textContent}:`, link.textContent);
      if (newName) {
        link.textContent = newName;
      }
    });
  }

  // Customize Background & Text Color for Footer3
  if (event.target.classList.contains("customize-footer3-style-btn")) {
    let footer = parentComponent.querySelector(".bottom-bar");
    let socialLinks = parentComponent.querySelectorAll(".icon-link");

    let newBgColor = prompt("Enter a new background color (CSS format, e.g., #ff0000 or red):", footer.style.backgroundColor);
    if (newBgColor) {
      footer.style.backgroundColor = newBgColor;
    }

    let newTextColor = prompt("Enter a new text color for links (CSS format, e.g., #ffffff or white):", socialLinks[0].style.color);
    if (newTextColor) {
      socialLinks.forEach(link => link.style.color = newTextColor);
    }
  }
});

// Add event listener for Footer2 functionalities
document.addEventListener("click", function (event) {
  let parentComponent = event.target.closest(".component");

  // Edit Social Media Links for Footer2
  if (event.target.classList.contains("edit-footer2-links-btn")) {
    let socialLinks = parentComponent.querySelectorAll(".icon-item");

    socialLinks.forEach((link) => {
      let newName = prompt(`Enter new name for ${link.textContent}:`, link.textContent);
      if (newName) {
        link.textContent = newName;
      }
    });
  }

  // Customize Background & Text Color for Footer2
  if (event.target.classList.contains("customize-footer2-style-btn")) {
    let footer = parentComponent.querySelector(".bottom-section");
    let socialLinks = parentComponent.querySelectorAll(".icon-item");

    let newBgColor = prompt("Enter a new background color (CSS format, e.g., #ff0000 or red):", footer.style.backgroundColor);
    if (newBgColor) {
      footer.style.backgroundColor = newBgColor;
    }

    let newTextColor = prompt("Enter a new text color for links (CSS format, e.g., #ffffff or white):", socialLinks[0].style.color);
    if (newTextColor) {
      socialLinks.forEach(link => link.style.color = newTextColor);
    }
  }
});

document.addEventListener("click", function (event) {
  let parentComponent = event.target.closest(".component");

  // Edit Social Media Links
  if (event.target.classList.contains("edit-btn")) {
    let socialLinks = parentComponent.querySelectorAll(".social-icon");

    socialLinks.forEach((link) => {
      let newName = prompt(`Enter new name for ${link.textContent}:`, link.textContent);
      if (newName) {
        link.textContent = newName;
      }
    });
  }

  // Customize Background & Text Color
  if (event.target.classList.contains("edit-style-btn")) {
    let footer = parentComponent.querySelector(".footer");
    let socialLinks = parentComponent.querySelectorAll(".social-icon");

    let newBgColor = prompt("Enter a new background color (CSS format, e.g., #ff0000 or red):", footer?.style.backgroundColor);
    if (newBgColor) footer.style.backgroundColor = newBgColor;

    let newTextColor = prompt("Enter a new text color for links (CSS format, e.g., #ffffff or white):", socialLinks[0]?.style.color);
    if (newTextColor) socialLinks.forEach(link => link.style.color = newTextColor);
  }
});

// Close modal on clicking "X"
document.querySelector(".close")?.addEventListener("click", function () {
  document.getElementById("editFooterModal").style.display = "none";
});

// Convert RGB to Hex
function rgbToHex(rgb) {
  let rgbValues = rgb.match(/\d+/g);
  return `#${((1 << 24) + (parseInt(rgbValues[0]) << 16) + (parseInt(rgbValues[1]) << 8) + parseInt(rgbValues[2])).toString(16).slice(1)}`;
}

// Function to Preview & Add Components Dynamically
function previewComponent(componentId) {
  let previewContainer = document.getElementById("preview-container");

  if (componentTemplates[componentId]) {
    previewContainer.innerHTML += componentTemplates[componentId];
    attachRemoveListeners();
  } else {
    alert("Component not found!");
  }
}

// Drag & Drop Functions
function allowDrop(event) {
  event.preventDefault();
  event.dataTransfer.dropEffect = "move";
}

function drag(event) {
  event.dataTransfer.setData("text", event.currentTarget.getAttribute("data-component"));
}

function drop(event) {
  event.preventDefault();
  let componentId = event.dataTransfer.getData("text");
  let previewContainer = document.getElementById("preview-container");

  if (componentTemplates[componentId]) {
    let newElement = document.createElement("div");
    newElement.innerHTML = componentTemplates[componentId];
    newElement.classList.add("draggable-component");
    
    previewContainer.prepend(newElement);
    attachRemoveListeners();
  }
}

// Attach Remove Listeners Dynamically
function attachRemoveListeners() {
  document.querySelectorAll(".remove-btn").forEach(button => {
    button.addEventListener("click", function () {
      this.parentElement.remove();
    });
  });
}

// Sidebar Hover Preview
function attachHoverListeners() {
  const hoverPreview = document.getElementById("hover-preview");
  document.querySelectorAll(".sidebar-item").forEach(item => {
    item.addEventListener("mouseenter", function () {
      const compId = this.getAttribute("data-component");
      if (componentTemplates[compId]) {
        hoverPreview.innerHTML = `<img src="images/${compId}.png">`;
        hoverPreview.classList.add("visible");
      }
    });
    item.addEventListener("mouseleave", function () {
      hoverPreview.innerHTML = "";
      hoverPreview.classList.remove("visible");
    });
  });
}

// Dark Mode Toggle
document.getElementById("darkModeToggle")?.addEventListener("change", function () {
  document.body.classList.toggle("dark");
});

// Save Template
function saveTemplate(event) {
  if (event) event.preventDefault();  // Prevent form submission
  let templateName = prompt("Enter template name:");
  if (!templateName) return;

  let previewContainer = document.getElementById("preview-container");
  let clonedContainer = previewContainer.cloneNode(true);
  clonedContainer.querySelectorAll(".remove-btn").forEach(btn => btn.remove());

  let templateHTML = clonedContainer.innerHTML;
  let allStyles = "";

  for (let sheet of document.styleSheets) {
    try {
      for (let rule of sheet.cssRules) {
        allStyles += rule.cssText + "\n";
      }
    } catch (e) {
      console.warn("Skipping a stylesheet due to CORS", e);
    }
  }

  fetch("save-template.php", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      template_name: templateName,
      template_html: templateHTML,
      template_css: allStyles
    })
  })
  .then(response => response.json())
  .then(data => {
    alert(data.message);
    if (data.status === "success") {
      loadTemplates();
    }
  })
  .catch(error => console.error("Error:", error));
}


// Load Templates
function loadTemplates() {
  fetch("view_template.php")
    .then(response => response.json())
    .then(data => {
      let templateList = document.getElementById("templateList");
      templateList.innerHTML = "";

      if (data.templates.length === 0) {
        templateList.innerHTML = "<p>No templates available.</p>";
        return;
      }

      data.templates.forEach(template => {
        let div = document.createElement("div");
        div.classList.add("template-item");

        // Create a temporary container to parse the HTML
        let tempContainer = document.createElement("div");
        tempContainer.innerHTML = template.template_html;

        // Remove all navbar edit buttons
        tempContainer.querySelectorAll(".edit-navbar-brand, .edit-navbar-links, .edit-navbar-bg, .edit-navbar-text-color, .edit-navbar-signup-btn, .edit-navbar-signup-text-color")
          .forEach(btn => btn.remove());

        div.innerHTML = `
          <h3>${template.template_name}</h3>
        `;
        
        // Append the cleaned-up template
        let previewDiv = document.createElement("div");
        previewDiv.classList.add("template-preview");
        previewDiv.appendChild(tempContainer);

        div.appendChild(previewDiv);
        div.innerHTML += `
          <button class="delete-btn" onclick="deleteTemplate(${template.id})">Delete</button>
        `;

        templateList.appendChild(div);
      });
    })
    .catch(error => console.error("Error loading templates:", error));
}


// Delete Template
function deleteTemplate(templateId) {
  if (!confirm("Are you sure you want to delete this template?")) return;

  fetch("delete_template.php", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({ template_id: templateId })
  })
  .then(response => response.json())
  .then(data => {
    alert(data.message);
    if (data.status === "success") {
      loadTemplates();
    }
  })
  .catch(error => console.error("Error:", error));
}

// Download Template
function downloadTemplate() {
  let previewContainer = document.getElementById("preview-container");

  if (!previewContainer || previewContainer.innerHTML.trim() === "") {
    alert("No components to download!");
    return;
  }

  let clonedContainer = previewContainer.cloneNode(true);
  clonedContainer.querySelectorAll(".remove-btn").forEach(btn => btn.remove());

  let templateContent = clonedContainer.innerHTML;
  let allStyles = "";

  for (let sheet of document.styleSheets) {
    try {
      for (let rule of sheet.cssRules) {
        allStyles += rule.cssText + "\n";
      }
    } catch (e) {
      console.warn("Skipping a stylesheet due to CORS", e);
    }
  }

  let completeHTML = `<!DOCTYPE html><html><head><style>${allStyles}</style></head><body>${templateContent}</body></html>`;
  let blob = new Blob([completeHTML], { type: "text/html" });
  let a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "template.html";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

document.getElementById("downloadBtn")?.addEventListener("click", downloadTemplate);
document.addEventListener("DOMContentLoaded", function () {
  attachRemoveListeners();
  attachHoverListeners();
});
