import { useEffect, useMemo, useState } from "react";
import "./App.css";

const SITE_PASSWORD = "27072005";

function TypingText({ text, speed = 35, className = "" }) {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    let index = 0;
    setDisplayed("");

    const interval = setInterval(() => {
      index += 1;
      setDisplayed(text.slice(0, index));
      if (index >= text.length) clearInterval(interval);
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return <p className={className}>{displayed}</p>;
}

export default function App() {
  const [enteredPassword, setEnteredPassword] = useState("");
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [error, setError] = useState("");
  const [selectedCard, setSelectedCard] = useState(null);
  const [showLoader, setShowLoader] = useState(true);
  const [forgiveStep, setForgiveStep] = useState(0);
  const [showFinalAsk, setShowFinalAsk] = useState(false);
  const [forgiveLevel, setForgiveLevel] = useState(0);

  const content = useMemo(
    () => ({
      heroName: "تيربو 🤍",
      heroSub: "أنا ريم… وعاملالك الرسالة دي عشان أصالحك",
      heroText:
        "أنا ريم، وعاملالك الموقع ده مخصوص عشان أكلمك من قلبي ومن غير أي دوشة. أنا فعلًا زعلانة على زعلك، ومش مرتاحة من وقت ما حصل بيننا البعد ده. إنت غالي عليّا، ومكانك كبير عندي، وعشان كده كتبتلك كل كلمة هنا بنفسي عشان أوصلك إني فعلًا نفسي نصالح بعض.",
      apologyTitle: "رسالة من ريم لتيربو",
      apologyDate: "27 / 07 / 2005",
      apologyText:
        "أنا عارفة إن يمكن في كلام ضايقك أو موقف وجعك، وعارفة إن الزعل لما ييجي من حد قريب بيكون تقيل. بس والله يا تيربو ما كان قصدي أبدًا أزعلك، ولا أشيلك مني، ولا أخلي بيننا مسافة. أنا كل اللي عايزاه إنك تسمعني بقلب هادي وتعرف إن مكانك عندي عمره ما هيتغيّر.",
      longMessage:
        "يا تيربو، أنا ريم، وبكتبلك الكلام ده وأنا فعلًا نفسي كل اللي بيننا يرجع أحسن من الأول. يمكن أنا ماعرفتش أعبّر صح، ويمكن في حاجات اتفهمت غلط، لكن الحقيقة اللي جوايا واضحة جدًا: إنت غالي عليّا، وزعلك فارق معايا، وسكوتنا مريحنيش. أنا مش عايزة أفضل فاكرة إن بيننا خصام أو بعد، ومش عايزة يوم يعدي وإنت زعلان مني. أنا عايزة أرجّع الكلام الحلو، والراحة، والود اللي بيننا. ولو أنا غلطت، فأنا بقولها من قلبي: سامحني. ولو قصّرت، فأنا مستعدة أصلّح. أنا بس عايزاك تعرف إن الرسالة دي كلها معمولالك أنت، لأنك تستاهل مني محاولة حقيقية، وكلمة صادقة، وقلب صافي.",
      cuteText: "دي رسالة من ريم ليك… يارب تقراها للآخر 🤍",
      footerText: "أنا ريم، ومستنية رضاك ومصالحتك 🤍",
    }),
    []
  );

  const memoryCards = useMemo(
    () => [
      {
        id: 1,
        title: "أنا فعلًا زعلت من زعلك",
        image: "/1.jpg",
        date: "من ريم ليك",
        text: "أنا ريم، وكل اللي في قلبي إن زعلك كان تقيل عليّا، ومش عايزة يفضل بيننا أي وجع أو سكوت.",
      },
      {
        id: 2,
        title: "مكانك عندي عمره ما بيقل",
        image: "/2.jpg",
        date: "كلام من قلبي",
        text: "مهما حصل بيننا، إنت ليك مكانة عندي ثابتة وكبيرة، وده عمره ما هيتغيّر.",
      },
      {
        id: 3,
        title: "سامحني لو زعلتك",
        image: "/3.jpg",
        date: "رسالة هادية",
        text: "لو في يوم كلمة مني ضايقتك أو موقف وجعك، فسامحني… أنا فعلًا نفسي أصلّح كل حاجة.",
      },
      {
        id: 4,
        title: "تعالى نبدأ من جديد",
        image: "/4.jpg",
        date: "فرصة صلح",
        text: "أنا نفسي نسيب الزعل ورا ضهرنا ونرجع نتكلم براحة وقلب أهدى من الأول.",
      },
    ],
    []
  );

  const timelineItems = useMemo(
    () => [
      {
        title: "حصل زعل بيننا",
        date: "وده وارد",
        text: "أنا عارفة إن أي علاقة قريبة وارد يدخلها زعل، بس ده مش معناه إن المحبة راحت.",
      },
      {
        title: "فضلت أفكر فيك",
        date: "وسط السكوت",
        text: "وكل مرة كنت بحس إن البعد ده مش مريحني، وإن لازم أحاول أوصلك اللي جوايا.",
      },
      {
        title: "عملتلك الرسالة دي",
        date: "مخصوص عشانك",
        text: "كتبتها بنفسي عشان أقولك بهدوء إنك غالي، وإن نفسي نصالح بعض.",
      },
      {
        title: "مستنية منك خطوة",
        date: "وقت ما تحب",
        text: "ومهما اتأخرت، أنا ما زلت مستنية الصلح من قلب صافي.",
      },
    ],
    []
  );

  const niceThings = useMemo(
    () => ["طيبتك", "قلبك", "جدعنتك", "وجودك", "ضحكتك", "مكانتك عندي"],
    []
  );

  const peaceSteps = useMemo(
    () => [
      "إقرأ كلامي للآخر",
      "إفتكر إنك غالي عندي",
      "سيب الزعل يهدى شوية",
      "إديني فرصة أصالحك",
    ],
    []
  );

  useEffect(() => {
    const timeout = setTimeout(() => setShowLoader(false), 2200);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setForgiveStep((prev) => (prev + 1) % peaceSteps.length);
    }, 2200);

    return () => clearInterval(interval);
  }, [peaceSteps.length]);

  useEffect(() => {
    if (forgiveLevel >= 100) {
      setShowFinalAsk(true);
    } else {
      setShowFinalAsk(false);
    }
  }, [forgiveLevel]);

  const handleUnlock = (e) => {
    e.preventDefault();

    if (enteredPassword === SITE_PASSWORD) {
      setIsUnlocked(true);
      setError("");
    } else {
      setError("الباسورد غلط… جرّب تاريخ ميلادك بالأرقام");
    }
  };

  if (showLoader) {
    return (
      <div className="loader-page" dir="rtl">
        <div className="loader-hearts">
          <span>🤍</span>
          <span>✨</span>
          <span>🤍</span>
        </div>
        <div className="loader-circle"></div>
        <h1>ريم بتجهزلك رسالة من قلبها 🤍</h1>
      </div>
    );
  }

  if (!isUnlocked) {
    return (
      <div className="password-page" dir="rtl">
        <div className="bg-orb orb-1"></div>
        <div className="bg-orb orb-2"></div>
        <div className="bg-orb orb-3"></div>

        <div className="floating-hearts" aria-hidden="true">
          <span>🤍</span>
          <span>✨</span>
          <span>🤍</span>
          <span>✨</span>
          <span>🤍</span>
          <span>✨</span>
        </div>

        <div className="password-card glass">
          <div className="password-top-image">
            <img src="/profile.jpg" alt="Turbo" />
            <div className="password-image-overlay"></div>
          </div>

          <div className="lock-icon">🕊️</div>
          <div className="cute-badge">رسالة خاصة من ريم</div>

          <h1>يا تيربو، افتح رسالة ريم 🤍</h1>

          <p className="password-subtext">
            أنا ريم، وعاملالك الرسالة دي مخصوص عشان أوصلك كلام من قلبي…
            والباسورد هو تاريخ ميلادك بالأرقام
          </p>

          <form onSubmit={handleUnlock} className="password-form">
            <input
              type="password"
              placeholder="اكتب الباسورد هنا"
              value={enteredPassword}
              onChange={(e) => setEnteredPassword(e.target.value)}
            />
            <button type="submit">افتح الرسالة</button>
          </form>

          <div className="hint-box">🎂 تاريخ ميلادك: 27/07/2005</div>
          {error && <div className="error-text">{error}</div>}
        </div>
      </div>
    );
  }

  return (
    <div className="page" dir="rtl">
      <div className="bg-orb orb-1"></div>
      <div className="bg-orb orb-2"></div>
      <div className="bg-orb orb-3"></div>

      <div className="floating-hearts" aria-hidden="true">
        <span>🤍</span>
        <span>✨</span>
        <span>🤍</span>
        <span>✨</span>
        <span>🤍</span>
        <span>✨</span>
      </div>

      <main className="container">
        <section className="hero-banner glass">
          <div className="hero-banner-text">
            <span className="small-badge">رسالة شخصية من ريم</span>
            <h1>
              {content.heroName}
              <span>{content.heroSub}</span>
            </h1>
            <TypingText text={content.cuteText} className="typing-line" />
            <p>{content.heroText}</p>

            <div className="top-actions">
              <button
                className="btn btn-primary"
                onClick={() =>
                  document
                    .getElementById("forgiveSection")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                إقرأ كلام ريم
              </button>

              <button
                className="btn btn-secondary"
                onClick={() => window.scrollTo({ top: 9999, behavior: "smooth" })}
              >
                شوف آخر رسالة
              </button>
            </div>
          </div>

          <div className="hero-banner-image">
            <img src="/profile.jpg" alt="Turbo" />
            <div className="hero-banner-overlay"></div>
          </div>
        </section>

        <section className="stats-grid">
          <div className="stat-card glass">
            <strong>أخ</strong>
            <span>وغالي</span>
          </div>
          <div className="stat-card glass cute-counter-card">
            <div className="pulse-ring"></div>
            <strong>100%</strong>
            <span>مكانة</span>
          </div>
          <div className="stat-card glass">
            <strong>{memoryCards.length}</strong>
            <span>رسائل مني</span>
          </div>
          <div className="stat-card glass">
            <strong>∞</strong>
            <span>تقدير</span>
          </div>
        </section>

        <section className="cute-facts-grid">
          <div className="cute-fact-card glass">
            <h4>من ريم</h4>
            <strong>آسفة</strong>
          </div>
          <div className="cute-fact-card glass">
            <h4>مكانك</h4>
            <strong>ثابت</strong>
          </div>
          <div className="cute-fact-card glass">
            <h4>الزعل</h4>
            <strong>بيعدي</strong>
          </div>
          <div className="cute-fact-card glass">
            <h4>الصلح</h4>
            <strong>أجمل</strong>
          </div>
        </section>

        <section className="full-cover-section glass" id="forgiveSection">
          <div className="full-cover-image">
            <img src="/profile.jpg" alt="Turbo" />
            <div className="full-cover-overlay"></div>
          </div>

          <div className="full-cover-content">
            <div className="scene-pill">{content.apologyTitle}</div>
            <div className="scene-date">تاريخ ميلادك: {content.apologyDate}</div>
            <h2>{content.heroName}</h2>
            <h3>{content.heroSub}</h3>
            <p>{content.apologyText}</p>
          </div>
        </section>

        <section className="huge-counter-section glass">
          <span className="small-badge">🕊️ طريق الصلح</span>
          <h2>أنا محتاجة منك فرصة صلح</h2>
          <p>
            أنا شلت فكرة العداد وخليت بدلها خطوات صغيرة مني أنا، كأني
            بقرب لك واحدة واحدة لحد ما أوصل لكلمة الصلح.
          </p>

          <div className="forgive-stage-box">
            <div className="forgive-stage-number">0{forgiveStep + 1}</div>
            <h3>{peaceSteps[forgiveStep]}</h3>
            <p>كل خطوة هنا معمولة عشان أوصلك إني فعلًا عايزة أصلّح اللي بيننا من قلبي.</p>
          </div>

          <div className="huge-counter-grid">
            {peaceSteps.map((step, index) => (
              <div
                key={index}
                className={`huge-counter-box animated-counter ${
                  forgiveStep === index ? "active-step" : ""
                }`}
              >
                <strong>0{index + 1}</strong>
                <span>{step}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="glass" style={{ marginTop: 24 }}>
          <div className="section-head">
            <h3>مقياس رضاك</h3>
            <p>أنا بحاول أوصل لرضاك… حرّك المؤشر وشوف آخر حاجة حابة أقولهالك</p>
          </div>

          <div className="forgive-meter-wrap">
            <div className="forgive-meter-top">
              <strong>{forgiveLevel}%</strong>
              <span>قربت من رضاك</span>
            </div>

            <input
              type="range"
              min="0"
              max="100"
              value={forgiveLevel}
              onChange={(e) => setForgiveLevel(Number(e.target.value))}
              className="forgive-range"
            />

            <div className="forgive-meter-bar">
              <div
                className="forgive-meter-fill"
                style={{ width: `${forgiveLevel}%` }}
              ></div>
            </div>

            <div className="forgive-meter-labels">
              <span>زعل</span>
              <span>تفاهم</span>
              <span>صلح</span>
            </div>
          </div>

          {showFinalAsk && (
            <div className="final-ask-box glass">
              <span className="modal-chip">آخر كلام مني ليك</span>
              <h3>ينفع تسامحني؟</h3>
              <p>
                أنا قلتلك كل اللي جوايا بصدق… والباقي عندك. لو ينفع تسامحني،
                تعالى نبدأ من جديد من غير زعل، وأنا أوعدك إني أحافظ على
                مكانتك عندي بكل حب وهدوء.
              </p>
            </div>
          )}
        </section>

        <section className="wide-message glass">
          <span className="small-badge">💌 رسالة طويلة من ريم</span>
          <h2>كل الكلام ده كتبتهولك بنفسي</h2>
          <p>{content.longMessage}</p>
        </section>

        <section className="love-columns">
          <div className="love-column-card glass">
            <h3>حاجات أنا بحبها فيك</h3>
            <ul>
              {niceThings.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="love-column-card glass">
            <h3>أنا نفسي أشوفك</h3>
            <ul>
              <li>مرتاح</li>
              <li>راضي</li>
              <li>مبسوط</li>
              <li>بتكلمني عادي</li>
              <li>قلبك هادي</li>
              <li>سامحتني</li>
            </ul>
          </div>
        </section>

        <section className="timeline-section glass">
          <div className="section-head">
            <h3>حكايتي مع زعلك لحد الصلح</h3>
            <p>دي طريقتي عشان أوصلك اللي جوايا بهدوء</p>
          </div>

          <div className="timeline-list">
            {timelineItems.map((item, index) => (
              <div className="timeline-item" key={index}>
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <small>{item.date}</small>
                  <h4>{item.title}</h4>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="reels-section glass">
          <div className="section-head slider-head">
            <div>
              <h3>كروت من قلبي ليك</h3>
              <p>كل كارت فيهم حتة صغيرة من الكلام اللي كنت نفسي أقولهولك</p>
            </div>

            <div className="slider-buttons">
              <button
                className="slider-btn"
                onClick={() => {
                  const slider = document.getElementById("cardsSlider");
                  slider?.scrollBy({ left: 360, behavior: "smooth" });
                }}
              >
                ←
              </button>
              <button
                className="slider-btn"
                onClick={() => {
                  const slider = document.getElementById("cardsSlider");
                  slider?.scrollBy({ left: -360, behavior: "smooth" });
                }}
              >
                →
              </button>
            </div>
          </div>

          <div className="cards-slider" id="cardsSlider">
            {memoryCards.map((card, index) => (
              <button
                key={card.id}
                className="animated-text-card slider-card"
                onClick={() => setSelectedCard(card)}
                style={{ animationDelay: `${index * 0.08}s` }}
              >
                <div className="animated-card-image">
                  <img src={card.image} alt={card.title} />
                </div>

                <div className="animated-card-body">
                  <small>{card.date}</small>
                  <h4>{card.title}</h4>
                  <p>{card.text}</p>
                </div>
              </button>
            ))}
          </div>
        </section>

        <section className="big-quotes-section glass">
          <div className="quote-box">“أنا ريم، ومهما حصل بيننا… مكانك عندي كبير 🤍”</div>
          <div className="quote-box">“أنا آسفة لو زعلتك، والله ما كان قصدي أوجعك 🕊️”</div>
          <div className="quote-box">“إديني فرصة أصلح كل حاجة بيننا من جديد 🤍”</div>
        </section>

        <section className="gallery-grid-section glass">
          <div className="section-head">
            <h3>صور ورسائل مني</h3>
            <p>اضغط على أي صورة وشوف رسالة صغيرة أنا سايباها ليك</p>
          </div>

          <div className="big-gallery-grid">
            {memoryCards.map((item) => (
              <button
                key={item.id}
                className="big-gallery-card"
                onClick={() => setSelectedCard(item)}
              >
                <img src={item.image} alt={item.title} />
                <div className="big-gallery-overlay">
                  <h4>{item.title}</h4>
                  <p>{item.text}</p>
                </div>
              </button>
            ))}
          </div>
        </section>

        <section className="extra-love-section glass">
          <div className="extra-love-card glass">
            <h3>أنا فعلًا مستنية رضاك</h3>
            <p>كل اللي عايزاه إن الزعل يخف، ونرجع نتعامل براحة وود زي الأول وأحسن 🤍</p>
          </div>
          <div className="extra-love-card glass">
            <h3>وجودك بيفرق معايا</h3>
            <p>حتى وقت الزعل، عمري ما نسيت إنك غالي عليّا وليك مكانة جوه قلبي ✨</p>
          </div>
          <div className="extra-love-card glass">
            <h3>خلّينا نبدأ بهدوء</h3>
            <p>خلّيني أعتبر الرسالة دي أول خطوة صلح حقيقية بيني وبينك 🤍</p>
          </div>
        </section>

        <section className="final-cute-section glass">
          <h2>وفي الآخر…</h2>
          <p>أنا ريم، وآخر أمنية ليا من الرسالة دي إنك تسامحني ونرجع صافيين مع بعض 🤍</p>
        </section>

        <button
          className="back-top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          ↑
        </button>
      </main>

      {selectedCard && (
        <div className="modal" onClick={() => setSelectedCard(null)}>
          <div className="modal-box" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setSelectedCard(null)}>
              ×
            </button>

            <div className="modal-image">
              <img src={selectedCard.image} alt={selectedCard.title} />
            </div>

            <div className="modal-content">
              <span className="modal-chip">🤍 رسالة مني ليك</span>
              <small>{selectedCard.date || "رسالة جميلة"}</small>
              <h3>{selectedCard.title}</h3>
              <p>{selectedCard.text}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
