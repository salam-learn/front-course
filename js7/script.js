try{
    let list_countries = [];
    
    const dinar_countries = fetch('https://restcountries.com/v3.1/currency/dinar');
    dinar_countries.then(res =>{
            return json_counteries = res.json();  
         
    }).then((countries)=>{
        countries.map(item=>{
            list_countries.push({
                'c_name': item.name.common,
                'c_capital': item.capital,
                'c_flag':item.flags.png
        });
        });
        // const countriesUL = document.getElementById('countries');
        // const licountries = list_countries.map(item => `<li>${item[0]},${item[1]}</li>`);
        // console.log(licountries.join(''));
        // countriesUL.innerHTML=licountries.join('');
        document.getElementById('countries').innerHTML= 
            list_countries.map(item => `<li><a href="#" data-country-name="${item.c_name}" class="country">${item.c_name}</a>, <b>Capital:</b>${item['c_capital']}<img src="${item['c_flag']}"></li>`).join('')

    }).then(()=>{
        [...document.querySelectorAll(".country")].map(li => {
            li.addEventListener('click',function(e){
                e.preventDefault();
                document.getElementById('loading').style.visibility = 'visible'
                const countryName=this.getAttribute("data-country-name");
                const country_details = fetch('https://restcountries.com/v3.1/name/'+countryName);
                country_details.then((data)=>{
                    return data.json();
                })
                .then(data=>{
                    const d = data[0];
                    const country_info = {
                        'name' : d.name.common,
                        'official_name':d.name.official,
                        'flag':d.flags.png,
                        'flag_info':d.flags.alt || ''
                    };
                    document.getElementById('country-details').innerHTML = `
                    <h2>${country_info.name}</h2>
                    <h4>${country_info.official_name}</h4>
                    <div><img src="${country_info.flag}" alt="${country_info.flag_info}"></div>
                    <p>${country_info.flag_info}</p>`;

                })
                .catch((e)=>{
                    console.log(e.message)
                });
            })
        });
    })
}catch(e){
    console.log(e.message)
}


// const person={
//     'name':'Ahmad',
//     'age': 45
// }
// console.log(person['name']);