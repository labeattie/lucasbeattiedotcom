---
title: "Why Civil Engineers Should Learn Excel VBA Macros"
layout: post
categories: excel, vba
---

I've been an Excel enthusiast since late high school and taught myself how to use VBA near the end of college. I found this to be quite fun and rewarding, and so have kept an eye out for use cases in my job as a structural bridge engineer. Time and time again this has proven useful and led to fast and powerful solutions to problems I was working on. 

In my experience, few of my peers in structural or other civil engineering think of using coding/scripting software, even when the alternatives are time consuming or mundane. Let me tell you why I think civil engineers should learn how to use Excel VBA in their careers.



![VBA](/assets/vba generic.png){: width="600" }

## What is VBA?
Visual Basic for Applications is Microsoft's coding language that comes prepackaged with Excel as well as many other Office applications. We will focus on using it with Excel because I believe that to be the highest utility application for VBA, but just be aware it can be used with some other Office applications as well. For one example, I have used it to resize a couple of hundred photos in a Word document. Macros is the name for a set of code written in VBA. Now onto why you should be interested in learning to use it.

## It's free (and you already have it)
Well at least if you already have Microsoft Excel. In order to access VBA, go to File, Options, then select Customize Ribbon, and on the rightmost window, make sure the "Developer" box is checked. Now you have access to the developer tab on the ribbon, where you can create, edit, and record VBA macros. You can click the leftmost "Visual Basic" button to get to the window where code can be viewed and edited, or alternatively you can use the keyboard shortcut Alt+F11. 

That's it. You're ready to go! No software download is needed, no add-ins, and no purchase or installation request to send to the IT department.

## It's easy
VBA code is extremely easy to get started with. I plan to make another article in the near future about tips for getting started in VBA, but there are loads of free resources available to get started learning. I started learning with a tutorial series on YouTube. The documentation for this software is so robust and so many people are using it, that you can almost always figure out how to do exactly what you want with one of the first couple of results of a google search.

VBA code is intuitive to understand and easy to debug. You can probably slowly step through a simple existing macro (F8 in the VBA window) and follow exactly what's going one even if you've never seen VBA before. Here's an example of what I mean.

```visualbasic
Sub example()

Worksheets("Sheet1").Select
Range("a1").Select
i = 1

Do While i <= 10
    ActiveCell.Value = "Row " & i
    ActiveCell.Offset(1, 0).Select
    i = i + 1
Loop

End Sub
```

Even if you've never seen VBA before you can probably get a rough idea of what's going on here. And if not, I encourage you to paste the code into the VBA editor (click Insert, Module, and paste it in) and run it to see (Click Run, Run Macro).

And last but certainly not least, Excel allows you to record macros. To use this feature, you just click Record Macro, do the tasks you want to be available in code, and click Stop Recording. Excel creates a Macro for you which you can then run over and over. Alternatively, you can use this feature to figure out how to do something in your own code by recording an action and examining the resulting code. 

VBA is very easy to get started in, and you don't need to learn everything at once. I recommend only learning what you need to get a few simple tasks done, and let your skills improve over time.

## It's useful
Most importantly, learning to use Excel VBA is useful. I have come across many tasks where a basic knowledge of VBA, or even just a willingness to put in a couple of hours of trial and error, can save hours of uninteresting work. Some examples off the top of my head are: 

* Opening and printing several files
* Generating a recurring report from output data
* Repetitive and error prone data entry
* Reformatting data output from one program for input into another program

All of these tasks can be made lightning fast and ridiculously easy with a little bit of VBA, and they are great ways to get started. 

It doesn't have to end there though. As your skill in VBA grows, so do the opportunities to solve more complex problems. You can make sheets that serve as full programs where complex calculations are generated from user inputs, you can turn user inputs into input files for other software for efficient model iteration, and you can even interact with many software program directly with VBA. 

I plan to talk though some of the ways I've been able to use VBA in specific jobs in the future, but for a short preview, my favorite use for VBA lately is interacting directly with SAP2000. This allows me to auto-generate and iterate finite element models much faster, and in a much higher volume than I could do using SAP2000 manually.

## It doesn't need to affect QAQC
Lastly, I wanted to write a few words on checking calculations. This is one of the most vital parts of my job, and "checkability" is an import consideration when considering using software to perform calculations. I've come across a lot of fear toward using VBA (or other scripting/code) based on the belief that, because nobody else in the company knows how to use it, the code can't be checked. In my experience, this issue is easy to work around. If you put forth a bit of thought and planning in how you use VBA, your calculations should remain as checkable as ever. Maybe I will write a future post addressing this in more detail, but the main idea is that you:
1.	Keep calculations in Excel formulas rather than inside the VBA code
2.	Display or print all intermediate steps

I think about how I would approach the problem without VBA, set up the Excel sheet to be used in that way, and then use VBA to speed up data entry and iteration. Then when someone checks the calculation, they can use the sheet as if there is no VBA, and plug in some of the inputs to spot check all calculations.

That's it! I hope I've piqued your interest and inspired you to poke around in VBA a bit. I aim for this to be the first post of many on this website related to Excel and VBA. Good luck and let me know how it goes for you!