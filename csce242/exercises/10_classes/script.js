class Dog {
  constructor(title, breed, color, age, size, pic) {
    this.title = title;
    this.breed = breed;
    this.color = color;
    this.age = age;
    this.size = size;
    this.pic = pic;
  }
  get item() {
    const section = document.createElement("section");
    section.classList.add("dog");

    //creates a header
    const h3 = document.createElement("h3");
    h3.innnerHTML - this.title;
    section.append(h3);

    //create my columns
    const columnsDiv = document.createElement("div");
    columnsDiv.classList.add("columns");
    section.append(columnsDiv);
    const firstColumn = document.createElement("div");
    section.append(firstColumn);
    const secondColumn = document.createElement("div");
    section.append(secondColumn);

    //create image and to first column
    firstColumn.append(this.picture(this.pic));

    //create info data and add to second column
    secondColumn.append(this.paragraph("Breed", this.breed));
    secondColumn.append(this.paragraph("Breed", this.breed));

    return section;
  }
  picture(info) {
    const pic = document.createElement("img");
    pic.src = "images/" + info;
    return pic;
  }
  paragraph(title, info) {
    const p = docuemnt.createElement("p");
    p.innerHTML = "<strong";
  }
}

const dogs = [];
//const myDoc = new Dog("molly", "pitbull", ...)
dogs.push(new Dog("Coco", "Morkie", "Black", 5, "small", "yorkie.jpg"));
dogs.push(new Dog("Sam", "Golden", "Yellow", 5, "small", "yorkie.jpg"));
dogs.push(new Dog());

dogs.forEach((dog) => {
  document.getElementById("dog-list").append(dog);
});
