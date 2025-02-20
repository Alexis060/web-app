(function (window) {
  window['env'] = window['env'] || {};

  // BackEnd Environment variables
  window['env']['fineractApiUrls'] = 'https://sandbox.mifos.community';
  window['env']['fineractApiUrl'] = 'https://sandbox.mifos.community';

  window['env']['apiProvider'] = '/fineract-provider/api';
  window['env']['apiVersion'] = '/v1';

  window['env']['fineractPlatformTenantId'] = 'default';
  window['env']['fineractPlatformTenantIds'] = '';

  // Language Environment variables
  window['env']['defaultLanguage'] = 'en-US';
  window['env']['supportedLanguages'] = 'cs-CS,de-DE,en-US,es-MX,fr-FR,it-IT,ko-KO,li-LI,lv-LV,ne-NE,pt-PT,sw-SW';

  window['env']['preloadClients'] = 'true';

  // Char delimiter to Export CSV options: ',' ';' '|' ' '
  window['env']['defaultCharDelimiter'] = ',';

  // Display or not the BackEnd Info
  window['env']['displayBackEndInfo'] = '';

  // Display or not the Tenant Selector
  window['env']['displayTenantSelector'] = '';

  // Time in seconds for Notifications, default 60 seconds
  window['env']['waitTimeForNotifications'] = '';

  // Time in seconds for COB Catch-Up, default 30 seconds
  window['env']['waitTimeForCOBCatchUp'] = '';

  // Time in milliseconds for Session idle timeout, default 300000 seconds
  window['env']['sessionIdleTimeout'] = '';

  // OAuth Server Enabled  
  window['env']['oauthServerEnabled'] = '';

  // OAuth Server URL  
  window['env']['oauthServerUrl'] = '';

  // OAuth Client Id  
  window['env']['oauthAppId'] = '';

})(this);
