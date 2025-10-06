import React, { useState } from 'react';
import { Calculator, Activity, Apple, Zap, TrendingUp, Moon, Sun, Languages } from 'lucide-react';
import "../assets/css/service.css"
import Preloader from "./Preloader";
function Service() {
    const [activeCalculator, setActiveCalculator] = useState('alternatives');
  const [theme, setTheme] = useState('dark');
  const [language, setLanguage] = useState('en');
  
  // Alternatives Calculator State
  const [foodType, setFoodType] = useState('');
  const [selectedFood, setSelectedFood] = useState('');
  const [foodAmount, setFoodAmount] = useState('');
  const [alternativeFood, setAlternativeFood] = useState('');
  const [comparisonResult, setComparisonResult] = useState(null);
  
  // Calories Calculator State
  const [sex, setSex] = useState('male');
  const [age, setAge] = useState('');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [activityLevel, setActivityLevel] = useState('');
  const [dietTarget, setDietTarget] = useState('');
  const [calorieResult, setCalorieResult] = useState(null);

  const translations = {
    en: {
      title: "Nutrition Calculators",
      subtitle: "Professional tools to optimize your nutrition and reach your fitness goals",
      foodAlternatives: "Food Alternatives",
      caloriesCalculator: "Calories Calculator",
      foodAlternativesTitle: "Food Alternatives Calculator",
      dailyCaloriesTitle: "Daily Calories Calculator",
      foodType: "Food Type",
      selectFoodType: "Select Food Type",
      protein: "Protein",
      carbohydrate: "Carbohydrate",
      healthyFat: "Healthy Fat",
      legumes: "Legumes",
      fruit: "Fruit",
      vegetable: "Vegetable",
      milk: "Milk",
      selectFood: "Select Food",
      amount: "Amount (grams)",
      enterAmount: "Enter amount",
      alternativeFood: "Alternative Food",
      selectAlternative: "Select Alternative",
      calculateComparison: "Calculate Comparison",
      calories: "Calories",
      carbs: "Carbs",
      fat: "Fat",
      sex: "Sex",
      male: "Male",
      female: "Female",
      age: "Age",
      enterAge: "Enter age",
      weight: "Weight (kg)",
      enterWeight: "Enter weight",
      height: "Height (cm)",
      enterHeight: "Enter height",
      activityLevel: "Activity Level",
      selectActivityLevel: "Select Activity Level",
      sedentary: "Sedentary (little or no exercise)",
      light: "Lightly active (light exercise 1-3 days/week)",
      moderate: "Moderately active (moderate exercise 3-5 days/week)",
      veryActive: "Very Active (hard exercise 6-7 days/week)",
      extraActive: "Extra active (very hard exercise & physical job)",
      dietTarget: "Diet Target",
      selectDietTarget: "Select Diet Target",
      extremeLose: "Extreme Lose Weight (-1000 cal)",
      lose: "Lose Weight (-500 cal)",
      maintain: "Maintain Weight",
      gain: "Gain Weight (+500 cal)",
      extremeGain: "Extreme Gain Weight (+1000 cal)",
      calculateCalories: "Calculate Calories",
      yourResults: "Your Results",
      bmr: "Basal Metabolic Rate (BMR)",
      tdee: "Total Daily Energy Expenditure (TDEE)",
      dailyTarget: "Daily Target Calories",
      resultNote: "This is your estimated daily calorie requirement based on your inputs.",
      fillAllFields: "Please fill all fields"
    },
    ar: {
      title: "حاسبات التغذية",
      subtitle: "أدوات احترافية لتحسين تغذيتك والوصول لأهدافك الرياضية",
      foodAlternatives: "بدائل الطعام",
      caloriesCalculator: "حاسبة السعرات",
      foodAlternativesTitle: "حاسبة بدائل الطعام",
      dailyCaloriesTitle: "حاسبة السعرات اليومية",
      foodType: "نوع الطعام",
      selectFoodType: "اختر نوع الطعام",
      protein: "بروتين",
      carbohydrate: "كربوهيدرات",
      healthyFat: "دهون صحية",
      legumes: "بقوليات",
      fruit: "فواكه",
      vegetable: "خضروات",
      milk: "ألبان",
      selectFood: "اختر الطعام",
      amount: "الكمية (جرام)",
      enterAmount: "أدخل الكمية",
      alternativeFood: "الطعام البديل",
      selectAlternative: "اختر البديل",
      calculateComparison: "احسب المقارنة",
      calories: "السعرات",
      carbs: "كربوهيدرات",
      fat: "دهون",
      sex: "الجنس",
      male: "ذكر",
      female: "أنثى",
      age: "العمر",
      enterAge: "أدخل العمر",
      weight: "الوزن (كجم)",
      enterWeight: "أدخل الوزن",
      height: "الطول (سم)",
      enterHeight: "أدخل الطول",
      activityLevel: "مستوى النشاط",
      selectActivityLevel: "اختر مستوى النشاط",
      sedentary: "قليل الحركة (بدون تمارين)",
      light: "نشاط خفيف (تمارين خفيفة 1-3 أيام/أسبوع)",
      moderate: "نشاط متوسط (تمارين متوسطة 3-5 أيام/أسبوع)",
      veryActive: "نشاط عالي (تمارين شاقة 6-7 أيام/أسبوع)",
      extraActive: "نشاط عالي جداً (تمارين شاقة وعمل بدني)",
      dietTarget: "هدف الحمية",
      selectDietTarget: "اختر هدف الحمية",
      extremeLose: "خسارة وزن شديدة (-1000 سعر)",
      lose: "خسارة وزن (-500 سعر)",
      maintain: "الحفاظ على الوزن",
      gain: "زيادة وزن (+500 سعر)",
      extremeGain: "زيادة وزن شديدة (+1000 سعر)",
      calculateCalories: "احسب السعرات",
      yourResults: "نتائجك",
      bmr: "معدل الأيض الأساسي",
      tdee: "إجمالي الطاقة اليومية",
      dailyTarget: "السعرات اليومية المستهدفة",
      resultNote: "هذا هو احتياجك اليومي التقديري من السعرات بناءً على بياناتك.",
      fillAllFields: "يرجى ملء جميع الحقول"
    }
  };

  const t = translations[language];

  const foodDatabase = {
    protein: {
      'Chicken Breast': { calories: 165, protein: 31, carbs: 0, fat: 3.6, ar: 'صدر دجاج' },
      'Chicken Thigh': { calories: 209, protein: 26, carbs: 0, fat: 10.9, ar: 'فخذ دجاج' },
      'Turkey Breast': { calories: 135, protein: 30, carbs: 0, fat: 0.7, ar: 'صدر ديك رومي' },
      'Beef Steak': { calories: 271, protein: 25, carbs: 0, fat: 19, ar: 'ستيك لحم بقري' },
      'Ground Beef': { calories: 250, protein: 26, carbs: 0, fat: 15, ar: 'لحم بقري مفروم' },
      'Lamb': { calories: 294, protein: 25, carbs: 0, fat: 21, ar: 'لحم ضأن' },
      'Salmon': { calories: 206, protein: 22, carbs: 0, fat: 13, ar: 'سلمون' },
      'Tuna': { calories: 144, protein: 30, carbs: 0, fat: 1, ar: 'تونة' },
      'Shrimp': { calories: 99, protein: 24, carbs: 0.2, fat: 0.3, ar: 'جمبري' },
      'Tilapia': { calories: 128, protein: 26, carbs: 0, fat: 2.7, ar: 'سمك البلطي' },
      'Eggs': { calories: 155, protein: 13, carbs: 1.1, fat: 11, ar: 'بيض' },
      'Egg Whites': { calories: 52, protein: 11, carbs: 0.7, fat: 0.2, ar: 'بياض البيض' },
      'Greek Yogurt': { calories: 100, protein: 10, carbs: 3.6, fat: 5, ar: 'زبادي يوناني' },
      'Cottage Cheese': { calories: 98, protein: 11, carbs: 3.4, fat: 4.3, ar: 'جبن قريش' },
      'Whey Protein': { calories: 120, protein: 24, carbs: 3, fat: 1.5, ar: 'بروتين واي' },
      'Tofu': { calories: 76, protein: 8, carbs: 1.9, fat: 4.8, ar: 'توفو' }
    },
    carbohydrate: {
      'Brown Rice': { calories: 112, protein: 2.6, carbs: 24, fat: 0.9, ar: 'أرز بني' },
      'White Rice': { calories: 130, protein: 2.7, carbs: 28, fat: 0.3, ar: 'أرز أبيض' },
      'Basmati Rice': { calories: 121, protein: 3, carbs: 25, fat: 0.4, ar: 'أرز بسمتي' },
      'Quinoa': { calories: 120, protein: 4.4, carbs: 21, fat: 1.9, ar: 'كينوا' },
      'Sweet Potato': { calories: 86, protein: 1.6, carbs: 20, fat: 0.1, ar: 'بطاطا حلوة' },
      'Regular Potato': { calories: 77, protein: 2, carbs: 17, fat: 0.1, ar: 'بطاطس عادية' },
      'Oats': { calories: 389, protein: 16.9, carbs: 66, fat: 6.9, ar: 'شوفان' },
      'Whole Wheat Bread': { calories: 247, protein: 13, carbs: 41, fat: 3.4, ar: 'خبز قمح كامل' },
      'White Bread': { calories: 265, protein: 9, carbs: 49, fat: 3.2, ar: 'خبز أبيض' },
      'Pita Bread': { calories: 275, protein: 9, carbs: 55, fat: 1.2, ar: 'خبز بيتا' },
      'Pasta': { calories: 131, protein: 5, carbs: 25, fat: 1.1, ar: 'معكرونة' },
      'Couscous': { calories: 112, protein: 3.8, carbs: 23, fat: 0.2, ar: 'كسكسي' },
      'Corn': { calories: 86, protein: 3.3, carbs: 19, fat: 1.4, ar: 'ذرة' },
      'Barley': { calories: 123, protein: 2.3, carbs: 28, fat: 0.4, ar: 'شعير' }
    },
    healthyFat: {
      'Avocado': { calories: 160, protein: 2, carbs: 8.5, fat: 14.7, ar: 'أفوكادو' },
      'Almonds': { calories: 579, protein: 21, carbs: 22, fat: 50, ar: 'لوز' },
      'Walnuts': { calories: 654, protein: 15, carbs: 14, fat: 65, ar: 'جوز' },
      'Cashews': { calories: 553, protein: 18, carbs: 30, fat: 44, ar: 'كاجو' },
      'Peanuts': { calories: 567, protein: 26, carbs: 16, fat: 49, ar: 'فول سوداني' },
      'Olive Oil': { calories: 884, protein: 0, carbs: 0, fat: 100, ar: 'زيت زيتون' },
      'Coconut Oil': { calories: 862, protein: 0, carbs: 0, fat: 100, ar: 'زيت جوز الهند' },
      'Peanut Butter': { calories: 588, protein: 25, carbs: 20, fat: 50, ar: 'زبدة فول سوداني' },
      'Almond Butter': { calories: 614, protein: 21, carbs: 19, fat: 56, ar: 'زبدة اللوز' },
      'Chia Seeds': { calories: 486, protein: 17, carbs: 42, fat: 31, ar: 'بذور الشيا' },
      'Flax Seeds': { calories: 534, protein: 18, carbs: 29, fat: 42, ar: 'بذور الكتان' },
      'Sunflower Seeds': { calories: 584, protein: 21, carbs: 20, fat: 51, ar: 'بذور دوار الشمس' }
    },
    legumes: {
      'Lentils': { calories: 116, protein: 9, carbs: 20, fat: 0.4, ar: 'عدس' },
      'Red Lentils': { calories: 116, protein: 9, carbs: 20, fat: 0.4, ar: 'عدس أحمر' },
      'Chickpeas': { calories: 164, protein: 8.9, carbs: 27, fat: 2.6, ar: 'حمص' },
      'Black Beans': { calories: 132, protein: 8.9, carbs: 24, fat: 0.5, ar: 'فاصوليا سوداء' },
      'Kidney Beans': { calories: 127, protein: 8.7, carbs: 23, fat: 0.5, ar: 'فاصوليا حمراء' },
      'White Beans': { calories: 139, protein: 9.7, carbs: 25, fat: 0.4, ar: 'فاصوليا بيضاء' },
      'Pinto Beans': { calories: 143, protein: 9, carbs: 26, fat: 0.7, ar: 'فاصوليا بينتو' },
      'Green Peas': { calories: 81, protein: 5, carbs: 14, fat: 0.4, ar: 'بازلاء خضراء' },
      'Split Peas': { calories: 118, protein: 8.3, carbs: 21, fat: 0.4, ar: 'بازلاء مجروشة' },
      'Soybeans': { calories: 173, protein: 17, carbs: 10, fat: 9, ar: 'فول الصويا' },
      'Fava Beans': { calories: 110, protein: 7.6, carbs: 19, fat: 0.4, ar: 'فول مدمس' }
    },
    fruit: {
      'Banana': { calories: 89, protein: 1.1, carbs: 23, fat: 0.3, ar: 'موز' },
      'Apple': { calories: 52, protein: 0.3, carbs: 14, fat: 0.2, ar: 'تفاح' },
      'Orange': { calories: 47, protein: 0.9, carbs: 12, fat: 0.1, ar: 'برتقال' },
      'Mango': { calories: 60, protein: 0.8, carbs: 15, fat: 0.4, ar: 'مانجو' },
      'Strawberries': { calories: 32, protein: 0.7, carbs: 8, fat: 0.3, ar: 'فراولة' },
      'Blueberries': { calories: 57, protein: 0.7, carbs: 14, fat: 0.3, ar: 'توت أزرق' },
      'Grapes': { calories: 69, protein: 0.7, carbs: 18, fat: 0.2, ar: 'عنب' },
      'Watermelon': { calories: 30, protein: 0.6, carbs: 8, fat: 0.2, ar: 'بطيخ' },
      'Pineapple': { calories: 50, protein: 0.5, carbs: 13, fat: 0.1, ar: 'أناناس' },
      'Papaya': { calories: 43, protein: 0.5, carbs: 11, fat: 0.3, ar: 'بابايا' },
      'Kiwi': { calories: 61, protein: 1.1, carbs: 15, fat: 0.5, ar: 'كيوي' },
      'Dates': { calories: 277, protein: 1.8, carbs: 75, fat: 0.2, ar: 'تمر' },
      'Figs': { calories: 74, protein: 0.8, carbs: 19, fat: 0.3, ar: 'تين' },
      'Pomegranate': { calories: 83, protein: 1.7, carbs: 19, fat: 1.2, ar: 'رمان' }
    },
    vegetable: {
      'Broccoli': { calories: 34, protein: 2.8, carbs: 7, fat: 0.4, ar: 'بروكلي' },
      'Spinach': { calories: 23, protein: 2.9, carbs: 3.6, fat: 0.4, ar: 'سبانخ' },
      'Carrots': { calories: 41, protein: 0.9, carbs: 10, fat: 0.2, ar: 'جزر' },
      'Tomatoes': { calories: 18, protein: 0.9, carbs: 3.9, fat: 0.2, ar: 'طماطم' },
      'Cucumber': { calories: 15, protein: 0.7, carbs: 3.6, fat: 0.1, ar: 'خيار' },
      'Bell Peppers': { calories: 31, protein: 1, carbs: 6, fat: 0.3, ar: 'فلفل رومي' },
      'Zucchini': { calories: 17, protein: 1.2, carbs: 3.1, fat: 0.3, ar: 'كوسة' },
      'Cauliflower': { calories: 25, protein: 1.9, carbs: 5, fat: 0.3, ar: 'قرنبيط' },
      'Lettuce': { calories: 15, protein: 1.4, carbs: 2.9, fat: 0.2, ar: 'خس' },
      'Eggplant': { calories: 25, protein: 1, carbs: 6, fat: 0.2, ar: 'باذنجان' },
      'Green Beans': { calories: 31, protein: 1.8, carbs: 7, fat: 0.2, ar: 'فاصوليا خضراء' },
      'Cabbage': { calories: 25, protein: 1.3, carbs: 6, fat: 0.1, ar: 'ملفوف' },
      'Mushrooms': { calories: 22, protein: 3.1, carbs: 3.3, fat: 0.3, ar: 'فطر' },
      'Onions': { calories: 40, protein: 1.1, carbs: 9, fat: 0.1, ar: 'بصل' }
    },
    milk: {
      'Whole Milk': { calories: 61, protein: 3.2, carbs: 4.8, fat: 3.3, ar: 'حليب كامل الدسم' },
      'Low-Fat Milk': { calories: 42, protein: 3.4, carbs: 5, fat: 1, ar: 'حليب قليل الدسم' },
      'Skim Milk': { calories: 34, protein: 3.4, carbs: 5, fat: 0.1, ar: 'حليب خالي الدسم' },
      'Almond Milk': { calories: 17, protein: 0.6, carbs: 1.5, fat: 1.1, ar: 'حليب اللوز' },
      'Soy Milk': { calories: 54, protein: 3.3, carbs: 6, fat: 1.8, ar: 'حليب الصويا' },
      'Coconut Milk': { calories: 230, protein: 2.3, carbs: 6, fat: 24, ar: 'حليب جوز الهند' },
      'Oat Milk': { calories: 47, protein: 1, carbs: 7.6, fat: 1.5, ar: 'حليب الشوفان' },
      'Buffalo Milk': { calories: 97, protein: 3.8, carbs: 5.2, fat: 6.9, ar: 'حليب الجاموس' },
      'Goat Milk': { calories: 69, protein: 3.6, carbs: 4.5, fat: 4.1, ar: 'حليب الماعز' },
      'Camel Milk': { calories: 50, protein: 3, carbs: 4.4, fat: 2.4, ar: 'حليب الإبل' }
    }
  };

 const calculateAlternatives = () => {
  if (!foodType || !selectedFood || !foodAmount || !alternativeFood) {
    alert(t.fillAllFields);
    return;
  }

  const amount = parseFloat(foodAmount);
  const food1 = foodDatabase[foodType][selectedFood];
  const food2 = foodDatabase[foodType][alternativeFood];
  if (!food1 || !food2) return;

  // Calories for original food
  const originalCalories = (food1.calories * amount) / 100;

  // Equivalent grams for same calories
  const equivalentGrams = (originalCalories / food2.calories) * 100;

  const result = {
    original: {
      name: language === 'ar' ? food1.ar : selectedFood,
      amount: `${amount.toFixed(1)} g`,
      calories: `${originalCalories.toFixed(1)} cal`,
    },
    alternative: {
      name: language === 'ar' ? food2.ar : alternativeFood,
      amount: `${equivalentGrams.toFixed(1)} g`,
      calories: `${originalCalories.toFixed(1)} cal`,
    },
  };

  setComparisonResult(result);
};


  const calculateCalories = () => {
    if (!age || !weight || !height || !activityLevel || !dietTarget) {
      alert(t.fillAllFields);
      return;
    }

    const ageNum = parseFloat(age);
    const weightNum = parseFloat(weight);
    const heightNum = parseFloat(height);

    let bmr;
    if (sex === 'male') {
      bmr = 10 * weightNum + 6.25 * heightNum - 5 * ageNum + 5;
    } else {
      bmr = 10 * weightNum + 6.25 * heightNum - 5 * ageNum - 161;
    }

    const activityMultipliers = {
      sedentary: 1.2,
      light: 1.375,
      moderate: 1.55,
      veryActive: 1.725,
      extraActive: 1.9
    };

    const tdee = bmr * activityMultipliers[activityLevel];

    const targetAdjustments = {
      extremeLose: -1000,
      lose: -500,
      maintain: 0,
      gain: 500,
      extremeGain: 1000
    };

    const finalCalories = Math.round(tdee + targetAdjustments[dietTarget]);

    setCalorieResult({
      bmr: Math.round(bmr),
      tdee: Math.round(tdee),
      target: finalCalories
    });
  };
  return (
      <>
    <div className={`app-container ${theme}`} dir={language === 'ar' ? 'rtl' : 'ltr'}>
        <Preloader imageSrc="/images/image.png" />
      {/* Control Buttons */}
      <div className="control-buttons">
        <button className="control-btn" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
          {theme === 'dark' ? <Sun className="icon" /> : <Moon className="icon" />}
        </button>
        <button className="control-btn" onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')}>
          <Languages className="icon" />
          <span className="lang-text">{language === 'en' ? 'AR' : 'EN'}</span>
        </button>
      </div>

      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-overlay"></div>
        <div className="hero-bg-effects">
          <div className="bg-blob blob-1"></div>
          <div className="bg-blob blob-2"></div>
        </div>
        <div className="hero-content">
          {/* --------- */}
          <header className="service-header">
            <div className="header-left">
              <img src="/images/image.png" alt="Logo" className="header-logo" />
            </div>

            <h1 className="header-name">
              <span className="animated-text">Mohamed Ahmed</span>
            </h1>
        </header>
          {/* --------- */}
          <div className="hero-icon">
            <Apple className="icon-large" />
          </div>
          <h1 className="hero-title">
            {t.title.split(' ')[0]} <span className="gradient-text">{t.title.split(' ')[1]}</span>
          </h1>
          <p className="hero-subtitle">{t.subtitle}</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container">
        {/* Calculator Selector */}
        <div className="calculator-selector">
          <button 
            className={`selector-btn ${activeCalculator === 'alternatives' ? 'active' : ''}`}
            onClick={() => setActiveCalculator('alternatives')}
          >
            <Activity className="icon" />
            <span>{t.foodAlternatives}</span>
          </button>
          <button 
            className={`selector-btn ${activeCalculator === 'calories' ? 'active' : ''}`}
            onClick={() => setActiveCalculator('calories')}
          >
            <Calculator className="icon" />
            <span>{t.caloriesCalculator}</span>
          </button>
        </div>

        {/* Food Alternatives Calculator */}
        {activeCalculator === 'alternatives' && (
          <div className="calculator-card">
            <h2 className="card-title">
              <Activity className="icon" />
              {t.foodAlternativesTitle}
            </h2>

            <div className="form-grid">
              <div className="form-group">
                <label className="form-label">{t.foodType}</label>
                <select 
                  className="form-select" 
                  value={foodType} 
                  onChange={(e) => {
                    setFoodType(e.target.value);
                    setSelectedFood('');
                    setAlternativeFood('');
                    setComparisonResult(null);
                  }}
                >
                  <option value="">{t.selectFoodType}</option>
                  <option value="protein">{t.protein}</option>
                  <option value="carbohydrate">{t.carbohydrate}</option>
                  <option value="healthyFat">{t.healthyFat}</option>
                  <option value="legumes">{t.legumes}</option>
                  <option value="fruit">{t.fruit}</option>
                  <option value="vegetable">{t.vegetable}</option>
                  <option value="milk">{t.milk}</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">{t.selectFood}</label>
                <select 
                  className="form-select" 
                  value={selectedFood} 
                  onChange={(e) => setSelectedFood(e.target.value)}
                  disabled={!foodType}
                >
                  <option value="">{t.selectFood}</option>
                  {foodType && Object.keys(foodDatabase[foodType]).map(food => (
                    <option key={food} value={food}>
                      {language === 'ar' ? foodDatabase[foodType][food].ar : food}
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">{t.amount}</label>
                <input 
                  type="number" 
                  className="form-input" 
                  placeholder={t.enterAmount}
                  value={foodAmount}
                  onChange={(e) => setFoodAmount(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label className="form-label">{t.alternativeFood}</label>
                <select 
                  className="form-select" 
                  value={alternativeFood} 
                  onChange={(e) => setAlternativeFood(e.target.value)}
                  disabled={!foodType || !selectedFood}
                >
                  <option value="">{t.selectAlternative}</option>
                  {foodType && Object.keys(foodDatabase[foodType])
                    .filter(food => food !== selectedFood)
                    .map(food => (
                      <option key={food} value={food}>
                        {language === 'ar' ? foodDatabase[foodType][food].ar : food}
                      </option>
                    ))}
                </select>
              </div>
            </div>

            <button className="calculate-btn primary" onClick={calculateAlternatives}>
              {t.calculateComparison}
            </button>
            {comparisonResult && (
  <div className="results-grid">
    <div className="result-card original">
      <h3 className="result-title">{comparisonResult.original.name}</h3>
      <div className="result-details">
        <div className="result-row">
          <span>{t.amount}</span>
          <span className="result-value">{comparisonResult.original.amount}</span>
        </div>
        <div className="result-row">
          <span>{t.calories}</span>
          <span className="result-value">{comparisonResult.original.calories}</span>
        </div>
      </div>
    </div>

    <div className="result-card alternative">
      <h3 className="result-title">{comparisonResult.alternative.name}</h3>
      <div className="result-details">
        <div className="result-row">
          <span>{t.amount}</span>
          <span className="result-value">{comparisonResult.alternative.amount}</span>
        </div>
        <div className="result-row">
          <span>{t.calories}</span>
          <span className="result-value">{comparisonResult.alternative.calories}</span>
        </div>
      </div>
    </div>
  </div>
)}
{comparisonResult && (
  <p className="result-note" style={{ textAlign: "center", marginTop: "16px" }}>
    {comparisonResult.original.amount} {comparisonResult.original.name} ≈ {comparisonResult.alternative.amount} {comparisonResult.alternative.name}
  </p>
)}

          </div>
        )}

        {/* Calories Calculator */}
        {activeCalculator === 'calories' && (
          <div className="calculator-card">
            <h2 className="card-title">
              <Calculator className="icon" />
              {t.dailyCaloriesTitle}
            </h2>

            <div className="form-grid">
              <div className="form-group full-width">
                <label className="form-label">{t.sex}</label>
                <div className="button-group">
                  <button 
                    className={`group-btn ${sex === 'male' ? 'active male' : ''}`}
                    onClick={() => setSex('male')}
                  >
                    {t.male}
                  </button>
                  <button 
                    className={`group-btn ${sex === 'female' ? 'active female' : ''}`}
                    onClick={() => setSex('female')}
                  >
                    {t.female}
                  </button>
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">{t.age}</label>
                <input 
                  type="number" 
                  className="form-input" 
                  placeholder={t.enterAge}
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label className="form-label">{t.weight}</label>
                <input 
                  type="number" 
                  className="form-input" 
                  placeholder={t.enterWeight}
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label className="form-label">{t.height}</label>
                <input 
                  type="number" 
                  className="form-input" 
                  placeholder={t.enterHeight}
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label className="form-label">{t.activityLevel}</label>
                <select 
                  className="form-select" 
                  value={activityLevel} 
                  onChange={(e) => setActivityLevel(e.target.value)}
                >
                  <option value="">{t.selectActivityLevel}</option>
                  <option value="sedentary">{t.sedentary}</option>
                  <option value="light">{t.light}</option>
                  <option value="moderate">{t.moderate}</option>
                  <option value="veryActive">{t.veryActive}</option>
                  <option value="extraActive">{t.extraActive}</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">{t.dietTarget}</label>
                <select 
                  className="form-select" 
                  value={dietTarget} 
                  onChange={(e) => setDietTarget(e.target.value)}
                >
                  <option value="">{t.selectDietTarget}</option>
                  <option value="extremeLose">{t.extremeLose}</option>
                  <option value="lose">{t.lose}</option>
                  <option value="maintain">{t.maintain}</option>
                  <option value="gain">{t.gain}</option>
                  <option value="extremeGain">{t.extremeGain}</option>
                </select>
              </div>
            </div>

            <button className="calculate-btn secondary" onClick={calculateCalories}>
              {t.calculateCalories}
            </button>

            {calorieResult && (
              <div className="calorie-results">
                <h3 className="calorie-results-title">
                  <TrendingUp className="icon" />
                  {t.yourResults}
                </h3>
                <div className="calorie-results-details">
                  <div className="calorie-row">
                    <span className="calorie-label">{t.bmr}</span>
                    <span className="calorie-value">{calorieResult.bmr} cal</span>
                  </div>
                  <div className="calorie-row">
                    <span className="calorie-label">{t.tdee}</span>
                    <span className="calorie-value">{calorieResult.tdee} cal</span>
                  </div>
                  <div className="calorie-row highlight">
                    <span className="calorie-label">{t.dailyTarget}</span>
                    <span className="calorie-value-large">{calorieResult.target} cal</span>
                  </div>
                </div>
                <p className="result-note">{t.resultNote}</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
    </>
  );
}

export default Service