import LinkController, { urlForLink, openLink, imageUrlForLink } from './LinkController';

const linkA = {

  "name":"A-Link",
  "key":"alink"

};

const linkB = {

  "name":"B-Linkx",
  "key":"blink"

};

const linkC = {

  "name":"C-Linkx",
  "key":"clink",
  "desc":"c-description"

}

const linkD = {

  "name":"D-Link",
  "key":"dlink",
  "desc":"e-description",
  "url":"https://www.website.com"

}

const linkE = {

  "name":"E-Link",
  "key":"elink",
  "desc":"e-description",
  "url":"https://www.website.com",
  "display_url":"https://www.otherwebsite"

}

var links = [[linkB, linkC, linkA, linkE, linkD]];

const controller = new LinkController('links', links, false);

it('has the correct name', () => {

  expect(controller.name).toEqual('links');

});

it('has the correct number of links', () => {

  expect(controller.links.length).toEqual(5);

});

it('alphabetizes links correctly', () => {

  expect(controller.links[0]).toEqual(linkA);
  expect(controller.links[1]).toEqual(linkB);
  expect(controller.links[2]).toEqual(linkC);
  expect(controller.links[3]).toEqual(linkD);
  expect(controller.links[4]).toEqual(linkE);

});

it('searches correctly when blank', () => {

  expect(controller.filteredLinks('').length).toEqual(5);

});

it('searches correctly', () => {

  expect(controller.filteredLinks('linkx').length).toEqual(2);

});

it('correctly identifies the image path', () => {

  for (var i = 0; i < controller.links.length; i++) {

    var link = controller.links[i];
    expect(imageUrlForLink(link)).toEqual("/icons/" + link.key + ".svg");

  }

});

it('correctly identifies link url', () => {

  expect(urlForLink(linkA)).toEqual('https://alink.vsanthanam.com');
  expect(urlForLink(linkD)).toEqual('https://www.website.com');
  expect(urlForLink(linkE)).toEqual('https://www.website.com');

});
