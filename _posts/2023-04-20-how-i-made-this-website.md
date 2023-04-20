---
title: "How I Made This Website (And You Can Too)"
layout: post
categories: website
---

In this article I wanted to provide a quick summary or guide on how I created this website. It can be done quite easily and for free! First we'll quickly go over how the setup works, and if that's too technical or uninteresting, don't worry. Right after that, we'll go through the easy steps to create your own website in a similar way.



![site](/assets/site_screen.jpg)

## The Technology
If you aren't interested in reading the basics of how everything works, you can skip this section and get straight into creating a website.

My website uses Jekyll, which is a "static site" generator. A static website just means that a website is delivered to the user's browser exactly the way it's stored. There's no fancy back-end logic or processing. Basically, static sites are just simple sites, and are certainly appropriate for a blog or personal website.

A static website is potentially composed of 3 things, and only 3 things. Some html files (hypertext markup language, which contain the contents of the site), css files (cascading style sheets, which color, position, and otherwise style the contents), and JavaScript, which can run some basic code or logic. 

Html and css can be a bit confusing to learn, setup, and type content in, which is where a site generator like Jekyll comes in. With Jekyll, you can choose between premade themes, so you don't have to mess with any css, and Jekyll also allows you to type content in markdown rather than html. Markdown has its own learning curve, but is easy to pick up and is much more user-friendly than html. Here's an example of content typed in html vs. markdown so you can see what I mean.

```markdown
## Heading 2
First paragraph//
Second paragraph

### List
1. First Item
2. Second Item
3. Third Item

### Table
 Header 1 | Header 2 
----------|----------
 Cell 11  | Cell 12  
 Cell 21  | Cell 22  
```

```html
<h2>Heading 2</h2>
<p>First paragraph</p><br>
<p>Second paragraph</p>
<h3>List</h3>
<ol>
  <li>First Item</li>
  <li>Second Item</li>
  <li>Third Item</li>
</ol>
<h3>Table</h3>
```

It's much easier to get your articles or other content written in markdown. 

This site is then hosted through GitHub pages. GitHub provides static site hosting for free, and will even run the Jekyll static site generator for you. This means you don't have to download Jekyll or run Jekyll on your computer. You can just copy the files that make up a Jekyll theme, edit the content, and post it on GitHub, and you have a nice looking website for free!

The only catch is you will have a website URL that is something like username.github.io/websitename. This is, of course, fine and amazing to make websites with. If you want a cleaner URL, you have to pay for a domain name. 

I bought my domain name through google domains for $12 a year for a few years. You then set up your GitHub repository (just the GitHub folder where your website files are stored) to use your custom domain name. And that's it!

## Step by Step Guide
![logos](/assets/logos.jpg){: width="350" }

### 1. Choose a Jekyll Theme
We will start with a fun part. Go to jekyllthemes.io or jekyllthemes.org or another Jekyll themes site you find, and pick out a theme you like. You can filter out to only free themes if desired. On all of these themes, you can click "Live Demo" to see what the theme really looks like as a webpage. I used the contrast theme from jekyllthemes.io when I created my website. I used [Kathryn Schuler's YouTube video]( https://www.youtube.com/watch?v=qZsgPgGdOzQ) when I was making it.

### 2. Fork the Repository
Go to github.com and create an account. GitHub is a tool used ubiquitously in the tech space, and it has a lot of applications and lingo associated with it. I'm only going to be trying to explain the most basics of how to use it in this context. For now you can think of GitHub as a Dropbox or a Google Drive, something that stores files for you on the web. It also tracks old versions of your files and will host our website. "Repositories" are just folders containing a certain project in GitHub.

Next click "Get on Github" if in jekyllthemes.io or "Homepage" if in jekyllthemes.org. This will take you to the GitHub repository containing the files that make up the live demo of the site, and will serve as our theme. Next, you click "Fork" in the upper right. 

When we "fork" this repository to get the Jekyll theme, it just means we are copying that folder down to our own GitHub account. You can now click "Settings" and change the repository name to whatever you want. For example, I named mine "lucasbeattiedotcom." 

### 3. Set to Deploy with GitHub Pages
Next click on "Settings", and click "Pages" on the left. Then change the Source setting to "Deploy from a branch", and the Branch setting to "Main". If GitHub has changed their user interface for this action by the time you're reading it, hopefully it's still self-explanatory. Don't be afraid to experiment and see what happens or to Google for an updated answer.

A quick note on making changes to your site. GitHub takes time to redeploy your site. So every time you make a change, you have to wait about 2 minutes for the changes to take place. The status of this process can be viewed by clicking on "Actions" at the top of your repository. 

Also, your browser will cache some settings, so if you're messing with colors or something other than content, it can help to refresh the page using ctrl+shift+r, which performs a refresh that ignores cached content. I didn't know about the latter tip when I was first making my site, and it was giving me fits while I was trying to change colors.

Now your website should be live! You can go to it through using the URL username.github.io/repository_name. But of course we haven't changed any of the files yet, so right now, the content will be the same as the live demo you'd seen. We'll go over making those changes next.

### 4. Change the config
![gears](/assets/gears.jpg){: width="350" }

The next thing we will do is edit the _config.yml file. You can do this in several different ways. If you know how to use GitHub via command line and have it installed, we can clone this repository and edit files with your text editor of choice, such as Notepad++ or VSCode. You can also install GitHub's desktop program and navigate to it that way. However, in this article, I'm going to go over the easiest way to edit files, which is straight through the GitHub website.

Navigate to your repository and click on the _config.yml file, then click the little pencil icon somewhere in the upper right to edit the file. Here you can edit the title, author, description, and social media links. Probably just leave the rest of the settings the same. If you want a few more details on making these edits, check out Kathryn's video I linked above, but it should be pretty straightforward. Again, don't be afraid to experiment and see what the settings do.

### 5. Editing and Adding Content
It's finally time to change the site's contents. First, the "about" page is in the main website folder. In my case, the file is called README.md. You can edit this with your favorite code text editor such as Notepad++ or VSCode. For tips on how to use markdown, you can view the sample posts that came along with the theme (in the _posts folder), or you can reference a markdown guide such as this one: [GitLab Markdown Handbook](https://about.gitlab.com/handbook/markdown-guide/).

Now in the _posts folder we do the same thing and delete or edit the markdown files that are in there to something that you want as a post. When you want to add a new post rather than editing an existing one, simply drop it into the _posts folder on GitHub by clicking Add file, Upload files. That's it! You now have your website!

### 6. Add Custom Domain Name (optional)
This step is entirely optional and is the only part in this article that costs money. If you bought a custom domain name from Google domains (there are other vendors, but I think most people use Google), we have to configure that both in GitHub and in Google Domains.

In GitHub, go to the repository settings, and Pages. Scroll down to Custom domain, and add your custom URL. For example, mine is lucasbeattie.com. Also check "Enforce HTTPS" if possible. If it's grayed out, go back and check it after performing the other steps in this section. This provides a bit more security.

Next, we will go to GitHub's instructions for adding a custom domain name, which you can Google to find, but the current page we are interested in is here: [GitHub pages, manage a custom domain]( https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site). 

Scroll down until you see a list of four or so IP addresses that look something like "185.199.108.153". We will need to input these into our Google Domains settings.

Now go to Google Domains and navigate to the domain you want to use, and click on DNS. DNS stands for Domain Name System, and can be thought of as a website phone book. The internet truly navigates to websites by reading servers (which are just computers meant to be read by other computers), and those servers are known by their IP addresses. The DNS tells your computer the IP address that we want a URL to link to. 

We go to "Custom record" and we will add the IP addresses we found on GitHub's site above. We can leave Host name blank, and we will choose "A" for Type. Leave 3600 in as the TTL, and copy in the first of the 4 IP addresses we got from the GitHub page into the Data box. Next click "Add more to this record" and add the other 3 IP's.

Ok last step. Now we add one more custom record. This time we type "www" as the Host name, change the Type to "CNAME", leave the TTL as 3600, and type in your custom domain into the data box (lucasbeattie.com for example). This allows both websitename.com and www.websitename.com to go to your site. Ok phew, that is one of the more confusing parts of the whole process.

## Customizations I Made
![code](/assets/misc_code.jpg){: width="350" }

In this final section, I will go over most of the customizations I made to my theme while making this website. This will, for the most part, be specific to the Contrast theme, but most Jekyll themes are structured relatively similarly. 

First, my color scheme was decided by global user preferences as to whether it was dark text on light background or vice versa. I wanted to choose the colors myself and have them be the same for all users. To change this, I went to basic.sass in the sass folder (sass is a file type that will generate the css files for the website). Near the top, in BOTH the body and the @media sections, I changed the code to background: $dark, and color: $light.

Then, to set those color variables, I went to index.sass in the sass folder, and changed the $dark and $light variables to the hex colors I wanted. You can Google a hex color picker to pick out your own colors. But for example, mine are set to #0f0f0f and #e3e3e3 respectively. 

I also changed the header font and color by editing the basic.sass file again. In the h1, h2, h3, h4, h5, h6 section, I added font-family, and color property definitions. I also then adjusted the margin-top and margin-bottom properties to make them look better with my heading. That section of my basic.sass file looks like this:

```
h1, h2, h3, h4, h5, h6
  font-weight: $heading-weight
  font-family: courier, monospace
  color: mediumaquamarine
  margin-bottom: 0.3em
  margin-top: 0.9em
```

The last thing I did was add google analytics to my site, just to see how many people visit it for fun. I just Googled "add google analytics to Jekyll site", and followed the guide I found here: [Google Analytics for Jekyll](https://desiredpersona.com/google-analytics-jekyll/).

## Conclusion
That's it! Takes a bit more tinkering than using WordPress or Squarespace (I'm assuming, I haven't ever actually tried it), but isn't too bad. And now you have your own website for free! There are plenty of other good guides and videos out there about making Jekyll websites, so don't be afraid to look around. Enjoy! 
