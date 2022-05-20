function drag(ev) {
    ev.dataTransfer.setData("img", ev.target.id);
    ev.dataTransfer.setData("parent", ev.path[1].id);
  }

  function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("img");
    var parent = ev.dataTransfer.getData("parent");
    var parentDiv = document.getElementById(parent);
    var allreadyPresentImg = document.getElementById(ev.path[0].id);
    var newImg = document.getElementById(data);

    var secondParentDiv = document.getElementById(ev.path[1].id);
    parentDiv.removeChild(newImg);
    parentDiv.appendChild(allreadyPresentImg);
    secondParentDiv.appendChild(newImg);
  }
  function allowDrop(ev) {
    ev.preventDefault();
  }