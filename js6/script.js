try{
    let list_countries = [];
    const dinar_countries = fetch('https://restcountries.com/v3.1/currency/dinar');
    dinar_countries.then(res =>{
        return json_counteries = res.json();   
    }).then((countries)=>{
        countries.map(item=>{
            list_countries.push([
                item.name.common,
                item.capital,
                item.flags.png
            ]);
        });
        // const countriesUL = document.getElementById('countries');
        // const licountries = list_countries.map(item => `<li>${item[0]},${item[1]}</li>`);
        // console.log(licountries.join(''));
        // countriesUL.innerHTML=licountries.join('');
        document.getElementById('countries').innerHTML= 
            list_countries.map(item => `<li><a href="#" data-country-name="${item[0]}" class="country">${item[0]}</a>, <b>Capital:</b>${item[1]}<img src="${item[2]}"></li>`).join('')

    }).then(()=>{
        [...document.querySelectorAll(".country")].map(li => {
            li.addEventListener('click',function(e){
                e.preventDefault();
                alert(this.data("country-name"));
            })
        });
    })
}catch(e){
    console.log(e.message)
}

