//= wrapped

angular
    .module("accessmemories")
    .factory("Card", Card);

function Card(DomainServiceFactory) {
    return DomainServiceFactory("card/:id", {"id": "@id"});
}
