const Analytics = {
    UACode: 'UA-XXXXXXXX-X',
    init: function () {
        var me = this;

        (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
                (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
            m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
        })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

        ga('create', me.UACode, {'siteSpeedSampleRate': 50});
        ga('send', 'pageview');

        document.getElementsByClassName('ga-track').addEventListener('click', function(event) {
            var clickedItem = event.target;
            var category = item.getAttribute('data-category');
            var action = item.getAttribute('data-action');
            var label = item.getAttribute('data-label');
            var value = item.getAttribute('data-value');
            me.createEvent(category, action, label, value);
        });
    },
    createEvent: function (category, action, label, value) {
        if (action == '' || action == undefined) {
            action = 'click';
        }
        if (value) {
            ga('send', 'event', category, action, label, value);
        } else {
            ga('send', 'event', category, action, label);
        }
    }
};
Analytics.init();