---
title: "Automating Tedious Tasks with Excel VBA"
layout: post
categories: excel, vba
---

I have been able to use Excel VBA as a major part of some of the projects I've worked on in my career, and have covered a few in past articles. Sometimes, though, VBA can prove most useful when automating small tasks that are otherwise tedious. A little bit of knowledge and a willingness to tinker can give some big results.



![factory](/assets/factory.jpg){: width="600" }

## File Renaming
One convenient task that I only recently started using VBA for is file renaming. I often need to rename a large number of files in a folder to include a prefix or suffix with the job number or something else. This is extremely easy to perform in VBA, so now you never need to do the slow two clicks in Windows Explorer to rename something again. 

I have a very simple Excel sheet setup that looks like this.

![file_rename](/assets/file_rename.jpg){: width="350" }

And have the following code in a macro to batch rename the files:
```
Sub renamer()
Worksheets("Renamer").Select
direc = Range("b2").Value

i = 4
Do While Cells(i, 2).Value <> ""
    If Dir(direc & "\" & Cells(i, 3).Value) <> "" Then
        Kill direc & "\" & Cells(i, 3).Value
    End If

    On Error GoTo 100
    Name direc & "\" & Cells(i, 2).Value As direc & "\" & Cells(i, 3).Value
    On Error GoTo 0

    i = i + 1
Loop

MsgBox "Done."
Exit Sub

100
MsgBox "Couldn't find " & Cells(i, 2).Value & "."

End Sub
```

Give it a try! Make sure you have copies of the files you're trying to rename the first few times you try to use this.

I will also use this capability anytime I need to combine a lot of pdf's in order to create a calculation set, which is a common task in my job. I will use VBA to copy all the files from various directories into a "calc pdf" folder, and then add a numeric prefix to each of the files. After this, when I highlight and drag all of the files into Acrobat's "Combine Files into a Single PDF" module, they are in the correct order by default. This makes it easy to recreate and update the calculation set after any changes.

## Printing PDFs
In a similar fashion, I frequently find myself needing to open up several different Excel files and print a pdf of each one. This will often need to be done for a set of files multiple times throughout a design process due to small changes and corrections. This is a prime candidate for VBA.

I will usually approach this problem by making a list of files I want printed in one column of Excel, and then I put their directories in the next column. You can then write a simple VBA script to open each one, add a header if desired, and print to pdf, specifying what filename and location you want for the pdf. Once again, this is a big time saver when putting together calculations.

## Creating Folders 
A couple of days ago, my coworker asked me if it's possible to make a bunch of folders using excel VBA. He had a long list of about 50 bridge numbers for inspections we would perform later in the year, and needed a new folder in windows explorer for each of them. This turned out to be an extremely easy task, and after about 20 minutes of looking stuff up and a few lines of code, the 50 folders were created. We saved off this "folder creator" to be used again later.

Here's what the input and buttons look like, followed by the VBA code we used.

![folder_creator](/assets/folder_creator.jpg){: width="500" }

```
Sub make_folders()

direc = Range("c2").Value
flnm = Range("c3").Value
Set start_cell = Range(Range("c4").Value)

Set wb = ThisWorkbook
Set wb_input = Application.Workbooks.Open(flnm)
rw = start_cell.Row
col = start_cell.Column

Do While Cells(rw, col).Value <> ""
    MkDir direc & "\" & Cells(rw, col).Value
    rw = rw + 1
Loop

wb_input.Close savechanges:=False
End Sub
```

## Data Cleaning

![cleaning](/assets/cleaning.jpg){: width="450" }

VBA can also be used to clean up data. I use this most often to take output from an engineering program, and turn it into an Excel table that I can then perform calculations on, or into a format where it can be pasted into MicroStation to easily place in a table there.

This can be a bit tedious to set up, as each program will have unique output styles. The results can also be a bit fragile, since a small change in output format can require a lot of rework. However, when you're rerunning programs and pulling out the same data over and over, there are few things as satisfying as clicking a button and getting your results immediately.

A couple of tips I have when doing this are to either pull the original data output into Excel VBA from a text file, or to have a tab in Excel of the raw data that doesn't get edited. This way you don't have to re-paste the data back into Excel every time you make a change to the code or debug something. 

Also try and put any absolute numbers related to the output format (such as start looking in column 3, or offset 4 rows after finding the word "rating"), as variables up at the top of your code. You'll thank yourself later when these values change. 

## Editing Existing Sheets
Lastly I wanted to discuss a bit more broadly how learning the basics of Excel VBA leads to finding new ways to trivializing mundane tasks. Spending a few hours a day for a week or less will teach you your way around making basic macros, as well as some of the most common code. After that, you're likely already equipped to automate away basic tasks like the ones in this article.

There are so many preexisting solutions to similar tasks you can find though Googling. A surprising number of generous and helpful people have answered questions on forums such as Stack Overflow and MrExcel. 

However, these solutions will almost never work exactly the way you want if you just copy and paste them into your own Excel file. A tiny amount of tweaking is usually needed, and this process usually takes 5-10 minutes. It only requires knowing the most basic of Excel VBA code, a willingness to Google, and knowing your way around the VBA editor well enough to step through code (use F8). 

Your skill and familiarity will grow as you tackle these issues and see how people online approached the problems you want solved. Eventually, even long, complicated macros and sheets will seem as simple as stepping through the code slowly, and tweaking as need. At that point, thinking of good ways to use Excel VBA will become your primary bottleneck. 

## Conclusion
We all have repetitive, mundane tasks in our jobs. These are almost always great candidates for 20 minutes of investigation, looking to see if Excel VBA can do them for us. Taking the time to automate these tasks saves time, increases your Excel VBA skills and knowledge, and feels quite satisfying. Let me know if anyone has any favorite additional tedious tasks that they've automated away!
