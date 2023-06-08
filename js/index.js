import { openSidebarListener, openChartListener, pageLoad } from './handler.js';

$(document).ready(function () {
  pageLoad();
  $('.openSidebar').click(openSidebarListener);
  $('.openChart').click(openChartListener);
});

