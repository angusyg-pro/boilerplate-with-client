(function() {
  'use strict';

  angular
    .module('frontend.shared')
    .factory('cloudService', CloudService);

  CloudService.$inject = [
    'SERVER_API',
    '$http',
  ];

  /**
   * Service d'accès au serveur du reverse proxy du cloud
   * @param       {Coonstant} CLOUD_API - configuration pour l'accès au serveur
   * @param       {Service}   $http        - service de gestion des appels HTTP
   * @constructor
   */
  function CloudService(CLOUD_API, $http) {
    const url = `${CLOUD_API.URL}/cloud`;
    return {
      getApps: () => $http.get(`${url}/apps`).then(result => result.data),
    };
  }
})();
