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
    "edunet": {
      title: "Artificial Intelligence Intern",
      org: "Edunet Foundation × AICTE",
      line: "blue",
      date: "May 11, 2026 - June 21, 2026",
      classification: "Artificial Intelligence & Machine Learning",
      track: "AICTE Internship",
      coreTech: "Python, NumPy, Pandas, Scikit-Learn, Supervised Learning, Model Evaluation",
      desc: "<ul><li>Completed an intensive 6-week technical internship in Artificial Intelligence in collaboration with the All India Council for Technical Education (AICTE), implemented by Edunet Foundation.</li><li>Gained hands-on exposure to practical AI/ML workflows, working through structured modules in exploratory data analysis (EDA), data cleaning, and feature engineering.</li><li>Engineered and validated predictive machine learning models using Python, Scikit-learn, and Pandas, evaluating model accuracy with confusion matrices and classification metrics.</li><li>Explored foundational neural networks, computer vision, and natural language processing concepts for practical real-world problem-solving.</li></ul>"
    },
    "cisco": {
      title: "Networking Virtual Intern",
      org: "Cisco",
      line: "blue",
      date: "June 2025 - August 2025",
      classification: "Computer Networking & Infrastructure",
      track: "Cisco Networking Academy",
      coreTech: "Cisco Packet Tracer, TCP/IP & OSI Models, IPv4/IPv6 Subnetting, Routing & Switching",
      desc: "<ul><li>Completed the Virtual Internship Program 2025 in Networking held under the Cisco Networking Academy.</li><li>Developed an in-depth understanding of networking fundamentals, protocols, transmission media, and device architectures across the OSI and TCP/IP stacks.</li><li>Configured and simulated enterprise network topologies, switches, routers, and IP addressing schemes using Cisco Packet Tracer.</li><li>Conducted practical diagnostic troubleshooting, packet inspection, and network security exercises in virtual laboratory environments.</li></ul>"
    },
    "nayavayapar": {
      title: "Frontend Developer",
      org: "Nayavayapar",
      line: "blue",
      date: "May 2025 - July 2025",
      classification: "Frontend Web Engineering",
      track: "Startup Technology Platform",
      coreTech: "HTML5, CSS3, JavaScript, Responsive Web Design, Asset Optimization, UI/UX",
      desc: "<ul><li>Built and optimized the startup's online platform, translating business goals into modern, visual-first front-end solutions.</li><li>Implemented responsive layouts and mobile-first interface components ensuring cross-device compatibility and smooth navigation.</li><li>Spearheaded digital branding and e-commerce presentation to promote regional farmer products and uplift rural market outreach.</li><li>Optimized front-end performance, asset delivery, and interactive web elements to improve user retention and engagement.</li></ul>"
    },
    "ide_bootcamp": {
      title: "IDE Bootcamp Participant",
      org: "IDE Bootcamp",
      line: "blue",
      date: "2025",
      classification: "Innovation & Entrepreneurship",
      track: "AICTE & MoE Innovation Cell",
      coreTech: "Design Thinking, Business Model Canvas (BMC), Market Validation, Pitch Decks",
      desc: "<ul><li>Participated in an intensive Innovation, Design and Entrepreneurship (IDE) Bootcamp organized by AICTE and Ministry of Education's Innovation Cell (MIC).</li><li>Explored design thinking methodologies to validate startup ideas, identify critical socio-economic problem statements, and interview target demographics.</li><li>Formulated comprehensive Business Model Canvases (BMC), value proposition frameworks, and competitive go-to-market strategies.</li><li>Collaborated with multidisciplinary teams to pitch viable, tech-enabled startup models to industry mentors and incubator leads.</li></ul>"
    },
    "isro": {
      title: "AIML for Geodata Analysis",
      org: "ISRO & IIRS, Dehradun",
      line: "blue",
      date: "1 Week Training",
      classification: "Geospatial AI & Remote Sensing",
      track: "ISRO & IIRS Training",
      coreTech: "Remote Sensing Data, Satellite Imagery, GIS Principles, Machine Learning Classification",
      desc: "<ul><li>Completed a specialized one-week training program on Artificial Intelligence and Machine Learning for Geodata Analysis conducted by ISRO and IIRS, Dehradun.</li><li>Gained hands-on exposure to geospatial data structures, remote-sensing physics, coordinate reference systems, and satellite imagery analysis.</li><li>Studied the application of machine learning classification and clustering algorithms to multispectral earth observation datasets.</li><li>Developed an understanding of automated spatial feature extraction and predictive modeling for environmental and agricultural monitoring.</li></ul>"
    },
    "goldman_sachs": {
      title: "Virtual Experience Participant",
      org: "Goldman Sachs — Forage",
      line: "blue",
      date: "Virtual Experience",
      classification: "Enterprise Software Engineering",
      track: "Financial Technology",
      coreTech: "Software Engineering, Cryptography, Financial Data Modeling, Git Workflows",
      desc: "<ul><li>Completed the Goldman Sachs Software Engineering virtual experience program through the Forage platform.</li><li>Worked through practical tasks designed to simulate engineering workflows at a global investment bank.</li><li>Solved real-world challenges in system architecture, cryptographic decryption, password hashing, and secure financial transaction processing.</li><li>Gained practical knowledge of enterprise-grade software standards, data manipulation, and software development lifecycles.</li></ul>"
    },
    "codsoft": {
      title: "Web Development Intern",
      org: "CodSoft",
      line: "blue",
      date: "Internship",
      classification: "Web Application Development",
      track: "Frontend Engineering",
      coreTech: "Vanilla JavaScript, HTML5, CSS3, DOM Manipulation, Responsive UI, Git",
      desc: "<ul><li>Worked on web development projects using modern front-end technologies during a 1-month intensive virtual internship.</li><li>Developed responsive, user-friendly, and accessible web interfaces ensuring high performance across devices and browsers.</li><li>Applied semantic HTML5, modern CSS3 layout systems (Flexbox & Grid), and vanilla JavaScript to build interactive web projects.</li><li>Utilized Git and GitHub for version control, code structure maintenance, and collaborative code reviews.</li></ul>"
    },
    "ieee-vice-chair": {
      title: "Vice Chair - IEEE SB",
      org: "IEEE Student Branch",
      line: "magenta",
      date: "2024",
      desc: "<ul><li>Orchestrated regional workshops on web development and AI foundations.</li><li>Fostered collaborations with guest lecturers and other student bodies.</li><li>Expanded branch membership by 20%+ via structured outreach programs.</li></ul>"
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
        const hasMeta = !!(data.classification || data.coreTech);
        let metaHtml = '';
        if (hasMeta) {
          metaHtml = `
            <div class="details-heading-meta ${activePath}">
              ${data.classification ? `
                <div class="meta-line">
                  <span class="meta-label">Classification:</span> <span class="meta-val">${data.classification}</span>
                  ${data.track ? `<span class="meta-sep">|</span> <span class="meta-label">Track:</span> <span class="meta-val">${data.track}</span>` : ''}
                </div>
              ` : ''}
              ${data.coreTech ? `
                <div class="meta-line">
                  <span class="meta-label">Core Tech:</span> <span class="meta-val meta-tech">${data.coreTech}</span>
                </div>
              ` : ''}
            </div>
          `;
        }

        detailsPane.innerHTML = `
          <div class="details-header ${hasMeta ? 'has-meta' : ''}">
            <div class="details-title">
              <h3>${data.title}</h3>
              <span class="details-org ${activePath}">${data.org}</span>
            </div>
            <span class="details-date ${activePath}">${data.date}</span>
          </div>
          ${metaHtml}
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
        const hasMeta = !!(item.classification || item.coreTech);
        let metaHtml = '';
        if (hasMeta) {
          metaHtml = `
            <div class="modal-timeline-meta blue">
              ${item.classification ? `
                <div class="meta-line">
                  <span class="meta-label">Classification:</span> <span class="meta-val">${item.classification}</span>
                  ${item.track ? `<span class="meta-sep">|</span> <span class="meta-label">Track:</span> <span class="meta-val">${item.track}</span>` : ''}
                </div>
              ` : ''}
              ${item.coreTech ? `
                <div class="meta-line">
                  <span class="meta-label">Core Tech:</span> <span class="meta-val meta-tech">${item.coreTech}</span>
                </div>
              ` : ''}
            </div>
          `;
        }

        html += `
          <div class="modal-timeline-item">
            <span class="modal-timeline-node blue"></span>
            <div class="modal-timeline-card">
              <div class="modal-timeline-header ${hasMeta ? 'has-meta' : ''}">
                <div class="modal-timeline-title">
                  <h4>${item.title}</h4>
                  <span class="modal-timeline-org blue">${item.org}</span>
                </div>
                <span class="modal-timeline-date">${item.date}</span>
              </div>
              ${metaHtml}
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
        const hasMeta = !!(item.classification || item.coreTech);
        let metaHtml = '';
        if (hasMeta) {
          metaHtml = `
            <div class="modal-timeline-meta magenta">
              ${item.classification ? `
                <div class="meta-line">
                  <span class="meta-label">Classification:</span> <span class="meta-val">${item.classification}</span>
                  ${item.track ? `<span class="meta-sep">|</span> <span class="meta-label">Track:</span> <span class="meta-val">${item.track}</span>` : ''}
                </div>
              ` : ''}
              ${item.coreTech ? `
                <div class="meta-line">
                  <span class="meta-label">Core Tech:</span> <span class="meta-val meta-tech">${item.coreTech}</span>
                </div>
              ` : ''}
            </div>
          `;
        }

        html += `
          <div class="modal-timeline-item">
            <span class="modal-timeline-node magenta"></span>
            <div class="modal-timeline-card">
              <div class="modal-timeline-header ${hasMeta ? 'has-meta' : ''}">
                <div class="modal-timeline-title">
                  <h4>${item.title}</h4>
                  <span class="modal-timeline-org magenta">${item.org}</span>
                </div>
                <span class="modal-timeline-date">${item.date}</span>
              </div>
              ${metaHtml}
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
    <p>I focus on transforming technical concepts into impactful, practical solutions across <strong>Data Science, Machine Learning, and Web Systems</strong>:</p>
    <ul style="margin: 8px 0 12px 18px; padding: 0; line-height: 1.65; color: #475569;">
      <li><strong>AI &amp; Machine Learning:</strong> 6-Week AICTE internship with Edunet Foundation, plus specialized AIML for Geodata Analysis training with ISRO &amp; IIRS Dehradun.</li>
      <li><strong>Networking &amp; Infrastructure:</strong> Cisco Networking Academy Virtual Internship covering enterprise routing, switching, and Packet Tracer network simulations.</li>
      <li><strong>Software &amp; Web Engineering:</strong> Frontend development with rural startup Nayavayapar, Goldman Sachs Software Engineering virtual experience (Forage), and CodSoft web development.</li>
      <li><strong>Innovation &amp; Incubation:</strong> AICTE &amp; MIC IDE Bootcamp focusing on design thinking, business model formulation, and startup ideation.</li>
    </ul>
    <p>Complementing my industry internships, I have engineered predictive models including <strong>Gold Price Prediction, Heart Disease Prediction, YouTube User Behavior Analysis</strong>, and regional Makhana demand forecasting using Python, Scikit-Learn, Pandas, and TensorFlow.</p>
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

