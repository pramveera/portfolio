






    // Typing effect JS
    
    const texts = ["I'm a Freelancer", "I'm a Coder", "I'm a Developer"];
    let count = 0;
    let index = 0;
    let currentText = '';
    let letter = '';

    (function type() {
      if (count === texts.length) {
        count = 0;
      }
      currentText = texts[count];
      letter = currentText.slice(0, ++index);

      document.getElementById('typing').textContent = letter;
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
      document.querySelector('.row1').classList.add('stopped');
      document.querySelector('.row2').classList.add('stopped');}






      function showContent(id) {
      const tabs = document.querySelectorAll('.tab');
      const contents = document.querySelectorAll('.content');

      tabs.forEach(tab => tab.classList.remove('active'));
      contents.forEach(content => content.classList.remove('active'));

      document.querySelector(`.tab[onclick*='${id}']`).classList.add('active');
      document.getElementById(id).classList.add('active');
    }









    //  document.getElementById('downloadBtn').addEventListener('click', function () {
    //   const resumeUrl = 'assest/RESUME.pdf'; // Replace with your actual resume file path
    //   const a = document.createElement('a');
    //   a.href = resumeUrl;
    //   a.download = 'My_Resume.pdf';
    //   a.click();
    // });



     document.getElementById('downloadBtn').addEventListener('click', function () {
      const resumeUrl = 'assest/RESUME.pdf'; // Replace with your actual resume path
      window.open(resumeUrl, '_blank'); // Opens in a new tab
    });




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
