const pc = newPlayableCharacter(100, 110);

function newImage(url) {
  let image = document.createElement("img");
  image.src = url;
  image.style.position = "absolute";
  document.getElementById('wrapper').append(image);
  return image;
}

function newPlayableCharacter(x, y) {
  const element = newImage("asset.png/adventurer.png");
  element.style.zIndex = 1;

  function handleDirectionChange(direction) {
    if (direction === null) {
      element.src = `asset.png/adventurer.png`;
    }
    if (direction === "west") {
      element.src = `asset.png/adventurer.pngf`;
    }
    if (direction === "north") {
      element.src = `asset.png/adventurer.png`;
    }
    if (direction === "east") {
      element.src = `asset.png/adventurer.png`;
    }
    if (direction === "south") {
      element.src = `asset.png/adventurer.png`;
    }
  }

  move(element).withArrowKeys(x, y, handleDirectionChange);

  return {
    element: element,
  };
}

