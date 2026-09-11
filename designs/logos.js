/**
 * Institution badges.
 *
 * Each badge renders its name as a wordmark. If a logo file exists at the path
 * in the badge's data-logo attribute, that image is loaded and shown instead,
 * so dropping a file into images/logos/ is the only step needed to turn a
 * wordmark into a real logo. A missing file leaves the wordmark in place.
 */
document.querySelectorAll('.badge[data-logo]').forEach(function (badge) {
    var img = new Image();

    img.onload = function () {
        badge.insertBefore(img, badge.firstChild);
        badge.classList.add('has-logo');
    };

    img.alt = badge.textContent.trim();
    img.src = badge.dataset.logo;
});
