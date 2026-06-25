/* script.js — AgriQion UI Interactions */

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initHeaderScroll();
  initMobileNav();
  initScrollReveal();
  initDashboardWidget();
  initContactForms();
  initModal();
  initFaqAccordion();
});

/* 1. Theme Toggle (Light / Dark Mode) */
function initTheme() {
  const html = document.documentElement;
  const themeToggleButtons = document.querySelectorAll('.theme-toggle-btn');
  
  // Get active theme from localStorage or system preferences
  const savedTheme = localStorage.getItem('theme');
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
    html.classList.add('dark');
    html.setAttribute('data-theme', 'dark');
  } else {
    html.classList.remove('dark');
    html.setAttribute('data-theme', 'light');
  }

  themeToggleButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      if (html.classList.contains('dark')) {
        html.classList.remove('dark');
        html.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        showToast('Theme Changed', 'Light mode activated successfully.');
      } else {
        html.classList.add('dark');
        html.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        showToast('Theme Changed', 'Dark mode activated successfully.');
      }
    });
  });
}

/* 2. Header Scroll States */
function initHeaderScroll() {
  const header = document.querySelector('.nav-header');
  if (!header) return;

  const checkScroll = () => {
    if (window.scrollY > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', checkScroll);
  checkScroll(); // Initial check
}

/* 3. Mobile Navigation Drawer */
function initMobileNav() {
  const toggle = document.querySelector('.mobile-nav-toggle');
  const drawer = document.querySelector('.mobile-nav-drawer');
  const overlay = document.querySelector('.mobile-nav-overlay');
  if (!toggle || !drawer || !overlay) return;

  const openDrawer = () => {
    drawer.classList.add('open');
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  };

  const closeDrawer = () => {
    drawer.classList.remove('open');
    overlay.classList.remove('open');
    document.body.style.overflow = '';
  };

  toggle.addEventListener('click', openDrawer);
  overlay.addEventListener('click', closeDrawer);
  
  // Close drawer when link is clicked
  const links = drawer.querySelectorAll('.nav-link, .btn-primary');
  links.forEach(l => l.addEventListener('click', closeDrawer));
}

/* 4. Intersection Observer for Scroll Reveals */
function initScrollReveal() {
  const revealElements = document.querySelectorAll('.reveal');
  
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target); // Reveal only once
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    revealElements.forEach(el => observer.observe(el));
  } else {
    // Fallback if observer not supported
    revealElements.forEach(el => el.classList.add('visible'));
  }
}

/* 5. Interactive Farm Dashboard Widget (micro-interactions) */
function initDashboardWidget() {
  const pumpBtn = document.querySelector('.pump-control-btn');
  const pumpStatusText = document.querySelector('.pump-status-text');
  const pumpStatusDot = document.querySelector('.pump-status-dot');
  const waterFlowVal = document.querySelector('.water-flow-val');
  const moistureValText = document.querySelector('.moisture-val-text');
  const moistureCircle = document.querySelector('.val-circle');
  
  if (!pumpBtn) return;

  let pumpRunning = true;
  let flowInterval = null;
  let moistureInterval = null;

  // Simulate dynamic values
  const startSimulation = () => {
    // Dynamic Water Flow (fluctuates between 11.8 and 12.5 L/min when running)
    flowInterval = setInterval(() => {
      if (pumpRunning) {
        const val = (11.8 + Math.random() * 0.7).toFixed(1);
        if (waterFlowVal) waterFlowVal.textContent = `${val} L/min`;
      }
    }, 3000);

    // Dynamic Soil Moisture (fluctuates between 31% and 33%)
    moistureInterval = setInterval(() => {
      if (moistureValText && moistureCircle) {
        const currentVal = parseInt(moistureValText.textContent);
        const shift = Math.random() > 0.5 ? 1 : -1;
        let newVal = currentVal + shift;
        if (newVal < 30) newVal = 30;
        if (newVal > 35) newVal = 35;
        
        moistureValText.textContent = `${newVal}%`;
        
        // Update circle HSL custom properties or stroke-dashoffset
        moistureCircle.parentElement.style.setProperty('--moisture-val', newVal);
        moistureCircle.style.strokeDashoffset = 126 - (126 * newVal) / 100;
      }
    }, 5000);
  };

  const stopSimulation = () => {
    clearInterval(flowInterval);
    clearInterval(moistureInterval);
  };

  pumpBtn.addEventListener('click', () => {
    pumpRunning = !pumpRunning;
    
    if (pumpRunning) {
      pumpBtn.classList.add('running');
      pumpBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-power"><path d="M12 2v10"></path><path d="M18.4 6.6a9 9 0 1 1-12.77.04"></path></svg> Stop Pump`;
      if (pumpStatusText) pumpStatusText.textContent = 'Running';
      if (pumpStatusDot) pumpStatusDot.style.color = ''; // standard primary green
      if (waterFlowVal) waterFlowVal.textContent = '12.1 L/min';
      startSimulation();
      showToast('Pump Started', 'Irrigation pump is now running.');
    } else {
      pumpBtn.classList.remove('running');
      pumpBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-power"><path d="M12 2v10"></path><path d="M18.4 6.6a9 9 0 1 1-12.77.04"></path></svg> Start Pump`;
      if (pumpStatusText) pumpStatusText.textContent = 'Inactive';
      if (pumpStatusDot) pumpStatusDot.style.color = '#ef4343'; // Destructive red HSL
      if (waterFlowVal) waterFlowVal.textContent = '0 L/min';
      stopSimulation();
      showToast('Pump Stopped', 'Irrigation pump has been shut down.');
    }
  });

  startSimulation();
}

/* 6. Form Handlers & Custom Toast Notifications */
function initContactForms() {
  const forms = document.querySelectorAll('form');
  forms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const btn = form.querySelector('button[type="submit"]');
      const originalText = btn.innerHTML;
      btn.disabled = true;
      btn.innerHTML = `<svg class="animate-spin" style="margin-right: 6px;" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="2" x2="12" y2="6"></line><line x1="12" y1="18" x2="12" y2="22"></line><line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line><line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line><line x1="2" y1="12" x2="6" y2="12"></line><line x1="18" y1="12" x2="22" y2="12"></line><line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line><line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line></svg> Submitting...`;

      setTimeout(() => {
        btn.disabled = false;
        btn.innerHTML = originalText;
        form.reset();
        
        // Close modal if form is in a modal
        const modalBackdrop = document.querySelector('.modal-backdrop');
        if (modalBackdrop && modalBackdrop.classList.contains('open')) {
          modalBackdrop.classList.remove('open');
          document.body.style.overflow = '';
        }
        
        showToast('Request Received', 'Our engineers will reach out to you within 24 hours.');
      }, 1500);
    });
  });
}

function showToast(title, message) {
  // Check if toast-container exists
  let container = document.querySelector('.toast-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  // Create toast element
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="toast-icon"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
    <div class="toast-content">
      <div class="toast-title">${title}</div>
      <div class="toast-msg">${message}</div>
    </div>
    <button class="toast-close">&times;</button>
  `;

  // Close button functionality
  const closeBtn = toast.querySelector('.toast-close');
  closeBtn.addEventListener('click', () => {
    toast.classList.add('hiding');
    setTimeout(() => toast.remove(), 200);
  });

  container.appendChild(toast);

  // Auto-remove after 4 seconds
  setTimeout(() => {
    if (toast.parentElement) {
      toast.classList.add('hiding');
      setTimeout(() => toast.remove(), 200);
    }
  }, 4000);
}

/* 7. Modal Form Logic ("Talk to an Engineer") */
function initModal() {
  const triggerBtns = document.querySelectorAll('[href="#contact"], [href="#talk-to-engineer"], .btn-talk-engineer');
  let backdrop = document.querySelector('.modal-backdrop');
  
  if (!backdrop) {
    backdrop = document.createElement('div');
    backdrop.className = 'modal-backdrop';
    backdrop.innerHTML = `
      <div class="modal">
        <div class="modal-header">
          <div class="modal-title">Consult with an Engineer</div>
          <button class="modal-close">&times;</button>
        </div>
        <div class="modal-body">
          <p style="margin-bottom: 16px; color: hsl(var(--muted-foreground));">Provide your contact info and our experts will help customize the automation setup for your land.</p>
          <form id="modal-consult-form">
            <div class="form-group">
              <label for="modal-name">Full Name</label>
              <input type="text" id="modal-name" class="input" placeholder="e.g. Ramesh Kumar" required />
            </div>
            <div class="form-group">
              <label for="modal-phone">Phone Number</label>
              <input type="tel" id="modal-phone" class="input" placeholder="e.g. +91 98765 43210" pattern="^[0-9\\+\\-\\s]{10,15}$" required />
            </div>
            <div class="form-group">
              <label for="modal-land">Land Size & Crops</label>
              <input type="text" id="modal-land" class="input" placeholder="e.g. 5 acres, Cotton & Vegetables" required />
            </div>
            <div class="modal-footer" style="margin-top: 24px;">
              <button type="button" class="btn-ghost modal-btn-cancel">Cancel</button>
              <button type="submit" class="btn-primary">Submit Request</button>
            </div>
          </form>
        </div>
      </div>
    `;
    document.body.appendChild(backdrop);
    
    initContactForms();
  }

  const openModal = (e) => {
    if (e) e.preventDefault();
    backdrop.classList.add('open');
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    backdrop.classList.remove('open');
    document.body.style.overflow = '';
  };

  triggerBtns.forEach(btn => {
    btn.addEventListener('click', openModal);
  });

  const closeBtn = backdrop.querySelector('.modal-close');
  const cancelBtn = backdrop.querySelector('.modal-btn-cancel');

  closeBtn.addEventListener('click', closeModal);
  cancelBtn.addEventListener('click', closeModal);
  
  backdrop.addEventListener('click', (e) => {
    if (e.target === backdrop) {
      closeModal();
    }
  });
}

/* 8. FAQ Accordion Component */
function initFaqAccordion() {
  const faqHeaders = document.querySelectorAll('.faq-header');
  
  faqHeaders.forEach(header => {
    header.addEventListener('click', () => {
      const item = header.parentElement;
      const content = item.querySelector('.faq-content');
      const isOpen = item.classList.contains('open');

      // Close all other accordion items
      document.querySelectorAll('.faq-item').forEach(otherItem => {
        if (otherItem !== item && otherItem.classList.contains('open')) {
          otherItem.classList.remove('open');
          const otherContent = otherItem.querySelector('.faq-content');
          if (otherContent) {
            otherContent.style.maxHeight = null;
          }
        }
      });

      // Toggle current item
      if (isOpen) {
        item.classList.remove('open');
        if (content) {
          content.style.maxHeight = null;
        }
      } else {
        item.classList.add('open');
        if (content) {
          content.style.maxHeight = content.scrollHeight + 'px';
        }
      }
    });
  });
}

