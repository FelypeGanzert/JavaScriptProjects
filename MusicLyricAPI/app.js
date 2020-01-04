async function getLyric() {
    let resp = await fetch(`https://api.lyrics.ovh/v1/${artist}/${songName}`);
    return await resp.json();
};
document.querySelector('#musicSearch').addEventListener('submit', el => {
    el.preventDefault();
    artist = document.querySelector('#artist').value;
    songName = document.querySelector('#music').value;
    getLyric().then(r => {
        document.querySelector('span#output-music').innerText = songName;
        document.querySelector('span#output-artist').innerText = artist;
        if (r.lyrics) {
            document.querySelector('#lyric').innerText = r.lyrics;
        } else {
            document.querySelector('#lyric').innerText = 'Not Found...';
        }
    });
});


