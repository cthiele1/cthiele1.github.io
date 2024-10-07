class Dog {
  constructor(name, weight, pros, cons, diet, funfact, rating, image) {
    this.name = name;
    this.weight = weight;
    this.pros = pros;
    this.cons = cons;
    this.diet = diet;
    this.funfact = funfact;
    this.rating = rating;
    this.image = image;
  }

  //Section before clicked on
  getSection() {
    return `
            <div class="dog" onclick="showModal('${this.name}')">
                <h3>${this.name}</h3>
                <img src="${this.image}" alt="${this.name}" />
            </div>
        `;
  }

  //Shows section once clicked on
  getExpandedSection() {
    return `
            <div>
                <h2>${this.name}</h2>
                <img src="${this.image}" alt="${this.name}" />
                <p>Weight: ${this.weight}</p>
                <p>Pros: ${this.pros}</p>
                <p>Cons: ${this.cons}</p>
                <p>Diet: ${this.diet}</p>
                <p>Fun Fact: ${this.funfact}</p>
                <p>Rating: ${this.rating}</p>

            </div>
        `;
  }
}

const types = [
  new Dog(
    "Bernese Mountain Dog",
    "70-115 lbs",
    "Affectionate, good with children, excellent watchdogs.",
    "Shorter lifespan (often 7-10 years), prone to health issues (like cancer and hip dysplasia), needs regular grooming.",
    "High-quality, balanced diet, sometimes requires supplements for joint health.",
    "Bernese Mountain Dogs were originally used as farm dogs in the Swiss Alps, known for their strength and versatility.",
    "Awesome!!",
    "images/bernese.jpg"
  ),
  new Dog(
    "Golden Retriver",
    "55-75 lbs",
    "Friendly, intelligent, great family dogs, easy to train.",
    "Prone to certain health issues (like hip dysplasia and cancer), high grooming needs, requires regular exercise.",
    "High-quality dog food, often needs a diet rich in omega fatty acids for coat health.",
    "Golden Retrievers were originally bred in Scotland in the mid-19th century for retrieving game from both water and land.",
    "Awesome!!",
    "images/golden.jpg"
  ),
  new Dog(
    "Mastiff",
    "120-230 lbs",
    "Gentle giants, loyal, good with kids, low exercise needs.",
    "rone to health issues (like hip dysplasia), can be stubborn, needs space.",
    "High-quality dog food, careful with portions due to risk of obesity; some may require special diets for joint health.",
    "Mastiffs are one of the oldest dog breeds, with origins dating back over 5,000 years!",
    "Awesome!!",
    "images/mastiff.jpg"
  ),
  new Dog(
    "Saint Bernard",
    "110-200 lbs",
    "Gentle, great with kids, friendly, good temperaments.",
    "Prone to health issues (like hip dysplasia and heart problems), can drool a lot, requires space.",
    "High-quality dog food, careful with portions due to obesity risk; may require specialized diets.",
    "Saint Bernards were originally bred by monks in the Swiss Alps for rescue missions, and they’re famous for their life-saving abilities.",
    "Awesome!!",
    "images/saintbernard.jpg"
  ),
];

const displayDogs = () => {
  const container = document.getElementById("dog-container");
  types.forEach((dog) => {
    const section = document.createElement("div");
    section.className = "dog-section";
    section.innerHTML = dog.getSection();
    section.onclick = () => showModal(dog.name);
    container.appendChild(section);
  });
};

const showModal = (name) => {
  const dog = types.find((typ) => typ.name === name);
  const modal = document.getElementById("main-modal");
  modal.querySelector(".w3-content").innerHTML = dog.getExpandedSection();
  modal.style.display = "block";
  window.onclick = (event) => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  };
  modal.querySelector(".w3-content").focus();
};
window.onload = displayDogs;
