// function start() {
//     let res_msg = document.createElement("div");
//     res_msg.innerHTML = "Hello, I am Hope! How can I help you today?";
//     res_msg.classList.add("left");

//     document.getElementById("msg_area").appendChild(res_msg);
// }

// document.getElementById("send").addEventListener("click", async (e) => {
//     e.preventDefault();
//     var req = document.getElementById("text").value;

//     if (req === undefined || req === "") {
//         return;
//     }

//     try {
//         const response = await fetch(`https://api.monkedev.com/fun/chat?msg=${req}`, {
//             mode: "no-cors"
//         });

//         // Instead of parsing response.json(), handle the response differently
//         if (response.ok) {
//             // Display a message indicating that the request was successful
//             console.log('Request was successful');

//             let msg_req = document.createElement("div");
//             let msg_res = document.createElement("div");

//             let Con1 = document.createElement("div");
//             let Con2 = document.createElement("div");

//             Con1.classList.add("msgCon1");
//             Con2.classList.add("msgCon2");

//             msg_req.innerHTML = req;
//             // Since we can't access the response data directly, display a message indicating that
//             msg_res.innerHTML = "Response received but cannot be displayed due to CORS restrictions";

//             msg_req.classList.add("right");
//             msg_res.classList.add("left");

//             let message = document.getElementById("msg_area");

//             message.appendChild(Con1);
//             message.appendChild(Con2);

//             Con1.appendChild(msg_req);
//             Con2.appendChild(msg_res);
//         } else {
//             console.error('Network response was not ok');
//         }

//         document.getElementById("text").value = "";
//     } catch (error) {
//         console.error('Error fetching data:', error);
//     }
// });


