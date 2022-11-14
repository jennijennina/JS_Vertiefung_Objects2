const darkModeButton = document.getElementById("darkModeButton");
darkModeButton.addEventListener("click", () => {
  document.body.classList.toggle("dark_mode");
});
// ab hier Aufgabe
console.log("%c===== lev1_4: JavaScript this =====", "background-color:green");
function fahrrad() {
  console.log(this.name);
}
let name = "Canyon";
let obj1 = { name: "Merida", fahrrad: fahrrad };
let obj2 = { name: "Scott", fahrrad: fahrrad };
console.log(fahrrad); // Merida
console.log(obj1.fahrrad()); // undefiniert
console.log(obj2.fahrrad()); // Scott
console.log(
  "%c===== llev1_7: Objects Arrays Loop Accessing =====",
  "background-color:green"
);
let myMusic = [
  {
    artist: "The Beatles",
    title: "Abbey Road",
    release_year: 1969,
    medium: ["LP", "CD", "MC", "Download"],
    gold: true,
  },
  {
    artist: "Pink Floyd",
    title: "Dark Side of the Moon",
    release_year: 1978,
    medium: ["CS", "CD", "LP", "Download"],
    gold: true,
  },
  {
    artist: "Led Zeppelin",
    title: "Led Zeppelin IV",
    release_year: 1971,
    medium: ["CS", "LP", "Download"],
    gold: true,
  },
  {
    artist: "Metallica",
    title: "Kill ’Em All und Ride the Lightning",
    release_year: 1983,
    medium: ["LP", "CD", "MC", "Download"],
    gold: true,
  },
];
// forEach
myMusic.forEach(function (m) {
  console.log(m.artist);
  console.log(m.title);
  console.log(m.medium);
  if (m.release_year > 1975) {
    console.log(m.release_year);
  }
});

console.log(
  "%c===== lev1_8: Objects Arrays Loop Accessing =====",
  "background-color:green"
);
let studentData = [
  {
    name: "Alex",
    age: 23,
    coop: false,
    address: {
      street: "Don Valley Business Park",
      city: "Toronto",
      postalCode: "ONM3C3E5",
    },
    emails: ["alex69@gmail.com", "alex123@yahoo.com"],
  },
  {
    name: "Sandra",
    age: 22,
    coop: true,
    address: {
      street: "34 Lawrence Ave",
      city: "Toronto",
      postalCode: "ONM3C0E5",
    },
    emails: ["sandra@gmail.com", "sandra@yahoo.com"],
  },
];
// Greife mithilfe von forEach() auf Eigenschaften dieses Objekts zu.
studentData.forEach(function (b) {
  console.log(b.name);
  console.log(b.age);
  console.log(b.address);
});

// Greife mithilfe von map() auf Eigenschaften dieses Objekts zu.
let emails = studentData.map(function (g) {
  return g.emails;
});
console.log(emails);

console.log(
  "%c===== lev2_2:  Array Object sort() Singers =====",
  "background-color:green"
);
const singers1 = [
  {
    name: "The Beatles",
    country: "United Kingdom",
    period_active: { start: 1960, end: 1970 },
    genre: "Rock / Pop",
  },
  {
    name: "Elvis Presley",
    country: "United States",
    period_active: { start: 1954, end: 1977 },
    genre: "Rock and roll",
  },
  {
    name: "Michael Jackson",
    country: "United States",
    period_active: { start: 1964, end: 2009 },
    genre: "Pop / Rock / Dance / Soul / R&B",
  },
  {
    name: "Elton John",
    country: "United Kingdom",
    period_active: { start: 1964, end: "present" },
    genre: "Pop / Rock",
  },
  {
    name: "Madonna",
    country: "United States",
    period_active: { start: 1979, end: "present" },
    genre: "Pop / Dance / Electronica",
  },
  {
    name: "Led Zeppelin",
    country: "United Kingdom",
    period_active: { start: 1968, end: 1980 },
    genre: "Hard rock / Blues rock / Folk rock",
  },
  {
    name: "Rihanna",
    country: "United States",
    period_active: { start: 2005, end: "present" },
    genre: "R&B / Pop / Dance / Hip-hop",
  },
  {
    name: "Pink Floyd",
    country: "United Kingdom",
    period_active: { start: 1965, end: 1996, extra: 2014 },
    genre: "Progressive rock / Psychedelic rock",
  },
];
singers1.sort(function (e, f) {
  if (e.name < f.name) {
    return -1;
  }
  if (f.name > e.name) {
    return 1;
  }
  return 0;
});
console.log(singers1);
