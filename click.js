window.addEventListener('load', function () {
    var cnt = 2;
    document.getElementById('load').
        addEventListener('click', function () {
            if (cnt > 0) {
                harm.defineSlot({
                    name: 'test-' + cnt,
                    id: 'test-' + cnt,
                    sizes: [
                        [728, 90]
                    ],
                    adunit: '/11347122/dev-test',
                    breakpoint: 'test-' + cnt
                });
                harm.show.breakpoint('test-' + cnt);
                cnt -= 1;
            }
        });
});
