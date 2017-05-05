# Overview

Github repo for this interview practice: [https://github.com/hannwong/udacity-FEND-interview-practice](https://github.com/hannwong/udacity-FEND-interview-practice)

# Good Fit for Udacity Blitz

**Question**: Why are you a good fit for Udacity Blitz? How do you feel about the job description?

I'm currently doing a BSc Computer Science with ERP (SAP) and UML focus. I wrote the first book on OFBiz, an open-source Java-based ERP platform (used by JIRA).

I reverse-engineer emerging technologies quickly. I am well-equipped to guide the creation and specification (UML), as well as staffing and execution (good hands-on grasp of programming and technologies) of innovative software projects. I also take apart human languages and cultures quickly to rapidly gain excellent and necessary breadth and depth of skills required, be they technical, design related, or organizational.

I have sincere and thorough (I do strive) empathy. I can fully comprehend motivations of external clients and engineers, as well as those of internal staff on the team. I can harmoniously match competing interests from all stakeholders, or at least lead by example in constructive compromises.

Being a hands-on person who loves coding, I can ensure (not just oversee) excellence in technical execution and delivery of our projects. There are no tasks beneath me; I exist to get things done profitably and efficiently.

I'm a naturally likeable mentor. I am quickly popular with students I teach in SUTD --- I facilitate their learning rather than merely tell facts to them. My hands-on attitude keeps my empathy real and relevant over changing times.

# Most Influential Book or Blog Post

**Question**: What is the most influential book or blog post you’ve read regarding front-end development?

Ilya Grigorik's [High Performance Browser Networking](https://hpbn.co).

I was a hacker in a past life. I currently teach algorithms, AI and probability/statistics. Hence, performance concepts and exploration are naturally interesting to me.

In Grigorik's book, plus his related Google talks, it is clear that Google is helping to spot front-end performance problems and also attempting to set trends in solving those problems.

It is interesting how Google and Grigorik collaborates with and yet also guides the front-end development community (browser makers, in particular in this case).

Long ago, when I was a secret consultant to a CTO in Singapore, I had mentioned that "*managers should manage the team and be managed by the team*". I learned that from a mentor in USA. Although I have long given up hope that Singaporean work culture will ever step up in pace (nevermind catch up) with USA counterparts, I still hold hope for mankind's development (through enlightened companies like Google), and certainly still hold high regard as welll while I continue to marvel at and learn from the best on Earth.

# Learning One Technology Per Year

**Question**: If you could master one technology this year, what would it be and why?

Transfer learning, AI. But, well, let's see about front-end web development...

I'd say... [Webpack](https://webpack.github.io). I'm interested in:

* Code reuse ("transfer learning", in a sense)
* Performance (asynchronous load, front-end compatible).

In studying Webpack, I will also be studying Javascript module loading in general --- CommonJS, AMD and ES2015 Modules, as well as their evolution and implementations in order to facilitate a pragmatic study and analysis.

# Front-End Web Application Framework

**Question**: Describe any front-end web application framework (preferably one that you use). How does it work? What are the upsides and downsides?

Knockout.js.

It works by declarative bindings of DOM elements with data in (javascript execution context) memory.
The bindings consist of 2 parts:

* Bindings are declared via ``data-bind`` attribute in HTML DOM elements.
* Data bound to must be in the form of "*observables*", not plain Javascript variables.

The main aim is to achieve "*separation of concerns*" via a Model-View-ViewModel architecture. A side, but significant, benefit is the automated coordination between data (model) and view.

The underlying mechanism employed for the above is syntactic sugar in the form of ``observable()``. Without Knockout.js, we would be calling a function and passing it a "*value we want to update the view with*", and the function would:

* Perform DOM element lookups
* Edit the view accordingly

With Knockout.js, all data values are represented by functions similar to that described above. Instead of performing a value assignment, we call the associated functions, which perform exactly the steps described above. We "*pretend*" that our function invocations are really value assignments.

The downside of Knockout.js is that programmers need to constantly maintain the above-mentioned "*pretense*" when doing value assignments. Programmers will likely need to, at least somewhat, understand the underlying mechanism described above in order to keep up that "*pretense*".

The upside is the declarative paradigm Knockout.js provides. It makes for very clean javascript codes, amenable to large-scale web application development.

# 1-Year Goal

**Question**: If you were to start your front-end position today, what would be your goals a year from now?

Fully understand and employ massive web app code organization via [Webpack](https://webpack.github.io) or AMD or ES2015 Modules.

Jump into complex large-scale web app development. Udacity Blitz can really use my new skills in this area, and I will be able to implement and drive large-scale projects as well as implement smaller projects in very short timeframes.

Within a month or less, get what I need from [Javascript: The Definitive Guide](http://shop.oreilly.com/product/9780596805531.do) to enable me to do the above.

Build a public portfolio, be socially and commercially accepted as a front-end web developer, and move away from my hacker past for good.

Contribute very significantly to my first employer. Perhaps even make him/her rich and powerful, if possible. I've been doing that in secret for many people for years, anyway. Maybe it is now time for me to consider the social missions of and my cultural compatibility with my potential employers, for a change. I want to be of service to people.

Udacity Blitz can also use my language skills to employ geographically distributed team members, to get the best people from around the world. I retain my ability to learn human languages and accents to native fluency within a few months.

# 3-Year Goal? 5-Year Goal?

**Question**: What would you do in 3 years? In 5 years?

In Singaporean work culture, I would answer this question thus: "*I hope to remain a project manager on Full-Stack Udacity Blitz projects. I don't want any salary increments for the next 5 years while I grow to being a project manager handling more workload --- Full-Stack, iOS and Android projects. I don't see myself getting anywhere else because being a project manager for Udacity Blitz projects is everything I ever dreamed of.*"

(But if you *are* Singaporean, I mean what I say above!)

After talking to my Udacity career counselor, JP Miller, I'm now going to try breaking out of my usual Singaporean mold (or pretense). I'll answer this question as it is asked --- by an employer whose top priority is growing the company and its employees (most important assets).

Firstly, I do work where work needs to be done. No task is beneath me. If I am needed to be a project manager for Udacity Blitz projects my whole life from here on out, I'll do just that.

That said, I am human and I explore new ways of doing things faster and better. I will get better at doing my job as a project manager, even if it means becoming the only human in the team while I employ AI to do the bulk of the work. (We can dream, we *should* dream.)

I'm no Luddite, but I see the only way forward is for humans to do more, via study and innovation. As I had tried to convince my father, I believe we move forward by "*having less humans, doing more work*"; a growing company cannot have more people doing less work. As capital deepens (economic term for "*technology using less people to do more work*"), the only way forward is to keep educating and applying ourselves. Only humans can truly contribute value, not machines that in the long-term drive down profits via mass-production. Continuous efforts in innovation creates value. A non-Luddite has all the more reason to focus on developing humans, all while keeping pace with employing new technologies.

Once I have my mortgage instalments settled (US$1000 / month) so my father gets to keep the apartment I bought for him, I will complete my BSc (3rd attempt, failed twice from financial difficulties) within 2 years and move on to formalizing my other skills.

Maths (statistics) and AI will be my focus after that. Self-driving cars will be my first aim, and Singapore's roads and traffic conditions provide ideal challenge (worst-case scenarios) for that endeavor.

In 5 years' time, after putting competently self-driving cars and buses on the roads, I want to get into education and job creation --- to get all of mankind fully applied and fully curious to learn more. I'm not blind to people who are utterly heedless and cannot be helped, but I believe in getting and gathering more people who act as inspiring examples. Udacity is a good model I can follow. Perhaps I can grow Udacity Blitz in terms of competence in best practices and best-of-breed skills and technologies, and eventually have that spill over to Udacity courses. "*Eat our own dog food*", as the saying goes.

In whatever timeframes I live, I always aim to be of service to you, and to everyone else in this universe. Life is only worth living if lived for others. (I have tolerance for even very low levels of subsistence. I don't need much myself.)
