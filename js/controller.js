class Controller {
    constructor() {
        this.container_countries = document.querySelector("#countries");
        this.resultFilter = [];
        this.search = document.querySelector("#search-country");
        this.filter = document.querySelector("#regions")
        this.fetchCountries()
    }
    fetchCountries() {
        fetch('https://restcountries.com/v3.1/all').then((response) => {
            response.json().then((json) => {
                json.forEach(country => {
                    // this.countries.push( new Country(
                    //     country.flags, country.name, country.population, country.region, country.capital, country.name.nativeName, country.subregion, country.tld, country.currencies, country.languages, country.borders
                    // ),
                    // );
                    let model = new Country(
                        country.flags, country.name, country.population, country.region, country.capital, country.name.nativeName, country.subregion, country.tld, country.currencies, country.languages, country.borders
                    );
                    this.resultFilter.push(model)
                    this.container_countries.innerHTML += new CardCountry(model).template();
                });

                this.search.addEventListener("change", () => {
                    if (this.search.value != "") {
                        const result = this.resultFilter.filter(country => country.name.common === this.search.value)
                        console.log(this.resultFilter)
                        result.forEach(result => {

                            this.container_countries.innerHTML = new CardCountry(result).template();
                        })
                    }else{
                        this.container_countries.innerHTML = ""
                        this.fetchCountries()
                    }
                })
                this.filter.addEventListener("change", () =>{
                    this.container_countries.innerHTML = ""
                    this.resultFilter = json.filter(country => country.region === this.filter.value)
                    console.log(this.resultFilter)
                     this.resultFilter.forEach(result => {
                        
                         this.container_countries.innerHTML += new CardCountry(result).template();
                     })

                })
            })
        }).catch((err) => {
            console.log("arrastou pra baixo")
        })
        // this.searchCountries();
    }
  
}

let controller = new Controller()
