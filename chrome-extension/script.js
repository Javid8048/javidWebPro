function homeFunc() {
  window.history.back();
}

let inputEl = document.getElementById('input-el');
let tabBtn = document.getElementById('tab-btn');
let deleteBtn = document.getElementById('delete-btn')
let inputBtn = document.getElementById('input-btn');
let inptLst = document.getElementById('inptLst');
let myLeads = [];
let leadsFromLocalStorage = JSON.parse(localStorage.getItem('myLeads'));
console.log(leadsFromLocalStorage);

if (leadsFromLocalStorage) {
  myLeads = leadsFromLocalStorage;
  render(myLeads);
}

inputBtn.addEventListener('click', function() {
  myLeads.push((inputEl.value).toString());
  console.log(myLeads);
  localStorage.setItem('myLeads', JSON.stringify(myLeads));
  inputEl.value = "";
  render(myLeads);
  console.log(localStorage.getItem('myLeads'));
});

let savedTab = [];
tabBtn.addEventListener('click', () => {
  savedTab = window.location.href;
  console.log(savedTab);
  myLeads.push(savedTab);
  render(myLeads);
})

deleteBtn.addEventListener('dblclick', function() {
  localStorage.clear();
  myLeads = [];
  render(myLeads);
})

function render(myLeads) {
  let listText = '';
  for (val = 0; val < myLeads.length; val++) {
    listText += `<li> <a href="/${myLeads[val]}" target='_blank'>${myLeads[val]}</a></li>`;
  }
  inptLst.innerHTML = listText;
}

let newLeads = `["awsome"]`;
newLeads = JSON.parse(newLeads);
newLeads.push("fantastic");
newLeads.push('mindblowing');
console.log(typeof newLeads);
newLeads = JSON.stringify(newLeads);
console.log(newLeads);
console.log(typeof newLeads)