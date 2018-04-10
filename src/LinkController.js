// @flow

import loadPublicResource from './PublicResourceLoader';

type Link = {

  name: string,
  key: string,
  url: string,
  desc: string,
  display_url: string

}

class LinkController {

  name: string;
  links: Array<Link> ;

  constructor(name: string, links: Array<Link>) {

    function sortFunc(a, b) {

      if (a.name < b.name) {

        return -1;

      } else if (a.name > b.name) {

        return 1;

      }

      return 0;

    }

    this.name = name;
    this.links = links.sort(sortFunc);

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
