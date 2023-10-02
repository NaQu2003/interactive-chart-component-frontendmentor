const costs = document.querySelectorAll('.appear-cost')
const mondayChart = document.querySelector('.monday-chart')
const tuesdayChart = document.querySelector('.tuesday-chart')
const wensdayChart = document.querySelector('.wensday-chart')
const thursdayChart = document.querySelector('.thursday-chart')
const fridayChart = document.querySelector('.friday-chart')
const saturdayChart = document.querySelector('.saturday-chart')
const sundayChart = document.querySelector('.sunday-chart')
const total = document.querySelector('.total-cost')
const chartBoxes = document.querySelectorAll('.chart-box')
const tdData = document.querySelectorAll('.table-data')
let jsonData;
fetch('data.json')
.then(results =>results.json())
.then(data =>{
    for(let i=0;i<data.length;i++){
        costs[i].textContent = `$${data[i].amount}`   
        
    }
    mondayChart.style.height = `${Math.round(data[0].amount * 3)}px`
    tuesdayChart.style.height = `${Math.round(data[1].amount * 3)}px`
    wensdayChart.style.height = `${Math.round(data[2].amount * 3)}px`
    thursdayChart.style.height = `${Math.round(data[3].amount * 3)}px`
    fridayChart.style.height =  `${Math.round(data[4].amount * 3)}px`
    saturdayChart.style.heighht =  `${Math.round(data[5].amount * 3)}px`
    sundayChart.style.height = `${Math.round(data[6].amount * 3)}px`
    let totalCost = 0;
    for (let i =0;i<data.length;i++){
        totalCost += data[i].amount
    }
   total.textContent = `$${totalCost}`
    
})
for (let i =0;i<chartBoxes.length;i++){
    chartBoxes[i].addEventListener('focus',()=>{
        showBox(i)
    })
    chartBoxes[i].addEventListener('blur',()=>{
        showBox(i)
    })
    
}

function showBox(box){
    if(costs[box].style.display ===""){
        costs[box].style.display = "block";
    }else{
        costs[box].style.display = "";
    }
}