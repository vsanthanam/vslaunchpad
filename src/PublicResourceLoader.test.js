import loadPublicResource from './PublicResourceLoader';

it('correctly loads public resources', () => {

  var resource = loadPublicResource("resource");
  expect(resource).toEqual(process.env.PUBLIC_URL + "/resource");

});
