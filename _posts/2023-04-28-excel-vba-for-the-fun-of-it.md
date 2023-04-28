---
title: "Excel VBA for the Fun of It: My Favorite Projects"
layout: post
categories: excel, vba
---

So far on my website, I've gone over ways I've been able to use Excel VBA to approach a few structural engineering projects, as well as using it to automate tedious tasks. In this article, I would like to go over a few of the random and fun projects I have completed in VBA. I'll make two of them available to download!



![wordle](/assets/wordle.png){: width="600" }

## Wordle
<span style="font-size:1.4em">[Download Wordle Sheet][wordle_sheet]</span>

When I had a bit more free time about a year and a half ago, I started up a little side hustle doing some Excel consulting. I hope to write an article on that experience sometime in the future. Some of that Excel consulting was for a company called [Excel Rain Man](https://excelrainman.com/), and they gave a few really cool jobs to work on. One was creating a clone of the game "Wordle" in Excel to use for marketing materials.

I had never made such a complicated pseudo-application before, but I was really into it. Laying out the shapes to make the keyboard, and then creating the macro that accepts those "keyboard" inputs was very interesting. Getting the logic exactly correct with the yellow letters was a fun puzzle. Additionally, just adding features such as the colorblind mode, and styling the sheet to look like the original Wordle game was a ton of fun.

I was really proud of how this project turned out, and I learned or improved my skills in the process.

## Sudoku Solver
![sudoku](/assets/sudoku.gif){: width="550" }

<span style="font-size:1.4em">[Download Sudoku Solver][sudoku_solver]</span>

When I first decided to see if I could start up a little Excel consulting side hustle, I decided I need to make myself a few additional, flashy looking portfolio pieces. One of the results of that effort was my Sudoku solver. 

Note that this sheet does not create Sudoku puzzles (that problem is actually a bit more difficult), but it will solve any valid puzzle that you input into it. I preloaded a few for demonstration purposes.

I had a rough idea of how to approach this problem using backtracking, which essentially systematically guessing numbers, seeing if they're right, then making another guess until there are no errors. I had never done a problem like this, but it felt like a fun puzzle, so I decided to time myself and see how long it would take me to come up with a solution without looking anything up. I exceeded my expectations and had the code working in two hours. I was pumped!

I had one further issue, though. Even though I coded the sheet using pretty inefficient code, it still looked like it just solved the puzzle instantly. I looked up how to make Excel pause its code execution for 0.01 seconds at a time, and had it display its "guesses" as they were made, which gave me the nice visual effect I was aiming for. 

## Diablo 2 Monte Carlo Simulations
This one is even a bit more random and nerdy. A couple of years ago I was into playing the old video game "Diablo 2" with one of my friends who used to play it a lot back in its heyday (early 2000's). As is typical for me, I got obsessed with the mechanics of the game, and created a few Excel sheets to aid in optimization of some of the character and equipment decisions. 

Diablo 2 uses a lot of random generation, where the enemies' attributes and the character's attack results fall between different ranges of values determined by complicated formulas. Fortunately, these formulas are well-documented and available online. I saw a few cases online where people had taken averages and performed optimization calculations, but I was not convinced that using averages gave the correct answer.

So for a few specific use cases, I created a monte carlo simulator. This means you generate the relevant randomized values yourself, and record the results over and over. You set the number of simulations you want to get a good conclusion, and save a histogram or average values of the results. 

Using this, I could answer character optimization questions conclusively by simulating the character and the enemy a million times or so, and seeing if that result is better or worse than the alternatives.

This was pretty fun and funny to dig so deeply into, and I posted some of these sheets and conclusions on online forums. I learned a lot about probability from this process, and from Diablo 2 in general, and had a blast.

## Anagram Name Generator
![anagram](/assets/anagram.jpg){: width="600" }

Now this one is truly silly, and is a sheet I made back in 2014. I was having fun creating anagram names of my own name and of some friends. An anagram is the rearrangement of the letters in an existing name or phrase to get another one. A pretty classic example is from the Harry Potter series. <span style="color: salmon">MAJOR HARRY POTTER SPOILER WARNING:</span> where "Tom Marvolo Riddle" is revealed to rearrange to "I am Lord Voldemort."

I had come up with a few anagram names for me and some friends while bored, just by using pencil and paper, but I figured I could improve that a bit. The sheet I made to do so contains a large database of first and last names for men and women, which are available online from the US census. I can then type in my name or someone else's, and the sheet will return all of the other first and last names that can be made from those letters.

It will then also check to make sure there are no "perfect" results, where there is an exact combination of first and last names available. This almost never happens though, and you have to look through the results manually and see what you can make with leftover letters. I usually sort the results by fewest leftover letters to make this easier.

The sheet can also include middle names. In this case you input your first, middle, and last names, and it gives you all the combinations of two names you can make, along with the leftover letters to rearrange yourself. 

Here are the best results I have for my name.

First, Last:
* Atticus Beale
* Tactis LeBeau
* Isaac Lubette

First, Middle, Last:
* Laurence Alexis Debatta
* Atticus Andrea Exebella

You'll have to figure out my middle name from rearranging the letters :).

## Conclusion
I don't have any huge takeaways here. I just wanted to show that I've used Excel VBA for some fun tasks as well as useful ones. I was really proud of some of these sheets, enjoyed my time making them, and my Excel VBA skills improved along the way.

[wordle_sheet]: /assets/Excel Wordle Clone.xlsm
[sudoku_solver]: /assets/Sudoku Solver.xlsm
