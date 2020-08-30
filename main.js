const $shared = document.querySelector('#shared');
const $sharedActive = document.querySelector('#shared-active');
const $cardShare = document.querySelector('.card-share');

$shared.addEventListener('click', () => {
    $cardShare.classList.toggle('show');
});

$cardShare.addEventListener('click', () => {
    if ($cardShare.classList.contains('show')) {
        $cardShare.classList.remove('show');
    }
});
