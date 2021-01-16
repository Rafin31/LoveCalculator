validation = () => {
    let male ,female;
    male = document.getElementById("male").value;
    female = document.getElementById("female").value;

    if( isNaN(male) && isNaN(female) ){
         let x = document.getElementById("result")
         x.innerHTML = "Your Love Parcentage "+  Math.floor((Math.random() * 100) + 1) + "%" ;
        
    }
    else
    alert("Invalid Input");
        
    

}