var btn = document.querySelector('#a');
var display = document.querySelector('#b')

btn.f1.addEventListener("click", showFact1);
btn.f2.addEventListener("click", showFact2);
btn.f3.addEventListener("click", showFact3);
btn.f4.addEventListener("click", showFact4);
btn.f5.addEventListener("click", showFact5);

function showFact1() {
	display.innerHTML = "The difference between jam and jelly is that jam is made with mashed up fruit while jelly is made with fruit juice.<br><br><img src=\"images/jam.jpg\" alt=\"jam jars\">";
}

function showFact2() {
	display.innerHTML = "Bees are important because they pollinate approximately 130 agricultural crops in the US including fruit, fiber, nut, and vegetable crops. Bee pollination adds approximately 14 billion dollars annually to improved crop yield and quality.<br><br><img src=\"images/bee.jpg\" alt=\"bee\">";
}

function showFact3() {
	display.innerHTML = "The giant panda's distinct black-and-white markings have two functions: camouflage and communication.  Most of the panda - its face, neck, belly, rump - is white to help it hide in snowy habitats. The arms and legs are black, helping it to hide in shade. <br><br><img src=\"images/panda.jpg\" alt=\"panda\">";
}

function showFact4() {
	display.innerHTML = "Daisies contain a multitude of two types of florets: The center is made out of symmetrical yellow florets and the white ring contains another kind with elongated petal structures.<br><br><img src=\"images/daisy.jpg\" alt=\"daisies\">";
}

function showFact5() {
	display.innerHTML = "The first documented pizzeria in the world was open in Port'Alba in Naples, Italy during the late 1800s.<br><br><img src=\"images/pizza.jpg\" alt=\"pizza\">";
}