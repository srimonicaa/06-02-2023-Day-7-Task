/////////////////////////////////////////////////////////////////////////////////

//Get all the countries from Asia continent/region using Filter function

var request=new XMLHttpRequest();
request.open('GET','https://restcountries.eu/rest/v2/all');
request.send();
request.onload=function (){
    var countryData=JSON.parse(this.response);
    const asia=countryData.filter((element)=>{
        if(element.region==='Asia'){
            return element.name;
        }
    })
    console.log(asia);
}

//Get all the countries with population of less than 2 lacs using Filter function

var request=new XMLHttpRequest();
request.open('GET','https://restcountries.eu/rest/v2/all');
request.send();
request.onload=function (){
    var countryData=JSON.parse(this.response);
    const popul=countryData.filter((element)=>{
        return element.population<200000;
    })
    console.log(popul);
}

//Print the following details name, capital, flag using forEach function.

var request=new XMLHttpRequest();
request.open('GET','https://restcountries.eu/rest/v2/all');
request.send();
request.onload=function (){
    var countryData=JSON.parse(this.response);
    countryData.forEach((element)=>{
        console.log(element.name,element.capital,element.flag);
    })}

//Print the total population of countries using reduce function 

var request=new XMLHttpRequest();
request.open('GET','https://restcountries.eu/rest/v2/all');
request.send();
request.onload=function (){
    var countryData=JSON.parse(this.responseText);
    var result=data.reduce((acc,element)=>{
if(typeof acc === 'object'){
    return acc.population + element.population
}
        return acc+element.population;
    })
    console.log(population);
}

//Print the country which use US Dollars as currency.

var request = new XMLHttpRequest();
request.open('Get', 'https://restcountries.eu/rest/v2/all')
request.send();
request.onload = function () {
        var data = JSON.parse(this.response);
        var cur=[];
        for(i=0;i<data.length;i++){
            if(data[i].currencies[0].code==="USD")
            {
                console.log("name:",data[i].name,"==>",data[i].currencies[0].code)
            }
        }
    }