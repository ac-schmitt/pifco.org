# pifco.org

This is the single repo for the [pifco.org](https://pifco.org) website based on [Hugo](https://gohugo.io/).

It uses GitHub Pages for publishing with default settings, content source is /docs from the master branch. Please use `git clone --recurse-submodules` to clone the repository to include the template.

## Template

pifco.org is based on the [Hermit Theme](https://themes.gohugo.io/hermit/) and uses it as a git submodule. 

Customizations:
* Changed font in own [_predefined.scss](assets/scss/_predefined.scss)
* Added `noPrint` class in own [_predefined.scss](assets/scss/_predefined.scss)
* Added class `noPrint` to elements in the partials [header](layouts/partials/header.html) and [footer](layouts/partials/footer.html)

## License

The code and structures in this repository are licensed under [MIT License](LICENSE).

Acknowledgment to the upstream projects:
* [Hermit Theme](https://github.com/Track3/hermit)
* [dnd5e-quickref](https://github.com/crobi/dnd5e-quickref)
* [dnd5e-quickref deutsch](https://github.com/nesges/dnd5e-quickref)

The content of the articles of the pifco.org website is licensed unter [Creative Commons CC BY-NC 4.0](https://creativecommons.org/licenses/by-nc/4.0/).

## Mechanics

### RSS Feed

I've overriden the theme template for the rss feed in [layouts/posts/rss.xml](layouts/posts/rss.xml) to get a full content feed.

### Images

Most Images are stored and fetched from imgur.com. Images in the repo are mainly the site icons.

To create an image look that uses the background color of the site, I am using a background layer with color code 494f5c and a foreground layer with HSV-Value or Luminanz mode. I am using this especially for the maps, e.g. [Jadetänzer Map Section](https://i.imgur.com/MxODAZs.png). Location marker is a 16px round pencil with a 5px border around the original "dot".

### Homebrew Maps

I am creating the homebrew maps with [Affinity Photo](https://affinity.serif.com/de/photo/) using a 48px raster, with a 16px/25% hardness brush for solid walls, 8px/25% for inner walls, 4px/25% for wall fillings, stairs, etc and a 2px/100% hardness brush for the visible raster.

I am still trying different methods for drawing. Mainly, I use my old Wacom Intuos PS but also my surface pen on the Surface Go I'm using as my main private notebook/tablet.
