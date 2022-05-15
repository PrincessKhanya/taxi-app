const taxiRank = () => {
    return {
        taxiData: [
            { destination: 'Makhaza', queue: 12, taxiCount: 0, fare: 12.00, taxiFareTotal: 0 },
            { destination: 'Belhar', queue: 34, taxiCount: 0, fare: 15.00, taxiFareTotal: 0 },
            { destination: 'Bellville', queue: 23, taxiCount: 0, fare: 10.00, taxiFareTotal: 0 }],
        passagers: 0,
        maxPassager:5,
        price: 0,
        departTaxi:0,
        availableTaxis:3,
        total:0,
        departedTaxis: function(){
            if(this.passagers>=this.maxPassager){
                this.availableTaxis-=1;
                this.departTaxi+=1;
                this.price = this.departTaxi*5*25
                this.passagers=this.passagers-5; 
            }   
        },
        addItem: function () {
            this.passagers += 1;
            
        },
        subItem: function(){
            if(this.passagers<=0){
                this.passagers=0
            }else{
                this.passagers-=1;
            }   
       }

    }
  }