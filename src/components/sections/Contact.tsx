import { useState } from 'react';
import { PERSONAL_INFO, SOCIAL_LINKS } from '@utils/constants.en';
import FadeIn from "@components/animations/FadeIn";
import { Github, Linkedin, Mail, MapPin, MessageSquare, Send, Twitter } from 'lucide-react';
import { SHORT_TITLE, TITLE, DESCRIPTION, SUBTITLE, SUB_DESCRIPTION, contactInfo, SEND_MESSAGE, LOCATION, CONNECT_WITH_ME } from '@data/english/contact.en';
import { HERO_INFO } from '@data/english/hero.en';
import { INFO } from '@data/english/info.en';
import { FaCopy, FaRegCopy } from 'react-icons/fa';

const Contact = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState({ type: "", message: "" });
  const [emailCopied, setEmailCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(INFO.email);
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setStatus({ type: 'error', message: 'Please fill in all fields' });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus({ type: 'error', message: 'Please enter a valid email' });
      return;
    }

    setStatus({
      type: 'success',
      message: "Message sent successfully! I'll get back to you soon."
    });

    setFormData({ name: '', email: '', message: '' });

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
    <section id="contact" className="relative py-20 bg-black overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 opacity-30 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/20 opacity-30 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 opacity-30 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn delay={0}>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-6">
              <MessageSquare className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-medium tracking-wider uppercase">{SHORT_TITLE}</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-normal text-white mb-4">{TITLE}</h2>
            <p className="text-lg text-white/60 max-w-2xl mx-auto">
              {DESCRIPTION}
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Form */}
          <FadeIn delay={100}>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-white/80 mb-2">
                    {contactInfo.name}
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    name="name"
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:bg-black focus:ring-2 focus:ring-primary/50 transition-all duration-300"
                    placeholder={contactInfo.name_placeholder}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-2">
                    {contactInfo.email}
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    name="email"
                    onChange={handleChange}
                    placeholder={contactInfo.email_placeholder}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:bg-black focus:ring-2 focus:ring-primary/50 transition-all duration-300"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-white/80 mb-2">
                    {contactInfo.message}
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    name="message"
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:bg-black focus:ring-2 focus:ring-primary/50 transition-all duration-300"
                    placeholder={contactInfo.message_placeholder}
                    rows={5}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-primary/80 text-white font-medium rounded-xl hover:shadow-2xl hover:shadow-primary/30 transition-all duration-300 flex items-center justify-center gap-2 group"
                >
                  <span>{SEND_MESSAGE}</span>
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </button>

                {status.message && (
                  <div
                    className={`p-4 rounded-xl ${
                      status.type === 'success'
                        ? 'border border-green-500/20 text-green-400'
                        : 'border border-red-500/20 text-red-400'
                    }`}
                  >
                    {status.message}
                  </div>
                )}
              </form>
            </div>
          </FadeIn>

          {/* Contact Info */}
          <FadeIn delay={200}>
            <div className="space-y-8">
              <h3 className="text-2xl font-semibold text-white">{SUBTITLE}</h3>
              <p className="text-white/60 leading-relaxed">
                {SUB_DESCRIPTION}
              </p>

              {/* Email */}
              <div className="group bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-primary/30 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/20 border border-primary/30 rounded-xl">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-white/60 mb-1">Email</p>
                    <div className="flex items-center gap-2">
                      <a
                        href={`mailto:${INFO.email}`}
                        className="text-white hover:text-primary transition-colors font-medium"
                      >
                        {INFO.email}
                      </a>
                      <button
                        onClick={copyEmail}
                        className="inline-flex h-7 w-7 ml-12 items-center justify-center rounded-md border border-white/20 bg-white/5 text-white/70 hover:border-primary/50 hover:text-primary hover:bg-primary/10 transition-all duration-200"
                        title="Copy email"
                        aria-label="Copy email"
                      >
                        {emailCopied ? <FaCopy className="text-primary" /> : <FaRegCopy />}
                      </button>
                      {emailCopied && (
                        <span className="rounded-md border border-primary/40 bg-primary/10 px-2 py-0.5 text-xs text-primary">Copied!</span>
                      )}
                    </div>
                  </div>
                </div>
              </div>  

              {/* Location */}
              <div className="group bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-primary/30 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/20 border border-primary/30 rounded-xl">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-white/60 mb-1">{LOCATION}</p>
                    <p className="text-white font-medium">{HERO_INFO.location}</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <p className="text-sm text-white/60 mb-4">{CONNECT_WITH_ME}</p>
                <div className="flex gap-4">
                  {Object.entries(SOCIAL_LINKS)
                    .slice(0, 3)
                    .map(([platform, url]) => {
                      const Icon = socialIcons[platform as keyof typeof socialIcons];
                      if (!Icon) return null;

                      return (
                        <a
                          key={platform}
                          href={url as string}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-primary/10 hover:border-primary/50 hover:scale-110 transition-all duration-300 group"
                        >
                          <Icon className="w-6 h-6 text-white/60 group-hover:text-primary transition-colors" />
                        </a>
                      );
                    })}
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default Contact;
