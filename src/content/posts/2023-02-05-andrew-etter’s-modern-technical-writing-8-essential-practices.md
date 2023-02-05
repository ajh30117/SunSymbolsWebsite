---
template: blog-post
title: "Andrew Etter’s Modern Technical Writing: 8 Essential Practices"
slug: modern-technical-writing-8-practices
date: 2023-02-05 13:53
description: Read about 8 essential practices that define effective technical
  writing in the modern software industry, from Andrew Etter’s Modern Technical
  Writing.
featuredImage: /assets/code-gd11a5c20e_1920.jpg
---
<!--StartFragment-->

Andrew Etter’s 2016 *Modern Technical Writing* is a short and sweet guide to creating effective software documentation. 

The book covers the most basic tenets of technical writing (like research, style, and audience) before diving into detail about practices specific to software documentation (like using simple markup languages, distributed control, and static websites).

I think this book is a particularly good resource for writers in leadership positions or who work more independently because Etter gives practical and comprehensive advice on building out an entire documentation process.

## 1. Test and research thoroughly before you write

In any writing process, research should make up the majority of the work, and your time. The technical writing process is no different. 

One of my favorite poets and lyricists once commented on her creative process, “if you read, you’ll write.” 

As a writer, I think about that a lot — to create worthwhile output, you need good input.

To write clear and comprehensive docs, you need to understand the product as thoroughly as possible — thoroughly enough to take your research further by asking pointed and specific questions to the right people. 

To get your answers swiftly and smoothly, Etters advises being well-prepared for meetings, batching questions, and showing respect and gratitude for people’s time. 

Then, writing down all the knowledge you’ve curated is the final step in the process. This probably shouldn’t take more than 10% of your time.

## 2. BFD (What’s BFD?)

It’s basic functional documentation. And it means you’ve answered the most fundamental questions about your product. The questions are:

* What’s the product and why would someone want it?
* How does the product fit into a broader ecosystem (if at all)? Does it have any dependencies?
* Where can someone acquire this product? If there are multiple distribution packages, which should they choose?
* Where do they install the product? What are the basic configuration options?
* What does a simple, start-to-finish operation look like?

Answering these questions gives you direction for creating a baseline level of content, and not overwhelming users with too much content.

## 3. Write with style

Etters make a couple key points about style.

First, “consistency is king” — meaning your reliability (ethos if we’re talking rhetoric) declines when your language and vocabulary are inconsistent. For example, “If you call something a dialog in one document, don’t call it a pop-up in another.”

Second, Include headers, tables, lists, diagrams, and images to make writing more attractive, scannable, and approachable. For example, write sequential instructions in a numbered list and use inline styles (like bolding) to emphasize important text (like user interface controls).

## 4. Host your documentation on a static website

Static websites increase speed, simplicity, and security. “Static” means a static web page is delivered to a user’s web browser exactly as stored, instead of being dynamically generated each time. Therefore, the server needs far fewer hardware resources.

Static site generators let you use a templated theme and add content with lightweight markup, and then they process everything into a working website. Actually, the website you’re reading this article on is a static website, thanks to [Gatsby](https://www.gatsbyjs.com/docs/glossary/static-site-generator/). Other popular static site generators include [Jekyll](https://jekyllrb.com/), [Hugo](https://gohugo.io/), and [Sphinx](https://www.sphinx-doc.org/en/master/) (specifically built for documentation).

An even easier alternative to using static site generators is to create a [GitHub wiki](https://docs.github.com/en/communities/documenting-your-project-with-wikis/about-wikis), but this option doesn’t allow customization and has no search solution.

## 5. Use lightweight markup

Lightweight markup languages make it easy to read and write documentation, which makes contribution more accessible to more people.

The best three types of markup languages are: 

* Markdown

  * t﻿he mostly widely used
  * very compatible
  * l﻿imited features
  * no defined standard
* reStructuredText

  * f﻿rom the Python community
  * feature-rich with tables, footnotes, and code blocks
  * has a defined standard
  * harder to learn, so less accessible
  * biggest appeal: it’s the source language of Sphinx
* Asciidoc

  * from the Linux community
  * semantically equivalent to DocBook, so improves existing DocBook toolchains

## 6. Use distributed control

Distributed version control systems (DVCS), like Git and Mercurial, have better performance, allow for offline work, and allow simultaneous work on the same file. And developers prefer them (read more about [docs as code](https://www.writethedocs.org/guide/docs-as-code/)).

Good web-based interfaces for managing remote repositories include Atlassian Bitbucket, Stash, and GitHub.

## 7. Use metrics to track your documentation

Metric tools like Google Analytics help you understand what documentation pages are successful or unsuccessful.

This one is pretty simple. 

As Etter states, “In any field, opinions become more credible when you attach quantitative metrics to them.”

## 8. To wrap it up in 5 steps

The book ends in five simple steps that summarize how to create useful and accessible documentation in the modern software industry.

1. Learn everything about a subject
2. Write down exactly what an audience needs to know and no more.
3. Make the content beautiful, discoverable, scannable, searchable.
4. Consider everything a draft, and iterate relentlessly.
5. Make contributing simple.

## Review and Conclusion

I fully recommend reading this book to (1) anyone who wants to gain an understanding of the skills and technologies used in technical writing for software, or (2) current technical writers looking for advice on creating effective writing processes or improving existing ones.

T﻿he e-book is available on [Amazon](https://www.amazon.com/Modern-Technical-Writing-Introduction-Documentation-ebook/dp/B01A2QL9SS).

<!--EndFragment-->