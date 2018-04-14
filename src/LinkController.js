// @flow

import loadPublicResource from './PublicResourceLoader';

type Link = {

  name: string,
  key: string,
  url: string,
  desc: string,
  display_url: string,
  exclude: boolean

}

class LinkController {

  name: string;
  links: Array<Link>;

  constructor(name: string, links: Array<Array<Link>>, mergeSections: boolean) {

    function sortFunc(a, b) {

      if (a.name < b.name) {

        return -1;

      } else if (a.name > b.name) {

        return 1;

      }

      return 0;

    }

    this.name = name;
    this.links = [];

    if (!mergeSections) {

      for (var i = 0; i < links.length; i++) {

        var sortedSection = links[i].sort(sortFunc);

        for (var j = 0; j < sortedSection.length; j++) {

          this.links.push(sortedSection[j]);

        }

      }

    } else {

      for (var k = 0; k < links.length; k++) {

        for (var l = 0; l < links[k].length; l++) {

          this.links.push(links[k][l]);

        }

      }

      console.log(this.links);

      this.links = this.links.sort(sortFunc);
      this.links = this.links.filter(link => !link.exclude);
      console.log(this.links);

    }

  }

  filteredLinks(filter: string) {

    var filterString = filter.toUpperCase();

    var results = [];

    if (filterString === "") {

      results = this.links;

    } else {

      for (var i = 0; i < this.links.length; i++) {

        var link = this.links[i];

        var nameMatch = (link.name.toUpperCase().indexOf(filterString) >= 0);
        var keyMatch = (link.key.toUpperCase().indexOf(filterString) >= 0);
        var descMatch = false;

        if (link.desc) {

          descMatch = (link.desc.toUpperCase().indexOf(filterString) >= 0);

        }

        if (nameMatch || keyMatch || descMatch) {

          results.push(link);

        }

      }

    }

    return results;

  }

}

export function openLink(link: Link) {

  if (urlForLink(link).indexOf("https://") >= 0) {

    var win = window.open(urlForLink(link), '_blank');
    win.focus();

  } else {

    window.location = urlForLink(link);

  }

}

export function urlForLink(link: Link) {

  if (link.url === undefined) {

    return "https://" + link.key + ".vsanthanam.com"

  }

  return link.url;

}

export function imageUrlForLink(link: Link) {

  return loadPublicResource("icons/" + link.key + ".svg");

}

export default LinkController;
