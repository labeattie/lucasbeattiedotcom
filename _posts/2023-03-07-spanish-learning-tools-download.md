---
title: "Hola to Hablo: Two Spanish Tools You Can Download"
layout: post
categories: spanish
---

In the previous Spanish learning article, I talked about some of the strategies I'm using this year to improve my Spanish skills. I mentioned a vocabulary list I'm practicing in Anki, as well as a verb conjugation practice tool I made in Excel. Let's talk a little more about both of those, and right off the bat, here are links to download them:



## Download Links!
When opening the verb conjugation practice tool, you have to click "Enable Content" or similar at the top of the sheet in order for Excel to allow the VBA code to run.

<span style="font-size:1.3em">[Vocabulary Words List][word_list]</span>\
<span style="font-size:1.3em">[Verb Conjugation Practice Tool][verb_xlsm]</span>

![verb_tool](/assets/verb_tool.jpg)

## Word list
For my rote vocabulary practice, I developed a word list of 3600 words to learn. The text file above contains the Spanish word, translations, and categories, which you can import into [Anki][anki], or use however else you would like. 

Note, when importing into Anki, if you have other decks already made, be sure and change the setting for "Existing notes" to "Duplicate", or else it might not bring them all in. I had this issue, and ended up starting over after a couple of weeks of progress.

I was inspired to practice vocabulary directly by this blog post: [How Many Words Do You Need to Know to Be Fluent in Spanish][words_blog], which suggests that knowing the most common 3,000-4,000 words in a language will give you the capability of understanding and speaking 90% or more of it. 

A little further into the post, one study claimed you want to know roughly the following amounts of each type of word to obtain 90% proficiency.

* 2,600 nouns
* 230 verbs
* 980 adjectives
* 50 adverbs

Of course memorizing words isn't all you need to learn a language, and these overly specific numbers can probably be criticized easily. But I enjoyed the article and thought these numbers seemed like good targets. So I started looking for resources.

First, I found [this list][nouns1] of Spanish nouns on a blog. I added a few more [from here][nouns2] to try and be sure I didn't miss any super common nouns, and I trimmed down the resulting list to an even 2,000 words.

For verbs, I found a list of the most common 250 from www.linguasorb.com, which is available if you sign up with your email, so they were nicely taken care of. I only learn the infinitives in this vocabulary practice; we'll talk about learning conjugations in the next section.

The adjectives weren't quite so straightforward. I wasn't able to find a translated Spanish-specific list, so I ended up finding lists of the most common adjectives in English [here][adjectives1] and [here][adjectives2], and cobbled together a list of 1,000. I then used Google Translate within Google Docs to batch-translate the whole list. 

It's pretty awesome this capability is available for free, but of course the results weren't perfect. I did a small bit of cleaning up on the translations, but there certainly are still mistakes. I decided it was definitely good enough for my word list, though.

Finally, for adverbs, I found a list of 100 in Spanish at [this website][adverbs]. Nice and easy. 

I didn't vet any of these lists and don't know anything about the quality of their frequency ordering, but I doubt that sort of precision matters much, and this list will be great for the improvement I hope to get from it.

I could've been done here, but it left me with a very unsatisfying total of 3,350 words. So I found [this list][gen_word] of the most frequently used Spanish words of any type, and I pulled out the top 250 which didn't already appear anywhere else in my list. This rounded us out a more even 3,600 total words. 

Finally, Anki presents these words in the order they are input. I didn't want to learn the top 2,000 nouns before learning a single verb, so I needed to order the list. Randomizing it completely wasn't a good option, since it would then lose the frequency ordering. To take care of this, I wrote a little script in Excel VBA that randomly selects a word type, weighted by the number of words in each type, and picks out the next most frequent word in that category. 

I then loaded the resulting list into [Anki][anki], which is a popular "spaced repetition software". It presents you information in a flashcard-like format, using evidenced-based techniques to determine how often you should review words and learn new ones. I try and use Anki to learn and review these words just about 10 minutes a day, but probably only hit 3-4 days a week. 

![gif](/assets/anki.jpg)

## Verb Conjugator
In the previous Spanish article, I mentioned I was inspired to manually practice verb conjugations in Excel by [Language Lord's][lang_lords] YouTube video. His idea is that you should focus hard on learning 50 or so verbs that cover most of the different styles/patterns of verb conjugation, and then you'll be able to extend that knowledge to additional verbs you learn. 

He provides a list of the 50 he chose in the description of his video. It's a nice list of good choices, but I couldn't help but tinker with it a bit. 

In particular, I felt like "decir" should be on the list, as it one of the top 10 most common verbs and is highly irregular. And while doler (to hurt) is a great example of an "o to ue" stem-changing verb, you almost always use it in the form duele/duelen (it/they hurt me), similar to the way you use "gustar". I replaced it with the verb mover (to move). 

I added a few other common verbs and replaced a few uncommon ones and ended up with my own list of 50 verbs: 

```
ser, haber, estar, tener, hacer, decir, ir, ver, dar, saber, 
poner, venir, salir, traer, pasar, hablar, llevar, dejar, deber, leer, 
comer, aprender, vivir, escribir, permitir, abrir, buscar, llegar, alcanzar, parecer, 
conocer, creer, producir, dirigir, exigir, pensar, empezar, encontrar, recordar, jugar, 
querer, perder, entender, poder, volver, seguir, pedir, conseguir, sentir, morir
```

I then wanted to make an Excel sheet to practice conjugating these verbs, and I wanted Excel to check whether my entries are correct. To do this, I was able to find a database of verb conjugations [here][conj_database]. This was awesome, as typing out conjugations manually would take ages. I had to add a couple of verbs to the database manually and it was no fun at all.

I got to work and finished the Spanish Verb Conjugation Practice Tool over the course of a weekend. In it you can select your tense and mood, then either have Excel choose you a verb from your list randomly, or work through them in order. You type out all of the conjugated forms for that mood/tense and then the sheet checks to see if you got them all right. It will keep score for you as well. Here's a gif of it in action!

![gif](/assets/spanish verb sheet.gif)

I also included an alternate list of verbs one can practice on the sheet, which was just based off the list of 250 most common verbs mentioned in the previous section. However, more than a few were not in the verb database, and I didn't want to add them. So I deleted the ones that weren't in the list that I could live without, and then deleted a few more that I thought weren't crucial, bringing it down to a list of 200 of the most common verbs in order of frequency of use.

## What Tenses to Learn and When
Spanish has a lot of different verb tenses, and they all are conjugated a little differently from one another as well as differently depending on the pronoun of who is doing the verb. If you look up how many total tenses there are, you get a few different results, but here's a list of most of them:

* Present
* Preterite
* Imperfect
* Future
* Conditional
* Present Perfect
* Past Perfect
* Future Perfect
* Conditional Perfect
* Present Subjunctive
* Imperfect Subjunctive
* Present Perfect Subjunctive
* Past Perfect Subjunctive
* Imperative

Seems totally overwhelming doesn't it? Well don't worry. Let's talk about exactly what to learn and when.

First off, I wanted to limit the number of verbs I need to practice. I will take Language Lord's approach here and master the 50 core verbs from my list in the tenses I want to learn, and I'll hope that they can apply representatively to others across. I'll just have to learn any exceptions when applicable.

I also don't think I need to learn all of those tenses. In my mind there's a sort of tier list which ones are important to know. Something like:

* Tier 1: Present, Preterite, and Imperfect
* Tier 2: Future, Conditional, and Imperatives
* Tier 3: Present Subjunctive, Imperfect Subjunctive

What about all those perfect tenses? Or progressives, which I didn't mention? Honestly to me they don't even seem like real tenses. You just have to know how to conjugate haber and estar in many different tenses (which we practice in the 50 core verbs), and then you have to know the gerund and past participle of other verbs. 

In the conjugation tool, we practice the past participle and gerund with every tense, so these "compound tenses" should just happen automatically. It can't hurt to double check you're learning them, but they shouldn't require any focused effort.

The "tier 1" list is probably good enough for conversational proficiency. For talking about the future, you can use the "informal future", which is just using "ir a + infinitive". You won't have a hard time communicating things once you know present and past, and you'll probably automatically recognize verbs in the tenses you don't know when they're spoken to you.

When practicing verb conjugations, I think it's best to focus on one tense at a time. Mastering one opens up a lot of new options, and it feels like you make progress a lot faster when you don't divide your attention.

So far I have mastered my 50 verb list in the present tense, and I almost have the preterite down. I'm finding that there's some very good news once you get to this stage: the present and preterite are by far the hardest ones! 

I'll let you know if I was correct when I finish learning all the tenses I want to know, but I think mastering present and preterite means you're about halfway done. They both have loads of irregularities, whereas all of the other tenses seem to have very few... and most of the ones they do have are similar to irregularities you encountered in the present or preterite.

I initially planned master tier 1 as soon as possible, take my time on tier 2, and not even worry about tier 3. But now that I see acquiring each additional tense is relatively easy, I'm thinking I'll end up learning the subjunctive in the not too distant future. And to be clear, I'm claiming that learning to conjugate in the subjunctive is easy, not knowing when and how to use it. We'll also see if I'm singing a different tune when I get to it :P. 

## Conclusion
Those are the details of how I made and am using my vocabulary list and my verb conjugation practice tool. I had a lot of fun making them, but I'm not sure if my time would have been better spent practicing Spanish, rather than curating word lists and strategies. As you can probably tell, though, I have a lot of fun with this type of thing!

For a final word on learning Spanish, speaking in a way where you receive feedback and listening to Spanish should both always be happening. I think using these tools can speed up my initial progress greatly, but I will continue prioritize listening and speaking. So I think these resources are quite helpful, but wanted to put them in their proper place. I hope they're beneficial to someone else too!

[lang_lords]: https://www.youtube.com/watch?v=z8FACVD9vz4
[anki]: https://apps.ankiweb.net/
[words_blog]: https://howlearnspanish.com/how-many-words-do-you-need-to-know/
[nouns1]: http://frequencylists.blogspot.com/2015/12/the-2000-most-frequently-used-spanish.html
[nouns2]: https://www.busuu.com/en/spanish/nouns
[adjectives1]: https://www.wordexample.com/list/most-common-adjectives-english
[adjectives2]: https://www.talkenglish.com/vocabulary/top-500-adjectives.aspx
[adverbs]: https://mydailyspanish.com/common-spanish-adverbs/
[gen_word]: https://strommeninc.com/1000-most-common-spanish-words-frequency-vocabulary/
[conj_database]: https://www.ghidinelli.com/free-spanish-conjugated-verb-database
[word_list]: /assets/spanish 3600 word list.txt
[verb_xlsm]: /assets/spanish verb conjugation tool.xlsm