const PLAYERS = [
  "Spiderman",
  "Captain America",
  "Wonderwoman",
  "Popcorn",
  "Gemwoman",
  "Bolt",
  "Antwoman",
  "Mask",
  "Tiger",
  "Captain",
  "Catwoman",
  "Fish",
  "Hulk",
  "Ninja",
  "Black Cat",
  "Volverine",
  "Thor",
  "Slayer",
  "Vader",
  "Slingo",
];

// initialize players with image and strength
const initPlayers = (players) => {
  let detailedPlayers = "";
  detailedPlayers = players.map((value, index) => ({
    name: players[index],
    strength: getRandomStrength(),
    image: "./images/super-" + (index + 1) + ".png",
    type: "hero|villian",
  }));
  // Instead of forloop use Map method
  // Code here

  return detailedPlayers;
};

// getting random strength
const getRandomStrength = () => {
  return Math.ceil(Math.random() * 100);
};

// Build player template
const buildPlayers = (players, type) => {
  let fragment = "";

  // Instead of using for loop
  // Use chaining of Array methods - filter, map and join
  // Type your code here
  var indexList = [];
  if (type == "hero") {
    players.map((item, index) => {
      if (index % 2 == 0) indexList.push(index);
    });
  } else {
    players.map((item, index) => {
      if (index % 2 != 0) indexList.push(index);
    });
  }

  fragment += indexList.map(
    (index) => `<div class="player">
             <img src="${players[index].image}" alt="">
             <div class="name">${players[index].name}</div>
             <div class="strength">${players[index].strength}</div></div>`
  );

  return fragment;
};

// Display players in HTML
const viewPlayers = (players) => {
  document.getElementById("heroes").innerHTML = buildPlayers(players, "hero");
  document.getElementById("villains").innerHTML = buildPlayers(
    players,
    "villain"
  );
};

window.onload = () => {
  viewPlayers(initPlayers(PLAYERS));
};
