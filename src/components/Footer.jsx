import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Instagram, 
  Twitter, 
  Youtube,
  Dumbbell,
  Heart,
  Zap,
  TrendingUp,
  Award,
  Users,
  Apple,
  X
} from 'lucide-react';
import '../assets/css/Footer.css';

import certificate from "../assets/images/met3b-certificate.png"

export default function Footer({ language = 'en' }) {
  const [email, setEmail] = useState('');
  const [showCertificate, setShowCertificate] = useState(false);

  const translations = {
    en: {
      tagline: "Transform Your Body, Transform Your Life",
      aboutText: "Professional fitness coach dedicated to helping you achieve your health and fitness goals through personalized training programs and nutrition guidance.",
      quickLinks: "Quick Links",
      home: "Home",
      aboutMe: "About Me",
      services: "Services",
      plans: "Training Plans",
      payments: "Payments",
      getInTouch: "Get In Touch",
      phone: "Phone",
      email: "Email",
      location: "Location",
      followUs: "Follow Us",
      newsletter: "Newsletter",
      newsletterText: "Subscribe to get the latest fitness tips and exclusive offers!",
      emailPlaceholder: "Enter your email",
      subscribe: "Subscribe",
      rights: "All rights reserved",
      madeWith: "Made with",
      by: "by",
      personalTraining: "Personal Training",
      nutritionPlans: "Nutrition Plans",
      progress: "Progress Tracking",
      community: "Community Support",
      certificateTitle: "Professional Certification",
      certified: "Certified"
    },
    ar: {
      tagline: "حول جسمك، حول حياتك",
      aboutText: "مدرب لياقة بدنية محترف مكرس لمساعدتك على تحقيق أهدافك الصحية واللياقة البدنية من خلال برامج تدريب مخصصة وإرشادات غذائية.",
      quickLinks: "روابط سريعة",
      home: "الرئيسية",
      aboutMe: "عني",
      services: "الخدمات",
      plans: "خطط التدريب",
      payments: "المدفوعات",
      getInTouch: "تواصل معنا",
      phone: "الهاتف",
      email: "البريد الإلكتروني",
      location: "الموقع",
      followUs: "تابعنا",
      newsletter: "النشرة الإخبارية",
      newsletterText: "اشترك للحصول على أحدث نصائح اللياقة والعروض الحصرية!",
      emailPlaceholder: "أدخل بريدك الإلكتروني",
      subscribe: "اشترك",
      rights: "جميع الحقوق محفوظة",
      madeWith: "صنع بـ",
      by: "بواسطة",
      personalTraining: "تدريب شخصي",
      nutritionPlans: "خطط التغذية",
      progress: "تتبع التقدم",
      community: "دعم المجتمع",
      certificateTitle: "الشهادة المهنية",
      certified: "معتمد"
    }
  };

  const t = translations[language];

  const socialLinks = [
    { icon: Facebook, href: "https://www.facebook.com/share/1BfLMbD5re/", label: "Facebook", color: "#1877f2" },
    { icon: Instagram, href: "https://www.instagram.com/coach_met3b?igsh=djhzajVuOHB0bWJr", label: "Instagram", color: "#e4405f" },
    { icon: Twitter, href: "#", label: "Twitter", color: "#1da1f2" },
    { icon: Youtube, href: "#", label: "Youtube", color: "#ff0000" }
  ];

  const features = [
    { icon: Dumbbell, text: t.personalTraining },
    { icon: Apple, text: t.nutritionPlans },
    { icon: TrendingUp, text: t.progress },
    { icon: Users, text: t.community }
  ];

  const handleSubscribe = () => {
    if (email) {
      alert(`Subscribed with: ${email}`);
      setEmail('');
    }
  };

  const handleCertificateClick = () => {
    setShowCertificate(true);
  };

  const closeCertificate = () => {
    setShowCertificate(false);
  };

  return (
    <footer className="modern-footer" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      {/* Animated Background */}
      <div className="footer-bg-animation">
        <div className="wave wave-1"></div>
        <div className="wave wave-2"></div>
        <div className="wave wave-3"></div>
      </div>

      {/* Main Footer Content */}
      <div className="footer-container">
        {/* Brand Section */}
        <div className="footer-section brand-section">
          <div className="footer-logo-wrapper">
            <img 
              src="/images/image.png" 
              alt="Coach Met3b" 
              className="footer-logo"
            />
            <div className="logo-glow"></div>
          </div>
          <h3 className="footer-brand-name">Coach Met3b</h3>
          <p className="footer-tagline">{t.tagline}</p>
          <p className="footer-about">{t.aboutText}</p>
          
          {/* Features Pills */}
          <div className="feature-pills">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="feature-pill">
                  <Icon size={16} />
                  <span>{feature.text}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h4 className="footer-heading">
            <Zap className="heading-icon" />
            {t.quickLinks}
          </h4>
          <ul className="footer-links">
            <li><a href="/">{t.home}</a></li>
            <li><a href="/about">{t.aboutMe}</a></li>
            <li><a href="/services">{t.services}</a></li>
            <li><a href="/plans">{t.plans}</a></li>
            <li><a href="/payments">{t.payments}</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-section">
          <h4 className="footer-heading">
            <Mail className="heading-icon" />
            {t.getInTouch}
          </h4>
          <ul className="footer-contact">
            <li>
              <Phone className="contact-icon" />
              <div>
                <span className="contact-label">{t.phone}</span>
                <a href="tel:+201288864132">+20 12 88864132</a>
              </div>
            </li>
            <li>
              <Mail className="contact-icon" />
              <div>
                <span className="contact-label">{t.email}</span>
                <a href="mailto:coach@met3b.com">coach@met3b.com</a>
              </div>
            </li>
            <li>
              <MapPin className="contact-icon" />
              <div>
                <span className="contact-label">{t.location}</span>
                <span>Cairo, Egypt</span>
              </div>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="footer-section">
          <h4 className="footer-heading">
            <Heart className="heading-icon" />
            {t.newsletter}
          </h4>
          <p className="newsletter-text">{t.newsletterText}</p>
          <div className="newsletter-form">
            <div className="input-wrapper">
              <Mail className="input-icon" />
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t.emailPlaceholder}
              />
            </div>
            <button 
              className="subscribe-btn"
              onClick={handleSubscribe}
            >
              {t.subscribe}
              <Zap className="btn-icon" />
            </button>
          </div>

          {/* Social Links */}
          <div className="social-section">
            <h5 className="social-heading">{t.followUs}</h5>
            <div className="social-links">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a 
                    key={index}
                    href={social.href}
                    className="social-link"
                    aria-label={social.label}
                    style={{'--social-color': social.color}}
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <p className="copyright">
            © 2025 Coach Met3b. {t.rights}
          </p>
          <p className="made-with">
            {t.madeWith} <Heart className="heart-icon" size={14} /> {t.by} <span className="creator">Hossam Hassan</span>
          </p>
        </div>
      </div>

      {/* Floating Buttons Container */}
      <div className="floating-buttons">
        {/* Certified Badge - Left Side */}
        <div 
          className="achievement-badge"
          onClick={handleCertificateClick}
          role="button"
          tabIndex={0}
          onKeyPress={(e) => e.key === 'Enter' && handleCertificateClick()}
          aria-label={t.certificateTitle}
        >
          <Award className="badge-icon" />
          <span className="badge-text">{t.certified}</span>
          <span className="badge-pulse"></span>
        </div>

        {/* WhatsApp Button - Right Side */}
        <a 
          href="https://wa.me/201288864132?text=Hello%20Coach%20Met3b!%20I'm%20interested%20in%20your%20fitness%20programs." 
          className="whatsapp-float"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contact us on WhatsApp"
        >
          <svg 
            className="whatsapp-icon" 
            viewBox="0 0 24 24" 
            fill="currentColor"
            width="28"
            height="28"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
          </svg>
          <span className="whatsapp-text">
            {language === 'en' ? 'Chat' : 'دردشة'}
          </span>
          <span className="whatsapp-pulse"></span>
        </a>
      </div>

      {/* Certificate Modal */}
      {showCertificate && (
        <div 
          className="certificate-modal"
          onClick={closeCertificate}
          role="dialog"
          aria-modal="true"
          aria-labelledby="certificate-title"
        >
          <div className="certificate-overlay"></div>
          <div className="certificate-content" onClick={(e) => e.stopPropagation()}>
            <button 
              className="certificate-close"
              onClick={closeCertificate}
              aria-label="Close certificate"
            >
              <X size={34} />
            </button>
            <h3 id="certificate-title" className="certificate-title">
              {t.certificateTitle}
            </h3>
            <div className="certificate-image-wrapper">
              <img 
                src={certificate} 
                alt="Professional Fitness Coach Certificate"
                className="certificate-image"
              />
            </div>
          </div>
        </div>
      )}
    </footer>
  );
}