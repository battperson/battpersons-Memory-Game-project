/*
 * Create a list that holds all of your cards
 */


/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */
 //creating the Stars container variable
 const stars = document.getElementsByClassName('stars')[0].children;
 //creating the counting variable
 let counting = 0;
//creating the repeat icon variable
const icon = document.querySelector('.fa-repeat');
//declare moves variable
const moves = document.getElementsByClassName('moves');
//rating function
function rating(){
if(counting>11 && counting<17){
stars[2].firstElementChild.classList='fa fa-star-o'
}
else if(counting>16){
stars[1].firstElementChild.classList='fa fa-star-o'}
}
//couting functions
function count(){
counting++;
moves[0].innerText= counting;}
//Reset funstion that calls Shuffle
function reset(){
const fragment = document.createDocumentFragment();
var nodesArray = shuffle([].slice.call(document.querySelectorAll('.card')));
for (let i = 0; i < nodesArray.length; i++)
{
nodesArray[i].classList ='card';
fragment.appendChild(nodesArray[i])};
deck.innerHTML ='';
deck.appendChild(fragment);
//resets the move count
counting=0;
moves[0].innerText= counting;
//resets the rating stars
for(i=0; i<stars.length; i++){
stars[i].firstElementChild.classList='fa fa-star'};
}
// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}
//creating deck variable
const deck =document.querySelector('.deck');
//adding eventListener to code to flip cards
deck.addEventListener('click', function	(e){flip(e); limiter();});
//adding eventListener to the repeat button
icon.addEventListener('click',reset)

// flip card function
// Adds class open and show
function flip (e){
  const vas = e.path[0];
if(vas.classList== 'card'){
      e.target.classList.toggle('open');
      e.target.classList.toggle('show');
}
else if (vas.classList.contains('fa')) {
if(vas.parentElement.classList== 'card'){
    vas.parentElement.classList.toggle('open');
    vas.parentElement.classList.toggle('show');

}
}
}
//declare card var
const card =document.getElementsByClassName('card open show');
//unflip function
function unflip(){
  card[0].classList ='card';
  card[0].classList ='card';
}
//preventing over 2 cards being fliped and running functions
function limiter (){
if(card.length ==2){setTimeout(compare,500)}}
// for loop and if to compar cards
function compare() {
  if(card[0].firstElementChild.classList.value==card[1].firstElementChild.classList.value)
    {
      //adding  match class
      card[0].classList ='card match';
      card[0].classList ='card match';
      win();
  }
  else{
    unflip();
    }
    count();
    rating();
}
//win function for end of Game
function win(){
  if(document.getElementsByClassName('card match').length==16){
  for (i=0;i<deck.children.length; i++){
         deck.children[i].classList.toggle('shake')}}
 }
/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */
