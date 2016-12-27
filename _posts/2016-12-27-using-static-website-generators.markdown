---
title: Using static website generators
date: 2016-12-27 15:34:00 -05:00
featured-image: "/uploads/2228520050_1f80fa80d5.jpg"
---

You've likely seen all the stats about the awesome companies using static website generators and the various reasons why. If you haven't, then read [Why Static Website Generators Are The Next Big Thing](https://www.smashingmagazine.com/2015/11/modern-static-website-generators-next-big-thing/).

For me, I use them because they fit nicely into my desired workflow. I develop locally, preview on a staging server, and deploy to a production server. After years of headaches from juggling databases in a LAMP stack, I had had enough. During the same time, I had been building a ton of landing pages for Marketing Automation systems. Many of which had similar elements (boilerplate code) that I got tired of writing repeatedly. Something had to change.

Luckily I started working with JavaScript task runners (Grunt and Gulp) and templating languages (Handlebars and Liquid). Before long I built my own landing page framework to allow me to easily build on top of past projects instead of remaking the wheel each time.