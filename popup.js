
document.getElementById('shortenBtn').addEventListener('click', function() {
    const longUrl = document.getElementById('longUrl').value;
    console.log("hello");
    fetch('http://localhost:3000/shorten', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ longUrl: longUrl }),
    })
    .then(response => response.json())
    .then(data => {
      document.getElementById('result').innerText = 'Shortened URL: ' + data.shortUrl;
    });
  });
  