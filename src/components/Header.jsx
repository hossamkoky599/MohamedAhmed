import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router';
import { Home, User, Briefcase, Menu, X, Dumbbell, CreditCard, Sun, Moon, Globe } from 'lucide-react';
import "../assets/css/Header.css"

export default function Header({ theme, setTheme, language, setLanguage }) {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Sync activeLink with current route
  useEffect(() => {
    const path = location.pathname;
    const navItems = [
      { id: 'home', href: '/' },
      { id: 'about', href: '/about' },
      { id: 'services', href: '/services' },
      { id: 'plans', href: '/plans2' },
      { id: 'payments', href: '/payments' }
    ];

    const currentItem = navItems.find(item => item.href === path);
    if (currentItem) {
      setActiveLink(currentItem.id);
    }
  }, [location.pathname]);

  const navItems = [
    { id: 'home', label: 'Home', labelAr: 'الرئيسية', icon: Home, href: '/' },
    { id: 'about', label: 'About Me', labelAr: 'عني', icon: User, href: '/about' },
    { id: 'services', label: 'Services', labelAr: 'الخدمات', icon: Briefcase, href: '/services' },
    { id: 'plans', label: 'Plans', labelAr: 'الخطط', icon: Dumbbell, href: '/plans2' },
    { id: 'payments', label: 'Payments', labelAr: 'المدفوعات', icon: CreditCard, href: '/payments' }
  ];

  const handleNavClick = (id) => {
    setActiveLink(id);
    setIsMobileMenuOpen(false);
  };

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ar' : 'en');
  };

  return (
    <header className={`gym-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        {/* Logo Section */}
        <div className="logo-section">
          <img src="/images/image.png" alt="Coach Met3b" className="logo-image" />
          <div className="logo-text">
            <span className="logo-name">Coach Met3b</span>
            <span className="logo-tagline">
              {language === 'en' ? 'Transform Your Body' : 'حول جسمك'}
            </span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.id}
                href={item.href}
                className={`nav-link ${activeLink === item.id ? 'active' : ''}`}
                onClick={() => handleNavClick(item.id)}
              >
                <Icon className="nav-icon" size={18} />
                <span>{language === 'en' ? item.label : item.labelAr}</span>
                <span className="nav-indicator"></span>
              </a>
            );
          })}
        </nav>

        {/* Control Buttons Section */}
        <div className="header-controls">
          {/* Theme Toggle */}
          <button 
            className="control-btn theme-btn"
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {theme === 'dark' ? (
              <Sun className="control-icon" size={20} />
            ) : (
              <Moon className="control-icon" size={20} />
            )}
          </button>

          {/* Language Toggle */}
          <button 
            className="control-btn lang-btn"
            onClick={toggleLanguage}
            aria-label={language === 'en' ? 'Switch to Arabic' : 'Switch to English'}
          >
            <Globe className="control-icon" size={20} />
            <span className="lang-text">{language === 'en' ? 'AR' : 'EN'}</span>
          </button>

          {/* CTA Button */}
          <button className="hcta-button">
            <span>{language === 'en' ? 'Get Started' : 'ابدأ الآن'}</span>
            <div className="cta-shine"></div>
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="mobile-menu-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div className={`mobile-nav ${isMobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-nav-content">
          {navItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <a
                key={item.id}
                href={item.href}
                className={`mobile-nav-link ${activeLink === item.id ? 'active' : ''}`}
                onClick={() => handleNavClick(item.id)}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Icon className="mobile-nav-icon" size={20} />
                <span>{language === 'en' ? item.label : item.labelAr}</span>
              </a>
            );
          })}

          {/* Mobile Controls */}
          <div className="mobile-controls">
            <button className="mobile-control-btn" onClick={toggleTheme}>
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
              <span>{theme === 'dark' ? (language === 'en' ? 'Light Mode' : 'الوضع الفاتح') : (language === 'en' ? 'Dark Mode' : 'الوضع الداكن')}</span>
            </button>
            <button className="mobile-control-btn" onClick={toggleLanguage}>
              <Globe size={20} />
              <span>{language === 'en' ? 'العربية' : 'English'}</span>
            </button>
          </div>

          <button className="mobile-cta-button">
            {language === 'en' ? 'Get Started' : 'ابدأ الآن'}
          </button>
        </div>
      </div>

      {/* Header Background Effects */}
      <div className="header-bg-effect"></div>
    </header>
  );
}