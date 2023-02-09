chrome.devtools.network.getHAR(function(harLog) {
  harLog.entries.forEach(function(entry) {
    if (entry.request.url.includes("GeoPhotoService.GetMetadata")) {
      var content = entry.response.content.text;
      document.getElementById('res').innerHTML = content;
    }
  });
});