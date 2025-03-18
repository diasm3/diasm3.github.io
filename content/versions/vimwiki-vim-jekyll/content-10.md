---
layout  : wiki
title   : Jekyll Blog Setup Guide
summary : A comprehensive guide for setting up a static homepage using Jekyll on GitHub Pages.
date    : 2022-03-28 12:10:49 +0900
updated : 2023-10-01 15:00:00 +0900
tag     : jekyll, github, static-site, blog
toc     : true
public  : true
parent  : [[vim]]
latex   : false
---
* TOC
{:toc}

# Jekyll Static Website Setup Guide

## GitHub Pages Setup

### Repository Creation
1. Create a new repository named `[githubID].github.io`.
   > Example: My site is `diasm3.github.io`.

2. Go to the **Settings** tab and enable **GitHub Pages**.  
   Select the main branch, and click **Save**.

## Running Locally

To run your Jekyll site locally, use the following commands:

```bash
# Install required gems
~ $ gem install bundler jekyll

# Create a new Jekyll site
~ $ jekyll new my-awesome-site

# Navigate to the new site directory
~ $ cd my-awesome-site

# Serve the site locally
~/my-awesome-site $ bundle exec jekyll serve
```

### Example Usage
Once your server is running, you can access your site in your web browser at `http://localhost:4000`. This enables you to preview your changes on the fly as you develop your Jekyll site.  

### Additional Resources
- [Jekyll Documentation](https://jekyllrb.com/docs/)
- [GitHub Pages Documentation](https://docs.github.com/en/pages)

This guide provides the essential steps for setting up a Jekyll blog and running it locally. Happy blogging!