const itemList = document.getElementById("itemList");
const PrevButton = document.getElementById("PrevButton");
let currentIndex = 0;
const courseContent = [
  "Web Development",
  "JavaScript",
  "React JS",
  "Angular",
  "Java",
  "Android Developemtn",
  "Ios Development",
  "CSS",
  "HTML", "flutter  "
];
const numberLearner = [12, 4, 65, 8, 4, 3, 5, 89, 5,8];
// Hàm hiển thị các item hiện tại
function renderItems() {
  if (currentIndex < 5) {
    PrevButton.style.display = "none";
  }
  itemList.innerHTML = ""; // Xóa các item hiện có
  for (
    let i = currentIndex;
    i < currentIndex + 9 && i < courseContent.length;
    i++
  ) {
    const itemElement = document.createElement("button");
    const smallText = document.createElement("p");
    const HeadingText = document.createElement("p");
    smallText.className = "title";
    itemElement.className = "item";
    HeadingText.className = "heading";
    HeadingText.innerText = courseContent[i];
    smallText.innerText = `${numberLearner[i]} learners`;
    itemElement.appendChild(HeadingText);
    itemElement.appendChild(smallText);
    itemList.appendChild(itemElement);
  }
}

// Hàm xử lý khi nhấn nút "Next"
document.getElementById("nextButton").addEventListener("click", () => {
  if (currentIndex + 9 < courseContent.length) {
    currentIndex++; // Tăng chỉ mục để hiển thị các item tiếp theo
    renderItems();
    PrevButton.style.display = " block";
  }
});
document.getElementById("PrevButton").addEventListener("click", (event) => {
  if (currentIndex - 9 < courseContent.length) {
    currentIndex--; // Tăng chỉ mục để hiển thị các item tiếp theo
    renderItems();

    return;
  }
});
renderItems();
const items = Array.from(document.getElementsByClassName("card-display"));
const hovers = Array.from(document.getElementsByClassName("card-hover"));

// Kiểm tra số lượng phần tử trong hai mảng để đảm bảo chúng khớp nhau
if (items.length === hovers.length) {
    items.forEach((item, i) => {
        // Thêm sự kiện mouseover để hiển thị hover card
        item.addEventListener("mouseover", () => {
            hovers[i].style.display = "block";
        });

        // Thêm sự kiện mouseout để ẩn hover card
        item.addEventListener("mouseout", () => {
            hovers[i].style.display = "none";
        });
    });
} else {
    console.error("Số lượng phần tử 'card' và 'card-hover' không khớp!");
}
