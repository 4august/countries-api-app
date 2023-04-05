class CardCountry{
    constructor(country){
        this.country = country
    }
    template(){
        return `
        <div class="col-3 mt-5 country">
            <div class="card">
                <img src="${this.country.flags.png}" alt="">
                <div class="info">
                    <h6>${this.country.name.common}</h6>
                    <p>Population: <span>${this.country.population}</span></p>
                    <p>Region: <span>${this.country.region}</span></p>
                    <p>Capital: <span>${this.country.capital}</span></p>
                </div>
            </div>
        </div>
        `
    }
  
}