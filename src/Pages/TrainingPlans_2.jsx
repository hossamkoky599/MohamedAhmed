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
  Trophy,
  Crown
} from 'lucide-react';
import '../assets/css/TrainingPlans_2.css';

function TrainingPlans_2() {
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
        { id: 'vip', label: 'VIP Plans' },
        { id: 'standard', label: 'Standard Plans' }
      ],
      plans: [
        {
          id: 1,
          category: 'vip',
          name: "VIP - Fat Loss",
          subtitle: "Daily Tracking & Support",
          price: 600,
          duration: "4 Weeks",
          level: "All Levels",
          popular: true,
          trackingType: "Daily",
          features: [
            "Daily coach tracking",
            "Personalized meal plans",
            "Daily workout routines",
            "24/7 Direct support",
            "Daily progress check-ins",
            "Custom adjustments daily"
          ],
          results: "Rapid fat loss with daily guidance",
          icon: 'Crown',
          isVIP: true
        },
        {
          id: 2,
          category: 'standard',
          name: "10 Week Program",
          subtitle: "Weekly Tracking",
          price: 800,
          duration: "10 Weeks",
          level: "Beginner to Intermediate",
          popular: false,
          trackingType: "Weekly",
          features: [
            "Weekly coach check-ins",
            "Custom workout plan",
            "Nutrition guidance",
            "Progress tracking",
            "Form corrections",
            "Weekly adjustments"
          ],
          results: "Sustainable transformation",
          icon: 'Target'
        },
        {
          id: 3,
          category: 'standard',
          name: "12 Week Program",
          subtitle: "Weekly Tracking",
          price: 950,
          duration: "12 Weeks",
          level: "All Levels",
          popular: true,
          trackingType: "Weekly",
          features: [
            "Weekly coach tracking",
            "Comprehensive meal plan",
            "Progressive training",
            "Body measurements",
            "Video form checks",
            "Regular adjustments"
          ],
          results: "Complete body transformation",
          icon: 'Dumbbell'
        },
        {
          id: 4,
          category: 'standard',
          name: "16 Week Program",
          subtitle: "Bi-Weekly Tracking",
          price: 1200,
          duration: "16 Weeks",
          level: "Intermediate to Advanced",
          popular: false,
          trackingType: "Every 10 Days",
          features: [
            "Check-ins every 10 days",
            "Advanced training splits",
            "Detailed nutrition plan",
            "Supplement guidance",
            "Progress photos analysis",
            "Periodic adjustments"
          ],
          results: "Advanced body recomposition",
          icon: 'Zap'
        },
        {
          id: 5,
          category: 'standard',
          name: "20 Week Program",
          subtitle: "Bi-Weekly Tracking",
          price: 1500,
          duration: "20 Weeks",
          level: "Advanced",
          popular: false,
          trackingType: "Every 10 Days",
          features: [
            "Check-ins every 10 days",
            "Elite training protocol",
            "Competition prep ready",
            "Advanced periodization",
            "Full transformation support",
            "Strategic adjustments"
          ],
          results: "Elite physique development",
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
      trackingBadge: {
        daily: "Daily Tracking",
        weekly: "Weekly Tracking",
        biweekly: "Every 10 Days"
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
        { id: 'all', label: 'جميع الباقات' },
        { id: 'vip', label: 'باقات VIP' },
        { id: 'standard', label: 'الباقات القياسية' }
      ],
      plans: [
        {
          id: 1,
          category: 'vip',
          name: "VIP - حرق الدهون",
          subtitle: "متابعة يومية ودعم كامل",
          price: 600,
          duration: "4 أسابيع",
          level: "جميع المستويات",
          popular: true,
          trackingType: "يومي",
          features: [
            "متابعة يومية مع الكوتش",
            "خطط وجبات مخصصة",
            "تمارين يومية",
            "دعم مباشر 24/7",
            "فحوصات تقدم يومية",
            "تعديلات مخصصة يومياً"
          ],
          results: "حرق دهون سريع مع إرشاد يومي",
          icon: 'Crown',
          isVIP: true
        },
        {
          id: 2,
          category: 'standard',
          name: "برنامج 10 أسابيع",
          subtitle: "متابعة أسبوعية",
          price: 800,
          duration: "10 أسابيع",
          level: "مبتدئ إلى متوسط",
          popular: false,
          trackingType: "أسبوعي",
          features: [
            "فحوصات أسبوعية مع الكوتش",
            "خطة تمارين مخصصة",
            "إرشادات تغذية",
            "تتبع التقدم",
            "تصحيح الأداء",
            "تعديلات أسبوعية"
          ],
          results: "تحول مستدام",
          icon: 'Target'
        },
        {
          id: 3,
          category: 'standard',
          name: "برنامج 12 أسبوع",
          subtitle: "متابعة أسبوعية",
          price: 950,
          duration: "12 أسبوع",
          level: "جميع المستويات",
          popular: true,
          trackingType: "أسبوعي",
          features: [
            "متابعة أسبوعية مع الكوتش",
            "خطة وجبات شاملة",
            "تدريب تدريجي",
            "قياسات الجسم",
            "فحص الأداء بالفيديو",
            "تعديلات منتظمة"
          ],
          results: "تحول كامل للجسم",
          icon: 'Dumbbell'
        },
        {
          id: 4,
          category: 'standard',
          name: "برنامج 16 أسبوع",
          subtitle: "متابعة كل 10 أيام",
          price: 1200,
          duration: "16 أسبوع",
          level: "متوسط إلى متقدم",
          popular: false,
          trackingType: "كل 10 أيام",
          features: [
            "فحوصات كل 10 أيام",
            "تقسيمات تدريب متقدمة",
            "خطة تغذية مفصلة",
            "إرشادات المكملات",
            "تحليل صور التقدم",
            "تعديلات دورية"
          ],
          results: "إعادة تكوين متقدمة للجسم",
          icon: 'Zap'
        },
        {
          id: 5,
          category: 'standard',
          name: "برنامج 20 أسبوع",
          subtitle: "متابعة كل 10 أيام",
          price: 1500,
          duration: "20 أسبوع",
          level: "متقدم",
          popular: false,
          trackingType: "كل 10 أيام",
          features: [
            "فحوصات كل 10 أيام",
            "بروتوكول تدريب النخبة",
            "جاهز للمنافسة",
            "تدوير متقدم",
            "دعم تحول كامل",
            "تعديلات استراتيجية"
          ],
          results: "تطوير جسم النخبة",
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
      trackingBadge: {
        daily: "متابعة يومية",
        weekly: "متابعة أسبوعية",
        biweekly: "كل 10 أيام"
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
    const icons = { 
      Flame, Dumbbell, Trophy, Target, Zap, Award, 
      Video, MessageCircle, Calendar, Shield, Crown 
    };
    return icons[iconName];
  };

  const getTrackingBadgeText = (trackingType) => {
    if (trackingType === "Daily" || trackingType === "يومي") {
      return t.trackingBadge.daily;
    } else if (trackingType === "Weekly" || trackingType === "أسبوعي") {
      return t.trackingBadge.weekly;
    } else {
      return t.trackingBadge.biweekly;
    }
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
                className={`plan-card ${plan.popular ? 'popular' : ''} ${plan.isVIP ? 'vip-plan' : ''}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {plan.popular && (
                  <div className="popular-badge">
                    <Star size={14} />
                    <span>{language === 'en' ? 'Most Popular' : 'الأكثر شعبية'}</span>
                  </div>
                )}

                {plan.isVIP && (
                  <div className="vip-badge">
                    <Crown size={14} />
                    <span>VIP</span>
                  </div>
                )}

                <div className="plan-header">
                  <div className={`plan-icon ${plan.isVIP ? 'vip-icon' : ''}`}>
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

                <div className={`tracking-badge ${plan.isVIP ? 'vip-tracking' : ''}`}>
                  <Calendar size={16} />
                  <span>{getTrackingBadgeText(plan.trackingType)}</span>
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
                  className={`plan-cta ${plan.isVIP ? 'vip-cta' : ''}`}
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

export default TrainingPlans_2;