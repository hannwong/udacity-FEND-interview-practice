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

Jump into complex large-scale web app development.

Within a month or less, get what I need from [Javascript: The Definitive Guide](http://shop.oreilly.com/product/9780596805531.do) to enable me to do the above.

Build a public portfolio, be socially and commercially accepted as a front-end web developer, and move away from my hacker past for good.

Contribute very significantly to my first employer. Perhaps even make him/her rich and powerful, if possible. I've been doing that in secret for many people for years, anyway. Maybe it is now time for me to consider the social missions of and my cultural compatibility with my potential employers, for a change. I want to be of service to people.
