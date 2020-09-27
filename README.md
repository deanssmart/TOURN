# TOURN

### DevelopMe Coding Fellowship Technical Challenge (2020)

(./public/assets/images/TOURN-Preview.JPG)

### View the app online 

Open the live app in your browser with this link:

## Intro

Tron(esque) themed app which randomly creates pairings for a tournament bracket from a list of names collected from the user. 

### Technologies

- JavaScript
- React
- Redux
- JSX
- HTML/CSS
- Git (version managed)

### Functionality and Features

- User input player names
- Player number validation
- Random pairing generator
- Play multiple rounds
- Intellegent round names
- Ability to reset
- Awesome sound effect and theme song 👍
- Option to turn off theme song 👎
- A nod to Tron and the 80's 🕹️

### How to Use

- Enter a player name and click 'ADD'
- Keep doing this until you have the desired number of players (needs to be a power of 2 i.e 2, 4, 8, 16... etc)
- Click 'START TOURNAMENT'
- You can click 'NEW TOURNAMENT' at any point to reset the app
- For each game click the 'WON' button for the winning player
- Once all games are complete click 'NEXT ROUND'
- Continue until the final round where the tournament master is decided
- Click the 'TOURNAMENT MASTER' button and revel in the glory if it was you that won 🏆

## Setup on your machine

1. Create a local directory on your machine 
2. Run the following code in your command line to navigate into that directory:   

```shell 
$ cd ~/your-directory-name-here
```
3. Copy the SSH key from this GitHub repository `git@github.com:deanssmart/deanssmart-pingpong-tournament.git`

4. Run the following code in your command line to clone the repo to your machine (you can change the app-name to what you desire):  

```shell 
git clone git@github.com:deanssmart/deanssmart-pingpong-tournament.git <app-name>
```
5. Navigate to your new app directory (the app name you just picked):

```shell 
$ cd app-name
```
6. Install the dependencies:

```shell 
npm i
```
7. Run the following command to launch the app in your default browser at http://localhost:3000/:

```shell 
npm start
```
8. Enjoy

## Credits

### Sounds

- Effects from Zapsplat.com
- Music 'Searching For You' by WhiteHex from from YouTube Audio Library

### CSS 
- Adapted buttons from CodePen Home Alex Bodin https://codepen.io/Alexb98/pen/XWrqpxB 
- Adapted lasers from Evolution codepen https://codepen.io/Evolution/pen/auLlw
- Adapted tron style grid from CodePen Joah Gerstenberg https://codepen.io/JoahG/pen/QJQdJB