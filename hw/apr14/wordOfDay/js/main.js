const url = `https://www.boredapi.com/api/activity`;

fetch(url)
  .then((res) => res.json()) // parse response as JSON
  .then((data) => {
    console.log(data);
    document.querySelector("#activity").innerText = data.activity;

    if (data.link) {
      document.querySelector("#linkForMore").href = data.link;
      document.querySelector("#linkForMore").classList.toggle("hidden");

      console.log(data.link);
    }
  })
  .catch((err) => {
    console.log(`error ${err}`);
  });
