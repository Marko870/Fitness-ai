import { useState, useEffect, useRef } from "react";

const COLORS = {
  bg: "#0A0E1A",
  bgCard: "#111827",
  bgCardHover: "#1a2236",
  accent: "#00E5A0",
  accentDim: "#00c987",
  accentGlow: "rgba(0,229,160,0.15)",
  accentGlow2: "rgba(0,229,160,0.05)",
  orange: "#FF6B35",
  orangeGlow: "rgba(255,107,53,0.15)",
  blue: "#3B82F6",
  blueGlow: "rgba(59,130,246,0.15)",
  text: "#F1F5F9",
  textMuted: "#94A3B8",
  textDim: "#4B5563",
  border: "rgba(255,255,255,0.07)",
  borderAccent: "rgba(0,229,160,0.3)",
};

const styles = {
  app: {
    direction: "rtl",
    fontFamily: "'Tajawal', 'Cairo', sans-serif",
    background: COLORS.bg,
    color: COLORS.text,
    minHeight: "100vh",
    overflowX: "hidden",
  },
};

// ─── NAV ───────────────────────────────────────────────────────────────────────
function Navbar({ page, setPage }) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  return (
    <nav style={{
      position: "fixed", top: 0, right: 0, left: 0, zIndex: 100,
      padding: "16px 40px",
      background: scrolled ? "rgba(10,14,26,0.92)" : "transparent",
      backdropFilter: scrolled ? "blur(20px)" : "none",
      borderBottom: scrolled ? `1px solid ${COLORS.border}` : "none",
      display: "flex", alignItems: "center", justifyContent: "space-between",
      transition: "all 0.4s ease",
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <div style={{
          width: 38, height: 38, borderRadius: 10,
          background: `linear-gradient(135deg, ${COLORS.accent}, ${COLORS.blue})`,
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 18,
        }}>⚡</div>
        <span style={{ fontSize: 20, fontWeight: 800, letterSpacing: "-0.5px" }}>
          فِيت<span style={{ color: COLORS.accent }}>AI</span>
        </span>
      </div>

      <div style={{ display: "flex", gap: 8 }}>
        {[
          { id: "landing", label: "الرئيسية" },
          { id: "onboarding", label: "ابدأ الآن" },
          { id: "dashboard", label: "لوحة التحكم" },
          { id: "workout", label: "التمارين" },
          { id: "nutrition", label: "التغذية" },
          { id: "chat", label: "المساعد" },
          { id: "progress", label: "التقدم" },
        ].map(({ id, label }) => (
          <button key={id} onClick={() => setPage(id)} style={{
            background: page === id ? COLORS.accentGlow : "transparent",
            border: page === id ? `1px solid ${COLORS.borderAccent}` : "1px solid transparent",
            color: page === id ? COLORS.accent : COLORS.textMuted,
            padding: "6px 14px", borderRadius: 8, fontSize: 13,
            cursor: "pointer", fontFamily: "inherit", transition: "all 0.2s",
          }}>{label}</button>
        ))}
      </div>
    </nav>
  );
}

// ─── LANDING ───────────────────────────────────────────────────────────────────
function LandingPage({ setPage }) {
  return (
    <div style={{ direction: "rtl" }}>
      {/* Hero */}
      <section style={{
        minHeight: "100vh",
        display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
        padding: "120px 40px 80px",
        position: "relative", overflow: "hidden",
        textAlign: "center",
      }}>
        {/* Background blobs */}
        <div style={{
          position: "absolute", top: "15%", right: "10%",
          width: 500, height: 500, borderRadius: "50%",
          background: `radial-gradient(circle, ${COLORS.accentGlow} 0%, transparent 70%)`,
          pointerEvents: "none",
        }} />
        <div style={{
          position: "absolute", bottom: "10%", left: "5%",
          width: 400, height: 400, borderRadius: "50%",
          background: `radial-gradient(circle, ${COLORS.orangeGlow} 0%, transparent 70%)`,
          pointerEvents: "none",
        }} />
        <div style={{
          position: "absolute", top: "40%", left: "20%",
          width: 300, height: 300, borderRadius: "50%",
          background: `radial-gradient(circle, ${COLORS.blueGlow} 0%, transparent 70%)`,
          pointerEvents: "none",
        }} />

        {/* Grid overlay */}
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: `linear-gradient(${COLORS.border} 1px, transparent 1px), linear-gradient(90deg, ${COLORS.border} 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
          pointerEvents: "none", opacity: 0.4,
        }} />

        {/* Badge */}
        <div style={{
          display: "inline-flex", alignItems: "center", gap: 8,
          background: COLORS.accentGlow, border: `1px solid ${COLORS.borderAccent}`,
          borderRadius: 50, padding: "6px 16px", marginBottom: 32,
          fontSize: 13, color: COLORS.accent, fontWeight: 600,
        }}>
          <span style={{ width: 7, height: 7, borderRadius: "50%", background: COLORS.accent, display: "inline-block", boxShadow: `0 0 8px ${COLORS.accent}` }} />
          مدرّبك الذكي متاح الآن · الإصدار التجريبي
        </div>

        {/* Headline */}
        <h1 style={{
          fontSize: "clamp(42px, 7vw, 84px)",
          fontWeight: 900,
          lineHeight: 1.1,
          marginBottom: 24,
          letterSpacing: "-1px",
          maxWidth: 900,
        }}>
          مدرّبك الشخصي
          <br />
          <span style={{
            background: `linear-gradient(135deg, ${COLORS.accent} 0%, ${COLORS.blue} 100%)`,
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
          }}>المدعوم بالذكاء</span>
          <br />
          الاصطناعي
        </h1>

        <p style={{
          fontSize: 19, color: COLORS.textMuted, maxWidth: 580,
          lineHeight: 1.7, marginBottom: 48,
        }}>
          برامج تمارين وتغذية مخصصة لجسمك وأهدافك، مع متابعة يومية وتعديل تلقائي.
          بدون مدرب باهظ الثمن — فقط نتائج حقيقية.
        </p>

        {/* CTA Buttons */}
        <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
          <button onClick={() => setPage("onboarding")} style={{
            background: `linear-gradient(135deg, ${COLORS.accent}, ${COLORS.accentDim})`,
            color: "#0A0E1A", border: "none",
            padding: "16px 40px", borderRadius: 12,
            fontSize: 16, fontWeight: 800, cursor: "pointer",
            fontFamily: "inherit", letterSpacing: "0.3px",
            boxShadow: `0 0 40px ${COLORS.accentGlow}, 0 4px 20px rgba(0,229,160,0.4)`,
            transition: "all 0.3s",
          }}>ابدأ مجاناً الآن ←</button>

          <button onClick={() => setPage("dashboard")} style={{
            background: "transparent",
            color: COLORS.text,
            border: `1px solid ${COLORS.border}`,
            padding: "16px 36px", borderRadius: 12,
            fontSize: 16, fontWeight: 600, cursor: "pointer",
            fontFamily: "inherit",
            transition: "all 0.3s",
          }}>استعرض التطبيق</button>
        </div>

        {/* Stats */}
        <div style={{
          display: "flex", gap: 48, marginTop: 80, justifyContent: "center", flexWrap: "wrap",
        }}>
          {[
            { num: "+٥٠٠٠", label: "مستخدم نشط" },
            { num: "٢٤/٧", label: "متابعة مستمرة" },
            { num: "+٢٠٠", label: "تمرين بالعربية" },
            { num: "٩٨٪", label: "نسبة الرضا" },
          ].map(({ num, label }) => (
            <div key={label} style={{ textAlign: "center" }}>
              <div style={{ fontSize: 32, fontWeight: 900, color: COLORS.accent, lineHeight: 1 }}>{num}</div>
              <div style={{ fontSize: 13, color: COLORS.textMuted, marginTop: 6 }}>{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section style={{ padding: "100px 40px", maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <span style={{
            fontSize: 12, letterSpacing: 3, color: COLORS.accent,
            textTransform: "uppercase", fontWeight: 700,
          }}>ما الذي يميّزنا</span>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 800, marginTop: 12 }}>
            كل ما تحتاجه في مكان واحد
          </h2>
        </div>

        <div style={{
          display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: 20,
        }}>
          {[
            { icon: "🧠", title: "مدرب ذكي شخصي", desc: "يحلل بياناتك ويبني برنامجاً فريداً يتكيّف مع تقدمك يومياً", color: COLORS.accent },
            { icon: "🍎", title: "خطة غذائية دقيقة", desc: "وجبات محسوبة بالسعرات تناسب هدفك سواء كان تنحيفاً أو بناء عضلات", color: COLORS.orange },
            { icon: "📊", title: "تتبع التقدم", desc: "رسوم بيانية واضحة تُظهر تطور جسمك وإنجازاتك أسبوعاً بأسبوع", color: COLORS.blue },
            { icon: "🤖", title: "مساعد AI 24/7", desc: "اسأل أي سؤال رياضي أو غذائي واحصل على إجابة علمية فورية", color: "#A855F7" },
            { icon: "🎥", title: "مكتبة تمارين بالعربية", desc: "أكثر من 200 فيديو شرح للتمارين بمستويات متدرجة من المبتدئ للمحترف", color: "#EC4899" },
            { icon: "💳", title: "باقات مرنة", desc: "باقة مجانية للبداية وباقة بريميوم لمن يريد التميز والنتائج الأسرع", color: "#F59E0B" },
          ].map(({ icon, title, desc, color }) => (
            <div key={title} style={{
              background: COLORS.bgCard,
              border: `1px solid ${COLORS.border}`,
              borderRadius: 16, padding: "28px 24px",
              transition: "all 0.3s",
              cursor: "default",
            }}
              onMouseEnter={e => {
                e.currentTarget.style.border = `1px solid ${color}50`;
                e.currentTarget.style.background = COLORS.bgCardHover;
                e.currentTarget.style.transform = "translateY(-4px)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.border = `1px solid ${COLORS.border}`;
                e.currentTarget.style.background = COLORS.bgCard;
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <div style={{
                width: 52, height: 52, borderRadius: 12,
                background: `${color}18`, border: `1px solid ${color}40`,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 24, marginBottom: 16,
              }}>{icon}</div>
              <h3 style={{ fontSize: 17, fontWeight: 700, marginBottom: 8 }}>{title}</h3>
              <p style={{ fontSize: 14, color: COLORS.textMuted, lineHeight: 1.7 }}>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section style={{
        padding: "100px 40px",
        background: "linear-gradient(180deg, transparent, rgba(0,229,160,0.03) 50%, transparent)",
      }}>
        <div style={{ maxWidth: 1000, margin: "0 auto", textAlign: "center" }}>
          <span style={{ fontSize: 12, letterSpacing: 3, color: COLORS.accent, fontWeight: 700 }}>
            كيف يعمل
          </span>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 800, marginTop: 12, marginBottom: 64 }}>
            ٣ خطوات فقط للبدء
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 32 }}>
            {[
              { step: "١", title: "أدخل بياناتك", desc: "الوزن، الطول، العمر، هدفك، وأي ملاحظات صحية", icon: "📝" },
              { step: "٢", title: "الذكاء يبني برنامجك", desc: "في ثوانٍ يُصمَّم برنامج تمارين وغذاء مخصص لك تماماً", icon: "⚡" },
              { step: "٣", title: "تتبّع وحقّق نتائجك", desc: "تابع تقدمك يومياً والنظام يعدّل البرنامج تلقائياً", icon: "🏆" },
            ].map(({ step, title, desc, icon }, i) => (
              <div key={step} style={{ position: "relative" }}>
                {i < 2 && (
                  <div style={{
                    position: "absolute", top: "30px", left: "-16px",
                    width: 32, height: 2,
                    background: `linear-gradient(90deg, ${COLORS.borderAccent}, transparent)`,
                  }} />
                )}
                <div style={{
                  background: COLORS.bgCard, border: `1px solid ${COLORS.border}`,
                  borderRadius: 16, padding: "32px 24px",
                }}>
                  <div style={{
                    width: 60, height: 60, borderRadius: "50%",
                    background: `linear-gradient(135deg, ${COLORS.accent}20, ${COLORS.blue}20)`,
                    border: `2px solid ${COLORS.borderAccent}`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 28, margin: "0 auto 16px",
                  }}>{icon}</div>
                  <div style={{ fontSize: 12, color: COLORS.accent, fontWeight: 700, marginBottom: 8 }}>
                    الخطوة {step}
                  </div>
                  <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 8 }}>{title}</h3>
                  <p style={{ fontSize: 14, color: COLORS.textMuted, lineHeight: 1.7 }}>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section style={{ padding: "100px 40px", maxWidth: 900, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <span style={{ fontSize: 12, letterSpacing: 3, color: COLORS.accent, fontWeight: 700 }}>الباقات</span>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 800, marginTop: 12 }}>
            ابدأ مجاناً، طوّر لاحقاً
          </h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
          {[
            {
              name: "المجانية", price: "٠ $", period: "للأبد",
              features: ["برنامج تمارين أساسي", "خطة غذائية بسيطة", "مكتبة تمارين محدودة", "متابعة أسبوعية"],
              color: COLORS.border, btnColor: COLORS.text, featured: false,
            },
            {
              name: "بريميوم", price: "١٩ $", period: "شهرياً",
              features: ["مدرب ذكي كامل", "تخصيص يومي تلقائي", "مكتبة تمارين كاملة", "مساعد AI 24/7", "استشارات مع خبراء", "تقارير تفصيلية"],
              color: COLORS.accent, btnColor: "#0A0E1A", featured: true,
            },
          ].map(({ name, price, period, features, color, btnColor, featured }) => (
            <div key={name} style={{
              background: featured ? `linear-gradient(145deg, ${COLORS.bgCard}, ${COLORS.bgCardHover})` : COLORS.bgCard,
              border: `1px solid ${featured ? COLORS.borderAccent : COLORS.border}`,
              borderRadius: 20, padding: "36px 28px",
              position: "relative", overflow: "hidden",
            }}>
              {featured && (
                <div style={{
                  position: "absolute", top: 16, left: 16,
                  background: COLORS.accent, color: "#0A0E1A",
                  fontSize: 11, fontWeight: 800, padding: "4px 12px", borderRadius: 50,
                }}>الأكثر شيوعاً</div>
              )}
              <div style={{ fontSize: 18, fontWeight: 700, marginBottom: 4 }}>{name}</div>
              <div style={{ display: "flex", alignItems: "baseline", gap: 6, marginBottom: 6 }}>
                <span style={{ fontSize: 40, fontWeight: 900, color: featured ? COLORS.accent : COLORS.text }}>{price}</span>
                <span style={{ fontSize: 13, color: COLORS.textMuted }}>{period}</span>
              </div>
              <div style={{ height: 1, background: COLORS.border, margin: "20px 0" }} />
              <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 28 }}>
                {features.map(f => (
                  <div key={f} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 14 }}>
                    <span style={{ color: featured ? COLORS.accent : COLORS.textMuted, fontSize: 16 }}>✓</span>
                    <span style={{ color: COLORS.textMuted }}>{f}</span>
                  </div>
                ))}
              </div>
              <button style={{
                width: "100%", padding: "14px",
                background: featured ? COLORS.accent : "transparent",
                color: btnColor,
                border: featured ? "none" : `1px solid ${COLORS.border}`,
                borderRadius: 10, fontSize: 15, fontWeight: 700,
                cursor: "pointer", fontFamily: "inherit",
              }}>
                {featured ? "ابدأ التجربة المجانية" : "ابدأ مجاناً"}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Final */}
      <section style={{ padding: "80px 40px", textAlign: "center" }}>
        <div style={{
          maxWidth: 700, margin: "0 auto",
          background: `linear-gradient(135deg, ${COLORS.accentGlow}, ${COLORS.blueGlow})`,
          border: `1px solid ${COLORS.borderAccent}`,
          borderRadius: 24, padding: "60px 40px",
          position: "relative", overflow: "hidden",
        }}>
          <h2 style={{ fontSize: "clamp(24px, 4vw, 40px)", fontWeight: 900, marginBottom: 16 }}>
            جاهز تبدأ رحلتك؟
          </h2>
          <p style={{ fontSize: 16, color: COLORS.textMuted, marginBottom: 32, lineHeight: 1.7 }}>
            انضم لآلاف المستخدمين الذين غيّروا أجسادهم بمساعدة FitAI
          </p>
          <button onClick={() => setPage("onboarding")} style={{
            background: `linear-gradient(135deg, ${COLORS.accent}, ${COLORS.accentDim})`,
            color: "#0A0E1A", border: "none",
            padding: "16px 48px", borderRadius: 12,
            fontSize: 17, fontWeight: 800, cursor: "pointer", fontFamily: "inherit",
            boxShadow: `0 0 40px ${COLORS.accentGlow}`,
          }}>
            ابدأ مجاناً الآن ←
          </button>
        </div>
      </section>
    </div>
  );
}

// ─── ONBOARDING ────────────────────────────────────────────────────────────────
function OnboardingPage({ setPage }) {
  const [step, setStep] = useState(0);
  const [data, setData] = useState({ name: "", age: "", weight: "", height: "", goal: "", level: "", diseases: "" });

  const steps = [
    { title: "مرحباً! ما اسمك؟", field: "name", type: "text", placeholder: "اكتب اسمك هنا" },
    { title: "كم عمرك؟", field: "age", type: "number", placeholder: "مثال: 25" },
    { title: "كم وزنك بالكيلو؟", field: "weight", type: "number", placeholder: "مثال: 80" },
    { title: "كم طولك بالسم؟", field: "height", type: "number", placeholder: "مثال: 175" },
  ];

  const goals = ["خسارة الوزن", "بناء العضلات", "الحفاظ على اللياقة", "زيادة القوة والتحمّل"];
  const levels = ["مبتدئ (أقل من 6 أشهر)", "متوسط (6 أشهر - 2 سنة)", "متقدم (أكثر من سنتين)"];

  return (
    <div style={{
      minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center",
      padding: "120px 20px 40px",
    }}>
      <div style={{ width: "100%", maxWidth: 520 }}>
        {/* Progress */}
        <div style={{ marginBottom: 40 }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
            <span style={{ fontSize: 13, color: COLORS.textMuted }}>الخطوة {step + 1} من 6</span>
            <span style={{ fontSize: 13, color: COLORS.accent }}>{Math.round(((step + 1) / 6) * 100)}%</span>
          </div>
          <div style={{ height: 6, background: COLORS.bgCard, borderRadius: 10, overflow: "hidden" }}>
            <div style={{
              height: "100%", width: `${((step + 1) / 6) * 100}%`,
              background: `linear-gradient(90deg, ${COLORS.accent}, ${COLORS.blue})`,
              borderRadius: 10, transition: "width 0.5s ease",
            }} />
          </div>
        </div>

        <div style={{
          background: COLORS.bgCard, border: `1px solid ${COLORS.border}`,
          borderRadius: 20, padding: "40px 36px",
        }}>
          {step < 4 ? (
            <>
              <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 28 }}>{steps[step].title}</h2>
              <input
                type={steps[step].type}
                placeholder={steps[step].placeholder}
                value={data[steps[step].field]}
                onChange={e => setData({ ...data, [steps[step].field]: e.target.value })}
                style={{
                  width: "100%", padding: "14px 18px", fontSize: 16,
                  background: COLORS.bg, border: `1px solid ${COLORS.border}`,
                  borderRadius: 10, color: COLORS.text, fontFamily: "inherit",
                  outline: "none", boxSizing: "border-box",
                }}
                onFocus={e => e.target.style.borderColor = COLORS.accent}
                onBlur={e => e.target.style.borderColor = COLORS.border}
              />
            </>
          ) : step === 4 ? (
            <>
              <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 28 }}>ما هو هدفك؟</h2>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {goals.map(g => (
                  <button key={g} onClick={() => setData({ ...data, goal: g })} style={{
                    padding: "14px 18px", borderRadius: 10, textAlign: "right",
                    background: data.goal === g ? COLORS.accentGlow : COLORS.bg,
                    border: `1px solid ${data.goal === g ? COLORS.borderAccent : COLORS.border}`,
                    color: data.goal === g ? COLORS.accent : COLORS.text,
                    fontSize: 15, cursor: "pointer", fontFamily: "inherit", fontWeight: data.goal === g ? 600 : 400,
                    transition: "all 0.2s",
                  }}>{g}</button>
                ))}
              </div>
            </>
          ) : (
            <>
              <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 28 }}>ما مستواك الحالي؟</h2>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {levels.map(l => (
                  <button key={l} onClick={() => setData({ ...data, level: l })} style={{
                    padding: "14px 18px", borderRadius: 10, textAlign: "right",
                    background: data.level === l ? COLORS.accentGlow : COLORS.bg,
                    border: `1px solid ${data.level === l ? COLORS.borderAccent : COLORS.border}`,
                    color: data.level === l ? COLORS.accent : COLORS.text,
                    fontSize: 15, cursor: "pointer", fontFamily: "inherit", fontWeight: data.level === l ? 600 : 400,
                    transition: "all 0.2s",
                  }}>{l}</button>
                ))}
              </div>
            </>
          )}

          <div style={{ display: "flex", gap: 12, marginTop: 32 }}>
            {step > 0 && (
              <button onClick={() => setStep(s => s - 1)} style={{
                flex: 1, padding: "14px", background: "transparent",
                border: `1px solid ${COLORS.border}`, borderRadius: 10,
                color: COLORS.text, fontSize: 15, cursor: "pointer", fontFamily: "inherit",
              }}>← رجوع</button>
            )}
            <button onClick={() => step < 5 ? setStep(s => s + 1) : setPage("dashboard")} style={{
              flex: 2, padding: "14px",
              background: `linear-gradient(135deg, ${COLORS.accent}, ${COLORS.accentDim})`,
              border: "none", borderRadius: 10,
              color: "#0A0E1A", fontSize: 15, fontWeight: 800, cursor: "pointer", fontFamily: "inherit",
            }}>
              {step < 5 ? "التالي →" : "ابدأ برنامجك ⚡"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── DASHBOARD ─────────────────────────────────────────────────────────────────
function DashboardPage({ setPage }) {
  const days = ["الأحد", "الإثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"];
  const today = 2;

  return (
    <div style={{ padding: "100px 40px 60px", maxWidth: 1200, margin: "0 auto" }}>
      {/* Header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 40 }}>
        <div>
          <div style={{ fontSize: 14, color: COLORS.textMuted, marginBottom: 6 }}>مرحباً بعودتك 👋</div>
          <h1 style={{ fontSize: 32, fontWeight: 900 }}>أحمد محمد</h1>
        </div>
        <div style={{
          background: COLORS.bgCard, border: `1px solid ${COLORS.borderAccent}`,
          borderRadius: 12, padding: "10px 18px",
          display: "flex", alignItems: "center", gap: 8,
        }}>
          <span style={{ width: 8, height: 8, borderRadius: "50%", background: COLORS.accent, boxShadow: `0 0 8px ${COLORS.accent}` }} />
          <span style={{ fontSize: 13, color: COLORS.accent, fontWeight: 600 }}>الأسبوع ٣ من ١٢</span>
        </div>
      </div>

      {/* Day picker */}
      <div style={{
        display: "flex", gap: 8, marginBottom: 36,
        background: COLORS.bgCard, border: `1px solid ${COLORS.border}`,
        borderRadius: 14, padding: 8, overflowX: "auto",
      }}>
        {days.map((d, i) => (
          <button key={d} style={{
            flex: 1, minWidth: 80, padding: "10px 8px", borderRadius: 10,
            background: i === today ? `linear-gradient(135deg, ${COLORS.accent}, ${COLORS.accentDim})` : "transparent",
            border: "none",
            color: i === today ? "#0A0E1A" : i < today ? COLORS.accent : COLORS.textMuted,
            fontSize: 13, fontWeight: i === today ? 800 : 400,
            cursor: "pointer", fontFamily: "inherit", transition: "all 0.2s",
            textAlign: "center",
          }}>
            {d}
            {i < today && <div style={{ fontSize: 10, marginTop: 2 }}>✓</div>}
            {i === today && <div style={{ fontSize: 10, marginTop: 2 }}>اليوم</div>}
          </button>
        ))}
      </div>

      {/* Stats */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16, marginBottom: 28 }}>
        {[
          { label: "السعرات اليوم", val: "١٨٥٠", unit: "/ ٢٢٠٠ kcal", icon: "🔥", color: COLORS.orange },
          { label: "التمارين المكتملة", val: "٤", unit: "/ ٦ تمارين", icon: "💪", color: COLORS.accent },
          { label: "الوزن الحالي", val: "٧٨.٥", unit: "كغ", icon: "⚖️", color: COLORS.blue },
          { label: "الأيام المتتالية", val: "١٢", unit: "يوم متواصل", icon: "🏆", color: "#A855F7" },
        ].map(({ label, val, unit, icon, color }) => (
          <div key={label} style={{
            background: COLORS.bgCard, border: `1px solid ${COLORS.border}`,
            borderRadius: 14, padding: "20px 18px",
          }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 12 }}>
              <span style={{ fontSize: 13, color: COLORS.textMuted }}>{label}</span>
              <span style={{ fontSize: 20 }}>{icon}</span>
            </div>
            <div style={{ fontSize: 28, fontWeight: 900, color }}>{val}</div>
            <div style={{ fontSize: 12, color: COLORS.textDim, marginTop: 4 }}>{unit}</div>
          </div>
        ))}
      </div>

      {/* Main grid */}
      <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: 20 }}>
        {/* Today's workout */}
        <div style={{
          background: COLORS.bgCard, border: `1px solid ${COLORS.border}`,
          borderRadius: 16, padding: "24px",
        }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
            <h3 style={{ fontSize: 18, fontWeight: 700 }}>تمارين اليوم 💪</h3>
            <button onClick={() => setPage("workout")} style={{
              background: "transparent", border: `1px solid ${COLORS.borderAccent}`,
              color: COLORS.accent, padding: "6px 14px", borderRadius: 8,
              fontSize: 12, cursor: "pointer", fontFamily: "inherit",
            }}>عرض الكل</button>
          </div>
          {[
            { name: "سكوات", sets: "٤ × ١٢", done: true, muscles: "أرجل" },
            { name: "بنش بريس", sets: "٣ × ١٠", done: true, muscles: "صدر" },
            { name: "ديدليفت", sets: "٣ × ٨", done: false, muscles: "ظهر" },
            { name: "عقلة", sets: "٣ × ١٠", done: false, muscles: "ظهر + بايسبس" },
          ].map(({ name, sets, done, muscles }) => (
            <div key={name} style={{
              display: "flex", alignItems: "center", gap: 14,
              padding: "12px 0",
              borderBottom: `1px solid ${COLORS.border}`,
            }}>
              <div style={{
                width: 36, height: 36, borderRadius: 8,
                background: done ? COLORS.accentGlow : COLORS.bgCardHover,
                border: `1px solid ${done ? COLORS.borderAccent : COLORS.border}`,
                display: "flex", alignItems: "center", justifyContent: "center",
                color: done ? COLORS.accent : COLORS.textDim, fontSize: 16,
                flexShrink: 0,
              }}>{done ? "✓" : "○"}</div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 15, fontWeight: 600, color: done ? COLORS.textMuted : COLORS.text }}>{name}</div>
                <div style={{ fontSize: 12, color: COLORS.textDim, marginTop: 2 }}>{muscles}</div>
              </div>
              <div style={{ fontSize: 13, color: COLORS.textMuted }}>{sets}</div>
            </div>
          ))}
        </div>

        {/* Side panels */}
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {/* Nutrition summary */}
          <div style={{
            background: COLORS.bgCard, border: `1px solid ${COLORS.border}`,
            borderRadius: 16, padding: "20px",
          }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 16 }}>
              <h3 style={{ fontSize: 16, fontWeight: 700 }}>التغذية اليوم 🍎</h3>
              <button onClick={() => setPage("nutrition")} style={{
                background: "transparent", border: "none",
                color: COLORS.accent, fontSize: 12, cursor: "pointer", fontFamily: "inherit",
              }}>التفاصيل →</button>
            </div>
            {[
              { label: "بروتين", cur: 120, max: 160, color: COLORS.accent },
              { label: "كربوهيدرات", cur: 200, max: 280, color: COLORS.blue },
              { label: "دهون", cur: 55, max: 70, color: COLORS.orange },
            ].map(({ label, cur, max, color }) => (
              <div key={label} style={{ marginBottom: 12 }}>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12, marginBottom: 5 }}>
                  <span style={{ color: COLORS.textMuted }}>{label}</span>
                  <span style={{ color }}>{cur}g / {max}g</span>
                </div>
                <div style={{ height: 6, background: COLORS.bg, borderRadius: 10 }}>
                  <div style={{
                    height: "100%", width: `${(cur / max) * 100}%`,
                    background: color, borderRadius: 10,
                    transition: "width 0.8s ease",
                  }} />
                </div>
              </div>
            ))}
          </div>

          {/* AI tip */}
          <div style={{
            background: `linear-gradient(135deg, ${COLORS.accentGlow}, transparent)`,
            border: `1px solid ${COLORS.borderAccent}`,
            borderRadius: 16, padding: "20px",
          }}>
            <div style={{ display: "flex", gap: 10, marginBottom: 10 }}>
              <span style={{ fontSize: 20 }}>🤖</span>
              <span style={{ fontSize: 14, fontWeight: 700, color: COLORS.accent }}>نصيحة اليوم</span>
            </div>
            <p style={{ fontSize: 13, color: COLORS.textMuted, lineHeight: 1.6 }}>
              أنت على مسار ممتاز! حاول زيادة تناول البروتين بـ 20g إضافية لتعزيز بناء العضلات بشكل أسرع.
            </p>
            <button onClick={() => setPage("chat")} style={{
              marginTop: 12, background: "transparent",
              border: `1px solid ${COLORS.borderAccent}`, borderRadius: 8,
              color: COLORS.accent, padding: "6px 14px", fontSize: 12,
              cursor: "pointer", fontFamily: "inherit",
            }}>اسأل المساعد →</button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── WORKOUT ───────────────────────────────────────────────────────────────────
function WorkoutPage() {
  const [selected, setSelected] = useState("صدر");
  const muscles = ["صدر", "ظهر", "أرجل", "أكتاف", "بايسبس", "ترايسبس", "بطن", "كارديو"];
  const exercises = {
    "صدر": [
      { name: "بنش بريس باربل", sets: "٤ × ١٠", level: "متوسط", desc: "التمرين الأساسي لبناء الصدر", emoji: "🏋️" },
      { name: "بنش بريس دمبل", sets: "٣ × ١٢", level: "مبتدئ", desc: "يعطي مدى حركة أوسع", emoji: "💪" },
      { name: "فلاي دمبل", sets: "٣ × ١٥", level: "متوسط", desc: "لعزل عضلة الصدر", emoji: "🦅" },
      { name: "بوش أب", sets: "٣ × ٢٠", level: "مبتدئ", desc: "تمرين منزلي فعّال", emoji: "⬆️" },
    ],
    "أرجل": [
      { name: "سكوات", sets: "٤ × ١٢", level: "مبتدئ", desc: "ملك تمارين الأرجل", emoji: "🦵" },
      { name: "ليج بريس", sets: "٤ × ١٥", level: "مبتدئ", desc: "آمن على الركبة", emoji: "🏋️" },
      { name: "ديدليفت روماني", sets: "٣ × ١٠", level: "متقدم", desc: "لعضلة الهامستر", emoji: "💪" },
    ],
  };
  const list = exercises[selected] || exercises["صدر"];

  return (
    <div style={{ padding: "100px 40px 60px", maxWidth: 1100, margin: "0 auto" }}>
      <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8 }}>مكتبة التمارين 🎥</h1>
      <p style={{ color: COLORS.textMuted, marginBottom: 32 }}>اختر المجموعة العضلية وشاهد تمارينها</p>

      <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 36 }}>
        {muscles.map(m => (
          <button key={m} onClick={() => setSelected(m)} style={{
            padding: "8px 18px", borderRadius: 50,
            background: selected === m ? COLORS.accent : COLORS.bgCard,
            border: `1px solid ${selected === m ? COLORS.accent : COLORS.border}`,
            color: selected === m ? "#0A0E1A" : COLORS.textMuted,
            fontSize: 13, fontWeight: selected === m ? 700 : 400,
            cursor: "pointer", fontFamily: "inherit", transition: "all 0.2s",
          }}>{m}</button>
        ))}
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 16 }}>
        {list.map(({ name, sets, level, desc, emoji }) => (
          <div key={name} style={{
            background: COLORS.bgCard, border: `1px solid ${COLORS.border}`,
            borderRadius: 16, overflow: "hidden",
            transition: "all 0.3s", cursor: "pointer",
          }}
            onMouseEnter={e => { e.currentTarget.style.border = `1px solid ${COLORS.borderAccent}`; e.currentTarget.style.transform = "translateY(-4px)"; }}
            onMouseLeave={e => { e.currentTarget.style.border = `1px solid ${COLORS.border}`; e.currentTarget.style.transform = "translateY(0)"; }}
          >
            <div style={{
              height: 120,
              background: `linear-gradient(135deg, ${COLORS.accentGlow}, ${COLORS.blueGlow})`,
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: 48,
            }}>{emoji}</div>
            <div style={{ padding: "16px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
                <h3 style={{ fontSize: 15, fontWeight: 700 }}>{name}</h3>
                <span style={{
                  fontSize: 10, padding: "3px 8px", borderRadius: 50,
                  background: level === "مبتدئ" ? `${COLORS.accent}20` : level === "متوسط" ? `${COLORS.blue}20` : `${COLORS.orange}20`,
                  color: level === "مبتدئ" ? COLORS.accent : level === "متوسط" ? COLORS.blue : COLORS.orange,
                }}>{level}</span>
              </div>
              <p style={{ fontSize: 13, color: COLORS.textMuted, lineHeight: 1.5, marginBottom: 12 }}>{desc}</p>
              <div style={{ fontSize: 13, color: COLORS.accent, fontWeight: 600 }}>{sets}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── NUTRITION ─────────────────────────────────────────────────────────────────
function NutritionPage() {
  const meals = [
    { time: "٧:٠٠ ص", name: "الإفطار", kcal: 480, items: ["شوفان بالحليب", "بيض مسلوق ×٢", "موزة"], emoji: "☀️" },
    { time: "١٠:٠٠ ص", name: "وجبة خفيفة", kcal: 200, items: ["جبن قريش", "تفاحة"], emoji: "🍎" },
    { time: "١:٠٠ م", name: "الغداء", kcal: 650, items: ["صدر دجاج مشوي ٢٠٠غ", "أرز بني", "سلطة خضراء"], emoji: "🍽️" },
    { time: "٤:٠٠ م", name: "ما قبل التمرين", kcal: 250, items: ["موزة", "بروتين شيك"], emoji: "⚡" },
    { time: "٧:٠٠ م", name: "العشاء", kcal: 520, items: ["سمك سلمون", "بطاطا حلوة", "خضروات"], emoji: "🌙" },
  ];

  return (
    <div style={{ padding: "100px 40px 60px", maxWidth: 900, margin: "0 auto" }}>
      <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8 }}>الخطة الغذائية 🍎</h1>
      <p style={{ color: COLORS.textMuted, marginBottom: 32 }}>خطة غذائية مخصصة لهدفك — بناء العضلات</p>

      {/* Macro summary */}
      <div style={{
        display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16, marginBottom: 36,
      }}>
        {[
          { label: "السعرات الكلية", val: "٢١٠٠", unit: "kcal", color: COLORS.orange },
          { label: "بروتين", val: "١٦٠", unit: "g", color: COLORS.accent },
          { label: "كربوهيدرات", val: "٢٤٠", unit: "g", color: COLORS.blue },
          { label: "دهون", val: "٧٠", unit: "g", color: "#A855F7" },
        ].map(({ label, val, unit, color }) => (
          <div key={label} style={{
            background: COLORS.bgCard, border: `1px solid ${COLORS.border}`,
            borderRadius: 12, padding: "16px", textAlign: "center",
          }}>
            <div style={{ fontSize: 24, fontWeight: 900, color }}>{val}</div>
            <div style={{ fontSize: 11, color: COLORS.textDim, marginBottom: 4 }}>{unit}</div>
            <div style={{ fontSize: 12, color: COLORS.textMuted }}>{label}</div>
          </div>
        ))}
      </div>

      {/* Meals */}
      <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
        {meals.map(({ time, name, kcal, items, emoji }) => (
          <div key={name} style={{
            background: COLORS.bgCard, border: `1px solid ${COLORS.border}`,
            borderRadius: 14, padding: "20px 24px",
            display: "flex", gap: 20, alignItems: "center",
            transition: "all 0.2s",
          }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = COLORS.borderAccent; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = COLORS.border; }}
          >
            <div style={{
              width: 52, height: 52, borderRadius: 12, flexShrink: 0,
              background: COLORS.bg, border: `1px solid ${COLORS.border}`,
              display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24,
            }}>{emoji}</div>
            <div style={{ flex: 1 }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4 }}>
                <span style={{ fontWeight: 700, fontSize: 16 }}>{name}</span>
                <span style={{ fontSize: 13, color: COLORS.orange, fontWeight: 600 }}>{kcal} kcal</span>
              </div>
              <div style={{ fontSize: 12, color: COLORS.textDim, marginBottom: 6 }}>{time}</div>
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                {items.map(item => (
                  <span key={item} style={{
                    fontSize: 12, padding: "3px 10px", borderRadius: 50,
                    background: COLORS.bg, border: `1px solid ${COLORS.border}`,
                    color: COLORS.textMuted,
                  }}>{item}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── CHAT ──────────────────────────────────────────────────────────────────────
function ChatPage() {
  const [messages, setMessages] = useState([
    { role: "ai", text: "مرحباً! أنا مساعدك الرياضي الذكي 🤖 كيف يمكنني مساعدتك اليوم؟" },
  ]);
  const [input, setInput] = useState("");
  const bottomRef = useRef(null);

  const suggestions = [
    "ما أفضل تمرين لحرق الدهون؟",
    "كيف أزيد كتلتي العضلية بسرعة؟",
    "ما الفرق بين الكارديو والتمارين الحرة؟",
    "هل يمكنني التمرين كل يوم؟",
  ];

  const send = (text) => {
    if (!text.trim()) return;
    setMessages(m => [...m, { role: "user", text }]);
    setInput("");
    setTimeout(() => {
      setMessages(m => [...m, { role: "ai", text: "شكراً على سؤالك! بناءً على بياناتك وأهدافك، أنصحك بـ... (هذا سيكون مدعوماً بـ Gemini AI في النسخة الكاملة) 💪" }]);
    }, 800);
  };

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div style={{ padding: "100px 40px 60px", maxWidth: 800, margin: "0 auto", height: "100vh", display: "flex", flexDirection: "column" }}>
      <h1 style={{ fontSize: 28, fontWeight: 900, marginBottom: 4 }}>المساعد الذكي 🤖</h1>
      <p style={{ color: COLORS.textMuted, marginBottom: 24, fontSize: 14 }}>اسأل أي سؤال رياضي أو غذائي</p>

      <div style={{
        flex: 1, background: COLORS.bgCard, border: `1px solid ${COLORS.border}`,
        borderRadius: 16, padding: "20px", overflowY: "auto", marginBottom: 16,
        display: "flex", flexDirection: "column", gap: 14,
        maxHeight: "50vh",
      }}>
        {messages.map((m, i) => (
          <div key={i} style={{
            display: "flex", justifyContent: m.role === "user" ? "flex-start" : "flex-end",
          }}>
            <div style={{
              maxWidth: "75%", padding: "12px 16px", borderRadius: 14,
              background: m.role === "user" ? COLORS.accentGlow : COLORS.bg,
              border: `1px solid ${m.role === "user" ? COLORS.borderAccent : COLORS.border}`,
              color: m.role === "user" ? COLORS.accent : COLORS.text,
              fontSize: 14, lineHeight: 1.6,
            }}>{m.text}</div>
          </div>
        ))}
        <div ref={bottomRef} />
      </div>

      <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 12 }}>
        {suggestions.map(s => (
          <button key={s} onClick={() => send(s)} style={{
            fontSize: 12, padding: "6px 12px", borderRadius: 50,
            background: COLORS.bg, border: `1px solid ${COLORS.border}`,
            color: COLORS.textMuted, cursor: "pointer", fontFamily: "inherit",
            transition: "all 0.2s",
          }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = COLORS.accent; e.currentTarget.style.color = COLORS.accent; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = COLORS.border; e.currentTarget.style.color = COLORS.textMuted; }}
          >{s}</button>
        ))}
      </div>

      <div style={{ display: "flex", gap: 10 }}>
        <input value={input} onChange={e => setInput(e.target.value)}
          onKeyDown={e => e.key === "Enter" && send(input)}
          placeholder="اكتب سؤالك هنا..."
          style={{
            flex: 1, padding: "14px 18px", background: COLORS.bgCard,
            border: `1px solid ${COLORS.border}`, borderRadius: 12,
            color: COLORS.text, fontSize: 14, fontFamily: "inherit", outline: "none",
          }}
          onFocus={e => e.target.style.borderColor = COLORS.accent}
          onBlur={e => e.target.style.borderColor = COLORS.border}
        />
        <button onClick={() => send(input)} style={{
          padding: "14px 20px",
          background: `linear-gradient(135deg, ${COLORS.accent}, ${COLORS.accentDim})`,
          border: "none", borderRadius: 12, color: "#0A0E1A",
          fontSize: 18, cursor: "pointer", fontFamily: "inherit",
        }}>→</button>
      </div>
    </div>
  );
}

// ─── PROGRESS ──────────────────────────────────────────────────────────────────
function ProgressPage() {
  const weeks = ["أ١", "أ٢", "أ٣", "أ٤", "أ٥", "أ٦", "أ٧", "أ٨"];
  const weights = [82, 81.2, 80.5, 80, 79.3, 78.8, 78.5, 78];
  const maxW = Math.max(...weights); const minW = Math.min(...weights);
  const range = maxW - minW;

  const achievements = [
    { icon: "🔥", title: "أسبوعان متواصلان", desc: "التزمت ١٤ يوماً دون انقطاع" },
    { icon: "💪", title: "أول ١٠ كغ", desc: "خسرت أول ١٠ كيلو من هدفك" },
    { icon: "🏃", title: "١٠٠ تمرين", desc: "أتممت ١٠٠ جلسة تدريبية" },
    { icon: "⚡", title: "أسرع وقت", desc: "أنجزت التمرين في ٤٥ دقيقة" },
  ];

  return (
    <div style={{ padding: "100px 40px 60px", maxWidth: 1000, margin: "0 auto" }}>
      <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8 }}>تقرير التقدم 📊</h1>
      <p style={{ color: COLORS.textMuted, marginBottom: 36 }}>تطورك خلال ٨ أسابيع الماضية</p>

      {/* Summary */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16, marginBottom: 32 }}>
        {[
          { label: "الوزن المفقود", val: "٤ كغ", sub: "من ٨٢ إلى ٧٨ كغ", color: COLORS.accent, icon: "📉" },
          { label: "أيام الالتزام", val: "٥٦ يوم", sub: "من أصل ٥٦", color: COLORS.blue, icon: "✅" },
          { label: "نسبة الهدف", val: "٤٠٪", sub: "هدفك: ١٠ كغ", color: COLORS.orange, icon: "🎯" },
        ].map(({ label, val, sub, color, icon }) => (
          <div key={label} style={{
            background: COLORS.bgCard, border: `1px solid ${COLORS.border}`,
            borderRadius: 14, padding: "22px 20px",
          }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 10 }}>
              <span style={{ fontSize: 13, color: COLORS.textMuted }}>{label}</span>
              <span style={{ fontSize: 22 }}>{icon}</span>
            </div>
            <div style={{ fontSize: 28, fontWeight: 900, color }}>{val}</div>
            <div style={{ fontSize: 12, color: COLORS.textDim, marginTop: 4 }}>{sub}</div>
          </div>
        ))}
      </div>

      {/* Chart */}
      <div style={{
        background: COLORS.bgCard, border: `1px solid ${COLORS.border}`,
        borderRadius: 16, padding: "28px 24px", marginBottom: 28,
      }}>
        <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 24 }}>منحنى الوزن (كغ)</h3>
        <div style={{ position: "relative", height: 160, display: "flex", alignItems: "flex-end", gap: 8 }}>
          {weights.map((w, i) => {
            const h = ((w - minW + 0.5) / (range + 1)) * 140 + 20;
            return (
              <div key={i} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
                <div style={{ fontSize: 10, color: COLORS.textDim }}>{w}</div>
                <div style={{
                  width: "100%", height: h,
                  background: i === weights.length - 1
                    ? `linear-gradient(180deg, ${COLORS.accent}, ${COLORS.accentDim})`
                    : `linear-gradient(180deg, ${COLORS.blue}80, ${COLORS.blue}30)`,
                  borderRadius: "6px 6px 0 0",
                  transition: "height 0.8s ease",
                }} />
                <div style={{ fontSize: 11, color: COLORS.textDim }}>{weeks[i]}</div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Achievements */}
      <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 16 }}>الإنجازات 🏆</h3>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
        {achievements.map(({ icon, title, desc }) => (
          <div key={title} style={{
            background: COLORS.bgCard, border: `1px solid ${COLORS.border}`,
            borderRadius: 12, padding: "16px 18px",
            display: "flex", gap: 14, alignItems: "center",
          }}>
            <div style={{
              width: 44, height: 44, borderRadius: 10, flexShrink: 0,
              background: COLORS.accentGlow, border: `1px solid ${COLORS.borderAccent}`,
              display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20,
            }}>{icon}</div>
            <div>
              <div style={{ fontWeight: 700, fontSize: 14 }}>{title}</div>
              <div style={{ fontSize: 12, color: COLORS.textMuted, marginTop: 3 }}>{desc}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── APP ───────────────────────────────────────────────────────────────────────
export default function App() {
  const [page, setPage] = useState("landing");

  const renderPage = () => {
    switch (page) {
      case "landing": return <LandingPage setPage={setPage} />;
      case "onboarding": return <OnboardingPage setPage={setPage} />;
      case "dashboard": return <DashboardPage setPage={setPage} />;
      case "workout": return <WorkoutPage />;
      case "nutrition": return <NutritionPage />;
      case "chat": return <ChatPage />;
      case "progress": return <ProgressPage />;
      default: return <LandingPage setPage={setPage} />;
    }
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Tajawal:wght@400;500;700;800;900&display=swap');
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { background: #0A0E1A; }
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: #111827; }
        ::-webkit-scrollbar-thumb { background: #374151; border-radius: 3px; }
        ::-webkit-scrollbar-thumb:hover { background: #4B5563; }
      `}</style>
      <div style={styles.app}>
        <Navbar page={page} setPage={setPage} />
        {renderPage()}
      </div>
    </>
  );
}
