// Typing effect JS

const texts = ["I'm a Machine Learning Engineer", "I'm a Data Scientist", "I'm an AI Developer", "I'm a Python Developer"];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type() {
  if (count === texts.length) {
    count = 0;
  }
  currentText = texts[count];
  letter = currentText.slice(0, ++index);

  document.getElementById("typing").textContent = letter;
  if (letter.length === currentText.length) {
    count++;
    index = 0;
    setTimeout(type, 1000); // pause between words
  } else {
    setTimeout(type, 100);
  }
})();

// ✅ Preloader Script
function hidePreloader() {
  const preloader = document.getElementById("preloader");
  if (preloader) {
    preloader.classList.add("fade-out");
    setTimeout(() => {
      preloader.style.display = "none";
    }, 1000); // match transition duration
  }
}

// Try to hide after full load
window.addEventListener("load", hidePreloader);

// Fallback in case onload is stuck (e.g. due to GIF not loading fully)
setTimeout(hidePreloader, 5000); // hide after 5 seconds max

//projects
function viewAllProjects() {
  document.querySelector(".row1").classList.add("stopped");
  document.querySelector(".row2").classList.add("stopped");
}

function showContent(id) {
  const tabs = document.querySelectorAll(".tab");
  const contents = document.querySelectorAll(".content");

  tabs.forEach((tab) => tab.classList.remove("active"));
  contents.forEach((content) => content.classList.remove("active"));

  document.querySelector(`.tab[onclick*='${id}']`).classList.add("active");
  document.getElementById(id).classList.add("active");
}

//  document.getElementById('downloadBtn').addEventListener('click', function () {
//   const resumeUrl = 'assest/RESUME.pdf'; // Replace with your actual resume file path
//   const a = document.createElement('a');
//   a.href = resumeUrl;
//   a.download = 'My_Resume.pdf';
//   a.click();
// });



//   // Filter items
// const filters = document.querySelectorAll('.portfolio-filters li');
// const items = document.querySelectorAll('.portfolio-item');

// filters.forEach(filter => {
//   filter.addEventListener('click', () => {
//     filters.forEach(f => f.classList.remove('active'));
//     filter.classList.add('active');
//     const category = filter.dataset.filter;
//     items.forEach(item => {
//       const show = category === 'all' || item.dataset.category === category;
//       item.style.display = show ? 'block' : 'none';
//     });
//   });
// });

// // Lightbox with delegation
// const lightbox = document.getElementById('lightbox');
// const lightboxImg = document.getElementById('lightbox-img');

// document.querySelector('.portfolio-container').addEventListener('click', (e) => {
//   const previewLink = e.target.closest('.preview');
//   if (previewLink) {
//     e.preventDefault();
//     lightboxImg.src = previewLink.dataset.src;
//     lightbox.style.display = 'flex';
//   }
// });

// lightbox.addEventListener('click', () => {
//   lightbox.style.display = 'none';
// });

// // certificaate
// const certifications = [
//   {
//     title: "Web Development Bootcamp",
//     issuer: "Udemy",
//     date: "Jan 2024",
//     link: "https://example.com/certificate1",
//     image: "https://i.ibb.co/pbhsQL8/Certificate1.png"
//   },
//   {
//     title: "AI for Everyone",
//     issuer: "Coursera",
//     date: "Aug 2023",
//     link: "https://example.com/certificate2",
//     image: "https://i.ibb.co/f1t6qJt/Certificate2.png"
//   },
//   {
//     title: "Python for Data Science",
//     issuer: "edX",
//     date: "May 2023",
//     link: "https://example.com/certificate3",
//     image: "https://i.ibb.co/KxjbXkP/Certificate3.png"
//   },
//   {
//     title: "Introduction to Machine Learning",
//     issuer: "Google",
//     date: "Feb 2024",
//     link: "https://example.com/certificate4",
//     image: "https://i.ibb.co/7R6mh7f/Certificate4.png"
//   },
//   {
//     title: "Startup India Learning Program",
//     issuer: "Startup India",
//     date: "Feb 2024",
//     link: "https://certificate.startupindia.gov.in/view-certificate?name=paramveer-kumar&id=17dafe17-f8a4-4b77-a6f0-346a8f57cf45",
//     image: "https://i.ibb.co/q7xk0ss/Startup-India.png"
//   },
//   {
//     title: "IDE Bootcamp 2024",
//     issuer: "CIMP Patna",
//     date: "Feb 2024",
//     link: "https://drive.google.com/file/d/1ZsnWkzyZfsfdHu_PZZE7WZQgxMjfq-4h/view?usp=sharing",
//     image: "https://i.ibb.co/tzVrsrH/IDE-Bootcamp.png"
//   },
//   {
//     title: "Startup Yatra Bihar",
//     issuer: "Startup Bihar",
//     date: "Aug 2024",
//     link: "https://drive.google.com/file/d/1x9KqNVwR_J_2QHOSrIsg1yEZKz3L8fl2/view?usp=sharing",
//     image: "https://i.ibb.co/9pLTjvb/Startup-Yatra.png"
//   },
//   {
//     title: "Smart Automation Winner - TecXposium24",
//     issuer: "SCE Supaul",
//     date: "Sep 2024",
//     link: "https://drive.google.com/file/d/1urEWaJ-Bpckf1t9GTo_yXg09KhkVPV3G/view?usp=sharing",
//     image: "https://i.ibb.co/SQRhRWm/Smart-Automation.png"
//   },
//   {
//     title: "Tree Plantation Volunteer",
//     issuer: "Environment & Forest Dept.",
//     date: "Sep 2024",
//     link: "https://drive.google.com/file/d/1rIM5Evd9HZEMcGgzp-ZzV0dnlOG4Zd3V/view?usp=sharing",
//     image: "https://i.ibb.co/pwKDX2M/Tree-Plantation.png"
//   },
//   {
//     title: "Swachh Bharat Volunteer - 2nd October",
//     issuer: "SCE Supaul",
//     date: "Oct 2024",
//     link: "https://drive.google.com/file/d/1umCViUFk0e1C9vjT0MLiO6eb6UsOQMQP/view?usp=sharing",
//     image: "https://i.ibb.co/MRDfj5X/Swachh-Bharat.png"
//   },
//   {
//     title: "Codshoft Internship Offer Letter",
//     issuer: "Codshoft",
//     date: "Sep 2024",
//     link: "https://drive.google.com/file/d/1KZhE9S2ctmgG2ELzYF_cUXLFNV80ErT7/view?usp=sharing",
//     image: "https://i.ibb.co/WxG9GRd/Codshoft-Internship.png"
//   },
//   {
//     title: "Inter College Startup Competition - Runner Up",
//     issuer: "Startup Cell Supaul & IIC",
//     date: "Aug 2024",
//     link: "https://drive.google.com/file/d/1zVSTwZmeZVaPdnOv7c1NTYZ_dH43yyL6/view?usp=sharing",
//     image: "https://i.ibb.co/qYCd08H/Startup-Competition.png"
//   },
//   {
//     title: "Makhana Business Internship Certificate",
//     issuer: "Nayavayapar",
//     date: "May 2025",
//     link: "https://drive.google.com/file/d/1fAyUezB08iM4SBMpSy8ci-ZA8RXGx26e/view?usp=sharing",
//     image: "https://i.ibb.co/v1Kympf/Makhana-Internship.png"
//   }
// ];

// const container = document.getElementById("certContainer");

// function renderCertifications(limit = certifications.length) {
//   container.innerHTML = "";
//   certifications.slice(0, limit).forEach(cert => {
//     const card = document.createElement("div");
//     card.className = "cert-card";
//     card.innerHTML = `
//       <img src="${cert.image}" alt="${cert.title} image">
//       <h3>${cert.title}</h3>
//       <p><strong>Issuer:</strong> ${cert.issuer}</p>
//       <p><strong>Date:</strong> ${cert.date}</p>
//       <a href="${cert.link}" target="_blank">View Certificate</a>
//     `;
//     container.appendChild(card);
//   });
// }

// let showAll = false;
// function toggleView() {
//   showAll = !showAll;
//   renderCertifications(showAll ? certifications.length : 6);
//   document.getElementById("viewBtn").innerText = showAll ? "Show Less" : "View All";
// }

// renderCertifications(6);

// ==========================================
// Track Record - Career Transit Subway Map
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  const transitDatabase = {
    "nayavayapar": {
      title: "Frontend Developer",
      org: "Nayavayapar",
      line: "blue",
      date: "May 2025 - Present",
      desc: "<ul><li>Building and optimizing the startup's online platform.</li><li>Translating business goals into modern, visual-first front-end code.</li><li>Spearheading branding and digital identity to promote regional farmer products.</li></ul>"
    },
    "ide-bootcamp": {
      title: "IDE Bootcamp Edition-2",
      org: "AICTE & MIC",
      line: "blue",
      date: "Feb 2025",
      desc: "<ul><li>Deep dived into design thinking methodologies to validate business ideas.</li><li>Formulated comprehensive business models and pitching strategies.</li><li>Collaborated with diverse teams on real-world socio-economic problem statements.</li></ul>"
    },
    "ieee-vice-chair": {
      title: "Vice Chair - IEEE SB",
      org: "IEEE Student Branch",
      line: "magenta",
      date: "2024",
      desc: "<ul><li>Orchestrated regional workshops on web development and AI foundations.</li><li>Fostered collaborations with guest lecturers and other student bodies.</li><li>Expanded branch membership by 20%+ via structured outreach programs.</li></ul>"
    },
    "goldman-sachs": {
      title: "Software Engineering Program",
      org: "Goldman Sachs (Forage)",
      line: "blue",
      date: "Oct 2024",
      desc: "<ul><li>Engaged in resolving system modeling issues and structural coding challenges.</li><li>Analyzed financial transactions and wrote code for data manipulation.</li><li>Gained practical knowledge of engineering workflows at a global investment bank.</li></ul>"
    },
    "college-magazine": {
      title: "Magazine Design & Promotion",
      org: "SCE Supaul",
      line: "magenta",
      date: "Oct 2024",
      desc: "<ul><li>Crafted vector layouts and typography styles for the prospectus brochures.</li><li>Formatted editorial articles and photo highlights for the annual student magazine.</li><li>Liaised with publishers to verify structural design compliance.</li></ul>"
    },
    "nss-treasurer": {
      title: "Treasurer - NSS Club",
      org: "NSS | SCE Supaul",
      line: "magenta",
      date: "2024",
      desc: "<ul><li>Allocated budgets for community service initiatives and awareness campaigns.</li><li>Maintained financial statements and expense tracking.</li><li>Helped host local community cleanliness drives and health camps.</li></ul>"
    },
    "coding-club": {
      title: "Coordinator",
      org: "Coding Club | SCE Supaul",
      line: "magenta",
      date: "Sept 2024",
      desc: "<ul><li>Designed problem sets and rules for peer programming challenges.</li><li>Taught foundational data structures and algorithm concepts to first-year students.</li><li>Hosted interactive web design hackathons on campus.</li></ul>"
    },
    "web-dev-intern": {
      title: "Web Developer Intern",
      org: "Codshoft",
      line: "blue",
      date: "Aug 2024",
      desc: "<ul><li>Implemented fully responsive landing pages and interfaces.</li><li>Created neat, production-ready vanilla JavaScript components.</li><li>Collaborated on visual polishing and structural elements.</li></ul>"
    },
    "iic-coordinator": {
      title: "Internship Coordinator",
      org: "IIC MoE | SCE Supaul",
      line: "magenta",
      date: "2023 - 2024",
      desc: "<ul><li>Arranged industry-academia seminars on intellectual property rights (IPR).</li><li>Facilitated student registration and participation in national ideation challenges.</li><li>Shared internship opportunities and resources with student peers.</li></ul>"
    },
    "class-rep": {
      title: "Class Representative",
      org: "CSE-AI | SCE Supaul",
      line: "magenta",
      date: "2023 - Present",
      desc: "<ul><li>Liaising between class students and faculty heads to align academic schedules.</li><li>Resolving student issues and driving departmental feedback.</li><li>Hosting workshops, coding meets, and technical peer study groups.</li></ul>"
    }
  };

  // 1. Milestone Explorer Dashboard Rendering
  const journeyDashboard = document.getElementById('journey-dashboard');
  if (journeyDashboard) {
    const navContainer = journeyDashboard.querySelector('.milestones-nav');
    const detailsPane = journeyDashboard.querySelector('.milestone-details');
    const toggles = journeyDashboard.querySelectorAll('.journey-toggle');
    
    let activePath = 'blue'; // blue (Development) vs magenta (Leadership)
    let selectedMilestoneId = '';

    // Helper to get nodes for a specific path
    function getPathItems(pathColor) {
      return Object.entries(transitDatabase)
        .filter(([id, data]) => data.line === pathColor)
        .map(([id, data]) => ({ id, ...data }));
    }

    function renderDashboard() {
      if (!navContainer || !detailsPane) return;
      navContainer.innerHTML = '';
      
      const items = getPathItems(activePath);
      if (items.length === 0) return;

      // Set default selected milestone on tab change
      if (!selectedMilestoneId || !transitDatabase[selectedMilestoneId] || transitDatabase[selectedMilestoneId].line !== activePath) {
        selectedMilestoneId = items[0].id;
      }

      // Render milestones list
      items.forEach(item => {
        const isActive = item.id === selectedMilestoneId;
        const navItem = document.createElement('button');
        navItem.className = `nav-item ${activePath} ${isActive ? 'active' : ''}`;
        navItem.setAttribute('data-id', item.id);
        navItem.innerHTML = `
          <span class="nav-item-title">${item.title}</span>
          <span class="nav-item-org ${activePath}">${item.org}</span>
          <span class="nav-item-date">${item.date}</span>
        `;
        
        navItem.addEventListener('click', () => {
          if (selectedMilestoneId === item.id) return;
          selectedMilestoneId = item.id;
          
          // Update active styling
          journeyDashboard.querySelectorAll('.nav-item').forEach(btn => btn.classList.remove('active'));
          navItem.classList.add('active');
          
          // Load details
          loadMilestoneDetails(item.id);
        });

        navContainer.appendChild(navItem);
      });

      // Load current details
      loadMilestoneDetails(selectedMilestoneId);
    }

    function loadMilestoneDetails(id) {
      const data = transitDatabase[id];
      if (!data || !detailsPane) return;

      // Add fade animation
      detailsPane.classList.add('switching');

      setTimeout(() => {
        detailsPane.innerHTML = `
          <div class="details-header">
            <div class="details-title">
              <h3>${data.title}</h3>
              <span class="details-org ${activePath}">${data.org}</span>
            </div>
            <span class="details-date ${activePath}">${data.date}</span>
          </div>
          <div class="details-body">
            ${data.desc}
          </div>
        `;
        detailsPane.classList.remove('switching');
      }, 150);
    }

    // Toggle paths handler
    toggles.forEach(toggle => {
      if (toggle.classList.contains('view-all-btn')) return;
      
      toggle.addEventListener('click', () => {
        const path = toggle.getAttribute('data-path');
        if (activePath === path) return;

        toggles.forEach(t => {
          if (!t.classList.contains('view-all-btn')) t.classList.remove('active');
        });
        toggle.classList.add('active');
        
        activePath = path;
        selectedMilestoneId = ''; // reset milestone selection to default first item
        renderDashboard();
      });
    });

    // Modal Timeline View All popup logic
    const viewAllBtn = document.getElementById('journey-view-all-btn');
    const journeyModal = document.getElementById('journey-modal');
    const closeBtn = document.getElementById('close-journey-modal-btn');
    
    function renderModalTimeline() {
      const modalBody = journeyModal.querySelector('.modal-timeline');
      if (!modalBody) return;
      
      let html = '<div class="modal-section-header" style="font-size: 1.2rem; font-weight: 800; color: #05555c; margin: 10px 0 20px 0; text-align: left;"><i class="fa-solid fa-briefcase"></i> Professional Experience</div>';
      
      const blueItems = Object.entries(transitDatabase)
        .filter(([id, data]) => data.line === 'blue')
        .map(([id, data]) => data);
        
      blueItems.forEach(item => {
        html += `
          <div class="modal-timeline-item">
            <span class="modal-timeline-node blue"></span>
            <div class="modal-timeline-card">
              <div class="modal-timeline-header">
                <div class="modal-timeline-title">
                  <h4>${item.title}</h4>
                  <span class="modal-timeline-org blue">${item.org}</span>
                </div>
                <span class="modal-timeline-date">${item.date}</span>
              </div>
              <div class="modal-timeline-body">${item.desc}</div>
            </div>
          </div>
        `;
      });
      
      html += '<div class="modal-section-header" style="font-size: 1.2rem; font-weight: 800; color: #ff8fab; margin: 30px 0 20px 0; text-align: left;"><i class="fa-solid fa-users"></i> Leadership & Engagement</div>';
      
      const magentaItems = Object.entries(transitDatabase)
        .filter(([id, data]) => data.line === 'magenta')
        .map(([id, data]) => data);
        
      magentaItems.forEach(item => {
        html += `
          <div class="modal-timeline-item">
            <span class="modal-timeline-node magenta"></span>
            <div class="modal-timeline-card">
              <div class="modal-timeline-header">
                <div class="modal-timeline-title">
                  <h4>${item.title}</h4>
                  <span class="modal-timeline-org magenta">${item.org}</span>
                </div>
                <span class="modal-timeline-date">${item.date}</span>
              </div>
              <div class="modal-timeline-body">${item.desc}</div>
            </div>
          </div>
        `;
      });
      
      modalBody.innerHTML = html;
    }

    if (viewAllBtn && journeyModal && closeBtn) {
      viewAllBtn.addEventListener('click', () => {
        renderModalTimeline();
        journeyModal.classList.add('show');
        document.body.style.overflow = 'hidden';
      });
      
      const closeModal = () => {
        journeyModal.classList.remove('show');
        document.body.style.overflow = '';
      };
      
      closeBtn.addEventListener('click', closeModal);
      
      journeyModal.addEventListener('click', (e) => {
        if (e.target === journeyModal) {
          closeModal();
        }
      });
    }

    // 1b. About Me Tabs Switching Engine
    const aboutSection = document.getElementById('about-section');
    if (aboutSection) {
      const tabBtns = aboutSection.querySelectorAll('.about-tab-btn');
      const contentPane = aboutSection.querySelector('#about-tab-content-pane');
      
      const aboutTextDatabase = {
  bio: `
    <p>I'm <strong>Pramveer Kumar</strong>, a B.Tech Computer Science & Engineering (Artificial Intelligence) student at <strong>Supaul College of Engineering (BEU)</strong>, passionate about transforming data into intelligent solutions. I specialize in <strong>Machine Learning, Data Science, and AI</strong>, using Python, Pandas, NumPy, Scikit-learn, TensorFlow, SQL, and Matplotlib to build predictive models, analyze data, and develop AI-powered applications.</p>

    <p>Certified in <strong>AIML for Geodata Analysis by ISRO</strong> and a participant in the <strong>Goldman Sachs Software Engineering Virtual Experience (Forage)</strong>, I continuously enhance my skills through real-world projects, competitive programming, and research. My goal is to build impactful AI solutions that solve real-world challenges in agriculture, finance, healthcare, and intelligent automation.</p>
  `,

 ventures: `
  <p>I enjoy building <strong>Data Science and Machine Learning projects</strong> that solve practical problems. My experience includes developing predictive models, performing exploratory data analysis (EDA), feature engineering, and creating interactive dashboards using <strong>Python, Pandas, NumPy, Scikit-learn, TensorFlow, SQL, and Matplotlib</strong>.</p>

  <p>Some of my projects include <strong>Gold Price Prediction, Heart Disease Prediction, YouTube User Behavior Analysis</strong>, and other AI-driven applications. Through these projects, I've gained hands-on experience in data cleaning, model training, evaluation, and visualization while following industry-standard machine learning workflows.</p>
`,

  leadership: `
    <p>As the <strong>Vice Chair of the IEEE Student Branch</strong> at Supaul College of Engineering, I have organized technical workshops, coding sessions, hackathons, and AI awareness programs, helping more than <strong>100 students</strong> strengthen their technical skills and foster innovation.</p>

    <p>Beyond IEEE, I serve as the <strong>Class Representative (CSE-AI)</strong> and <strong>Treasurer of the NSS Unit</strong>, leading major events including <strong>National Science Week, India Space Week, Science Mela, and technical competitions</strong>. I was also the <strong>winner of the Arduino Automation Competition at TecXposium 2024</strong>, reflecting my passion for leadership, teamwork, and innovation.</p>
  `
};

      function switchAboutTab(tabId) {
        if (!contentPane) return;
        contentPane.classList.add('switching');
        
        setTimeout(() => {
          contentPane.innerHTML = aboutTextDatabase[tabId] || '';
          contentPane.classList.remove('switching');
        }, 150);
      }

      tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
          const tabId = btn.getAttribute('data-tab');
          tabBtns.forEach(t => t.classList.remove('active'));
          btn.classList.add('active');
          switchAboutTab(tabId);
        });
      });

      // Initial load
      switchAboutTab('bio');
    }

    // Initial render
    renderDashboard();
  }
});



// Trigger Isotope relayout on full load and window resize
window.addEventListener('load', () => {
  if (typeof $goluContainer !== 'undefined') {
    $goluContainer.isotope('layout');
  }
});
window.addEventListener('resize', () => {
  if (typeof $goluContainer !== 'undefined') {
    $goluContainer.isotope('layout');
  }
});

