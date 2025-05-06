import React, { useState } from 'react';
import './VolunteerP.css';

const VolunteerP = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    availability: '',
    skills: '',
    motivation: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    alert('Thank you for volunteering! We will contact you soon.');
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      phone: '',
      address: '',
      availability: '',
      skills: '',
      motivation: ''
    });
  };

  return (
    <div className="volunteer-page">
      <div className="volunteer-hero">
        <h1>Become a Volunteer</h1>
        <p>Join our community of volunteers and help make a difference in people's lives</p>
      </div>

      <div className="volunteer-content">
        <div className="volunteer-info">
          <h2>Why Volunteer With Us?</h2>
          <ul>
            <li>Make a direct impact in your community</li>
            <li>Develop new skills and gain valuable experience</li>
            <li>Meet like-minded people who share your values</li>
            <li>Be part of a meaningful cause</li>
          </ul>
          
          <h2>Volunteer Opportunities</h2>
          <ul>
            <li>Food distribution</li>
            <li>Community outreach</li>
            <li>Administrative support</li>
            <li>Event organization</li>
            <li>Social media and marketing</li>
          </ul>
        </div>

        <div className="volunteer-form-container">
          <h2>Volunteer Application</h2>
          <form className="volunteer-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                value={formData.name} 
                onChange={handleChange} 
                required 
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                value={formData.email} 
                onChange={handleChange} 
                required 
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input 
                type="tel" 
                id="phone" 
                name="phone" 
                value={formData.phone} 
                onChange={handleChange} 
                required 
              />
            </div>

            <div className="form-group">
              <label htmlFor="address">Address</label>
              <input 
                type="text" 
                id="address" 
                name="address" 
                value={formData.address} 
                onChange={handleChange} 
                required 
              />
            </div>

            <div className="form-group">
              <label htmlFor="availability">Availability</label>
              <select 
                id="availability" 
                name="availability" 
                value={formData.availability} 
                onChange={handleChange} 
                required
              >
                <option value="">Select your availability</option>
                <option value="weekdays">Weekdays</option>
                <option value="weekends">Weekends</option>
                <option value="evenings">Evenings</option>
                <option value="flexible">Flexible</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="skills">Skills & Experience</label>
              <textarea 
                id="skills" 
                name="skills" 
                value={formData.skills} 
                onChange={handleChange} 
                rows="3"
              ></textarea>
            </div>

            <div className="form-group">
              <label htmlFor="motivation">Why do you want to volunteer with us?</label>
              <textarea 
                id="motivation" 
                name="motivation" 
                value={formData.motivation} 
                onChange={handleChange} 
                rows="4"
                required
              ></textarea>
            </div>

            <button type="submit" className="submit-btn">Submit Application</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default VolunteerP;