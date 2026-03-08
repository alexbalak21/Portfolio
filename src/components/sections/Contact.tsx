import { useState } from 'react';
import { PERSONAL_INFO, SOCIAL_LINKS } from '../../utils/constants';
import FadeIn from '../animations/FadeIn';
import { Github, Linkedin, MessageSquare, Send, Twitter } from 'lucide-react';

const Contact = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState({ type: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Check empty fields
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({ type: 'error', message: 'Please fill in all fields' });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus({ type: 'error', message: 'Please enter a valid email' });
      return;
    }

    // Success
    setStatus({
      type: 'success',
      message: "Message sent successfully! I'll get back to you soon."
    });

    // Reset form
    setFormData({ name: '', email: '', message: '' });

    // Clear status after 5s
    setTimeout(() => {
      setStatus({ type: '', message: '' });
    }, 5000);
  };


  // Success
  setStatus({
    type: 'success',
    message: "Message sent successfully! I'll get back to you soon."
  });

  // Reset form
  setFormData({ name: '', email: '', message: '' });

  // Clear status after 5s
  setTimeout(() => {
    setStatus({ type: '', message: '' });
  }, 5000);
};

const socialIcons = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter
};

return (
  <section id="contact" className=''>
    <div className="">
      <div className="" />
      <div className="" />
      <div className="" />
    </div>
    <div className="">
      <FadeIn delay={}>
        <div className="">
          
          <div className="">
            <MessageSquare className="" />
            <span className="">Get In Touch</span>
          </div>
          <h2 className="">Let's Work Together</h2>
          <p className="">Have a project in mind or want to discuss potential opportunities? Feel free to reach out!</p>
        </div>
        </FadeIn>

        <div className="">
          <FadeIn delay={100}>
            <div className="">
              <form onSubmit={handleSubmit} className="">
                <div>
                  <label htmlFor="name" className="">
                    Name
                  </label>
                  <input type="text" id="name" value={formData.name} name="name" onChange={handleChange} className="" placeholder="Your name" />
                </div>

                <div>
                  <label htmlFor="email" className="" >
                    Email
                  </label>
                  <input type="email" id="email" value={formData.email} name="email" onChange={handleChange} className="" placeholder="your.email@example.com" />
                </div>

                <div>
                  <label htmlFor="message">
                    Message
                  </label>
                  <textarea id="message" value={formData.message} name="message" onChange={handleChange} className="" placeholder="Tell me about your project..." rows={5} />
                </div>

                <button type="submit" className="">
                  <span>Send Message</span>
                  <Send className="" />
                </button>

                {status.message && (
                  <div className={`p-4 rounded-xl ${status.type === 'success' 
                  ? 'text-green-500/10 border border-green-500/20 text-green-400' 
                  : 'text-red-500/10 border border-red-500/20 text-red-400'}`}>
                    {status.message}
                  </div>
                )}

              </form>
            </div>
          </FadeIn>
        </div>

    </div>



  </section>
);


export default Contact;
