import React, { useState, useEffect } from 'react';
import { useOutletContext } from 'react-router';
import { 
  Dumbbell, 
  Target, 
  Trophy, 
  Users, 
  Star,
  ArrowRight,
  CheckCircle,
  Zap,
  Heart,
  Award,
  TrendingUp,
  Calendar,
  Play
} from 'lucide-react';
import '../assets/css/Home.css';

function Home() {
  const { language = 'en', theme = 'dark' } = useOutletContext() || {};
  const [counterValues, setCounterValues] = useState({
    clients: 0,
    years: 0,
    programs: 0,
    success: 0
  });

  // Animated Counter Effect
  useEffect(() => {
    const targets = { clients: 500, years: 8, programs: 50, success: 95 };
    const duration = 2000;
    const steps = 60;
    const increment = duration / steps;

    const intervals = Object.keys(targets).map(key => {
      const target = targets[key];
      const step = target / steps;
      let current = 0;

      return setInterval(() => {
        current += step;
        if (current >= target) {
          setCounterValues(prev => ({ ...prev, [key]: target }));
          clearInterval(intervals[Object.keys(targets).indexOf(key)]);
        } else {
          setCounterValues(prev => ({ ...prev, [key]: Math.floor(current) }));
        }
      }, increment);
    });

    return () => intervals.forEach(clearInterval);
  }, []);

  const translations = {
    en: {
      hero: {
        title: "Transform Your Body",
        subtitle: "Transform Your Life",
        description: "Personalized fitness coaching designed to help you achieve your health goals with professional guidance and support.",
        cta: "Start Your Journey",
        cta2: "View Plans"
      },
      stats: [
        { value: counterValues.clients, suffix: "+", label: "Happy Clients" },
        { value: counterValues.years, suffix: "+", label: "Years Experience" },
        { value: counterValues.programs, suffix: "+", label: "Training Programs" },
        { value: counterValues.success, suffix: "%", label: "Success Rate" }
      ],
      features: {
        title: "Why Choose Coach Met3b?",
        subtitle: "Your Success Is My Mission",
        items: [
          {
            icon: Target,
            title: "Personalized Plans",
            description: "Custom workout and nutrition plans tailored to your specific goals and fitness level."
          },
          {
            icon: Users,
            title: "Expert Guidance",
            description: "Professional coaching with years of experience in fitness training and nutrition."
          },
          {
            icon: TrendingUp,
            title: "Track Progress",
            description: "Monitor your transformation with regular check-ins and progress tracking."
          },
          {
            icon: Heart,
            title: "Full Support",
            description: "24/7 support and motivation to keep you on track towards your goals."
          }
        ]
      },
      services: {
        title: "Training Services",
        subtitle: "Programs Designed For You",
        items: [
          {
            title: "Weight Loss",
            description: "Effective programs to help you shed pounds and achieve your ideal weight.",
            features: ["Custom meal plans", "Cardio routines", "Progress tracking"]
          },
          {
            title: "Muscle Building",
            description: "Build strength and muscle mass with specialized resistance training.",
            features: ["Strength programs", "Nutrition guidance", "Recovery plans"]
          },
          {
            title: "Body Transformation",
            description: "Complete transformation programs combining cutting and bulking phases.",
            features: ["Full body workouts", "Macro tracking", "Monthly check-ins"]
          }
        ]
      },
      testimonials: {
        title: "Success Stories",
        subtitle: "Real Results From Real People",
        items: [
          {
            name: "Ahmed Mohamed",
            result: "Lost 25kg in 6 months",
            text: "Coach Met3b changed my life! The personalized approach and constant support made all the difference.",
            rating: 5
          },
          {
            name: "Sarah Ali",
            result: "Gained 8kg muscle",
            text: "Best investment I've made in myself. The training programs are challenging but incredibly effective.",
            rating: 5
          },
          {
            name: "Omar Hassan",
            result: "Complete transformation",
            text: "From overweight to fit and confident. Coach Met3b's guidance was invaluable throughout my journey.",
            rating: 5
          }
        ]
      },
      cta: {
        title: "Ready To Transform Your Life?",
        subtitle: "Start your fitness journey today and achieve the body you've always wanted.",
        button: "Get Started Now"
      }
    },
    ar: {
      hero: {
        title: "حول جسمك",
        subtitle: "حول حياتك",
        description: "تدريب لياقة بدنية مخصص مصمم لمساعدتك على تحقيق أهدافك الصحية مع التوجيه والدعم المهني.",
        cta: "ابدأ رحلتك",
        cta2: "عرض الخطط"
      },
      stats: [
        { value: counterValues.clients, suffix: "+", label: "عميل سعيد" },
        { value: counterValues.years, suffix: "+", label: "سنوات خبرة" },
        { value: counterValues.programs, suffix: "+", label: "برنامج تدريب" },
        { value: counterValues.success, suffix: "%", label: "معدل النجاح" }
      ],
      features: {
        title: "لماذا تختار المدرب متعب؟",
        subtitle: "نجاحك هو مهمتي",
        items: [
          {
            icon: Target,
            title: "خطط مخصصة",
            description: "خطط تمرين وتغذية مخصصة مصممة خصيصاً لأهدافك ومستوى لياقتك."
          },
          {
            icon: Users,
            title: "إرشاد خبير",
            description: "تدريب احترافي مع سنوات من الخبرة في التدريب واللياقة والتغذية."
          },
          {
            icon: TrendingUp,
            title: "تتبع التقدم",
            description: "راقب تحولك مع فحوصات منتظمة وتتبع التقدم."
          },
          {
            icon: Heart,
            title: "دعم كامل",
            description: "دعم وتحفيز على مدار الساعة لإبقائك على المسار الصحيح نحو أهدافك."
          }
        ]
      },
      services: {
        title: "خدمات التدريب",
        subtitle: "برامج مصممة لك",
        items: [
          {
            title: "فقدان الوزن",
            description: "برامج فعالة لمساعدتك على فقدان الوزن وتحقيق وزنك المثالي.",
            features: ["خطط وجبات مخصصة", "تمارين كارديو", "تتبع التقدم"]
          },
          {
            title: "بناء العضلات",
            description: "بناء القوة والكتلة العضلية مع تدريب المقاومة المتخصص.",
            features: ["برامج القوة", "إرشادات التغذية", "خطط الاستشفاء"]
          },
          {
            title: "تحول الجسم",
            description: "برامج تحول كاملة تجمع بين مراحل التنشيف والضخامة.",
            features: ["تمارين الجسم الكامل", "تتبع الماكروز", "فحوصات شهرية"]
          }
        ]
      },
      testimonials: {
        title: "قصص النجاح",
        subtitle: "نتائج حقيقية من أشخاص حقيقيين",
        items: [
          {
            name: "أحمد محمد",
            result: "فقد 25 كجم في 6 أشهر",
            text: "المدرب متعب غير حياتي! النهج الشخصي والدعم المستمر أحدث كل الفرق.",
            rating: 5
          },
          {
            name: "سارة علي",
            result: "اكتسبت 8 كجم عضلات",
            text: "أفضل استثمار قمت به في نفسي. برامج التدريب صعبة ولكنها فعالة بشكل لا يصدق.",
            rating: 5
          },
          {
            name: "عمر حسن",
            result: "تحول كامل",
            text: "من الوزن الزائد إلى اللياقة والثقة. كان توجيه المدرب متعب لا يقدر بثمن طوال رحلتي.",
            rating: 5
          }
        ]
      },
      cta: {
        title: "هل أنت مستعد لتحويل حياتك؟",
        subtitle: "ابدأ رحلة اللياقة الخاصة بك اليوم واحصل على الجسم الذي طالما أردته.",
        button: "ابدأ الآن"
      }
    }
  };

  const t = translations[language];

  return (
    <div className="home-container" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-bg-overlay"></div>
        <div className="hero-content">
          <div className="hero-text">
            <div className="hero-badge">
              <Award size={16} />
              <span>{language === 'en' ? 'Certified Professional Trainer' : 'مدرب محترف معتمد'}</span>
            </div>
            
            <h1 className="hero-title">
              <span className="title-line">{t.hero.title}</span>
              <span className="title-line gradient-text">{t.hero.subtitle}</span>
            </h1>
            
            <p className="hero-description">{t.hero.description}</p>
            
            <div className="hero-buttons">
              <button className="btn-primary">
                <span>{t.hero.cta}</span>
                <ArrowRight size={20} />
              </button>
              <button className="btn-secondary">
                <Play size={20} />
                <span>{t.hero.cta2}</span>
              </button>
            </div>

            {/* Stats Bar */}
            <div className="stats-bar">
              {t.stats.map((stat, index) => (
                <div key={index} className="stat-item">
                  <div className="stat-value">
                    {stat.value}{stat.suffix}
                  </div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="hero-image">
            <div className="image-wrapper">
              <img src="/images/image.png" alt="Coach Met3b" />
              <div className="image-glow"></div>
              <div className="floating-icon icon-1">
                <Dumbbell size={24} />
              </div>
              <div className="floating-icon icon-2">
                <Trophy size={24} />
              </div>
              <div className="floating-icon icon-3">
                <Zap size={24} />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="scroll-indicator">
          <div className="scroll-line"></div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="section-header">
          <h2 className="section-title">{t.features.title}</h2>
          <p className="section-subtitle">{t.features.subtitle}</p>
        </div>

        <div className="features-grid">
          {t.features.items.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="feature-card" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="feature-icon">
                  <Icon size={32} />
                </div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
                <div className="feature-shine"></div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <div className="section-header">
          <h2 className="section-title">{t.services.title}</h2>
          <p className="section-subtitle">{t.services.subtitle}</p>
        </div>

        <div className="services-grid">
          {t.services.items.map((service, index) => (
            <div key={index} className="service-card">
              <div className="hservice-header">
                <div className="service-icon">
                  <Dumbbell size={28} />
                </div>
                <h3 className="service-title">{service.title}</h3>
              </div>
              <p className="service-description">{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, i) => (
                  <li key={i}>
                    <CheckCircle size={16} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="service-btn">
                {language === 'en' ? 'Learn More' : 'اعرف المزيد'}
                <ArrowRight size={18} />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="section-header">
          <h2 className="section-title">{t.testimonials.title}</h2>
          <p className="section-subtitle">{t.testimonials.subtitle}</p>
        </div>

        <div className="testimonials-grid">
          {t.testimonials.items.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="testimonial-header">
                <div className="testimonial-avatar">
                  <Users size={24} />
                </div>
                <div className="testimonial-info">
                  <h4 className="testimonial-name">{testimonial.name}</h4>
                  <p className="testimonial-result">{testimonial.result}</p>
                </div>
              </div>
              <div className="testimonial-rating">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <p className="testimonial-text">"{testimonial.text}"</p>
              <div className="testimonial-quote">"</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-content">
          <div className="cta-icon">
            <Trophy size={48} />
          </div>
          <h2 className="cta-title">{t.cta.title}</h2>
          <p className="cta-subtitle">{t.cta.subtitle}</p>
          <button className="cta-button">
            <span>{t.cta.button}</span>
            <Zap size={20} />
          </button>
        </div>
        <div className="cta-bg-effect"></div>
      </section>
    </div>
  );
}

export default Home;