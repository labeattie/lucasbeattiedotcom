---
title: "Hand Calculations in the Digital Age of Engineering: A Skill Worth Developing"
layout: post
categories: engineering
---

*I wrote this article a few months ago, while I was still working as a bridge engineer consultant. It still applies well in my current role developing engineering software, as hand-calculations, sanity checks, and engineering judgment are critical before shipping a product that several engineers will use.*

*Additionally, while this article was written in the context of structural engineering, the same approach could likely be employed regardless of discipline, anywhere where there's an increasing reliance on software to perform engineering calculations.*



![computer_paper](/assets/computer_paper.jpg){: width="600" }

## Introduction
Software gets more powerful year after year, and this provides countless advantages to engineers. Structural systems that would have been impossible to design with any precision can now be optimized and streamlined with a few program runs. All of this done while taking into account thousands of different load combinations. 

However, this technological advancement leaves some potential disadvantages in its wake. Chief among them is a disconnect between the structures we're modeling and an intuitive understanding of how they respond to loading and their primary design concerns. I think that this drawback can be largely mitigated by performing hand-checks alongside our models whenever possible.

## How to Approach the Hand-Check
![calculator](/assets/calculator.jpg){: width="350" }

It may seems overwhelming, or even impossible, to perform a calculation by hand that can be useful as a check against a complicated software model. After all, the reason we're using the software in the first place is because otherwise we can't perform an enormous matrix inversion to get results for thousands of load combinations. Let's just start with a low bar. How would you try and guess at the primary design forces without using any software?

Take the one or two load combinations you think have a high likelihood of controlling and guess at their points of applications. Now simplify your structural system as much as possible while it still remains potentially useful. Can you treat a multi-column pier cap as a two-span beam, a member in a moment frame as a fixed-fixed beam, or even a bridge as a simple span beam or a wall as a cantilever?

Most of the time you will be able to get a rough estimate of the controlling loads. It's even better if you can guess at how, and how much, the model will differ from your hand calculation. 

For example you might use the lever-rule to estimate loads on an abutment cap, but you know your elaborate model of the bridge will give more distribution of the load through the deck, so maybe your estimated loads will be something like 10% greater than those from the model. Or for another example, you might say, because I treated this span as fixed-fixed, and in reality the abutment isn't infinitely stiff, negative moments from the model might be somewhere on the order of 20% smaller than my estimate. 

Regardless, the point is to estimate the results (only as accurately as is feasible) before running and seeing the results of your model. 

Now if you run your model and the results are within your expected range compared to your hand calculations, then congratulations! You have a useful independent check of the results, an intuitive understanding of the structure, and greater confidence in your model.

What if the results aren't close at all? This happens all the time, and isn't a reason to fret, it's just time to start digging. Where do the hand calculations and model diverge? Does the model have a load combination controlling that you didn't consider? Do you have an error in your calculations or in the model input? 

This gives us the advantage of either bringing our intuitive understanding of the structure more in line with what the software is telling us, or catching errors in our software inputs or assumptions. Both are extremely valuable results, and here are a few reasons why.

## Avoid Disasters, Increase Efficiency
![stop_sign](/assets/stop_sign.jpg){: width="450" }

One of my engineering professors always told us that future failures in structural engineering won't result from applying an incorrect load factor or from forgetting a small load effect, but rather from big assumption errors. Perhaps the biggest area of risk for making these incorrect assumptions is in software inputs. An example was of someone who drastically undersized some steel beams for construction loading (while still non-composite), because they had unknowingly checked a box in their software to assume that "temporary shoring is provided."

It's easy to imagine how a hand-check could avoid a situation like this. Just making sure your software model is providing output within the same ballpark of the result provided from your intuitive understanding of the structure can help avoid some of the biggest possible vectors for disaster. Coupled with a robust check from a fellow engineer, the risk of such an error should plummet to near zero.

Speaking of that checking engineer, they probably want you to perform these parallel hand-calculations as well. It's not uncommon for the QAQC and checking process to comprise several rounds of going back and forth between designer and checker. These basic calculations (which I recommend performing both when you are the checker and the designer) decrease errors on both ends, and reduce the number of rounds of QAQC. 

Additionally, the intuitive understanding of the structure developed through a hand-check reduces confusion regarding the designer's approach for modeling a structure or what a checker is thinking during their review.

## Develop Judgment
![gavel](/assets/gavel.jpg){: width="350" }

I've used the words "intuitive understanding" several times in this article so far. It should be no surprise, then, when I mention it as an advantage unto itself. As a young engineer I was, and still am, amazed by some of my mentors and supervisors who seem to have an uncanny ability to get to the root of a structural design issue, or who immediately grasp the idea behind designing a structure and point out considerations I hadn't thought of.

These are prime examples of that elusive "engineering judgment" we hear so much about, and it's something that's learned both through experience and through spending time developing a natural understand of the structures one works on. 

Inputting data into models, checking it thoroughly, and retrieving results certainly provide data points for experience, but are a very inefficient approach to developing intuitive understanding. Creating these estimates/approximations of what you expect to get out of the model, comparing them to the model results, and then refining the two till they are roughly aligned, will flex these mental muscles and lead to engineering judgement becoming a strength, rather than a mysterious, enviable ability.

## Conclusions
I hope I have made a convincing case for taking the time to perform hand-checks alongside the impressive, intricate, and useful software we use in design and analysis. These software programs are allowing us to tackle problems of greater complexity in shorter time frames than ever before, and that is a huge win. Let's just not get so fast-paced that we forget to set aside the time to perform sanity checks on these programs and develop our intuition as engineers.
