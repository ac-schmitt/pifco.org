# pifco.org

This is the single repo for the [pifco.org](https://pifco.org) website based on [Hugo](https://gohugo.io/).

It uses GitHub Pages for publishing with default settings, content source is /docs from the master branch.

## Template

pifco.org is based on the [Hermit Theme](https://themes.gohugo.io/hermit/) and uses it as a git submodule. 

## Mechanics

### RSS Feed

I've overriden the theme template for the rss feed in [layouts/posts/rss.xml](layouts/posts/rss.xml) to get a full content feed.

### Images

Most Images are stored and fetched from imgur.com. Images in the repo are mainly the site icons.

To create an image look that uses the background color of the site, I am using a background layer with color code 494f5c and a foreground layer with HSV-Value mode. I am using this especially for the maps, e.g. [Jadetänzer Map Section](https://i.imgur.com/MxODAZs.png).