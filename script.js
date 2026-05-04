let votes = JSON.parse(localStorage.getItem("votes")) || {};

function vote() {
  let username = document.getElementById("username").value;

  if (!username) return alert("Nick gir!");

  votes[username] = (votes[username] || 0) + 1;
  localStorage.setItem("votes", JSON.stringify(votes));
  renderList();
}

function renderList() {
  let list = document.getElementById("list");
  list.innerHTML = "";

  let sorted = Object.entries(votes).sort((a,b)=>b[1]-a[1]);

  sorted.forEach(([user,count])=>{
    let li = document.createElement("li");
    li.textContent = `${user} - ${count} oy`;
    list.appendChild(li);
  });
}

renderList();

/* SCROLL ANIMATION */
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

document.querySelectorAll(".hidden").forEach(el => observer.observe(el));