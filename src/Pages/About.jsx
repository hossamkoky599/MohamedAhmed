import React from 'react';
import { useOutletContext } from 'react-router';
import { 
  Award, 
  Target, 
  Heart, 
  Trophy,
  Dumbbell,
  Users,
  TrendingUp,
  Star,
  CheckCircle,
  Zap,
  Clock,
  Calendar
} from 'lucide-react';
import '../assets/css/About.css';

function About() {
  const { language = 'en', theme = 'dark' } = useOutletContext() || {};

  const translations = {
    en: {
      hero: {
        badge: "Meet Your Coach",
        title: "Coach Met3b",
        subtitle: "Sculpting Champions",
        description: "Professional bodybuilding coach with 8+ years of experience transforming everyday athletes into stage-ready physiques through science-based training and precision nutrition."
      },
      stats: [
        { value: "500+", label: "Clients Trained" },
        { value: "8+", label: "Years Experience" },
        { value: "50+", label: "Programs Created" },
        { value: "95%", label: "Success Rate" }
      ],
      story: {
        title: "From The Iron To The Stage",
        content: [
          "My journey in bodybuilding began over 8 years ago in a small local gym. What started as a quest for personal transformation evolved into a passion for competitive bodybuilding and coaching athletes to reach their peak physical condition.",
          "Through years of dedication, countless hours studying exercise science, nutrition protocols, and working with elite athletes, I've developed a comprehensive system that combines old-school bodybuilding principles with modern sports science. I've competed in numerous bodybuilding competitions, earning my pro card and understanding firsthand what it takes to step on stage.",
          "Today, I specialize in body recomposition, contest prep, and helping aspiring bodybuilders build championship physiques. Whether you're preparing for your first show or looking to take your physique to the next level, I bring the knowledge, experience, and dedication to guide you to victory."
        ]
      },
      mission: {
        title: "Bodybuilding Philosophy",
        items: [
          {
            icon: Target,
            title: "Precision Training",
            description: "Every rep, every set calculated for maximum muscle hypertrophy. Progressive overload meets perfect form."
          },
          {
            icon: Heart,
            title: "Mind-Muscle Connection",
            description: "Building bodies is as much mental as physical. Master the connection between mind and muscle for optimal growth."
          },
          {
            icon: TrendingUp,
            title: "Contest Ready",
            description: "Stage-proven protocols for peak conditioning. From bulking to cutting, we optimize every phase of your transformation."
          },
          {
            icon: Users,
            title: "Brotherhood",
            description: "Join a community of dedicated bodybuilders pushing limits, sharing knowledge, and celebrating victories together."
          }
        ]
      },
      certifications: {
        title: "Credentials & Achievements",
        items: [
          
          "Certified Personal Trainer (CPT)",
          "Sports Nutrition Specialist",
          "Contest Prep Coach Certification",
          "Advanced Hypertrophy Specialist",
          
        ]
      },
      approach: {
        title: "Championship Coaching Method",
        steps: [
          {
            number: "01",
            title: "Body Assessment",
            description: "Complete physique analysis including body composition, muscle imbalances, and structural evaluation for optimal development."
          },
          {
            number: "02",
            title: "Periodized Programming",
            description: "Strategic training cycles designed for muscle hypertrophy, strength gains, and peak conditioning based on your timeline."
          },
          {
            number: "03",
            title: "Nutrition Dialing",
            description: "Precision macronutrient manipulation, meal timing, and supplementation protocols for maximum muscle growth and fat loss."
          },
          {
            number: "04",
            title: "Peak Week Protocol",
            description: "Final refinements including water manipulation, carb loading, and posing practice to ensure you step on stage at your absolute best."
          }
        ]
      },
      gallery: {
        title: "Competition Journey",
        subtitle: "Moments of Glory",
        items: [
          { title: "Regional Champion 2022", category: "Competition" },
          { title: "National Finals 2023", category: "Stage" },
          { title: "Pro Card Win", category: "Achievement" },
          { title: "Training Intensity", category: "Gym" },
          { title: "Posing Practice", category: "Preparation" },
          { title: "Victory Moment", category: "Trophy" }
        ]
      },
      cta: {
        title: "Ready To Build Your Champion Physique?",
        subtitle: "Let's sculpt a body that commands respect and wins trophies",
        button: "Start Your Prep"
      }
    },
    ar: {
      hero: {
        badge: "قابل مدربك",
        title: "المدرب متعب",
        subtitle: "نحت الأبطال",
        description: "مدرب كمال أجسام محترف مع أكثر من 8 سنوات من الخبرة في تحويل الرياضيين العاديين إلى أجسام جاهزة للمنصة من خلال التدريب القائم على العلم والتغذية الدقيقة."
      },
      stats: [
        { value: "+500", label: "عميل مدرب" },
        { value: "+8", label: "سنوات خبرة" },
        { value: "+50", label: "برنامج تم إنشاؤه" },
        { value: "%95", label: "معدل النجاح" }
      ],
      story: {
        title: "من الحديد إلى المنصة",
        content: [
          "بدأت رحلتي في كمال الأجسام منذ أكثر من 8 سنوات في صالة رياضية محلية صغيرة. ما بدأ كسعي للتحول الشخصي تطور إلى شغف بكمال الأجسام التنافسي وتدريب الرياضيين للوصول إلى ذروة حالتهم البدنية.",
          "من خلال سنوات من التفاني، وساعات لا تحصى من دراسة علوم التمرين، وبروتوكولات التغذية، والعمل مع الرياضيين النخبة، طورت نظامًا شاملاً يجمع بين مبادئ كمال الأجسام التقليدية والعلوم الرياضية الحديثة. لقد تنافست في العديد من مسابقات كمال الأجسام، وحصلت على البطاقة الاحترافية وفهمت بشكل مباشر ما يتطلبه الأمر للوقوف على المنصة.",
          "اليوم، أتخصص في إعادة تكوين الجسم، والإعداد للمسابقات، ومساعدة لاعبي كمال الأجسام الطموحين على بناء أجسام بطولية. سواء كنت تستعد لعرضك الأول أو تتطلع لنقل جسمك إلى المستوى التالي، أحضر المعرفة والخبرة والتفاني لإرشادك إلى النصر."
        ]
      },
      mission: {
        title: "فلسفة كمال الأجسام",
        items: [
          {
            icon: Target,
            title: "تدريب دقيق",
            description: "كل تكرار، كل مجموعة محسوبة لأقصى تضخم عضلي. الحمل التدريجي يلتقي بالأداء المثالي."
          },
          {
            icon: Heart,
            title: "الاتصال العقلي العضلي",
            description: "بناء الأجسام عقلي بقدر ما هو جسدي. أتقن الاتصال بين العقل والعضلات للنمو الأمثل."
          },
          {
            icon: TrendingUp,
            title: "جاهز للمسابقة",
            description: "بروتوكولات مثبتة على المنصة للتكييف الأمثل. من الضخامة إلى التنشيف، نحن نحسن كل مرحلة من تحولك."
          },
          {
            icon: Users,
            title: "الأخوة",
            description: "انضم إلى مجتمع من لاعبي كمال الأجسام المتفانين الذين يدفعون الحدود ويشاركون المعرفة ويحتفلون بالانتصارات معًا."
          }
        ]
      },
      certifications: {
        title: "الاعتمادات والإنجازات",
        items: [
          
          "مدرب شخصي معتمد (CPT)",
          "أخصائي التغذية الرياضية",
          "شهادة مدرب إعداد المسابقات",
          "أخصائي التضخم المتقدم",
          
        ]
      },
      approach: {
        title: "طريقة التدريب البطولية",
        steps: [
          {
            number: "01",
            title: "تقييم الجسم",
            description: "تحليل شامل للبنية الجسدية بما في ذلك تكوين الجسم، واختلالات العضلات، والتقييم الهيكلي للتطوير الأمثل."
          },
          {
            number: "02",
            title: "البرمجة الدورية",
            description: "دورات تدريبية استراتيجية مصممة لتضخم العضلات، ومكاسب القوة، والتكييف الأمثل بناءً على جدولك الزمني."
          },
          {
            number: "03",
            title: "ضبط التغذية",
            description: "معالجة دقيقة للمغذيات الكبيرة، وتوقيت الوجبات، وبروتوكولات المكملات لأقصى نمو عضلي وفقدان الدهون."
          },
          {
            number: "04",
            title: "بروتوكول الأسبوع الذروة",
            description: "التحسينات النهائية بما في ذلك معالجة المياه، وتحميل الكربوهيدرات، وممارسة الوقوف لضمان صعودك على المنصة في أفضل حالاتك المطلقة."
          }
        ]
      },
      cta: {
        title: "هل أنت مستعد لبناء جسم بطل؟",
        subtitle: "دعنا ننحت جسمًا يفرض الاحترام ويفوز بالجوائز",
        button: "ابدأ إعدادك"
      }
    }
  };

  const t = translations[language];

  return (
    <div className="about-container" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-bg"></div>
        <div className="about-hero-content">
          <div className="hero-badge">
            <Star size={16} />
            <span>{t.hero.badge}</span>
          </div>
          <h1 className="about-hero-title">
            <span>{t.hero.title}</span>
            <span className="gradient-text">{t.hero.subtitle}</span>
          </h1>
          <p className="about-hero-description">{t.hero.description}</p>

          {/* Stats */}
          <div className="hero-stats">
            {t.stats.map((stat, index) => (
              <div key={index} className="stat-card">
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="hero-image-section">
          <div className="image-wrapper">
            <img src="/images/image.png" alt="Coach Met3b" />
            <div className="image-glow"></div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="story-section">
        <div className="story-content">
          <h2 className="section-title">{t.story.title}</h2>
          <div className="story-text">
            {t.story.content.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-section">
        <h2 className="section-title">{t.mission.title}</h2>
        <div className="mission-grid">
          {t.mission.items.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="mission-card">
                <div className="mission-icon">
                  <Icon size={28} />
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Certifications */}
      <section className="certifications-section">
        <h2 className="section-title">{t.certifications.title}</h2>
        <div className="certifications-grid">
          {t.certifications.items.map((cert, index) => (
            <div key={index} className="cert-item">
              <Award size={20} />
              <span>{cert}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Approach */}
      <section className="approach-section">
        <h2 className="section-title">{t.approach.title}</h2>
        <div className="approach-steps">
          {t.approach.steps.map((step, index) => (
            <div key={index} className="step-card">
              <div className="step-number">{step.number}</div>
              <div className="step-content">
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="about-cta">
        <div className="cta-content">
          <Trophy size={48} />
          <h2>{t.cta.title}</h2>
          <p>{t.cta.subtitle}</p>
          <button className="cta-button">
            <span>{t.cta.button}</span>
            <Zap size={20} />
          </button>
        </div>
      </section>
    </div>
  );
}

export default About;