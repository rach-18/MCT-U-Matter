// // function callApi(url)
// // {
// //     const myPromise = new Promise( (resolve,reject) => {
// //         fetch(url)
// //         .then( res => res.json())
// //         .then( data => {
// //             resolve(data)
// //         })
// //         .catch(err => {
// //             reject(err)
// //         })
// //     })

// //     return myPromise;
   
// // }

// // callApi("https://rapidapi.com/Glavier/api/spotify23")
// // .then((data) => {
// // 	console.log(data);
// // })
// // .catch((err) => {
// // 	console.log(err);
// // })

// fetch('https://api.spotify.com/v1/playlists/26GXj4LLUiJajuNZrZTqvN/tracks', {
//         headers: {
//             'Authorization': '1ba5acd9dfbf46fd9f9b4c71f9275e7f'
//         }
//     })
//     .then(response => response.json())
//     .then(data => {
//         // Iterate through each track in the playlist
//         // data.items.forEach(item => {
//         //     // Extract relevant track information
//         //     const track = item.track;
//         //     const songName = track.name;
//         //     const artistName = track.artists.map(artist => artist.name).join(', ');
//         //     const albumCover = track.album.images[0].url;
            
//         //     // Create a card for each song and append it to the playlist container
//         //     const card = document.createElement('div');
//         //     card.classList.add('card');
//         //     card.innerHTML = `
//         //         <img src="${albumCover}" alt="${songName}">
//         //         <div>
//         //             <h3>${songName}</h3>
//         //             <p>${artistName}</p>
//         //         </div>
//         //     `;
//         //     document.getElementById('playlist').appendChild(card);
//         // });
// 		console
//     })
//     .catch(error => console.error('Error fetching playlist:', error));