import React, { useState } from 'react';
import { useLocation } from 'react-router';
import { useOutletContext } from 'react-router';
import { 
  CreditCard,
  Smartphone,
  Building,
  CheckCircle,
  Shield,
  Lock,
  AlertCircle,
  ArrowLeft,
  Star,
  Award,
  Calendar,
  Clock,
  Info
} from 'lucide-react';
import '../assets/css/Payments.css';

function Payments() {
  const location = useLocation();
  const { language = 'en', theme = 'dark' } = useOutletContext() || {};
  const selectedPlan = location.state?.selectedPlan;

  const [paymentMethod, setPaymentMethod] = useState('card');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    walletNumber: '',
    bankName: '',
    accountNumber: '',
    agreeTerms: false
  });
  const [errors, setErrors] = useState({});
  const [isProcessing, setIsProcessing] = useState(false);

  const translations = {
    en: {
      hero: {
        title: "Secure Checkout",
        subtitle: "Complete Your Transformation Journey",
        back: "Back to Plans"
      },
      orderSummary: {
        title: "Order Summary",
        selectedPlan: "Selected Plan",
        duration: "Duration",
        level: "Level",
        subtotal: "Subtotal",
        discount: "Discount",
        total: "Total",
        guarantee: "30-Day Money Back Guarantee",
        includes: "What's Included:"
      },
      paymentMethods: {
        title: "Payment Method",
        card: "Credit/Debit Card",
        wallet: "Mobile Wallet",
        bank: "Bank Transfer"
      },
      form: {
        personalInfo: "Personal Information",
        fullName: "Full Name",
        email: "Email Address",
        phone: "Phone Number",
        cardInfo: "Card Information",
        cardNumber: "Card Number",
        expiryDate: "Expiry Date (MM/YY)",
        cvv: "CVV",
        walletNumber: "Wallet Number",
        bankName: "Bank Name",
        accountNumber: "Account Number",
        agreeTerms: "I agree to the terms and conditions",
        processing: "Processing Payment...",
        submit: "Complete Payment"
      },
      security: {
        title: "Secure Payment",
        features: [
          "256-bit SSL Encryption",
          "PCI DSS Compliant",
          "Money Back Guarantee",
          "Secure Data Protection"
        ]
      },
      errors: {
        required: "This field is required",
        invalidEmail: "Invalid email address",
        invalidPhone: "Invalid phone number",
        invalidCard: "Invalid card number",
        agreeTerms: "You must agree to the terms"
      }
    },
    ar: {
      hero: {
        title: "الدفع الآمن",
        subtitle: "أكمل رحلة تحولك",
        back: "العودة للخطط"
      },
      orderSummary: {
        title: "ملخص الطلب",
        selectedPlan: "الخطة المختارة",
        duration: "المدة",
        level: "المستوى",
        subtotal: "المجموع الفرعي",
        discount: "الخصم",
        total: "الإجمالي",
        guarantee: "ضمان استرداد المال لمدة 30 يوم",
        includes: "ما المتضمن:"
      },
      paymentMethods: {
        title: "طريقة الدفع",
        card: "بطاقة ائتمان/خصم",
        wallet: "محفظة إلكترونية",
        bank: "تحويل بنكي"
      },
      form: {
        personalInfo: "المعلومات الشخصية",
        fullName: "الاسم الكامل",
        email: "البريد الإلكتروني",
        phone: "رقم الهاتف",
        cardInfo: "معلومات البطاقة",
        cardNumber: "رقم البطاقة",
        expiryDate: "تاريخ الانتهاء (MM/YY)",
        cvv: "CVV",
        walletNumber: "رقم المحفظة",
        bankName: "اسم البنك",
        accountNumber: "رقم الحساب",
        agreeTerms: "أوافق على الشروط والأحكام",
        processing: "جاري معالجة الدفع...",
        submit: "إتمام الدفع"
      },
      security: {
        title: "دفع آمن",
        features: [
          "تشفير SSL 256 بت",
          "متوافق مع PCI DSS",
          "ضمان استرداد المال",
          "حماية البيانات الآمنة"
        ]
      },
      errors: {
        required: "هذا الحقل مطلوب",
        invalidEmail: "بريد إلكتروني غير صالح",
        invalidPhone: "رقم هاتف غير صالح",
        invalidCard: "رقم بطاقة غير صالح",
        agreeTerms: "يجب الموافقة على الشروط"
      }
    }
  };

  const t = translations[language];

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.fullName) newErrors.fullName = t.errors.required;
    if (!formData.email) {
      newErrors.email = t.errors.required;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = t.errors.invalidEmail;
    }
    if (!formData.phone) {
      newErrors.phone = t.errors.required;
    } else if (!/^\+?[\d\s-]{10,}$/.test(formData.phone)) {
      newErrors.phone = t.errors.invalidPhone;
    }

    if (paymentMethod === 'card') {
      if (!formData.cardNumber) {
        newErrors.cardNumber = t.errors.required;
      } else if (!/^\d{16}$/.test(formData.cardNumber.replace(/\s/g, ''))) {
        newErrors.cardNumber = t.errors.invalidCard;
      }
      if (!formData.expiryDate) newErrors.expiryDate = t.errors.required;
      if (!formData.cvv) newErrors.cvv = t.errors.required;
    } else if (paymentMethod === 'wallet') {
      if (!formData.walletNumber) newErrors.walletNumber = t.errors.required;
    } else if (paymentMethod === 'bank') {
      if (!formData.bankName) newErrors.bankName = t.errors.required;
      if (!formData.accountNumber) newErrors.accountNumber = t.errors.required;
    }

    if (!formData.agreeTerms) newErrors.agreeTerms = t.errors.agreeTerms;

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      alert(language === 'en' 
        ? 'Payment successful! Check your email for confirmation.' 
        : 'تم الدفع بنجاح! تحقق من بريدك الإلكتروني للتأكيد.');
    }, 2000);
  };

  const formatCardNumber = (value) => {
    return value.replace(/\s/g, '').match(/.{1,4}/g)?.join(' ') || value;
  };

  const discount = selectedPlan ? Math.round(selectedPlan.price * 0.1) : 0;
  const total = selectedPlan ? selectedPlan.price - discount : 0;

  return (
    <div className="payments-container" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      {/* Hero Section */}
      <section className="payments-hero">
        <div className="payments-hero-bg"></div>
        <div className="payments-hero-content">
          <button className="back-btn" onClick={() => window.history.back()}>
            <ArrowLeft size={20} />
            <span>{t.hero.back}</span>
          </button>
          <h1 className="payments-hero-title">
            <span>{t.hero.title}</span>
            <span className="gradient-text">{t.hero.subtitle}</span>
          </h1>
        </div>
      </section>

      {/* Main Content */}
      <section className="payments-main">
        <div className="payments-grid">
          {/* Payment Form */}
          <div className="payment-form-section">
            {/* Payment Methods */}
            <div className="payment-methods">
              <h3 className="section-title">{t.paymentMethods.title}</h3>
              <div className="methods-grid">
                <button
                  className={`method-btn ${paymentMethod === 'card' ? 'active' : ''}`}
                  onClick={() => setPaymentMethod('card')}
                >
                  <CreditCard size={24} />
                  <span>{t.paymentMethods.card}</span>
                </button>
                <button
                  className={`method-btn ${paymentMethod === 'wallet' ? 'active' : ''}`}
                  onClick={() => setPaymentMethod('wallet')}
                >
                  <Smartphone size={24} />
                  <span>{t.paymentMethods.wallet}</span>
                </button>
                <button
                  className={`method-btn ${paymentMethod === 'bank' ? 'active' : ''}`}
                  onClick={() => setPaymentMethod('bank')}
                >
                  <Building size={24} />
                  <span>{t.paymentMethods.bank}</span>
                </button>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="checkout-form">
              {/* Personal Information */}
              <div className="form-section">
                <h3 className="section-title">{t.form.personalInfo}</h3>
                
                <div className="form-group">
                  <label htmlFor="fullName">{t.form.fullName}</label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className={errors.fullName ? 'error' : ''}
                  />
                  {errors.fullName && (
                    <span className="error-message">
                      <AlertCircle size={14} />
                      {errors.fullName}
                    </span>
                  )}
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="email">{t.form.email}</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={errors.email ? 'error' : ''}
                    />
                    {errors.email && (
                      <span className="error-message">
                        <AlertCircle size={14} />
                        {errors.email}
                      </span>
                    )}
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone">{t.form.phone}</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className={errors.phone ? 'error' : ''}
                    />
                    {errors.phone && (
                      <span className="error-message">
                        <AlertCircle size={14} />
                        {errors.phone}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Payment Information */}
              {paymentMethod === 'card' && (
                <div className="form-section">
                  <h3 className="section-title">{t.form.cardInfo}</h3>
                  
                  <div className="form-group">
                    <label htmlFor="cardNumber">{t.form.cardNumber}</label>
                    <input
                      type="text"
                      id="cardNumber"
                      name="cardNumber"
                      value={formData.cardNumber}
                      onChange={(e) => {
                        const value = e.target.value.replace(/\D/g, '').slice(0, 16);
                        handleInputChange({
                          target: { name: 'cardNumber', value: formatCardNumber(value) }
                        });
                      }}
                      placeholder="1234 5678 9012 3456"
                      className={errors.cardNumber ? 'error' : ''}
                    />
                    {errors.cardNumber && (
                      <span className="error-message">
                        <AlertCircle size={14} />
                        {errors.cardNumber}
                      </span>
                    )}
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="expiryDate">{t.form.expiryDate}</label>
                      <input
                        type="text"
                        id="expiryDate"
                        name="expiryDate"
                        value={formData.expiryDate}
                        onChange={(e) => {
                          let value = e.target.value.replace(/\D/g, '');
                          if (value.length >= 2) {
                            value = value.slice(0, 2) + '/' + value.slice(2, 4);
                          }
                          handleInputChange({
                            target: { name: 'expiryDate', value }
                          });
                        }}
                        placeholder="MM/YY"
                        maxLength="5"
                        className={errors.expiryDate ? 'error' : ''}
                      />
                      {errors.expiryDate && (
                        <span className="error-message">
                          <AlertCircle size={14} />
                          {errors.expiryDate}
                        </span>
                      )}
                    </div>

                    <div className="form-group">
                      <label htmlFor="cvv">{t.form.cvv}</label>
                      <input
                        type="text"
                        id="cvv"
                        name="cvv"
                        value={formData.cvv}
                        onChange={(e) => {
                          const value = e.target.value.replace(/\D/g, '').slice(0, 3);
                          handleInputChange({
                            target: { name: 'cvv', value }
                          });
                        }}
                        placeholder="123"
                        maxLength="3"
                        className={errors.cvv ? 'error' : ''}
                      />
                      {errors.cvv && (
                        <span className="error-message">
                          <AlertCircle size={14} />
                          {errors.cvv}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {paymentMethod === 'wallet' && (
                <div className="form-section">
                  <div className="form-group">
                    <label htmlFor="walletNumber">{t.form.walletNumber}</label>
                    <input
                      type="text"
                      id="walletNumber"
                      name="walletNumber"
                      value={formData.walletNumber}
                      onChange={handleInputChange}
                      placeholder="01234567890"
                      className={errors.walletNumber ? 'error' : ''}
                    />
                    {errors.walletNumber && (
                      <span className="error-message">
                        <AlertCircle size={14} />
                        {errors.walletNumber}
                      </span>
                    )}
                  </div>
                </div>
              )}

              {paymentMethod === 'bank' && (
                <div className="form-section">
                  <div className="form-group">
                    <label htmlFor="bankName">{t.form.bankName}</label>
                    <input
                      type="text"
                      id="bankName"
                      name="bankName"
                      value={formData.bankName}
                      onChange={handleInputChange}
                      className={errors.bankName ? 'error' : ''}
                    />
                    {errors.bankName && (
                      <span className="error-message">
                        <AlertCircle size={14} />
                        {errors.bankName}
                      </span>
                    )}
                  </div>

                  <div className="form-group">
                    <label htmlFor="accountNumber">{t.form.accountNumber}</label>
                    <input
                      type="text"
                      id="accountNumber"
                      name="accountNumber"
                      value={formData.accountNumber}
                      onChange={handleInputChange}
                      className={errors.accountNumber ? 'error' : ''}
                    />
                    {errors.accountNumber && (
                      <span className="error-message">
                        <AlertCircle size={14} />
                        {errors.accountNumber}
                      </span>
                    )}
                  </div>
                </div>
              )}

              {/* Terms */}
              <div className="form-section">
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    name="agreeTerms"
                    checked={formData.agreeTerms}
                    onChange={handleInputChange}
                  />
                  <span>{t.form.agreeTerms}</span>
                </label>
                {errors.agreeTerms && (
                  <span className="error-message">
                    <AlertCircle size={14} />
                    {errors.agreeTerms}
                  </span>
                )}
              </div>

              {/* Submit Button */}
              <button 
                type="submit" 
                className="submit-btn"
                disabled={isProcessing}
              >
                {isProcessing ? (
                  <>
                    <div className="spinner"></div>
                    <span>{t.form.processing}</span>
                  </>
                ) : (
                  <>
                    <Lock size={20} />
                    <span>{t.form.submit}</span>
                  </>
                )}
              </button>
            </form>

            {/* Security Features */}
            <div className="security-features">
              <h4>{t.security.title}</h4>
              <div className="security-grid">
                {t.security.features.map((feature, index) => (
                  <div key={index} className="security-item">
                    <Shield size={16} />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="order-summary-section">
            <div className="order-summary">
              <h3 className="summary-title">{t.orderSummary.title}</h3>

              {selectedPlan ? (
                <>
                  <div className="selected-plan">
                    <div className="plan-badge">
                      <Award size={20} />
                    </div>
                    <div className="plan-info">
                      <h4>{selectedPlan.name}</h4>
                      <p>{selectedPlan.subtitle}</p>
                    </div>
                  </div>

                  <div className="plan-details">
                    <div className="detail-item">
                      <Clock size={16} />
                      <span>{t.orderSummary.duration}:</span>
                      <strong>{selectedPlan.duration}</strong>
                    </div>
                    <div className="detail-item">
                      <Star size={16} />
                      <span>{t.orderSummary.level}:</span>
                      <strong>{selectedPlan.level}</strong>
                    </div>
                  </div>

                  <div className="features-included">
                    <h5>{t.orderSummary.includes}</h5>
                    <ul>
                      {selectedPlan.features.slice(0, 4).map((feature, i) => (
                        <li key={i}>
                          <CheckCircle size={14} />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="price-breakdown">
                    <div className="price-row">
                      <span>{t.orderSummary.subtotal}</span>
                      <span>EGP {selectedPlan.price}</span>
                    </div>
                    <div className="price-row discount">
                      <span>{t.orderSummary.discount}</span>
                      <span>-EGP {discount}</span>
                    </div>
                    <div className="price-row total">
                      <span>{t.orderSummary.total}</span>
                      <span>EGP {total}</span>
                    </div>
                  </div>

                  <div className="guarantee-badge">
                    <Shield size={18} />
                    <span>{t.orderSummary.guarantee}</span>
                  </div>
                </>
              ) : (
                <div className="no-plan">
                  <Info size={48} />
                  <p>{language === 'en' ? 'No plan selected' : 'لم يتم اختيار خطة'}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Payments;