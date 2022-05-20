document.addEventListener('alpine:init', () => {
    Alpine.data('taxiRank', () => {

        return {
            taxiData: [
                { destination: 'Makhaza', passagers: 12, departTaxi: 0, taxiFare: 12.00, taxiFareTotal: 0, availableTaxis:3},
                { destination: 'Belhar', passagers: 34, departTaxi: 0, taxiFare: 15.00, taxiFareTotal: 0, availableTaxis:3 },
                { destination: 'Bellville', passagers: 23, departTaxi: 0, taxiFare: 10.00, taxiFareTotal: 0, availableTaxis:3 }],
            // taxiTotal: function(){
            //     console.log(this.taxiData)
            //     return _.sumBy(this.taxiData, q=>Number(q.taxiFareTotal))
            // },
            // setData(){
            //     localStorage,setItem('taxiData',JSON.stringify(this.taxiData));
            //     localStorage.getItem('taxiData');
            // },
            init() {
                if (localStorage['taxiData']) {
                    taxiData = JSON.parse(localStorage.getItem('taxiData'))
                }
            }
            ,
            addRoutes: function () {
                let destinationInput = document.querySelector('#destinationInput').value; 
                let taxiFareInput = document.querySelector('#taxiFare').value; 
                let availTaxiInput = document.querySelector('#availTaxi').value;

                let name = destinationInput;

                const values = [];

                this.taxiData.forEach(element => {
	                if (Object.values(element).includes(name)) {
  	                values.push(element);
                    }
                });
                
                if(taxiFareInput<=0 || availTaxiInput<0){
                    alert("The taxi fare and available Taxi's must be greater than zero")
                }
                else if(values.length>0){
                    alert("The route entered already exist")      
                }
                else{
                    this.taxiData.push({destination: destinationInput,passagers:0, departTaxi: 0, taxiFare: taxiFareInput, taxiFareTotal: 0, availableTaxis:availTaxiInput}) ;
                    localStorage.setItem('taxiData', JSON.stringify(this.taxiData))
                    const form = document.getElementById('my_form');
                    form.addEventListener('submit', function handleSubmit(event) {
                        event.preventDefault();
                        form.reset();
                    });
                }          
            },
        } 

    });
});













// document.addEventListener('alpine:init', () => {
//     Alpine.data('taxiRank', () => {});
// });


// const taxiRank = () => {
//     return {
//         taxiData: [
//             { destination: 'Makhaza', passagers: 12, departTaxi: 0, taxiFare: 12.00, taxiFareTotal: 0, availableTaxis:3},
//             { destination: 'Belhar', passagers: 34, departTaxi: 0, taxiFare: 15.00, taxiFareTotal: 0, availableTaxis:3 },
//             { destination: 'Bellville', passagers: 23, departTaxi: 0, taxiFare: 10.00, taxiFareTotal: 0, availableTaxis:3 }],
        
//         taxiTotal: function(){
//             console.log(this.taxiData)
//             return _.sumBy(this.taxiData, q=>Number(q.taxiFareTotal))
//         },
    
        
        // passagers: 0,
        // maxPassager:5,
        // price: 0,
        // departTaxi:0,
        
    //     total:0,
    //     departedTaxis: function(){
    //         if(this.passagers>=this.maxPassager){
    //             this.availableTaxis-=1;
    //             this.departTaxi+=1;
    //             this.price = this.departTaxi*5*25
    //             this.passagers=this.passagers-5; 
    //         }   
    //     },
    //     addItem: function () {
    //         this.passagers += 1;
            
    //     },
    //     subItem: function(){
    //         if(this.passagers<=0){
    //             this.passagers=0
    //         }else{
    //             this.passagers-=1;
    //         }   
    //    }

//     }
//   }