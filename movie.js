const btnSearch = document.getElementById("btnSearch");
const txtSearch = document.getElementById("txtSearch");
const txtYear = document.getElementById("txtYear");

btnSearch.addEventListener("click", () => getData(txtSearch.value));
const getData = async (MovieName) => {
   
  const resp = await fetch(
    `http://www.omdbapi.com/?s=${MovieName}&apikey=edc1ce65`
  );
  
  const data = await resp.json();
  const data1 = data.Search;

  if (txtYear.value == "") {
    console.log(data1);
    data1.map((i) => {
      print(i);
    });
  } else {

    const yearData = data1.filter(function (y) {
      if (y.Year === txtYear.value) {
        return y;
      }
    });
    yearData.map((i) => {
        print(i);
      });
  }
  function print(data1) {
    const h2 = document.getElementById("Movies");
    let html = `<div>
                <h2>${data1.Title}</h2>
                <h5>${data1.Year}</h5>
                
                </div>`;
    h2.insertAdjacentHTML("afterend", html);
  }
};
