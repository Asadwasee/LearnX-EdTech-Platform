import React, { useState, useEffect } from 'react';

// ==========================================
// 1. DATA DICTIONARIES (FAQs)
// ==========================================
const FAQ_DATA = [
  {
    id: 'faq-1',
    question: 'How long do I have access to my enrolled courses?',
    answer: 'You get full lifetime access! Once you enroll in any LearnX course, you can learn completely at your own pace, skip ahead, or revisit complex technical modules whenever your schedule allows.'
  },
  {
    id: 'faq-2',
    question: 'Will I receive a verifiable certificate upon course completion?',
    answer: 'Yes. Upon completing 100% of the lesson streams and passing the core module assessments, a premium digital certificate containing a unique global verification ID will be instantly generated on your student dashboard.'
  },
  {
    id: 'faq-3',
    question: 'Can I enroll in multiple technical tracks simultaneously?',
    answer: 'Absolutely. LearnX supports simultaneous multi-track setups. You can actively study across AI, Web Development, and UI/UX Design tracks without any artificial locking mechanisms.'
  },
  {
    id: 'faq-4',
    question: 'What is your refund policy if a course does not match my expectations?',
    answer: 'We offer a 14-day hassle-free money-back guarantee. If the curriculum delivery framework does not match your active training goals, simply submit a ticket through this contact portal within 14 days of enrollment for a full refund.'
  },
  {
    id: 'faq-5',
    question: 'How is my learning progress tracked within the platform?',
    answer: 'Your learning progress is compiled dynamically using custom data-hooks. Every time you finish viewing a lesson video block or complete a code workspace exercise, your student panel dashboard progress gauge updates in real time.'
  },
  {
    id: 'faq-6',
    question: 'How do I access direct instructor support when I get stuck on code?',
    answer: 'Every learning module features an integrated community forum section directly underneath the workspace. You can drop code snippets or design wireframe links, and our certified engineering mentors will resolve your issue within 24 hours.'
  }
];

// ==========================================
// 2. ATOMIC SUB-COMPONENTS
// ==========================================

function FAQAccordionItem({ question, answer, isOpen, onToggle }) {
  return (
    <div className="border border-slate-200/80 rounded-xl bg-white shadow-xs overflow-hidden hover:shadow-sm transition-all duration-300">
      <button
        type="button"
        className="w-full flex items-center justify-between p-5 text-left font-semibold text-slate-900 hover:text-[#2563EB] focus:outline-none focus:bg-slate-50 transition-colors cursor-pointer"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <span className="pr-4 text-base md:text-md leading-snug">{question}</span>
        <span className={`flex-shrink-0 flex items-center justify-center w-7 h-7 rounded-full bg-slate-100 text-slate-600 transition-transform duration-300 ${isOpen ? 'rotate-180 bg-[#2563EB]/10 text-[#2563EB]' : ''}`}>
          {isOpen ? (
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
            </svg>
          ) : (
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
          )}
        </span>
      </button>
      
      <div 
        className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-[500px] opacity-100 border-t border-slate-100' : 'max-h-0 opacity-0 pointer-events-none'}`}
      >
        <div className="p-5 text-sm md:text-base text-slate-600 leading-relaxed bg-slate-50/50">
          {answer}
        </div>
      </div>
    </div>
  );
}

// ==========================================
// 3. MAIN PORTAL PAGE ELEMENT
// ==========================================
export default function ContactPage() {
  // Input Form Management Framework States
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [touched, setTouched] = useState({ name: false, email: false, message: false });
  const [errors, setErrors] = useState({ name: '', email: '', message: '' });
  const [isFormValid, setIsFormValid] = useState(false);
  
  // Interaction Request UX States
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  
  // Accordion Track Position State
  const [openFaqId, setOpenFaqId] = useState('faq-1');

  // Real-Time Evaluation Validation Engine Rule Sets
  useEffect(() => {
    const currentErrors = { name: '', email: '', message: '' };
    
    // Name evaluation validation logic triggers
    if (!formData.name.trim()) {
      currentErrors.name = 'Full name is required to initialize routing.';
    } else if (formData.name.trim().length < 3) {
      currentErrors.name = 'Name parameter must contain at least 3 characters.';
    }

    // Email pattern validation check formulas
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      currentErrors.email = 'An active email coordinate is mandatory.';
    } else if (!emailRegex.test(formData.email)) {
      currentErrors.email = 'Please provide a mathematically valid email mapping schema.';
    }

    // Message context payload limit verification parameters
    if (!formData.message.trim()) {
      currentErrors.message = 'Please append a structural message describing your issue.';
    } else if (formData.message.trim().length < 10) {
      currentErrors.message = 'Message payload block requires at least 10 valid content elements.';
    }

    setErrors(currentErrors);
    
    // Boolean switch to flag form-wide compilation status
    const dynamicValidity = !currentErrors.name && !currentErrors.email && !currentErrors.message;
    setIsFormValid(dynamicValidity);
  }, [formData]);

  // Input value tracking updater function
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Focus blur monitor state updater 
  const handleInputBlur = (e) => {
    const { name } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
  };

  // Form submission handler logic
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!isFormValid) return;

    setIsSubmitting(true);
    
    // Simulating database storage network latency latency delay
    await new Promise(resolve => setTimeout(resolve, 1400));
    
    setIsSubmitting(false);
    setSubmitSuccess(true);
    
    // Flush out values upon successful operational data delivery
    setFormData({ name: '', email: '', message: '' });
    setTouched({ name: false, email: false, message: false });

    // Decay alert message container module smoothly after timeout delay metrics
    setTimeout(() => setSubmitSuccess(false), 5000);
  };

  // Input layout conditional border feedback styling injector
  const getInputClasses = (fieldName) => {
    const defaultClasses = "w-full px-4 py-3 text-sm md:text-base border rounded-xl bg-white text-slate-900 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent";
    if (!touched[fieldName]) return `${defaultClasses} border-slate-200 hover:border-slate-300`;
    return errors[fieldName] 
      ? `${defaultClasses} border-red-500 bg-red-50/10 focus:ring-red-500` 
      : `${defaultClasses} border-[#10B981] bg-emerald-50/5 focus:ring-[#10B981]`;
  };

  return (
    <div className="w-full min-h-screen bg-[#F8FAFC] font-sans antialiased">
      
      {/* ==========================================
          SECTION 1: PREMIUM HERO SECTION
         ========================================== */}
      <section className="relative w-full overflow-hidden bg-radial from-slate-900 via-slate-950 to-black text-white py-20 lg:py-28 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
        {/* Abstract background mesh gradient graphic details */}
        <div className="absolute inset-0 opacity-30 pointer-events-none">
          <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-[#2563EB] blur-3xl" />
          <div className="absolute top-20 -right-20 w-80 h-80 rounded-full bg-[#8B5CF6] blur-3xl" />
        </div>

        <div className="relative max-w-4xl mx-auto text-center animate-[fadeIn_0.5s_ease-out]">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-[#10B981] backdrop-blur-md border border-white/10 tracking-wider uppercase mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
            Get In Touch
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.15] mb-6">
            We're Here To Help You <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-[#2563EB] via-[#8B5CF6] to-[#F97316] bg-clip-text text-transparent">Learn Better</span>
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Have questions about specialized track syllabi, enterprise certifications, or custom team licensing agreements? Connect directly with our operations room framework.
          </p>
        </div>
      </section>

      {/* ==========================================
          SECTION 2: DUAL COLUMN WORKSPACE PORTAL
         ========================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* COLUMN A: INTERACTIVE SECURE ENVELOPE INPUT SYSTEM */}
          <div className="lg:col-span-7 bg-white border border-slate-200/60 rounded-2xl p-6 sm:p-10 shadow-sm transition-all duration-300 hover:shadow-md animate-[slideUp_0.4s_ease-out]">
            <div className="mb-8">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">Dispatch An Inquiry Support Request</h2>
              <p className="text-sm sm:text-base text-slate-500 mt-1">Fill out the validated metadata points below to forward a structured log file direct to desk.</p>
            </div>

            {/* Form action interface block layout */}
            <form onSubmit={handleFormSubmit} className="space-y-6" noValidate>
              
              {/* Field block item A: Name tracking input console */}
              <div className="space-y-1.5">
                <label htmlFor="name" className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-700 block">
                  Full Identification Name
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  onBlur={handleInputBlur}
                  placeholder="e.g. Asad Waseem"
                  className={getInputClasses('name')}
                  disabled={isSubmitting}
                />
                {touched.name && errors.name && (
                  <p className="text-xs font-medium text-red-500 mt-1 flex items-center gap-1 animate-[fadeIn_0.2s_ease-out]">
                    <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" /></svg>
                    {errors.name}
                  </p>
                )}
              </div>

              {/* Field block item B: Email coordinate input system */}
              <div className="space-y-1.5">
                <label htmlFor="email" className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-700 block">
                  Active Email Destination Addresses
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  onBlur={handleInputBlur}
                  placeholder="yourname@example.com"
                  className={getInputClasses('email')}
                  disabled={isSubmitting}
                />
                {touched.email && errors.email && (
                  <p className="text-xs font-medium text-red-500 mt-1 flex items-center gap-1 animate-[fadeIn_0.2s_ease-out]">
                    <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" /></svg>
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Field block item C: Message body text node processing array */}
              <div className="space-y-1.5">
                <label htmlFor="message" className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-700 block">
                  Support Package Message Payload
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleInputChange}
                  onBlur={handleInputBlur}
                  placeholder="Elaborate details explaining your challenge or routing issues context..."
                  className={`${getInputClasses('message')} resize-none`}
                  disabled={isSubmitting}
                />
                {touched.message && errors.message && (
                  <p className="text-xs font-medium text-red-500 mt-1 flex items-center gap-1 animate-[fadeIn_0.2s_ease-out]">
                    <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" /></svg>
                    {errors.message}
                  </p>
                )}
              </div>

              {/* Submission status verification alert feedback panel drawer element */}
              {submitSuccess && (
                <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm flex items-start gap-3 animate-[fadeIn_0.3s_ease-out]">
                  <svg className="w-5 h-5 text-[#10B981] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  <div>
                    <span className="font-bold">Transmission Complete:</span> Message log context captured safely. Our engineers will ping back via your validated coordinates shortly.
                  </div>
                </div>
              )}

              {/* Interactive confirmation action engine switch trigger element button */}
              <button
                type="submit"
                disabled={!isFormValid || isSubmitting}
                className={`w-full font-bold text-white py-3.5 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 tracking-wide cursor-pointer select-none active:scale-[0.99] focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:ring-offset-2
                  ${(!isFormValid || isSubmitting) 
                    ? 'bg-slate-200 text-slate-400 cursor-not-allowed border border-slate-300/40 shadow-none' 
                    : 'bg-gradient-to-r from-[#2563EB] to-[#8B5CF6] hover:from-blue-700 hover:to-violet-700 shadow-md shadow-blue-600/15 hover:shadow-lg hover:shadow-blue-600/20'}`}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    <span>Processing Payload Data...</span>
                  </>
                ) : (
                  <>
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" /></svg>
                    <span>Send Message Log</span>
                  </>
                )}
              </button>

            </form>
          </div>

          {/* COLUMN B: SYSTEM METRICS DIRECTORY & COMMUNICATIONS ARCHIVE CARD */}
          <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-24 animate-[slideUp_0.4s_ease-out_0.1s_backward]">
            <div className="bg-gradient-to-br from-slate-900 via-slate-950 to-black text-white border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-md relative overflow-hidden group">
              {/* Decorative design highlight */}
              <div className="absolute right-0 bottom-0 w-32 h-32 rounded-tl-full bg-[#8B5CF6]/10 group-hover:bg-[#8B5CF6]/15 transition-colors duration-300" />
              
              <div className="mb-8">
                <h3 className="text-lg sm:text-xl font-bold tracking-tight text-white">Direct Communications Terminal</h3>
                <p className="text-xs sm:text-sm text-slate-400 mt-1">Bypass tracking envelopes and open direct secure pipeline sockets directly below.</p>
              </div>

              <div className="space-y-6">
                
                {/* Channel card node array row item A: Email parameters */}
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 flex items-center justify-center w-11 h-11 rounded-xl bg-white/5 border border-white/10 text-[#2563EB]">
                    <svg className="w-5 h-5 text-[#2563EB]" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25H4.5a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0l-7.5-4.615a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>
                  </span>
                  <div>
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Global Support Queue</h4>
                    <a href="mailto:support@learnx.edu" className="text-sm sm:text-base font-semibold text-white hover:text-[#2563EB] transition-colors break-all">support@learnx.edu</a>
                  </div>
                </div>

                {/* Channel card node array row item B: Phone coordinates */}
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 flex items-center justify-center w-11 h-11 rounded-xl bg-white/5 border border-white/10 text-[#10B981]">
                    <svg className="w-5 h-5 text-[#10B981]" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-1.514 2.022a11.979 11.979 0 01-5.342-5.341l2.022-1.514c.361-.272.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v1.375z" /></svg>
                  </span>
                  <div>
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Voice Support Terminal</h4>
                    <a href="tel:+9242111532769" className="text-sm sm:text-base font-semibold text-white hover:text-[#10B981] transition-colors">+92 (42) 111-LEARNX</a>
                  </div>
                </div>

                {/* Channel card node array row item C: Campus address anchor mapping parameters */}
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 flex items-center justify-center w-11 h-11 rounded-xl bg-white/5 border border-white/10 text-[#F97316]">
                    <svg className="w-5 h-5 text-[#F97316]" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25s-7.5-3.108-7.5-11.25a7.5 7.5 0 1115 0z" /></svg>
                  </span>
                  <div>
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest">HQ Campus Boundaries</h4>
                    <p className="text-sm sm:text-base font-semibold text-white leading-relaxed">
                      Block R3, Johar Town, <br />
                      Lahore, Punjab, Pakistan
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Quick response notification alert banner badge */}
            <div className="p-5 border border-slate-200 bg-white rounded-2xl flex gap-3.5 items-start shadow-xs">
              <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-orange-50 text-[#F97316]">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </span>
              <div>
                <h4 className="text-sm font-bold text-slate-900">Active Operational Queue Metric</h4>
                <p className="text-xs text-slate-500 mt-0.5 leading-normal">Our current incoming response velocity calculates at approximately 2 hours. Expect rapid manual responses to your query items.</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ==========================================
          SECTION 3: SCALE ACCORDION FAQ REGISTRY
         ========================================== */}
      <section className="border-t border-slate-200 bg-slate-50/50 w-full py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">Frequently Asked Questions</h2>
            <p className="text-sm sm:text-base text-slate-500 mt-2">Find quick answers to common structural queries parsed across academic boundaries.</p>
            <div className="h-1 w-12 bg-[#2563EB] mx-auto mt-4 rounded-full" />
          </div>

          {/* Accordion grouping array structure component injection node */}
          <div className="space-y-4">
            {FAQ_DATA.map((faq) => (
              <FAQAccordionItem
                key={faq.id}
                question={faq.question}
                answer={faq.answer}
                isOpen={openFaqId === faq.id}
                onToggle={() => setOpenFaqId(openFaqId === faq.id ? null : faq.id)}
              />
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}