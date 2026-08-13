/* ================= MOBILE MENU (DROPDOWN) ================= */

const menuBtn = document.getElementById("menuBtn");
const navbar = document.getElementById("navbar");

// ចុចលើរូប ☰ ដើម្បីបើក ឬបិទ Menu
menuBtn.addEventListener("click", () => {
  navbar.classList.toggle("active");
});

// បិទ Menu ស្វ័យប្រវត្ត នៅពេលដែលអ្នកចុចលើ Link ណាមួយក្នុង Menu
document.querySelectorAll(".navbar a").forEach(link => {
  link.addEventListener("click", () => {
    navbar.classList.remove("active");
  });
});
 

/* Close mobile menu after clicking a link */

document.querySelectorAll(".navbar a").forEach(link => {

  link.addEventListener("click", () => {
    navbar.classList.remove("active");
  });

});


/* ================= TEACHER DATA ================= */

const teachers = [

  {
    name: "លោក សុខ ដារ៉ា",
    subject: "គណិតវិទ្យា",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    experience: "10 ឆ្នាំ",
    bio: "លោក សុខ ដារ៉ា ជាគ្រូបង្រៀនគណិតវិទ្យា ដែលមានបទពិសោធន៍ក្នុងការបង្រៀន និងជួយសិស្សអភិវឌ្ឍជំនាញគណិតវិទ្យា។"
  },

  {
    name: "អ្នកគ្រូ ចាន់ ស្រីពៅ",
    subject: "រូបវិទ្យា",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    experience: "8 ឆ្នាំ",
    bio: "អ្នកគ្រូ ចាន់ ស្រីពៅ មានចំណង់ចំណូលចិត្តក្នុងការបង្រៀនរូបវិទ្យា និងការប្រើប្រាស់ការអនុវត្តជាក់ស្តែងក្នុងការសិក្សា។"
  },

  {
    name: "លោក ហេង វណ្ណៈ",
    subject: "គីមីវិទ្យា",
    image: "https://randomuser.me/api/portraits/men/46.jpg",
    experience: "12 ឆ្នាំ",
    bio: "លោក ហេង វណ្ណៈ ជាគ្រូគីមីវិទ្យាដែលផ្តោតលើការយល់ដឹងពីគោលការណ៍ និងការពិសោធន៍វិទ្យាសាស្ត្រ។"
  },

  {
    name: "អ្នកគ្រូ លីន សុភា",
    subject: "ភាសាខ្មែរ",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    experience: "7 ឆ្នាំ",
    bio: "អ្នកគ្រូ លីន សុភា ជាគ្រូភាសាខ្មែរ ដែលចូលចិត្តជួយសិស្សអភិវឌ្ឍការអាន ការសរសេរ និងការប្រើប្រាស់ភាសាខ្មែរ។"
  },

  {
    name: "លោក ពេជ្រ វិសាល",
    subject: "ភាសាអង់គ្លេស",
    image: "https://randomuser.me/api/portraits/men/67.jpg",
    experience: "9 ឆ្នាំ",
    bio: "លោក ពេជ្រ វិសាល ជាគ្រូភាសាអង់គ្លេស ដែលផ្តោតលើការអភិវឌ្ឍការនិយាយ ការស្តាប់ ការអាន និងការសរសេរ។"
  },

  {
    name: "អ្នកគ្រូ កែវ មុនី",
    subject: "ជីវវិទ្យា",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    experience: "6 ឆ្នាំ",
    bio: "អ្នកគ្រូ កែវ មុនី មានចំណាប់អារម្មណ៍លើវិទ្យាសាស្ត្រជីវិត និងជួយសិស្សឱ្យយល់ពីពិភពជីវសាស្ត្រតាមរយៈការសិក្សាជាក់ស្តែង។"
  }

];


/* ================= TEACHER MODAL ================= */

function openTeacher(index) {

  const teacher = teachers[index];

  document.getElementById("modalTeacherImage").src =
    teacher.image;

  document.getElementById("modalTeacherName").textContent =
    teacher.name;

  document.getElementById("modalTeacherSubject").textContent =
    teacher.subject;

  document.getElementById("modalTeacherSubject2").textContent =
    teacher.subject;

  document.getElementById("modalTeacherExperience").textContent =
    teacher.experience;

  document.getElementById("modalTeacherBio").textContent =
    teacher.bio;

  document.getElementById("teacherModal").classList.add("active");

}


function closeTeacher() {

  document
    .getElementById("teacherModal")
    .classList.remove("active");

}


/* ================= LOGIN ================= */

function openLogin() {

  document
    .getElementById("loginModal")
    .classList.add("active");

}


function closeLogin() {

  document
    .getElementById("loginModal")
    .classList.remove("active");

}


/* ================= LOGIN FORM ================= */

document
  .getElementById("loginForm")
  .addEventListener("submit", function(event) {

    event.preventDefault();

    const email =
      document.getElementById("email").value;

    const password =
      document.getElementById("password").value;

    const message =
      document.getElementById("loginMessage");


    /*
      IMPORTANT:
      នេះគ្រាន់តែជា Front-End Demo។
      វាមិនមែនជា Authentication ពិតទេ។
    */

    if (email && password) {

      message.textContent =
        "✅ Sign In បានជោគជ័យ!";

      message.style.color = "green";

      setTimeout(() => {

        closeLogin();

        message.textContent = "";

      }, 1500);

    }

  });


/* ================= CLOSE MODAL ================= */

window.addEventListener("click", function(event) {const teacherModal =
    document.getElementById("teacherModal");

  const loginModal =
    document.getElementById("loginModal");

  if (event.target === teacherModal) {
    closeTeacher();
  }

  if (event.target === loginModal) {
    closeLogin();
  }

});


/* ================= ESC KEY ================= */

document.addEventListener("keydown", function(event) {

  if (event.key === "Escape") {

    closeTeacher();
    closeLogin();

  }

});
