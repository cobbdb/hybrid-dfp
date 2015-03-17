var harm = Harmony();
window.addEventListener('load', function () {
    harm.load({
        slots: [{
            name: 'test-a',
            id: 'test-a',
            sizes: [
                [728, 90]
            ],
            adunit: '/11347122/dev-test',
            breakpoint: 'test-Y'
        }, {
            name: 'test-b',
            id: 'test-b',
            sizes: [
                [728, 90]
            ],
            adunit: '/11347122/dev-test',
            breakpoint: 'test-Z'
        }]
    });
    googletag.pubads().enableSingleRequest();
    googletag.enableServices();
    harm.show.breakpoint('test-Z');
});
