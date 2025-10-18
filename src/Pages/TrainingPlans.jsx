import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { useOutletContext } from 'react-router';
import { 
  Dumbbell, 
  Calendar, 
  Users, 
  CheckCircle, 
  Star,
  Zap,
  TrendingUp,
  Heart,
  Award,
  Clock,
  Target,
  Flame,
  ArrowRight,
  Shield,
  MessageCircle,
  Video,
  Trophy
} from 'lucide-react';
import '../assets/css/TrainingPlans.css';

function TrainingPlans() {
  const navigate = useNavigate();
  const { language = 'en', theme = 'dark' } = useOutletContext() || {};
  const [selectedCategory, setSelectedCategory] = useState('all');

  const translations = {
    en: {
      hero: {
        title: "Choose Your Path",
        subtitle: "To Greatness",
        description: "Transform your body with our professionally designed training programs. Each plan is crafted to deliver maximum results."
      },
      categories: [
        { id: 'all', label: 'All Programs' },
        { id: 'weight-loss', label: 'Weight Loss' },
        { id: 'muscle-gain', label: 'Muscle Gain' },
        { id: 'transformation', label: 'Transformation' }
      ],
      plans: [
        {
          id: 1,
          category: 'weight-loss',
          name: "Fat Burner",
          subtitle: "Rapid Weight Loss",
          price: 799,
          duration: "8 Weeks",
          level: "Beginner",
          popular: false,
          features: [
            "Custom meal plans",
            "Daily workout routines",
            "Cardio programs",
            "Progress tracking",
            "Weekly check-ins",
            "24/7 Support"
          ],
          results: "Lose 8-15kg",
          icon: 'Flame'
        },
        {
          id: 2,
          category: 'muscle-gain',
          name: "Mass Builder",
          subtitle: "Muscle & Strength",
          price: 999,
          duration: "12 Weeks",
          level: "Intermediate",
          popular: true,
          features: [
            "Hypertrophy training",
            "Nutrition guidance",
            "Supplement advice",
            "Form check videos",
            "Bi-weekly check-ins",
            "Priority support"
          ],
          results: "Gain 5-10kg muscle",
          icon: 'Dumbbell'
        },
        {
          id: 3,
          category: 'transformation',
          name: "Complete Transform",
          subtitle: "Total Body Transformation",
          price: 1499,
          duration: "16 Weeks",
          level: "All Levels",
          popular: false,
          features: [
            "Full body transformation",
            "Personalized nutrition",
            "Custom workout splits",
            "Video consultations",
            "Weekly progress reviews",
            "VIP support channel"
          ],
          results: "Complete body recomp",
          icon: 'Trophy'
        },
        {
          id: 4,
          category: 'weight-loss',
          name: "Shred Program",
          subtitle: "Get Lean & Defined",
          price: 899,
          duration: "10 Weeks",
          level: "Intermediate",
          popular: false,
          features: [
            "Cutting diet plans",
            "HIIT workouts",
            "Macro tracking",
            "Body measurements",
            "Weekly adjustments",
            "Full support"
          ],
          results: "Achieve 10-15% body fat",
          icon: 'Target'
        },
        {
          id: 5,
          category: 'muscle-gain',
          name: "Power Builder",
          subtitle: "Strength & Size",
          price: 1199,
          duration: "16 Weeks",
          level: "Advanced",
          popular: false,
          features: [
            "Powerlifting focus",
            "Progressive overload",
            "Strength protocols",
            "Recovery strategies",
            "Competition prep",
            "Expert coaching"
          ],
          results: "Increase lifts 20-30%",
          icon: 'Zap'
        },
        {
          id: 6,
          category: 'transformation',
          name: "Elite Athlete",
          subtitle: "Peak Performance",
          price: 1999,
          duration: "20 Weeks",
          level: "Advanced",
          popular: true,
          features: [
            "Elite-level training",
            "Sports nutrition",
            "Periodization",
            "1-on-1 video calls",
            "Daily monitoring",
            "Premium support"
          ],
          results: "Athlete-level physique",
          icon: 'Award'
        }
      ],
      features: {
        title: "What's Included",
        items: [
          { icon: 'Video', text: "Video Tutorials" },
          { icon: 'MessageCircle', text: "Direct Coaching" },
          { icon: 'Calendar', text: "Flexible Schedule" },
          { icon: 'Shield', text: "Money-back Guarantee" }
        ]
      },
      cta: {
        button: "Get Started",
        guarantee: "30-Day Money Back Guarantee"
      }
    },
    ar: {
      hero: {
        title: "اختر طريقك",
        subtitle: "نحو العظمة",
        description: "حول جسمك مع برامجنا التدريبية المصممة باحترافية. كل خطة مصممة لتقديم أقصى النتائج."
      },
      categories: [
        { id: 'all', label: 'جميع البرامج' },
        { id: 'weight-loss', label: 'فقدان الوزن' },
        { id: 'muscle-gain', label: 'بناء العضلات' },
        { id: 'transformation', label: 'التحول الكامل' }
      ],
      plans: [
        {
          id: 1,
          category: 'weight-loss',
          name: "حارق الدهون",
          subtitle: "فقدان سريع للوزن",
          price: 799,
          duration: "8 أسابيع",
          level: "مبتدئ",
          popular: false,
          features: [
            "خطط وجبات مخصصة",
            "تمارين يومية",
            "برامج كارديو",
            "تتبع التقدم",
            "فحوصات أسبوعية",
            "دعم 24/7"
          ],
          results: "اخسر 8-15 كجم",
          icon: 'Flame'
        },
        {
          id: 2,
          category: 'muscle-gain',
          name: "باني الكتلة",
          subtitle: "عضلات وقوة",
          price: 999,
          duration: "12 أسبوع",
          level: "متوسط",
          popular: true,
          features: [
            "تدريب التضخم",
            "إرشادات التغذية",
            "نصائح المكملات",
            "فيديوهات الأداء",
            "فحوصات نصف شهرية",
            "دعم ذو أولوية"
          ],
          results: "اكتسب 5-10 كجم عضلات",
          icon: 'Dumbbell'
        },
        {
          id: 3,
          category: 'transformation',
          name: "التحول الكامل",
          subtitle: "تحول الجسم الكامل",
          price: 1499,
          duration: "16 أسبوع",
          level: "جميع المستويات",
          popular: false,
          features: [
            "تحول الجسم الكامل",
            "تغذية شخصية",
            "تقسيمات تمارين مخصصة",
            "استشارات فيديو",
            "مراجعات أسبوعية",
            "قناة دعم VIP"
          ],
          results: "إعادة تكوين الجسم",
          icon: 'Trophy'
        },
        {
          id: 4,
          category: 'weight-loss',
          name: "برنامج التنشيف",
          subtitle: "نحافة ووضوح",
          price: 899,
          duration: "10 أسابيع",
          level: "متوسط",
          popular: false,
          features: [
            "خطط نظام التنشيف",
            "تمارين HIIT",
            "تتبع الماكروز",
            "قياسات الجسم",
            "تعديلات أسبوعية",
            "دعم كامل"
          ],
          results: "حقق 10-15% دهون",
          icon: 'Target'
        },
        {
          id: 5,
          category: 'muscle-gain',
          name: "باني القوة",
          subtitle: "قوة وحجم",
          price: 1199,
          duration: "16 أسبوع",
          level: "متقدم",
          popular: false,
          features: [
            "تركيز رفع الأثقال",
            "الحمل التدريجي",
            "بروتوكولات القوة",
            "استراتيجيات الاستشفاء",
            "إعداد المنافسة",
            "تدريب خبير"
          ],
          results: "زد الأوزان 20-30%",
          icon: 'Zap'
        },
        {
          id: 6,
          category: 'transformation',
          name: "الرياضي النخبة",
          subtitle: "الأداء الأقصى",
          price: 1999,
          duration: "20 أسبوع",
          level: "متقدم",
          popular: true,
          features: [
            "تدريب النخبة",
            "تغذية رياضية",
            "التدوير",
            "مكالمات فيديو فردية",
            "مراقبة يومية",
            "دعم متميز"
          ],
          results: "جسم على مستوى الرياضيين",
          icon: 'Award'
        }
      ],
      features: {
        title: "ما المتضمن",
        items: [
          { icon: 'Video', text: "دروس فيديو" },
          { icon: 'MessageCircle', text: "تدريب مباشر" },
          { icon: 'Calendar', text: "جدول مرن" },
          { icon: 'Shield', text: "ضمان استرداد المال" }
        ]
      },
      cta: {
        button: "ابدأ الآن",
        guarantee: "ضمان استرداد المال لمدة 30 يوم"
      }
    }
  };

  const t = translations[language];

  const filteredPlans = selectedCategory === 'all' 
    ? t.plans 
    : t.plans.filter(plan => plan.category === selectedCategory);

  const getIcon = (iconName) => {
    const icons = { Flame, Dumbbell, Trophy, Target, Zap, Award, Video, MessageCircle, Calendar, Shield };
    return icons[iconName];
  };

  const handleSelectPlan = (plan) => {
    navigate('/payments', { state: { selectedPlan: plan } });
  };

  return (
    <div className="training-plans-container" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      {/* Hero Section */}
      <section className="plans-hero">
        <div className="plans-hero-bg"></div>
        <div className="plans-hero-content">
          <div className="plans-badge">
            <Star size={16} />
            <span>{language === 'en' ? 'Professional Training Programs' : 'برامج تدريب احترافية'}</span>
          </div>
          <h1 className="plans-hero-title">
            <span>{t.hero.title}</span>
            <span className="gradient-text">{t.hero.subtitle}</span>
          </h1>
          <p className="plans-hero-description">{t.hero.description}</p>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="categories-section">
        <div className="categories-container">
          {t.categories.map((category) => (
            <button
              key={category.id}
              className={`category-btn ${selectedCategory === category.id ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category.id)}
            >
              {category.label}
            </button>
          ))}
        </div>
      </section>

      {/* Plans Grid */}
      <section className="plans-section">
        <div className="plans-grid">
          {filteredPlans.map((plan, index) => {
            const Icon = getIcon(plan.icon);
            return (
              <div 
                key={plan.id} 
                className={`plan-card ${plan.popular ? 'popular' : ''}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {plan.popular && (
                  <div className="popular-badge">
                    <Star size={14} />
                    <span>{language === 'en' ? 'Most Popular' : 'الأكثر شعبية'}</span>
                  </div>
                )}

                <div className="plan-header">
                  <div className="plan-icon">
                    <Icon size={32} />
                  </div>
                  <div className="plan-title-section">
                    <h3 className="plan-name">{plan.name}</h3>
                    <p className="plan-subtitle">{plan.subtitle}</p>
                  </div>
                </div>

                <div className="plan-price">
                  <span className="currency">EGP</span>
                  <span className="amount">{plan.price}</span>
                </div>

                <div className="plan-meta">
                  <div className="meta-item">
                    <Clock size={16} />
                    <span>{plan.duration}</span>
                  </div>
                  <div className="meta-item">
                    <TrendingUp size={16} />
                    <span>{plan.level}</span>
                  </div>
                </div>

                <div className="plan-results">
                  <Target size={18} />
                  <span>{plan.results}</span>
                </div>

                <ul className="plan-features">
                  {plan.features.map((feature, i) => (
                    <li key={i}>
                      <CheckCircle size={16} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <button 
                  className="plan-cta"
                  onClick={() => handleSelectPlan(plan)}
                >
                  <span>{t.cta.button}</span>
                  <ArrowRight size={18} />
                </button>

                <div className="plan-guarantee">
                  <Shield size={14} />
                  <span>{t.cta.guarantee}</span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Features Section */}
      <section className="included-features">
        <h2 className="features-title">{t.features.title}</h2>
        <div className="features-grid">
          {t.features.items.map((item, index) => {
            const Icon = getIcon(item.icon);
            return (
              <div key={index} className="feature-item">
                <div className="feature-icon">
                  <Icon size={24} />
                </div>
                <span>{item.text}</span>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default TrainingPlans;