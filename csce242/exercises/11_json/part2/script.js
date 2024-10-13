const getBreweries = async () => {
  const url = "https://api.openbrewerydb.org/breweries";

  try {
    const response = await fetch(url);
    return response.json();
  } catch (error) {
    console.log(error);
  }
};

const showBreweries = async () => {
  const brewery = await getBreweries();

  brewery.forEach((brewery) => {
    document
      .getElementById("breweries-section")
      .append(getShoeSection(brewery));
  });
};

const getBreweriesSection = (brewery) => {
  const section = document.createElement("section");

  const name = document.createElement("name");
  name.innerHTML = brewery.name;
  section.append(name);

  const brandP = document.createElement("p");
  brandP.innerHTML = brewery.name;
  section.append(brandP);

  const ul = document.createElement("ul");
  section.append(ul);

  //loop through the reviews
  brewery.reviews.forEach((review) => {
    const li = document.createElement("li");
    li.innerHTML = review;
    ul.append(li);
  });

  return section;
};

//show all of the shoes when the page loads
showBreweries();
