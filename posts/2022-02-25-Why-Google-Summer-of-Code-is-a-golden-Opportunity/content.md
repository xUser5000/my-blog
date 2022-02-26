# Intro

السلام عليكم

This article should serve, at least I tried to make it so, as a comprehensive guide for everyone who wants to apply to Google Summer of Code (GSoC for short). Most of the information provided is based on my personal experience in completing Google Summer of Code 2021 at [Joplin](https://joplinapp.org/). If your time is so limited, you can just skim through the article by reading the titles and bold phrases. With that said, you are encouraged to read the whole thing because, hopefully, you will gain much more information.

I wanna thank these amazing people for helping me in writing this article and providing feedback.
- [Ahmad Mamdouh](https://www.linkedin.com/in/ahmad45123/)
- [Ahmed Ibrahim](https://www.linkedin.com/in/ahmedibrahim404/)
- [Ibrahim Abou Elenein](https://www.linkedin.com/in/aboueleyes/)
- [Moamen Zakaria](https://www.linkedin.com/in/moamen-zakaria-465543177/)

I hope you have a nice and interesting reading time!

# What is Google Summer of Code?
> Google Summer of Code is a global, online program focused on bringing new contributors into open source software development. GSoC Contributors work with an open source organization on a 12+ week programming project under the guidance of mentors.

This is what you will see when visiting GSoC's [home page](https://summerofcode.withgoogle.com/)and it suffices to give you a glimpse of what GSoC is. However, you should note the following:
- **GSoC is not a Google Internship** (Important to know), meaning you don't work for Google. Instead, you work remotely for an open-source organization of your choice. If you want to intern for Google, you can check out [SWE](https://careers.google.com/jobs/results/?employment_type=INTERN&jlo=en_US&q=Software%20Engineer) or [STEP](https://careers.google.com/jobs/results/?employment_type=INTERN&jid=171815001&q=STEP&src=Online%2FTOPS%2FTOPS_site&utm_campaign=ByF&utm_medium=Byf&utm_source=ByF).In fact, after I completed the program, they sent me an email on how to showcase GSoC on my resume and they emphasized the fact that I should NOT write that I was a Google intern.
- **Participating in GSoC is no longer limited to university students** (whether it be bachelor's, master's, or Ph.D.). Starting from the summer of 2022, all open source newcomers who are 18 and older are welcomed to participate in the program.
- **GSoC is beginner-friendly**. As stated above, the purpose of the program is to "bring new contributors into open source software development". Furthermore, the program environment gives you all the time in the world to learn and make mistakes as much as you can. You only need to have basic programming skills (more on that later). You don't have to be a GrandMaster in competitive programming or code in x86 Assembly to get accepted and pass the program. If someone like me can get accepted and pass the program, then you can do it too.
- Previously, the program required participants to complete their projects in 12 weeks or less. Starting from 2022, participants, with the agreement of mentors, **can extend the timeframe of the program as they like**.
- Starting from 2022, they added the concept of **medium and large-sized projects**. Large-sized projects require more work but get you more money.
- You can checkout **several other programs that resemble GSoC** (in terms of working on open-source projects) such as [MLH Fellowship](https://fellowship.mlh.io/) and [GirlScript Summer of Code](https://gssoc.girlscript.tech/).

# Why should I apply?
Apart from being a method to show off your superiority and flex on your non-GSoC friends :), there are so many advantages to participating in GSoC, like:
- **You get paid a decent amount of money**. The exact number differs from country to country due to some complex financial stuff I don't understand (or maybe because I'm lazy). But, generally, the stipends are adjusted to match the cost of living in each country. Previously, in 2021, if you successfully completed the program while residing in Egypt, you receive a total of **1500** USD (you actually get a little bit less because of transaction costs and other stuff). Starting from 2022, large-sized projects pay more than medium-sized projects. 45% of the total stipend is paid upon passing the first evaluation (more on that later) and the other 55% are paid after successfully completing the entire program. You can find more details about stipends in [here](https://developers.google.com/open-source/gsoc/help/student-stipends).
- **You boost your technical skills**. GSoC is a great chance to develop, manage, and deploy a real-world project used by real people with the help of a mentor (whose job is to answer your questions regarding the project and guide you towards the completion of the program). This is enough to make you learn a lot of concepts and practices and apply them directly in your project. For me, I enhanced my skills in **object-oriented design**, applied the philosophy of "**release early, release often**", learned how to harness the full power of **source control systems**, **unit-testing**, **documentation**, **semantic versioning**, and other skills that would need another article to fully explore. I also learned some research concepts like **BibTeX** and **CSL** as a byproduct, but that was just due to research being the main domain of my project.
- **GSoC is a great plus to your resume**.
- **You learn some soft skills**. Trust me, this is not a point I added to just fill in some words. In GSoC, you improve your:
	- **Communication skills**: Throughout the whole program, you will be asked to demonstrate your work or explain some concepts, like when you are writing the **proposal** (more on that later), the progress reports, or the work product output. Over time, you will gain the skill of communicating your ideas and work plans more clearly and efficiently through words. which is a nice thing to have, right?
	- **Decision making**: In my case, I was lucky (well, not so much as you will see below) that a handful of people was actually using my plugin and providing feedback. The problem was they were requesting so many features: some of them were simple and the others were complex and require a lot of work. For example, I had a research scientist who wanted me to rework the entire plugin to resemble another plugin in another application because he thinks this is what it should look like. With the help of my mentor and some surveys, I managed to control the chaos and decide which features are mandatory, which are nice to have, and which are not needed at all.
- **You get to know amazing people** from different backgrounds.
- **You get to throw in some cool open source phrases** like "LGTM" in random conversations :) BTW, you will gradually develop a good feeling when you see LGTM in pull requests. It's just like the beautiful green "Accepted" on Codeforces.
- **It is a win-win situation**. Even if you got rejected, you will have learned a nice set of skills by then, so no regrets.

# No bad parts?
Just like any other thing in this world, GSoC also has some downsides that you should be careful about. Note, however, that the following points are purely subjective and it depends heavily on you, your project, and your organization. I'm just enumerating some challenges that you might face during the program but there is also the possibility you don't face them at all.
- **Different time zones**: Working remotely with engineers from other countries (and, consequently, from other time zones) is not always a good thing. For example, it happened so many times that I submit a pull request someday in the morning and wait a whole day just to get feedback from my mentor. It was so frustrating, especially if the feedback required another work (which is very common). Unfortunately, I couldn't solve this problem and break the cycle, which made this one of the worst things for me in the program as huge amounts of time was wasted because of that.
- **Heavy WorkLoad** can be a serious problem in the program. Speaking from experience, just because the program started smoothly with little work does not mean it will stay so through the end. So, it's crucial to manage your time and work effectively. Try to divide the work evenly over the duration of the program. You might want to assign a specific time in your day just for work.

# What do I need?
Well, this is a debatable manner, and there are tons of opinions about it. I'm just going to list the bare minimum of skills you need in order to successfully pass the program without much suffering (you are going to suffer in any case but I am trying to make it a bit easy for you).
- **Basics of Programming**: This one should be obvious. You should be able to program fluently (IDK if this is the right word) in at least one general-purpose programming language (C, C++, C#, Java, JavaScript, Python, etc...). If you don't meet this criterion, then why are you even here? I don't want to be offensive but GSoC is not **YET** suitable for you.
- **Working knowledge of Git**: You will be forced to learn it anyway, so prior knowledge would greatly help. More specifically, you should be able to commit and push changes, create and merge branches, make pull requests, and pull the latest changes. If you don't know much about these things or have a vague idea about them, just like me before applying to GSoC, I suggest you watch [this video](https://www.youtube.com/watch?v=2sjqTHE0zok) and take [this manual](https://www.atlassian.com/git/tutorials) as a reference for you. Or, you can just google stuff whenever you are stuck but I don't recommend this approach if you don't yet have the basics of GIT.
- **Good command of English**: If you can read this article with ease and you can construct basic English phrases to express your ideas correctly, you should be fine.
- **Self-discipline**: There are times when you will be burnt out and have no energy to continue, yet you will have to work because, otherwise, you fail the program. Yes, passion is valuable and you will, of course, select a project that you feel excited about. However, passion is not going to help you when you are drained. That's why you need to be self-disciplined and can force yourself to work even if you don't like to do so. You will think that you are not going to experience burnout until it's too late.
- **You don't need referrals, connections, or a resume**. The only thing that matters is your skill and how "good" your proposal is.

The above skill set is, in my opinion, mandatory to apply to GSoC. However, remember that the more skills you have, the greater your chances are of getting accepted and passing the program. Any knowledge of **Object-Oriented Programming**, **Data Structures & Algorithms**, and libraries & frameworks will, of course, magnify your chances. Once a day, I found myself implementing recursive Depth-First Search to traverse a tree-like structure while coding a certain feature (trust me, it was not an overkill). In addition, most of the coding time was actually me writing TypeScript classes and methods.

# How to apply?
Now that you are willing to apply to GSoC, let's discuss the application process in greater detail. But first, I have two disclaimers:
- **Every year, there are tons and tons of people who get excited about GSoC, yet only a small fraction actually apply**. This is because the application process takes too long (usually two weeks or more) and needs a lot of effort (more on that later). It turns out not so many people have this luxury. I have a friend who was interested in applying to GSoC but he procrastinated till two days before the application deadline, thinking that he had to just upload his resume and complete the application. Later, he was shocked by the amount of work he should have done long ago.
- **Acceptance rate is so high**. According to the [official stats](https://opensource.googleblog.com/2021/05/google-summer-of-code-2021-students-are.html), in the 2021 program, **4795** students applied and **1292** were selected (roughly 27%). This tells us that once you actually submit your proposal, you have a great chance of being accepted.

Now I'll present the main steps of applying to GSoC. Most of the discussion will target the upcoming 2022 program.

## 1. Select an organization
The first step to applying to GSoC is to select an organization that you would like to work for. Before contributors are given the chance to apply, this year's participating organizations get announced (*MARCH 7, 2022 8:00 PM*). The list changes every year, so you should double-check that the organization you want to work for is actually included in this year's program. You can take a look at [2021 organizations](https://summerofcode.withgoogle.com/archive/2021/organizations). Here's what you should know:
- **There are over 200 organizations that participated in 2021** and I think more will participate this year.
- An organization can be an **open-source service provider**, **big tech company**, or even a **research lab** (like CERN).
- Some well-known organizations that participated in the 2021 program include Chromium, Debian, Django, Apache, Audacity, Blender, CERN-HSF, Dart, FFmpeg, FreeBSD, Git, GitLab, GNOME Foundation, GCC, GNU Octave, gVisor, Haskell, **Joplin (mine)**, KDE, LibreOffice,  MetaSploit, mypy, Open Robotics, openSUSE Project, OWSAP Foundation, PostgreSQL, Postman, Processing Foundation, Python Software Foundation, QEMU, Ruby, SageMath, Scala Center, Swift, SymPy, Tensorflow, Julia, The Linux Foundation, The NetBSD Foundation, The R Project for statistical, VideoLan, and Xfce.
- Every participating organization includes a **description** of it, a list of the tools and **technologies** used there, some **project ideas** that you would like to work on, **tags**, and a way of getting involved in the **community** of the organization (can be a discord server, public forum, mailing list, etc...).
- Once the participating organizations are announced, you should immediately start looking for the organization you would like to work for. You are encouraged to filter out the organizations according to the following criteria:
	- Does the organization in question uses **technologies you have knowledge of**?
	- Is the **organization domain** interesting for you?
	- Are the **projects** interesting for you?
- Going through every organization and deciding whether or not it suits you can be a very painful and time-consuming process. Because of that, **you are encouraged to have some friends who also want to apply to GSoC to help each other and save some time**.

After filtering out, you should have a shortlist of the organizations you are interested to work for and have an idea about these orgs and what do they do. Now it's time to involve in the communities of these organizations. Start introducing yourself in their Discord, IRC, forum, mailing list, or whatever they are using to communicate. Ask some questions about the organization or any project or feature they are working on currently. Look around to gather as much info as you can.


##### Very Important !
Once you selected your organization, you should try to contribute to it as early and as much as you can. This is important because, most of the time, it is considered a **DECIDING FACTOR** in whether you will be accepted or not. **If two people are applying to the same project in the same organization, the one with the most valuable contributions to the organization will most likely be preferred over the other**. How to contribute? There are so many things you can do that count as contributions:
- **Solve starter bugs/issues**. These are issues presented by the organization mentors to help new contributors get familiar with the codebase, architecture, coding styles, etc... You will probably find them in the organization's description or Github repo.
- **Make a pull request to add a certain feature**. You can fork some project, clone it locally, and start to play with it a little bit. You can also make pull requests as you like. Try to follow their guidelines in creating a pull request. If you get a single pull request merged, you are on the right track to be accepted.
- **Create issues**. If you see an unexpected behavior in some project, you are encouraged to create a new issue on their Github repo.
- **Fix typoes**. Believe me, this is not a joke, fixing typos also counts as a contribution that means you are active and interested in the organization.

## 2. Select a project
As stated above, each organization has a list of project ideas (like [this one](https://joplinapp.org/gsoc2021/ideas/)). Each project idea is accompanied by some information regarding the expected outcome of the project, how much work is required to implement this project, and technologies that are required (this can change from project to project inside the same organization). Projects can range from adding a small plugin or a feature in an application to building a complex enterprise-sized project. If you have some questions regarding a specific project, don't hesitate to ask the community of the organization.

Based on the information you gathered in the previous step, you should be able to select the project that you are going to work on for the duration of the program. It's favorable (but not required) to select your project based on the following:
- **Knowledge of Project domain**: The more you know about a project, the more you are likely to complete it successfully. In my case, I had some research background from high school which helped me a little in my project.
- **Interest**: Choosing a project that interests you is definitely worth the time and effort.
- **Manageable**: Select a project that you are confident about completing in the assigned timeframe.

## 3. Prepare a proposal
Congratulations! You carefully decided on a project. Now it's time for the most critical and time-consuming (can take more than a week to complete) part of the application process: The proposal. First of all, what is a proposal? **It's a document that should include all the information you gathered about the project you are going to work on**. The proposal is written for the mentors as the audience. The recommended approach to prepare the proposal (or any article/document for that matter) is to first write the headlines, then iteratively add more and more details until you are finished with the initial draft. If your organization has its own proposal template, you should stick to it. Otherwise, you can use a generic proposal structure. Generally, a proposal MIGHT include the following sections:
- **Name and contact information**: This is preferred to be at the top of your proposal where you provide all your contact information including your full name, address, timezone, and any other relevant personal links (Github and LinkedIn for example).
- **Introduction**: This is where you write a short summary about your project consisting of **the problem you are trying to solve**, **prior solutions**, **your solution to the problem**, and any other **relevant links that support your argument**.
- **Deliverables**: Break down the outcome of your project into manageable milestones and list them here.
- **Implementation**: This is where you include how you will implement your project idea. You should not just explain the high-level mechanisms, you should also include the exact implementation details including algorithms, libraries, or external utilities that you will use to help you while coding. Charts and graphs can also be used to explain your plans more clearly. Provide as many implementation details as you can to produce a high-quality proposal, which, subsequently, increases your chances.
- **Timeline**: In here, you state what work you will accomplish by the end of each week throughout the duration of the program. Note, however, that you can update your timeline anytime you want even during the coding phase to adapt to the changes and experiences you encounter. But don't do so without the agreement of your mentor.
- **Prior contributions to the organization**: Any ideas, issues, or pull requests you contributed to the organization should be listed here. As said before, this is very important because it proves you have a basic understanding of the organization structure, coding style, and code reviews cycle.
- **Programming skills**: I think this section has little to zero effect on your proposal quality and acceptance chance, but it's nice to inform the mentors that you are a talented person who has a diversity of skills. You can list some relevant side projects you worked on as well.

After selecting the project, you should immediately start working on your proposal and submit it as early as you can. Don't worry you can edit it any number of times before the deadline, you are encouraged to submit it early because you will get feedback from mentors on how to further improve your proposal.

# Let the coding begin!
> Hi ${NAME}, Your proposal ${PROPOSAL_NAME} has been accepted!

If you see this message on the 19th/20th of May 2022, you are lucky (not so much) to spend your summer coding an open-source project and making some money. But before that, you will spend two weeks known as the **community bonding period**. This period is for you to:
- Socialize and interact with other organization members and mentors.
- Learn more about the organization's mission and vision.
- Clarify, if any, the ambiguous portions in the proposal.

You also have the freedom to start coding and working on your project ahead of time. After that, you will be officially into the coding phase of the program. During each week, you will be coding the features you specified for that week in the timeline. If you finished early, you have two options: either relax a bit and just wait for the next week to start or you can complete a portion of next week's work. **Note, however, that your mentor should have knowledge of everything you do and you should consult him first before deciding on anything**. Mentors are also engineers who have full-time jobs themselves, so try to be nice to them as much as you can. In addition, **try to make your questions clear and concise to make it a bit easy for them to help you**. If in a particular week, you did not manage to complete the assigned work because of whatever reason, It's OK. It's not like they will send an assassin to chase after you (or will they?). The important thing is to tell your mentor the reason why you didn't complete the work and try to compensate for that by working harder the next week. If for some reason, you had to update the timeline, that's also OK. However, as you might have guessed, you should not do so without first consulting your mentor.

GSoC has two evaluation forms. The first evaluation is in the middle of the program period and the final evaluation is at the end of the program. **In each evaluation, you and your mentor will be asked about each other's performance**. If your mentor has no problem you will pass the evaluation. Before each evaluation, I recommend you talk with your mentor a little bit just to be clear about any problems that will affect your evaluation result.

# Conclusion
I hope by now that it's clear Why Google Summer of Code is a golden opportunity. It's a nice program that makes you learn a lot of practical skills and grants you a decent amount of money. Yes, it has so many bad things, but it is worth the try.

WOW! I never thought I would write that many words when I started writing this article two weeks ago. I don't wanna sound like a cringe YouTuber but I hope you enjoyed my first article and became somewhat motivated to apply to GSoC.

Have a good time :)
