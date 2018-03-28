class LinkController {

  constructor(name, links) {

    function sortFunc(a,b) {

      if (a.name < b.name) {

        return -1;

      } else if (a.nav > b.name) {

        return 1;

      }

      return 0;

    }

    this.name = name;
    this.links = links.sort(sortFunc);

  }

  filteredLinks(filter) {

    var filterString = filter.toUpperCase();

    var results = [];

    if (filterString === "") {

      results = this.links;

    } else {

      for (var i = 0; i < this.links.length; i++) {

        var link = this.links[i];

        var linkMatch = (link.name.toUpperCase().indexOf(filterString) >= 0);
        var descMatch = false;

        if (link.desc) {

          descMatch = (link.desc.toUpperCase().indexOf(filterString) >= 0);

        }

        if (linkMatch || descMatch) {

          results.push(link);

        }

      }

    }

    return results;

  }

}

export function openLink(link) {

  if (urlForLink(link).indexOf("https://") >= 0) {

    var win = window.open(urlForLink(link), '_blank');
    win.focus();

  } else {

    window.location = urlForLink(link);

  }

}

export function urlForLink(link) {

  if (link.url === undefined) {

    return "https://" + link.key + ".vsanthanam.com"

  }

  return link.url;

}

export function imageUrlForLink(link) {

  return process.env.PUBLIC_URL + "/icons/" + link.key + ".svg"

}

export default LinkController;
