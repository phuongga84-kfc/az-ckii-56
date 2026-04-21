// ==========================================
// CẤU HÌNH DỮ LIỆU
// ==========================================
const subjectConfig = {
  Toán: {
    name: "Toán học",
    icon: "📐",
    locked: false,
    parts: [
      { name: "Phần 1", link: "https://azota.vn/de-thi/olkvwx" },
      { name: "Phần 2", link: "https://azota.vn/de-thi/6he5kr" },
      { name: "Phần 3", link: "https://azota.vn/de-thi/vvezgi" },
      { name: "Phần 1+2", link: "https://azota.vn/de-thi/zzzozd" },
      { name: "FULL ĐỀ", link: "https://azota.vn/de-thi/pmy9so" },
    ],
  },
  "Vật Lý": {
    name: "Vật lý",
    icon: "⚛️",
    locked: false,
    parts: [
      { name: "Phần 1", link: "https://azota.vn/de-thi/9fxegp" },
      { name: "Phần 2", link: "https://azota.vn/de-thi/dyeom9" },
      { name: "Phần 3", link: "https://azota.vn/de-thi/mxfloa" },
      { name: "Phần 1+2", link: "https://azota.vn/de-thi/6n2w4b" },
      { name: "FULL ĐỀ", link: "https://azota.vn/de-thi/lloaox" },
    ],
  },
  "Hóa Học": {
    name: "Hóa học",
    icon: "🧪",
    locked: false,
    parts: [
      { name: "Phần 1", link: "https://azota.vn/de-thi/lbkhs9" },
      { name: "Phần 2", link: "https://azota.vn/de-thi/sbpwin" },
      { name: "Phần 3", link: "https://azota.vn/de-thi/8komp5" },
      { name: "Phần 1+2", link: "https://azota.vn/de-thi/rd48gk"},
      { name: "FULL ĐỀ", link: "https://azota.vn/de-thi/2frgbj" },
    ],
  },
  "Địa Lý": {
    name: "Địa lý",
    icon: "🌍",
    locked: true,
    parts: [
      { name: "Phần 1", link: "" },
      { name: "Phần 2", link: "" },
      { name: "Phần 3", link: "" },
      { name: "Phần 1+2", link: "" },
      { name: "FULL ĐỀ", link: "" },
    ],
  },
  "Lịch Sử": {
    name: "Lịch sử",
    icon: "📜",
    locked: false,
    parts: [
      { name: "Phần 1", link: "https://azota.vn/de-thi/hy1bae" },
      { name: "Phần 2", link: "https://azota.vn/de-thi/6ciykq" },
      { name: "FULL ĐỀ", link: "https://azota.vn/de-thi/pj3lxr" }
    ],
  },
  "GDKT & PL": {
    name: "GDKT & Pháp luật",
    icon: "⚖️",
    locked: false,
    parts: [
      { name: "Phần 1", link: "https://azota.vn/de-thi/8urdd8" },
      { name: "Phần 2", link: "https://azota.vn/de-thi/ui8yw7" },
      { name: "FULL ĐỀ", link: "https://azota.vn/de-thi/o5cug3" },
    ],
  },
  "Ngữ Văn": {
    name: "Ngữ văn",
    icon: "📚",
    locked: false,
    parts: [
      { name: "Ngữ liệu 1", link: "https://azota.vn/de-thi/qwxw7d" },
      { name: "Ngữ liệu 2", link: "https://azota.vn/de-thi/psz6pp" },
      { name: "FULL ĐỀ", link: "https://azota.vn/de-thi/kdg4vy" },
    ],
  },
};

// ==========================================
// XỬ LÝ GIAO DIỆN
// ==========================================

function initApp() {
  const mainMenu = document.getElementById("main-menu");

  for (let key in subjectConfig) {
    const data = subjectConfig[key];

    let btn = document.createElement("button");
    btn.className = "btn";
    btn.innerHTML = `<span class="summer-icon">${data.icon}</span> ${data.name}`;

    if (data.locked === true) {
      btn.classList.add("btn-disabled");
    } else {
      btn.onclick = () => openSubject(key);
    }

    mainMenu.appendChild(btn);
  }
}

function openSubject(key) {
  const data = subjectConfig[key];
  document.getElementById("subject-title").innerHTML =
    `<span class="summer-icon">${data.icon}</span> Ôn tập ${data.name}`;
  const subMenu = document.getElementById("sub-menu");
  subMenu.innerHTML = "";

  data.parts.forEach((part) => {
    let a = document.createElement("a");
    a.className = "btn";
    a.innerText = part.name;

    if (part.link && part.link.trim() !== "") {
      a.href = part.link;
      a.target = "_blank";
    } else {
      a.href = "#";
      a.classList.add("btn-disabled");
      a.innerText += " (Chưa mở)";
    }
    subMenu.appendChild(a);
  });

  switchView("view-subject");
}

function switchView(viewId) {
  ["view-home", "view-subject"].forEach((id) => {
    const el = document.getElementById(id);
    el.classList.add("hidden");
    el.classList.remove("fade-in-up");
  });

  const target = document.getElementById(viewId);
  target.classList.remove("hidden");
  // Trigger reflow để animation chạy lại mượt mà
  void target.offsetWidth;
  target.classList.add("fade-in-up");
}

function goHome() {
  switchView("view-home");
}

// Khởi chạy ứng dụng
initApp();
