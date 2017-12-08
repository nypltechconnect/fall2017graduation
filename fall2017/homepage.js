jQuery(document).ready(function($) {
  var carousel = [
    {
      "image path": "images/agape-love.jpg",
      caption: "Phase 1 - AGAPE Love"
    },
    {
      "image path": "images/alleycat-ice-cream.jpg",
      caption: "Phase 1 - Alleycat Ice Cream"
    },
    {
      "image path": "images/fonville.jpg",
      caption: "Phase 1 - Fonville"
    },
    {
      "image path": "images/history-of-the-art-movements.jpg",
      caption: "Phase 1 - History of the art Movements"
    },
    {
      "image path": "images/national-parks.jpg",
      caption: "Phase 1 - National Parks"
    },
    {
      "image path": "images/penny-pincher.jpg",
      caption: "Phase 1 - Penny Pincher"
    },
    {
      "image path": "images/sonnet-ly.jpg",
      caption: "Phase 1 - Sonnet.ly"
    },
    {
      "image path": "images/stractual-art.jpg",
      caption: "Phase 1 - Stractual Art"
    },
    {
      "image path": "images/visit-marseille.jpg",
      caption: "Phase 1 - Visit Marseille"
    },
    {
      "image path": "images/what-is-art.jpg",
      caption: "Phase 1 - What is Art"
    },
    {
      "image path": "images/big-oyster.jpg",
      caption: "Phase 2 - The Big Oyster"
    },
    {
      "image path": "images/bw-lens.jpg",
      caption: "Phase 2 - BW Lens"
    },
    {
      "image path": "images/kvark-scandinavian-adventures.jpg",
      caption: "Phase 2 - Kvark Scandinavian Adventures"
    },
    {
      "image path": "images/new-york.jpg",
      caption: "Phase 2 - New York"
    }
  ];

  function shuffle(array) {
    var currentIndex = array.length,
      temporaryValue,
      randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  carousel = shuffle(carousel);

  for (var i = 0; i < carousel.length; i++) {
    var indicator = document.createElement("li");
    indicator.setAttribute("data-target", "#myCarousel");
    indicator.setAttribute("data-slide-to", i);
    if (i == 0) {
      indicator.className = "active";
    }
    document.getElementById("carousel-indicators").appendChild(indicator);

    var item = document.createElement("div");

    if (i == 0) {
      item.className = "item carousel-text active";
    } else {
      item.className = "item carousel-text";
    }

    var itemImage = document.createElement("img");
    itemImage.setAttribute("src", carousel[i]["image path"]);
    item.appendChild(itemImage);

    var caption = document.createElement("p");
    caption.appendChild(document.createTextNode(carousel[i]["caption"]));
    item.appendChild(caption);

    document.getElementById("carousel-inner").appendChild(item);
  }
});
