import React, { useState } from 'react';

const SuggestionForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    suggestion: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    try {
      const response = await fetch('http://localhost:3000/menu', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        throw new Error('Failed to submit suggestion');
      }
      console.log('Suggestion submitted successfully');
      // Reset form fields
      setFormData({
        name: '',
        email: '',
        suggestion: ''
      });
    } catch (error) {
      console.error('Error submitting suggestion:', error);
    }
  };

  return (
    <div>
      <h2>Submit Your Suggestion</h2>
      <form onSubmit={handleSubmit}> {/* Attach handleSubmit to form submission event */}
        <div>
          <label>Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div>
          <label>Suggestion:</label>
          <textarea name="suggestion" value={formData.suggestion} onChange={handleChange} required />
        </div>
        <button type="submit">Submit</button> {/* Use type="submit" to trigger form submission */}
      </form>
    </div>
  );
};

export default SuggestionForm;
