<!DOCTYPE html>
<html lang="en" class="no-js">
  <head>
      <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
      <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
      <title>Flash Card Project: Access Memories</title>
      <meta name="viewport" content="width=device-width, initial-scale=1"/>

      <style type="text/css">
          [ng\:cloak], [ng-cloak], [data-ng-cloak], [x-ng-cloak], .ng-cloak, .x-ng-cloak {
              display: none !important;
          }
      </style>

      <asset:stylesheet src="application.css"/>

      <asset:link rel="icon" href="favicon.ico" type="image/x-ico" />

      <script type="text/javascript">
          window.contextPath = "${request.contextPath}";
      </script>
  </head>

  <body ng-app="accessMemoriesApp">
      <h1>Flash Card Project: Access Memories</h1>
      <div id="mainContent" ui-view></div>

      <asset:javascript src="/accessmemories/bundle.js" />
  </body>
</html>
